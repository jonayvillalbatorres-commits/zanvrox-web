import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

const validPayload = () => ({
  name: '<b>Alice</b>',
  company: 'Example <script>alert(1)</script>',
  email: 'alice@example.ca',
  companySize: '10-50 employees',
  interestArea: 'Product fit',
  message: '<img src=x onerror=alert(1)>',
  consent: true,
  website: '',
  startedAt: Date.now() - 5000,
});

const responseHarness = () => {
  const result = { statusCode: 200, body: null, headers: {} };
  return {
    result,
    response: {
      setHeader: (key, value) => {
        result.headers[key] = value;
      },
      status: (statusCode) => {
        result.statusCode = statusCode;
        return result.response;
      },
      json: (body) => {
        result.body = body;
        return body;
      },
      end: () => undefined,
    },
  };
};

describe('contact lead endpoint security', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env.RESEND_API_KEY = 'test-only-key';
    process.env.CONTACT_EMAIL_FROM = 'ZANVROX <noreply@zanvrox.com>';
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_EMAIL_FROM;
  });

  test('ignores client subject/body and escapes all HTML', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 'email_test' }),
    });
    vi.stubGlobal('fetch', fetchMock);
    const { default: handler } = await import('../../api/contact-lead.js');
    const harness = responseHarness();
    harness.result.response = harness.response;
    // Mirrors what Vercel's Node.js function runtime actually hands the
    // handler: a pre-parsed `body` object, not a Fetch-style `.json()` method.
    const request = {
      method: 'POST',
      headers: { origin: 'https://zanvrox.com' },
      body: {
        type: 'contact',
        payload: validPayload(),
        context: { planLabel: '<b>Business</b>' },
        subject: 'ATTACKER SUBJECT',
        body: 'ATTACKER BODY',
        html: '<script>ATTACKER HTML</script>',
      },
    };

    await handler(request, harness.response);

    expect(harness.result.statusCode).toBe(200);
    const outbound = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(outbound.subject).not.toContain('ATTACKER');
    expect(outbound.text).not.toContain('ATTACKER BODY');
    expect(outbound.html).not.toContain('<script>');
    expect(outbound.html).not.toContain('<img');
    expect(outbound.html).toContain('&lt;b&gt;Alice&lt;/b&gt;');
    expect(outbound.html).toContain('&lt;b&gt;Business&lt;/b&gt;');
  });

  test('rejects missing time trap, honeypot, and overlong fields before delivery', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const { default: handler } = await import('../../api/contact-lead.js');
    for (const payload of [
      { ...validPayload(), startedAt: 0 },
      { ...validPayload(), website: 'spam.example' },
      { ...validPayload(), name: 'x'.repeat(121) },
    ]) {
      const harness = responseHarness();
      harness.result.response = harness.response;
      await handler(
        {
          method: 'POST',
          headers: { origin: 'https://zanvrox.com' },
          body: { payload },
        },
        harness.response
      );
      expect(harness.result.statusCode).toBe(400);
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
