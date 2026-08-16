import { describe, expect, it } from 'vitest';
import { getWorkforceHostRedirect, isWorkforceHost } from './workforceHost';

describe('isWorkforceHost', () => {
  it('recognizes the workforce subdomain', () => {
    expect(isWorkforceHost('workforce.zanvrox.com')).toBe(true);
  });

  it('does not flag the main domain or unrelated hosts', () => {
    expect(isWorkforceHost('zanvrox.com')).toBe(false);
    expect(isWorkforceHost('www.zanvrox.com')).toBe(false);
    expect(isWorkforceHost('localhost')).toBe(false);
    expect(isWorkforceHost('')).toBe(false);
    expect(isWorkforceHost(undefined)).toBe(false);
  });
});

describe('getWorkforceHostRedirect', () => {
  it('aliases short paths on the workforce subdomain to /workforce/*', () => {
    expect(getWorkforceHostRedirect('/', 'workforce.zanvrox.com')).toBe('/workforce');
    expect(getWorkforceHostRedirect('/restaurants', 'workforce.zanvrox.com')).toBe(
      '/workforce/restaurants'
    );
    expect(getWorkforceHostRedirect('/beta', 'workforce.zanvrox.com')).toBe('/workforce/beta');
    expect(getWorkforceHostRedirect('/pricing', 'workforce.zanvrox.com')).toBe(
      '/workforce/pricing'
    );
  });

  it('does not redirect on the main domain', () => {
    expect(getWorkforceHostRedirect('/', 'zanvrox.com')).toBeNull();
    expect(getWorkforceHostRedirect('/restaurants', 'zanvrox.com')).toBeNull();
    expect(getWorkforceHostRedirect('/pricing', 'zanvrox.com')).toBeNull();
  });

  it('does not redirect paths with no alias, even on the workforce subdomain', () => {
    expect(getWorkforceHostRedirect('/workforce', 'workforce.zanvrox.com')).toBeNull();
    expect(getWorkforceHostRedirect('/workforce/pricing', 'workforce.zanvrox.com')).toBeNull();
  });
});
