import React, { memo, useReducer, useRef, useEffect } from 'react';
import { effect, ReactiveEffectRunner, stop } from '@vue/reactivity';

import { SERVICE_CONTEXT } from './constants';
import { useInjector } from './hooks';

const onTrackNoop = (event: any) => {
  // console.log('onTrackNoop :>> ', event);
};
const onTriggerNoop = (event: any) => {
  // console.log('onTriggerNoop :>> ', event);
};

export function observer(
  providers: any[]
): (component: any) => React.MemoExoticComponent<(props: any) => any>;
export function observer(
  providers: any
): React.MemoExoticComponent<(props: any) => any>;
export function observer(providers: any[] | any) {
  if (typeof providers === 'function') {
    return observerComponent(providers);
  } else {
    return observerWithProviders(providers);
  }
}

export function observerWithProviders(providers?: any[]) {
  return (component: any) => {
    return memo((props: any) => {
      const currentInjector = useInjector(providers || []);

      const inst = useRef<ReactiveEffectRunner<any>>();

      const [, update] = useReducer(s => s + 1, 0);

      useEffect(() => () => inst.current && stop(inst.current), []);

      if (inst.current === void 0) {
        inst.current = effect(() => component(props), {
          lazy: true,
          onTrack: onTrackNoop,
          onTrigger: onTriggerNoop,
          scheduler: () => {
            console.log('scheduler exec :');
            update();
          },
        });
      }

      function Temp() {
        return inst.current && inst.current();
      }

      return (
        <SERVICE_CONTEXT.Provider value={currentInjector}>
          <Temp></Temp>
        </SERVICE_CONTEXT.Provider>
      );
    });
  };
}

export function observerComponent(component: any) {
  return memo((props: any) => {
    const inst = useRef<ReactiveEffectRunner<any>>();

    const [, update] = useReducer(s => s + 1, 0);

    useEffect(() => () => inst.current && stop(inst.current), []);

    if (inst.current === void 0) {
      inst.current = effect(() => component(props), {
        lazy: true,
        onTrack: onTrackNoop,
        onTrigger: onTriggerNoop,
        scheduler: () => {
          console.log('scheduler exec :');
          update();
        },
      });
    }

    return inst.current();
  });
}
