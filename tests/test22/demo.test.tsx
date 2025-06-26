import { render, screen, fireEvent } from '@testing-library/react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';

function selectorDemoService(s: DemoService) {
  return [() => s.count, () => s.sum];
}

describe('test22', () => {
  it('should render and update demoService count and sum correctly', () => {
    const App = declareProviders([DemoService])(() => {
      const demoService = useService(DemoService, selectorDemoService);
      return (
        <div>
          <div data-testid="demo-count">{demoService.count}</div>
          <div data-testid="demo-sum">{demoService.sum}</div>
          <button
            type="button"
            data-testid="btn-count-demo"
            onClick={() => demoService.increaseCount()}
          >
            Add count demo
          </button>
        </div>
      );
    });

    render(<App />);

    const countNode = screen.getByTestId('demo-count');
    const sumNode = screen.getByTestId('demo-sum');
    const btn = screen.getByTestId('btn-count-demo');

    // 初始值
    expect(countNode).toHaveExactText('1');
    expect(sumNode).toHaveExactText('101');

    // 点击后变化
    fireEvent.click(btn);
    expect(countNode).toHaveExactText('2');
    expect(sumNode).toHaveExactText('102');
  });
});
