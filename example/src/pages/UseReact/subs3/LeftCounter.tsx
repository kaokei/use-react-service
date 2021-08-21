import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './context';

export default function LeftCounter() {
  const counter = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={counter.add}>
          自增
        </button>
        <span>count=</span>
        <span>{counter.count}</span>
      </div>
    </div>
  );
}
