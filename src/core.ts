import {
  useContext,
  useSyncExternalStore,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { CommonToken } from '@kaokei/di';
import { computed, watch, effectScope, ComputedRef } from '@vue/reactivity';
import { hasOwn, bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT, DEFAULT_CONTAINER } from './constants.ts';
import type { ServiceType, Provider, SubscribeCallback } from './interface.ts';

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
  const update = useRef<null | SubscribeCallback>(null);
  const container = useContext(CONTAINER_CONTEXT);

  const { instance, selected, scope } = useMemo(() => {
    let instance!: T;
    let selected!: ComputedRef<S>;
    const scope = effectScope();
    scope.run(() => {
      instance = container.get(token);
      selected = computed(() => selector(instance));
      watch(selected, () => update.current?.());
    });
    return { instance, selected, scope };
  }, [container, token, selector]);

  const subscribe = useCallback((callback: SubscribeCallback) => {
    update.current = callback;
    return () => (update.current = null);
  }, []);

  const getSnapshot = useCallback(() => selected.value, [selected]);

  const selectedData = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );

  const proxy = useMemo(
    () => new Proxy(selectedData, createProxyHandler(instance)),
    [selectedData, instance]
  );

  useEffect(() => () => scope.stop(), [scope]);

  return proxy as unknown as ServiceType<T, S>;
}

export function useRootService<T>(token: CommonToken<T>) {
  return DEFAULT_CONTAINER.get(token);
}

export function declareRootProviders(providers: Provider) {
  bindProviders(DEFAULT_CONTAINER, providers);
}
