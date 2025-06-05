import { screen, render, fireEvent } from '@testing-library/react';
import ParentDemo from './ParentComp.tsx';

describe('test2', () => {
  it('get DemoService instance', async () => {
    const msg = 'nihao';
    render(<ParentDemo />);

    const btnParentAgeNode = screen.getByTestId('btn-parent-age');
    const btnParentCountNode = screen.getByTestId('btn-parent-count');

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
    expect(nameNode).toHaveExactText('nihao-DemoService-100');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(2);
    expect(ageNode).toHaveExactText(100);
    expect(nameNode).toHaveExactText('nihao-DemoService-100');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-100');

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(100);
    expect(nameNode).toHaveExactText('nihao-DemoService-100');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-100');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(101);
    expect(nameNode).toHaveExactText('nihao-DemoService-101');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-101');

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(102);
    expect(nameNode).toHaveExactText('nihao-DemoService-102');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-102');

    fireEvent.click(btnParentAgeNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(3);
    expect(ageNode).toHaveExactText(103);
    expect(nameNode).toHaveExactText('nihao-DemoService-103');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-103');

    fireEvent.click(btnParentCountNode);
    expect(msgNode).toHaveExactText(msg);
    expect(countNode).toHaveExactText(4);
    expect(ageNode).toHaveExactText(103);
    expect(nameNode).toHaveExactText('nihao-DemoService-103');
    expect(computedNameNode).toHaveExactText('nihao-DemoService-103');
  });
});
