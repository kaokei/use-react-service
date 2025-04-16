import {
  useContext,
  useSyncExternalStore,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { CommonToken } from '@kaokei/di';
import { watch, effectScope, type WatchSource } from '@vue/reactivity';
import { CONTAINER_CONTEXT } from './constants.ts';
import type { SubscribeCallback } from './interface.ts';

export function useService<T>(
  token: CommonToken<T>,
  selector?: (service: T) => WatchSource | WatchSource[]
): T {
  const container = useContext(CONTAINER_CONTEXT);
  const instance = useRef<T>(null);

  if (!instance.current) {
    instance.current = container.get(token);
  }

  if (!selector) {
    // 如果服务实例不是对象，比如是一个函数或者是一个基本类型变量
    // 请不要使用selector
    return instance.current;
  }

  const subscribeCallback = useRef<SubscribeCallback>(null);
  const subscribe = useCallback((callback: SubscribeCallback) => {
    subscribeCallback.current = callback;
    return () => (subscribeCallback.current = null);
  }, []);
  const getSnapshot = useCallback(() => instance.current as T, []);
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  useEffect(() => {
    const scope = effectScope();
    scope.run(() => {
      const watchSource = selector(instance.current as T);
      watch(watchSource, () => subscribeCallback.current?.());
    });
    return () => {
      scope.stop();
      instance.current = null;
    };
  }, []);

  return instance.current;
}
