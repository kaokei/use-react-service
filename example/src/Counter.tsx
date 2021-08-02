import React, { useState, useRef } from 'react';

import { observer } from '../../src/observer';
import { useReactiveState, useReactiveRef, useSetup } from '../../src/hooks';
import { computed } from '../../src/computed';
import { reactive, ref } from '@vue/reactivity';

function Counter() {
  const counter1 = useReactiveState({ count: 1 });

  const add1 = () => {
    counter1.count++;
  };

  const counter2 = useReactiveRef({ count: 1 });

  const add2 = () => {
    // 注意这里是.value
    counter2.value.count++;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [counter3, setCounter3] = useState({ count: 1 });

  const add3 = () => {
    // 这里正常应该使用setCounter3
    // 这里证明了直接mutable修改数据是不会出发组件重新渲染的
    counter3.count++;
  };

  const counter4 = useRef({ count: 1 });

  const add4 = () => {
    // 注意这里是.current
    counter4.current.count++;
  };

  const count5 = computed(() => {
    return counter1.count + 100;
  });

  const setupState = useSetup(() => {
    const counter6 = reactive({ count: 1 });
    const counter7 = ref({ count: 1 });

    const add6 = () => {
      counter6.count++;
    };

    const add7 = () => {
      counter7.value.count++;
    };

    return {
      counter6,
      counter7,
      add6,
      add7,
    };
  });

  return (
    <div className="Counter">
      <button type="button" onClick={add1}>
        useReactiveState : {counter1.count}
      </button>
      <button type="button" onClick={add2}>
        useReactiveRef : {counter2.value.count}
      </button>
      <button type="button" onClick={add3}>
        useState : {counter3.count}
      </button>
      <button type="button" onClick={add4}>
        useRef : {counter4.current.count}
      </button>
      <span>count5: {count5.value}</span>
      <button type="button" onClick={setupState.add6}>
        setupState counter6 reactive : {setupState.counter6.count}
      </button>
      <button type="button" onClick={setupState.add7}>
        setupState counter7 ref : {setupState.counter7.count}
      </button>
    </div>
  );
}

export default observer()(Counter);
