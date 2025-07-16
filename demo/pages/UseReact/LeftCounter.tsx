import { useCounter } from './useCounter';

export default function LeftCounter() {
  const [count, add] = useCounter();

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <span>count=</span>
        <span>{count}</span>
        <button type="button" onClick={add}>
          自增
        </button>
      </div>
    </div>
  );
}
