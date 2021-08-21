import React, { useMemo } from 'react';

import { observer, useSetup, reactive, computed } from '../../../../src';

export function LeftCounter() {
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
        <b>LeftCounter: </b>
        <button type="button" onClick={add}>
          自增
        </button>
        <span>countRef=</span>
        <span style={{ marginRight: 20 }}>{countReactive.count}</span>

        <span>countComputed=</span>
        <span style={{ marginRight: 20 }}>{countComputed}</span>

        <span>countMemo=</span>
        <span>{countMemo}</span>
      </div>
    </div>
  );
}

export default observer()(LeftCounter);
