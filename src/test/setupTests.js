import '@testing-library/jest-dom/vitest';

beforeEach(() => {
  window.localStorage.clear();
  document.head.innerHTML = '';
  document.documentElement.lang = 'en';
  document.documentElement.dir = 'ltr';
});
