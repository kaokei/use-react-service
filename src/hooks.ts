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

export function useInjector(providers: any[]) {
  const inst: any = useRef();
  const ctx = useContext(SERVICE_CONTEXT);
  if (inst.current === void 0) {
    inst.current = getInjector(providers, ctx);
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
