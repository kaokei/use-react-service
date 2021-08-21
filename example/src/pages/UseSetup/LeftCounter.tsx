import React, { useMemo } from 'react';

import { observer, useSetup, ref, computed } from '../../../../src';

export function LeftCounter() {
  const state = useSetup(() => {
    const countRef = ref(1);
    const countComputed = computed(() => countRef.value + 1);
    return {
      countRef,
      countComputed,
    };
  });

  const add = () => {
    state.countRef++;
  };

  const countMemo = useMemo(() => state.countRef + 2, [state.countRef]);

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={add}>
          自增
        </button>
        <span>countRef=</span>
        <span style={{ marginRight: 20 }}>{state.countRef}</span>

        <span>countComputed=</span>
        <span style={{ marginRight: 20 }}>{state.countComputed}</span>

        <span>countMemo=</span>
        <span>{countMemo}</span>
      </div>
    </div>
  );
}

export default observer()(LeftCounter);
