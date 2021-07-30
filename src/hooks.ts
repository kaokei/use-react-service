import { useRef } from 'react';
import { reactive, ref } from '@vue/reactivity';

export function useReactiveState(obj: any) {
  const inst: any = useRef();
  console.log('useReactive :>> ', inst, typeof inst);
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
