import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './context';

export default function RightCounter() {
  const counter = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={counter.add}>
          自增 - 注意点击按钮无效
        </button>
      </div>
    </div>
  );
}
