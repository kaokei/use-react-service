import type { Container, Newable } from '@kaokei/di';

export type NewableProvider = Newable[];
export type FunctionProvider = (container: Container) => void;
export type Provider = NewableProvider | FunctionProvider;

export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? (...args: Parameters<T[K]>) => ReturnType<T[K]>
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};
export type Methods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};
export type ServiceType<T, S> = DeepReadonly<Methods<T> & S>;

export type SubscribeCallback = () => void;
