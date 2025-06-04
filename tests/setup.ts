import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

function exactMatchRegex(input: string | number) {
  const escaped = String(input).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escaped}$`, 'm');
}

expect.extend({
  toHaveExactText(element, expected) {
    const actualText = element.textContent;
    const p = exactMatchRegex(expected);
    const pass = p.test(actualText);
    return {
      pass: pass,
      message: () =>
        `expected text content: ${expected}\nThe real text content: ${actualText}\n`,
    };
  },
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
