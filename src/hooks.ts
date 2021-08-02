import { useContext, useRef } from 'react';
import { reactive, ref, proxyRefs } from '@vue/reactivity';

import { SERVICE_CONTEXT } from './constants';
import { getInjector } from './utils';

export function useReactiveState(obj: any) {
  const inst: any = useRef();
  if (inst.current === undefined) {
    inst.current = reactive(obj);
  }
  return inst.current;
}

export function useReactiveRef(obj: any) {
  const inst: any = useRef();
  if (inst.current === void 0) {
    inst.current = ref(obj);
  }
  return inst.current;
}

export function useProviders(providers: any[]) {
  const inst: any = useRef();
  const ctx = useContext(SERVICE_CONTEXT);
  if (inst.current === void 0) {
    inst.current = getInjector(providers, ctx);
  }
  return inst.current;
}

export function useSetup(setup: any) {
  if (__DEV__) {
    console.log('useSetup inside dev');
  }
  const inst: any = useRef();
  if (inst.current === void 0) {
    const setupState = setup();
    inst.current = proxyRefs(setupState);
  }
  return inst.current;
}
