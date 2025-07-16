import { useContext } from 'react';
import { COUNTER_CONTEXT } from './context';

export default function LeftCounter() {
  const counter = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <span>count=</span>
        <span>{counter.count}</span>
        <button type="button" onClick={counter.add}>
          自增 - 注意点击按钮不会触发组件重新渲染
        </button>
      </div>
    </div>
  );
}
