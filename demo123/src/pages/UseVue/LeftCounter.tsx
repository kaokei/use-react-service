import React from 'react';
import { useCounter1 } from './useCounter';
import { observer } from '../../../../src';

export function LeftCounter() {
  const counter = useCounter1();

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={() => counter.add()}>
          自增
        </button>
        <span>count=</span>
        <span>{counter.count}</span>
      </div>
    </div>
  );
}

export default observer(LeftCounter);
