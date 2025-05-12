import { useContext, useRef, useEffect, useReducer } from 'react';
import { watch, effectScope, type WatchSource } from '@vue/reactivity';
import { CommonToken } from '@kaokei/di';
import { bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT, DEFAULT_CONTAINER } from './constants.ts';
import type { Provider } from './interface.ts';

export function useService<T>(
  token: CommonToken<T>,
  selector?: true | ((service: T) => WatchSource | WatchSource[]),
  deepSelector?: (service: T) => WatchSource | WatchSource[]
): T {
  const container = useContext(CONTAINER_CONTEXT);
  const instance = useRef<T | null>(null);

  if (!instance.current) {
    instance.current = container.get(token);
  }

  if (!selector && !deepSelector) {
    // 如果服务实例不是对象，比如是一个函数或者是一个基本类型变量
    // 请不要使用selector
    return instance.current;
  }

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const scope = effectScope(true);
    scope.run(() => {
      if (selector === true) {
        watch(instance.current as T as object, forceUpdate);
      } else {
        if (selector) {
          const watchSource = selector(instance.current as T);
          watch(watchSource, forceUpdate);
        }
        if (deepSelector) {
          const watchSourceDeep = deepSelector(instance.current as T);
          watch(watchSourceDeep, forceUpdate, {
            deep: true,
          });
        }
      }
    });
    return () => {
      scope.stop();
      instance.current = null;
    };
  }, []);

  return instance.current;
}

export function useRootService<T>(token: CommonToken<T>) {
  return DEFAULT_CONTAINER.get(token);
}

export function declareRootProviders(providers: Provider) {
  bindProviders(DEFAULT_CONTAINER, providers);
}
