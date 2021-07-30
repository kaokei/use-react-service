import React, { memo, useReducer, useRef, useEffect } from 'react';
import { effect, stop, ReactiveEffect } from '@vue/reactivity';

const NOOP = () => {
  console.log('NOOP :>> ');
};

export function observer(component: any) {
  return (props: any) => {
    const inst = useRef<ReactiveEffect<any>>();

    const [, update] = useReducer(s => s + 1, 0);

    useEffect(() => () => inst.current && stop(inst.current), []);

    if (!inst.current) {
      inst.current = effect(() => component(props), {
        lazy: true,
        onTrack: NOOP,
        onTrigger: NOOP,
        scheduler: () => update(),
      });
    }

    return inst.current();
  };
}
