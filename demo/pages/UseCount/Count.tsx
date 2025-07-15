import { useService } from '@/index';
import { CountService } from './CountService';

function selector(s: CountService) {
  return [() => s.count];
}

function Count() {
  const countService = useService(CountService, selector);

  return (
    <>
      <h2>验证CountService</h2>
      <p>每次点击按钮，count会自动+1</p>
      <button onClick={() => countService.increase()}>
        count is {countService.count}
      </button>
    </>
  );
}

export default Count;
