import { useContext, useEffect, useRef } from 'react';
import {
  reactive,
  ref,
  proxyRefs,
  effectScope,
  EffectScope,
} from '@vue/reactivity';

import { SERVICE_CONTEXT } from './constants';
import { getInjector } from './utils';

export function useReactiveState(obj: any) {
  const inst: any = useRef();
  if (inst.current === void 0) {
    inst.current = reactive(typeof obj === 'function' ? obj() : obj);
  }
  return inst.current;
}

export function useReactiveRef(obj: any) {
  const inst: any = useRef();
  if (inst.current === void 0) {
    inst.current = ref(typeof obj === 'function' ? obj() : obj);
  }
  return inst.current;
}

export function useInjector(providers: any[]) {
  const inst: any = useRef();
  const parentInjector = useContext(SERVICE_CONTEXT);
  if (inst.current === void 0) {
    inst.current =
      providers && providers.length > 0
        ? getInjector(providers, parentInjector)
        : parentInjector;
  }
  return inst.current;
}

export function useSetup(setupFn: any) {
  const inst: any = useRef();
  let scope: EffectScope;
  useEffect(
    () => () => {
      scope && scope.stop();
    },
    []
  );

  if (inst.current === void 0) {
    scope = effectScope();
    scope.run(() => {
      const setupState = setupFn();
      inst.current = proxyRefs(setupState);
    });
  }

  return inst.current;
}
