import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';

describe('test8', () => {
  it('count and click', () => {
    render(<DemoComp />);

    const demo1Count = screen.getByTestId('demo1-count');
    const demo2Count = screen.getByTestId('demo2-count');
    const other1Count = screen.getByTestId('other1-count');
    const other2Count = screen.getByTestId('other2-count');
    const btnDemo1 = screen.getByTestId('btn-demo1');
    const btnDemo2 = screen.getByTestId('btn-demo2');
    const btnOther1 = screen.getByTestId('btn-other1');
    const btnOther2 = screen.getByTestId('btn-other2');

    expect(demo1Count).toHaveExactText('100');
    expect(demo2Count).toHaveExactText('100');
    expect(other1Count).toHaveExactText('200');
    expect(other2Count).toHaveExactText('200');

    fireEvent.click(btnDemo1);
    expect(demo1Count).toHaveExactText('101');
    expect(demo2Count).toHaveExactText('101');
    expect(other1Count).toHaveExactText('200');
    expect(other2Count).toHaveExactText('200');

    fireEvent.click(btnDemo2);
    expect(demo1Count).toHaveExactText('102');
    expect(demo2Count).toHaveExactText('102');
    expect(other1Count).toHaveExactText('200');
    expect(other2Count).toHaveExactText('200');

    fireEvent.click(btnOther1);
    expect(demo1Count).toHaveExactText('102');
    expect(demo2Count).toHaveExactText('102');
    expect(other1Count).toHaveExactText('201');
    expect(other2Count).toHaveExactText('201');

    fireEvent.click(btnOther2);
    expect(demo1Count).toHaveExactText('102');
    expect(demo2Count).toHaveExactText('102');
    expect(other1Count).toHaveExactText('202');
    expect(other2Count).toHaveExactText('202');
  });
});
