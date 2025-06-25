import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test18', () => {
  it('should render and update demoService and otherService count correctly', () => {
    render(<DemoComp />);
    const demoCountNode = screen.getByTestId('demo-count');
    const otherCountNode = screen.getByTestId('other-count');
    const btnDemo = screen.getByTestId('btn-count-demo');
    const btnOther = screen.getByTestId('btn-count-other');

    expect(demoCountNode).toHaveExactText('1');
    expect(otherCountNode).toHaveExactText('1');

    fireEvent.click(btnDemo);
    expect(demoCountNode).toHaveExactText('2');
    expect(otherCountNode).toHaveExactText('1');

    fireEvent.click(btnOther);
    expect(demoCountNode).toHaveExactText('2');
    expect(otherCountNode).toHaveExactText('2');

    fireEvent.click(btnDemo);
    expect(demoCountNode).toHaveExactText('3');
    expect(otherCountNode).toHaveExactText('2');
  });
});
