import React from 'react';
import { useCounter4 } from './useCounter';
import { observer } from '../../../../src';

export function RightCounter3() {
  const counter = useCounter4();

  return (
    <div>
      <div>
        <b>RightCounter3: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={counter.add}>
          自增
        </button>
      </div>
    </div>
  );
}

export default observer()(RightCounter3);
