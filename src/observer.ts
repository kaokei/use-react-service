import { memo, useReducer, useRef, useEffect } from 'react';
import { effect, stop, ReactiveEffect } from '@vue/reactivity';

export function observer(component: any) {
  return memo((props: any) => {
    const ref = useRef<ReactiveEffect<any>>();
    const [, update] = useReducer(s => s + 1, 0);
    if (!ref.current) {
      ref.current = effect(() => component(props), {
        scheduler: () => update(),
      });
    }
    useEffect(() => () => ref.current && stop(ref.current), []);
    return ref.current();
  });
}
