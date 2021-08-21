import React from 'react';
import { useCounter2 } from './useCounter';
import { observer } from '../../../../src';

export function RightCounter() {
  const counter = useCounter2();

  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={() => counter.add()}>
          自增
        </button>
      </div>
    </div>
  );
}

export default observer()(RightCounter);
