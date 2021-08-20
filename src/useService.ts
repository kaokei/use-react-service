import { useContext, useRef } from 'react';
import { Ref } from '@vue/reactivity';

import { SERVICE_CONTEXT } from './constants';

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
  Service: T,
  options?: any
): T extends R ? Ret<T> : Ret<R>;
export function useService(Service: any, options?: any) {
  const inst: any = useRef();
  const currentInjector = useContext(SERVICE_CONTEXT);

  if (inst.current === void 0) {
    inst.current = getService(currentInjector, Service, options);
  }

  return inst.current;
}

function getService(injector: any, Service: any, options?: any) {
  if (Array.isArray(Service)) {
    return Service.map(s => injector.get(s, options));
  } else {
    return injector.get(Service, options);
  }
}
