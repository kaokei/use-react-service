import React, { useMemo } from 'react';

import { observer, useSetup, reactive, computed } from '../../../../src';

export function RightCounter() {
  const { countReactive, countComputed } = useSetup(() => {
    const countReactive = reactive({
      count: 1,
    });
    const countComputed = computed(() => countReactive.count + 1);
    return {
      countReactive,
      countComputed,
    };
  });

  const add = () => {
    countReactive.count++;
  };

  const countMemo = useMemo(
    () => countReactive.count + 2,
    [countReactive.count]
  );

  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>countRef=</span>
        <span style={{ marginRight: 20 }}>{countReactive.count}</span>

        <span>countComputed=</span>
        <span style={{ marginRight: 20 }}>{countComputed}</span>

        <span>countMemo=</span>
        <span style={{ marginRight: 20 }}>{countMemo}</span>

        <button type="button" onClick={add}>
          自增
        </button>
      </div>
    </div>
  );
}

export default observer(RightCounter);
