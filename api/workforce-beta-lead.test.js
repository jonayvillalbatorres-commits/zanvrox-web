let handler;

// Mirrors what Vercel's Node.js function runtime actually hands the handler:
// a pre-parsed `body` object, not a Fetch-style `.json()` method.
const buildRequest = ({ method = 'POST', body = {}, origin = 'https://zanvrox.com' } = {}) => ({
  method,
  headers: { origin },
  body,
});

const buildResponse = () => {
  const res = {
    statusCode: null,
    headers: {},
    body: null,
  };
  res.setHeader = (key, value) => {
    res.headers[key] = value;
  };
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.body = payload;
    return res;
  };
  res.end = () => res;
  return res;
};

const validPayload = (overrides = {}) => ({
  businessName: 'Maple Street Kitchen',
  businessType: 'restaurant',
  contactName: 'Jordan Smith',
  email: 'jordan@maplestreet.example',
  city: 'Toronto',
  employeeCount: '12',
  locationCount: '1',
  currentMethod: 'Paper timesheets',
  participantCount: '5',
  message: 'Looking forward to trying it.',
  consent: true,
  website: '',
  startedAt: Date.now() - 5000,
  ...overrides,
});

const mockSuccessfulResend = () =>
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 'resend-test-id' }),
    })
  );

const getSentResendBody = () => {
  const [, init] = fetch.mock.calls[0];
  return JSON.parse(init.body);
};

beforeAll(async () => {
  process.env.RESEND_API_KEY = 'test-resend-key';
  process.env.CONTACT_EMAIL_FROM = 'ZANVROX <support@zanvrox.com>';
  delete process.env.WORKFORCE_BETA_NOTIFICATION_EMAIL;
  delete process.env.CONTACT_NOTIFICATION_EMAIL;
  vi.resetModules();
  ({ default: handler } = await import('./workforce-beta-lead.js'));
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('workforce-beta-lead endpoint security', () => {
  test('client-supplied subject is ignored', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload(), subject: 'HACKED SUBJECT' } }),
      response
    );

    expect(response.statusCode).toBe(200);
    const sent = getSentResendBody();
    expect(sent.subject).not.toBe('HACKED SUBJECT');
    expect(sent.subject).toContain('Maple Street Kitchen');
  });

  test('client-supplied body is ignored', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload(), body: 'HACKED BODY' } }),
      response
    );

    const sent = getSentResendBody();
    expect(sent.text).not.toBe('HACKED BODY');
    expect(sent.text).toContain('Business name: Maple Street Kitchen');
    expect(sent.text).toContain('Business type: restaurant');
  });

  test('accepts every supported small-business type', async () => {
    for (const businessType of [
      'restaurant',
      'cafe',
      'bar',
      'retail_store',
      'small_shop',
      'small_warehouse',
      'other',
    ]) {
      mockSuccessfulResend();
      const response = buildResponse();
      await handler(buildRequest({ body: { payload: validPayload({ businessType }) } }), response);
      expect(response.statusCode).toBe(200);
      expect(getSentResendBody().text).toContain(`Business type: ${businessType}`);
    }
  });

  test('rejects an unsupported business type', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ businessType: 'enterprise_chain' }) } }),
      response
    );

    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.businessType).toBeTruthy();
  });

  test('keeps legacy restaurant applications compatible', async () => {
    mockSuccessfulResend();
    const legacy = validPayload();
    delete legacy.businessName;
    delete legacy.businessType;
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: { ...legacy, restaurantName: 'Legacy Restaurant' } } }),
      response
    );

    expect(response.statusCode).toBe(200);
    expect(getSentResendBody().text).toContain('Business name: Legacy Restaurant');
    expect(getSentResendBody().text).toContain('Business type: restaurant');
  });

  test('client-supplied from is ignored', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload(), from: 'attacker@evil.example' } }),
      response
    );

    const sent = getSentResendBody();
    expect(sent.from).toBe('ZANVROX <support@zanvrox.com>');
  });

  test('client-supplied to/cc/bcc is ignored', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({
        body: { payload: validPayload(), to: ['attacker@evil.example'], cc: ['x@evil.example'] },
      }),
      response
    );

    const sent = getSentResendBody();
    expect(sent.to).toEqual(['support@zanvrox.com']);
    expect(sent.cc).toBeUndefined();
    expect(sent.bcc).toBeUndefined();
  });

  test('HTML in a text field is escaped in the email HTML body', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({
        body: { payload: validPayload({ businessName: '<b>Bold</b> Diner' }) },
      }),
      response
    );

    const sent = getSentResendBody();
    expect(sent.html).toContain('&lt;b&gt;Bold&lt;/b&gt;');
    expect(sent.html).not.toContain('<b>Bold</b>');
  });

  test('a script tag is escaped, not rendered as executable HTML', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({
        body: { payload: validPayload({ message: '<script>alert(1)</script>' }) },
      }),
      response
    );

    const sent = getSentResendBody();
    expect(sent.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(sent.html).not.toContain('<script>alert(1)</script>');
  });

  test('negative employeeCount is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ employeeCount: '-5' }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.code).toBe('VALIDATION_FAILED');
    expect(response.body.fieldErrors.employeeCount).toBeTruthy();
  });

  test('non-numeric employeeCount is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ employeeCount: 'abc' }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.employeeCount).toBeTruthy();
  });

  test('zero employeeCount is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ employeeCount: '0' }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.employeeCount).toBeTruthy();
  });

  test('zero locationCount is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ locationCount: '0' }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.locationCount).toBeTruthy();
  });

  test('participantCount greater than employeeCount is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({
        body: {
          payload: validPayload({ employeeCount: '5', participantCount: '10' }),
        },
      }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.participantCount).toBeTruthy();
  });

  test('an oversized message is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ message: 'a'.repeat(5000) }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.message).toBeTruthy();
  });

  test('a filled honeypot field is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({
        body: { payload: validPayload({ website: 'http://spam.example' }) },
      }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.website).toBeTruthy();
  });

  test('submitting faster than the time-trap window is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ startedAt: Date.now() }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.startedAt).toBeTruthy();
  });

  test('a valid Gmail address is accepted', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ email: 'owner@gmail.com' }) } }),
      response
    );
    expect(response.statusCode).toBe(200);
  });

  test('a valid Outlook address is accepted', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ email: 'owner@outlook.com' }) } }),
      response
    );
    expect(response.statusCode).toBe(200);
  });

  test('a valid custom domain address is accepted', async () => {
    mockSuccessfulResend();
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ email: 'owner@myrestaurant.ca' }) } }),
      response
    );
    expect(response.statusCode).toBe(200);
  });

  test('an invalid email is rejected', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ email: 'not-an-email' }) } }),
      response
    );
    expect(response.statusCode).toBe(400);
    expect(response.body.fieldErrors.email).toBeTruthy();
  });

  test('non-POST methods are rejected with METHOD_NOT_ALLOWED', async () => {
    const response = buildResponse();
    await handler(buildRequest({ method: 'GET' }), response);
    expect(response.statusCode).toBe(405);
    expect(response.body.code).toBe('METHOD_NOT_ALLOWED');
  });

  test('error responses never include a stack trace', async () => {
    const response = buildResponse();
    await handler(
      buildRequest({ body: { payload: validPayload({ email: 'not-an-email' }) } }),
      response
    );
    expect(JSON.stringify(response.body)).not.toMatch(/at\s+\S+\s+\(.*:\d+:\d+\)/);
    expect(response.body.stack).toBeUndefined();
  });
});
