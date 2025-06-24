import { screen, render, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test5', () => {
  it('get DemoService instance', async () => {
    const msg = 'Hello world';
    render(<DemoComp msg={msg} />);

    const btnCountNode = screen.getByTestId('btn-count');
    const btnOtherCountNode = screen.getByTestId('btn-other-count');
    const btnAgeNode = screen.getByTestId('btn-age');

    const msgNode = screen.getByTestId('msg');
    const countNode = screen.getByTestId('count');
    const otherCountNode = screen.getByTestId('other-count');
    const ageNode = screen.getByTestId('age');
    const nameNode = screen.getByTestId('name');
    const computedNameNode = screen.getByTestId('computedName');

    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('1');
    expect(otherCountNode).toHaveExactText('100');
    expect(ageNode).toHaveExactText('100');
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('2');
    expect(otherCountNode).toHaveExactText('100');
    expect(ageNode).toHaveExactText('100');
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('3');
    expect(otherCountNode).toHaveExactText('100');
    expect(ageNode).toHaveExactText('100');
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnOtherCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('3');
    expect(otherCountNode).toHaveExactText('110');
    expect(ageNode).toHaveExactText('100');
    expect(nameNode).toHaveExactText('DemoService-100');
    expect(computedNameNode).toHaveExactText('DemoService-100');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('3');
    expect(otherCountNode).toHaveExactText('110');
    expect(ageNode).toHaveExactText('101');
    expect(nameNode).toHaveExactText('DemoService-101');
    expect(computedNameNode).toHaveExactText('DemoService-101');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText('3');
    expect(otherCountNode).toHaveExactText('110');
    expect(ageNode).toHaveExactText('102');
    expect(nameNode).toHaveExactText('DemoService-102');
    expect(computedNameNode).toHaveExactText('DemoService-102');
  });
});
