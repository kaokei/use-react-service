import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';

describe('test12', () => {
  it('count and click', () => {
    const msg = 'Hello world';
    render(<DemoComp msg={msg} />);

    expect(screen.getByTestId('msg')).toHaveExactText(msg);
    expect(screen.getByTestId('count')).toHaveExactText('1');

    fireEvent.click(screen.getByTestId('btn-count'));
    expect(screen.getByTestId('count')).toHaveExactText('2');
  });
});
