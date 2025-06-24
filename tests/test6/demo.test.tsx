import { screen, render, fireEvent } from '@testing-library/react';
import DemoCompTo from './DemoCompTo.tsx';
import DemoCompToSelf from './DemoCompToSelf.tsx';

describe('test6', () => {
  it('DemoCompTo.tsx use bind to', async () => {
    const msg = 'Hello world';
    render(<DemoCompTo msg={msg} />);

    const msgNode = screen.getByTestId('msg');
    const countNode = screen.getByTestId('count');
    const otherCountNode = screen.getByTestId('other-count');
    const ageNode = screen.getByTestId('age');
    const nameNode = screen.getByTestId('name');
    const computedNameNode = screen.getByTestId('computedName');
    const btnCountNode = screen.getByTestId('btn-count');
    const btnOtherCountNode = screen.getByTestId('btn-other-count');
    const btnAgeNode = screen.getByTestId('btn-age');

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

  it('DemoCompToSelf.tsx use bind toSelf', async () => {
    const msg = 'Hello world';
    render(<DemoCompToSelf msg={msg} />);

    const msgNode = screen.getByTestId('msg');
    const countNode = screen.getByTestId('count');
    const otherCountNode = screen.getByTestId('other-count');
    const ageNode = screen.getByTestId('age');
    const nameNode = screen.getByTestId('name');
    const computedNameNode = screen.getByTestId('computedName');
    const btnCountNode = screen.getByTestId('btn-count');
    const btnOtherCountNode = screen.getByTestId('btn-other-count');
    const btnAgeNode = screen.getByTestId('btn-age');

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
