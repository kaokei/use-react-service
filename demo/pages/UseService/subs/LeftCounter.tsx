import { CounterService } from '../counter.service';
import { observer, useService } from '../../../../../src';
import { SERVICE_CONTEXT } from '../../../../../src/constants';

export function LeftCounter() {
  console.log('enter LeftCounter', SERVICE_CONTEXT);
  const counterService = useService(CounterService);

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={counterService.add.bind(counterService)}>
          自增
        </button>
        <span>count=</span>
        <span>{counterService.count}</span>
      </div>
    </div>
  );
}

export default observer(LeftCounter);
