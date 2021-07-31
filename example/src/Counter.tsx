import React, { useState, useRef } from 'react';

import { observer } from '../../src/observer';
import { useReactiveState, useReactiveRef } from '../../src/hooks';
import { computed } from '../../src/computed';

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
    </div>
  );
}

export default observer()(Counter);
