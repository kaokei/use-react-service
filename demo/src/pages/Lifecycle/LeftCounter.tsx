import React from 'react';
import { CounterService } from './counter.service';
import { observer, useService } from '../../../../src';
import { useEffect } from 'react';
import { useMemo } from 'react';

export function LeftCounter() {
  const counterService = useService(CounterService);

  useEffect(() => {
    const timer = setInterval(() => {
      counterService.count++;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('log counterService.count =>', counterService.count);
  }, [counterService.count]);

  const countMemo = useMemo(
    () => counterService.count + 100,
    [counterService.count]
  );

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={counterService.add}>
          自增
        </button>
        <span>count=</span>
        <span style={{ marginRight: 20 }}>{counterService.count}</span>

        <span>countMemo=</span>
        <span style={{ marginRight: 20 }}>{countMemo}</span>
      </div>
    </div>
  );
}

export default observer(LeftCounter);
