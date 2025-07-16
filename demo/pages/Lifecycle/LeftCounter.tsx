import { CounterService } from './counter.service';
import { useService } from '@/index';
import { useEffect } from 'react';
import { useMemo } from 'react';

function selector(s: CounterService) {
  return [() => s.count];
}

export default function LeftCounter() {
  const counterService = useService(CounterService, selector);

  useEffect(() => {
    const timer = setInterval(() => {
      counterService.count++;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countMemo = useMemo(
    () => counterService.count + 100,
    [counterService.count]
  );

  return (
    <div>
      <div>
        <b>LeftCounter: </b>

        <span>count=</span>
        <span style={{ marginRight: 20 }}>{counterService.count}</span>

        <span>countMemo=</span>
        <span style={{ marginRight: 20 }}>{countMemo}</span>

        <button type="button" onClick={() => counterService.add()}>
          自增
        </button>
      </div>
    </div>
  );
}
