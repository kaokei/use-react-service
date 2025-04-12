import { useContext } from 'react';
import { CommonToken } from '@kaokei/di';
import { hasOwn, bindProviders } from './utils';
import { CONTAINER_CONTEXT, DEFAULT_CONTAINER } from './constants';

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? (...args: Parameters<T[K]>) => ReturnType<T[K]>
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

type Methods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

type ServiceType<T, S> = DeepReadonly<Methods<T> & S>;

const createProxyHandler = (instance: any) => ({
  get(target: any, prop: string | symbol) {
    let value;
    if (hasOwn(target, prop)) {
      value = target[prop];
    } else {
      value = Reflect.get(instance, prop);
    }
    if (typeof value === 'function') {
      return (...args: any[]) => value.apply(instance, args);
    }
    return value;
  },

  set() {
    // 完全禁止写操作
    return false;
  },
});

export function useService<T, S extends object>(
  token: CommonToken<T>,
  selector: (service: T) => S
): ServiceType<T, S> {
  // todo
  // 目前虽然已经可以正常返回service对象了
  // 但是还缺少watch selector，然后触发重新渲染组件
  const container = useContext(CONTAINER_CONTEXT);
  const instance = container.get(token);
  const selected = selector(instance);
  const proxy = new Proxy(selected, createProxyHandler(instance));
  return proxy as unknown as ServiceType<T, S>;
}

export function useRootService<T>(token: CommonToken<T>) {
  return DEFAULT_CONTAINER.get(token);
}

export function declareRootProviders(providers: any) {
  bindProviders(DEFAULT_CONTAINER, providers);
}
