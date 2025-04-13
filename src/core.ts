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
import { hasOwn, bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT, DEFAULT_CONTAINER } from './constants.ts';
import type { ServiceType, Provider, SubscribeCallback } from './interface.ts';

function createProxyHandler<T extends object>(instance: T) {
  return {
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
  };
}

let useServiceCount = 0;

export function useService<T extends object, S extends object>(
  token: CommonToken<T>,
  selector: (service: T) => S
): ServiceType<T, S> {
  console.log('inside useService => ', useServiceCount++);

  const instance = useRef<T>(null);
  const selected = useRef<ComputedRef<S>>(null);
  const subscribeCallback = useRef<SubscribeCallback>(null);
  const container = useContext(CONTAINER_CONTEXT);

  console.log('inside useService CONTAINER_CONTEXT => ', container);

  if (!instance.current) {
    const service = container.get(token);
    instance.current = service;
    selected.current = { value: selector(service) } as ComputedRef<S>;
  }

  useEffect(() => {
    const scope = effectScope();
    scope.run(() => {
      instance.current = container.get(token);
      selected.current = computed(() => selector(instance.current as T));
      watch(selected.current, (newVal, oldVal) => {
        console.log('watch selected.current => ', newVal, oldVal);
        subscribeCallback.current?.();
      });
    });
    return () => {
      scope.stop();
      instance.current = null;
      selected.current = null;
    };
  }, []);

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

  const handler = useMemo(() => createProxyHandler(instance.current as T), []);

  const proxy = useMemo(() => new Proxy(selectedData, handler), [selectedData]);

  return proxy as unknown as ServiceType<T, S>;
}

export function useRootService<T>(token: CommonToken<T>) {
  return DEFAULT_CONTAINER.get(token);
}

export function declareRootProviders(providers: Provider) {
  bindProviders(DEFAULT_CONTAINER, providers);
}
