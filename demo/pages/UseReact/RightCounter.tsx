import { useCounter } from './useCounter';

export default function RightCounter() {
  const [count, add] = useCounter();

  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>count=</span>
        <span>{count}</span>
        <button type="button" onClick={add}>
          自增
        </button>
      </div>
    </div>
  );
}
