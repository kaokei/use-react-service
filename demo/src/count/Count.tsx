import { useService } from '@kaokei/use-react-service';
import { CountService } from './CountService';
import { useCallback } from 'react';

let count = 0;

function Count() {
  const selector = useCallback((service: CountService) => {
    return { newcount: service.count };
  }, []);

  count++;
  console.log('before debug Count Component count => ', count);
  const countService = useService(CountService, selector);
  console.log('after debug Count Component count => ', count);

  return (
    <>
      <h2>验证CountService</h2>
      <button onClick={countService.increase}>
        count is {countService.newcount}
      </button>
    </>
  );
}

export default Count;
