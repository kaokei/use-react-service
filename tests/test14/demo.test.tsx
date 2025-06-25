import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';
import { useRootService } from '@/index';
import { DemoService } from './DemoService';

describe('test14', () => {
  it('should render msg and count correctly, and update count on click', () => {
    const msg = 'Hello world';
    render(<DemoComp msg={msg} />);

    const msgNode = screen.getByTestId('msg');
    const countNode = screen.getByTestId('count');
    const btnCountNode = screen.getByTestId('btn-count');

    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('1');

    fireEvent.click(btnCountNode);
    expect(countNode).toHaveExactText('2');

    fireEvent.click(btnCountNode);
    expect(countNode).toHaveExactText('3');

    expect(() => {
      useRootService(DemoService);
    }).toThrow('No matching binding found for token: DemoService');
  });
});
