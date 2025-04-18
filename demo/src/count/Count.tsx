import { useService } from '@kaokei/use-react-service';
import { CountService } from './CountService';
import { useCallback } from 'react';

function Count() {
  const selector = useCallback((service: CountService) => {
    return { newcount: service.count };
  }, []);

  const countService = useService(CountService, selector);

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
