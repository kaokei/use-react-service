import { useContext, useRef } from 'react';
import { Ref } from '@vue/reactivity';

import { SERVICE_CONTEXT, DEFAULT_INJECTOR } from './constants';
import { getServiceFromInjector } from './utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InjectionKey<T> extends Symbol {}

type Ret<T> = T extends new (...args: any) => infer S
  ? S
  : T extends InjectionKey<infer M>
  ? Ret<M>
  : T extends string | number | boolean
  ? Ref<T>
  : T extends Array<any>
  ? { [P in keyof T]: Ret<T[P]> }
  : T;

export function useService<R, T = unknown>(
  token: T,
  options?: any
): T extends R ? Ret<T> : Ret<R>;
export function useService(token: any, options?: any) {
  const inst: any = useRef();
  const currentInjector = useContext(SERVICE_CONTEXT);

  if (inst.current === void 0) {
    inst.current = getServiceFromInjector(currentInjector, token, options);
  }

  return inst.current;
}

export function useRootService<R, T = unknown>(
  token: T,
  options?: any
): T extends R ? Ret<T> : Ret<R>;
export function useRootService(token: any, options?: any) {
  return getServiceFromInjector(DEFAULT_INJECTOR, token, options);
}

export function declareRootProviders(providers: any[]) {
  DEFAULT_INJECTOR.addProviders(providers);
}
