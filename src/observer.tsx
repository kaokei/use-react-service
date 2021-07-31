import React, { memo, useReducer, useRef, useEffect } from 'react';
import { effect, stop, ReactiveEffect } from '@vue/reactivity';

import { SERVICE_CONTEXT } from './constants';
import { useProviders } from './hooks';

const onTrackNoop = () => {
  console.log('onTrackNoop :>> ');
};
const onTriggerNoop = () => {
  console.log('onTriggerNoop :>> ');
};

export function observer(providers?: any[]) {
  return (component: any) => {
    return memo((props: any) => {
      const providersCtx = useProviders(providers || []);
      const inst = useRef<ReactiveEffect<any>>();

      const [, update] = useReducer(s => s + 1, 0);

      useEffect(() => () => inst.current && stop(inst.current), []);

      if (!inst.current) {
        inst.current = effect(() => component(props), {
          lazy: true,
          onTrack: onTrackNoop,
          onTrigger: onTriggerNoop,
          scheduler: () => update(),
        });
      }

      return (
        <SERVICE_CONTEXT.Provider value={providersCtx}>
          {inst.current()}
        </SERVICE_CONTEXT.Provider>
      );
    });
  };
}
