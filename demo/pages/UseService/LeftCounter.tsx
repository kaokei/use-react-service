import { CounterService } from './counter.service';
import { declareProviders, useService } from '@/index';

function selector(s: CounterService) {
  return [() => s.count];
}

export default function LeftCounter() {
  const counterService = useService(CounterService, selector);

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <span>count=</span>
        <span>{counterService.count}</span>
        <button type="button" onClick={() => counterService.add()}>
          自增
        </button>
      </div>
    </div>
  );
}

export const LeftCounter2 = declareProviders([CounterService])(LeftCounter);
