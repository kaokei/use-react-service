import { screen, render, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test1', () => {
  it('get DemoService instance', async () => {
    const msg = 'Hello world';

    render(<DemoComp msg={msg} />);
    const msgNode = screen.getByTestId('msg');
    const countNode = screen.getByTestId('count');
    const ageNode = screen.getByTestId('age');
    const nameNode = screen.getByTestId('name');
    const computedNameNode = screen.getByTestId('computedName');
    const btnAgeNode = screen.getByTestId('btn-age');
    const btnCountNode = screen.getByTestId('btn-count');

    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(1);
    expect(ageNode).toHaveExactText(100);
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(2);
    expect(ageNode).toHaveExactText(100);
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(100);
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(101);
    expect(nameNode).toHaveExactText('DemoService-101');
    expect(computedNameNode).toHaveExactText('DemoService-101');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(102);
    expect(nameNode).toHaveExactText('DemoService-102');
    expect(computedNameNode).toHaveExactText('DemoService-102');
  });
});
