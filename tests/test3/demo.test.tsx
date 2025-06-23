import { screen, render, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test3', () => {
  it('get DemoService instance', async () => {
    const msg = 'nihao';
    render(<DemoComp msg={msg} />);

    const btnDemoNode = screen.getByTestId('btn-demo');
    const btnOtherNode = screen.getByTestId('btn-other');

    const msgNode = screen.getByTestId('msg');
    const demoCountNode = screen.getByTestId('demo-count');
    const demoSumNode = screen.getByTestId('demo-sum');
    const otherCountNode = screen.getByTestId('other-count');

    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText(100);
    expect(demoSumNode).toHaveExactText(300);
    expect(otherCountNode).toHaveExactText(200);

    fireEvent.click(btnDemoNode);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText(101);
    expect(demoSumNode).toHaveExactText(301);
    expect(otherCountNode).toHaveExactText(200);

    fireEvent.click(btnDemoNode);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText(102);
    expect(demoSumNode).toHaveExactText(302);
    expect(otherCountNode).toHaveExactText(200);

    fireEvent.click(btnOtherNode);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText(102);
    expect(demoSumNode).toHaveExactText(303);
    expect(otherCountNode).toHaveExactText(201);

    fireEvent.click(btnOtherNode);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText(102);
    expect(demoSumNode).toHaveExactText(304);
    expect(otherCountNode).toHaveExactText(202);
  });
});
