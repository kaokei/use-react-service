import { CounterService } from './counter.service';
import { declareProviders, useService } from '@/index';

function selector(s: CounterService) {
  return [() => s.count];
}

export default function RightCounter() {
  const counterService = useService(CounterService, selector);

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

export const RightCounter2 = declareProviders([CounterService])(RightCounter);
