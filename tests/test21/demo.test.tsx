import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';

describe('test21', () => {
  it('should render and update demoService count and sum correctly', () => {
    render(<DemoComp />);
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
