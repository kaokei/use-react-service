import React from 'react';
import { useCounter3 } from './useCounter';
import { observer } from '../../../../src';

export function RightCounter2() {
  const counter = useCounter3();

  return (
    <div>
      <div>
        <b>RightCounter2: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={counter.add}>
          自增 - 注意点击按钮无效
        </button>
      </div>
    </div>
  );
}

export default observer()(RightCounter2);
