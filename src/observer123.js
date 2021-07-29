import { memo, useReducer, useRef, useEffect } from 'react';
import { effect, stop, ReactiveEffect } from '@vue/reactivity';

export function observer(component) {
  return component;
}
