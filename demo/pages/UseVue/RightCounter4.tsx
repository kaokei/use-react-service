import React from 'react';

import { observer, useReactiveState } from '../../../../src';

export function RightCounter4() {
  const counter = useReactiveState({ count: 1 });

  const add = () => {
    counter.count++;
  };

  return (
    <div>
      <div>
        <b>RightCounter4: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={add}>
          自增
        </button>
      </div>
    </div>
  );
}

export default observer(RightCounter4);
