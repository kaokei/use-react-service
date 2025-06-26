import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';
import { declareRootProviders, getRootService } from '@/index';
import { DemoService } from './DemoService';

describe('test16', () => {
  it('should render count correctly and update count on click', () => {
    declareRootProviders([DemoService]);
    const rootDemoService = getRootService(DemoService);
    expect(rootDemoService.count).toBe(1);

    render(<DemoComp />);
    const countNode = screen.getByTestId('count');
    const btnCountNode = screen.getByTestId('btn-count');

    expect(countNode).toHaveExactText('1');
    fireEvent.click(btnCountNode);
    expect(countNode).toHaveExactText('2');
    fireEvent.click(btnCountNode);
    expect(countNode).toHaveExactText('3');
  });
});
