import {
  useContext,
  useSyncExternalStore,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { CommonToken } from '@kaokei/di';
import {
  computed,
  watch,
  effectScope,
  ComputedRef,
  EffectScope,
} from '@vue/reactivity';
import { bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT, DEFAULT_CONTAINER } from './constants.ts';
import type { ServiceType, Provider, SubscribeCallback } from './interface.ts';

function createProxyHandler<T extends object>(instance: T) {
  return {
    get(target: any, prop: string | symbol) {
      let value;
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
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
  };
}

export function useService<T>(token: CommonToken<T>): T;
export function useService<T extends object, S extends object>(
  token: CommonToken<T>,
  selector: (service: T) => S
): ServiceType<T, S>;
export function useService<T, S extends object>(
  token: CommonToken<T>,
  selector?: (service: T) => S
): ServiceType<T, S> | T {
  const container = useContext(CONTAINER_CONTEXT);

  if (!selector) {
    // 如果服务实例不是对象，比如是一个函数或者是一个基本类型变量
    // 请不要使用selector
    return container.get(token);
  }

  const scope = useRef<EffectScope>(null);
  const instance = useRef<T>(null);
  const selected = useRef<ComputedRef<S>>(null);
  const subscribeCallback = useRef<SubscribeCallback>(null);

  if (!scope.current) {
    scope.current = effectScope();
    scope.current.run(() => {
      const service = container.get(token);
      instance.current = service;
      selected.current = computed(() => selector(service));
      watch(selected.current, () => subscribeCallback.current?.());
    });
  }

  const subscribe = useCallback((callback: SubscribeCallback) => {
    subscribeCallback.current = callback;
    return () => (subscribeCallback.current = null);
  }, []);

  const getSnapshot = useCallback(() => selected.current?.value, []);

  const selectedData = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );

  const handler = useMemo(
    () => createProxyHandler(instance.current as T as object),
    []
  );

  const proxy = useMemo(() => new Proxy(selectedData, handler), [selectedData]);

  useEffect(() => {
    return () => {
      scope.current?.stop();
      scope.current = null;
      instance.current = null;
      selected.current = null;
    };
  }, []);

  return proxy as unknown as ServiceType<T, S>;
}

export function useRootService<T>(token: CommonToken<T>) {
  return DEFAULT_CONTAINER.get(token);
}

export function declareRootProviders(providers: Provider) {
  bindProviders(DEFAULT_CONTAINER, providers);
}
