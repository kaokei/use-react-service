import 'vitest';

interface CustomMatchers<R = unknown> {
  toHaveExactText: (expected: string | number) => R;
}

declare module 'vitest' {
  interface Matchers<T = any> extends CustomMatchers<T> {}
}
