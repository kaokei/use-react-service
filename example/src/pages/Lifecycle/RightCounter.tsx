import React from 'react';
import { CounterService } from './counter.service';
import { observer, useService } from '../../../../src';

export function RightCounter() {
  const counterService = useService(CounterService);

  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>count=</span>
        <span>{counterService.count}</span>
        <button type="button" onClick={() => counterService.add()}>
          自增
        </button>
      </div>
    </div>
  );
}

export default observer(RightCounter);
