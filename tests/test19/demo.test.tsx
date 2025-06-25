import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';

describe('test19', () => {
  it('should render and update demoService and all childService counts correctly', () => {
    render(<DemoComp />);
    // DemoService
    const demoCountNode = screen.getByTestId('demo-count');
    const demoBtn = screen.getByTestId('btn-count-demo');
    expect(demoCountNode).toHaveExactText('1');
    fireEvent.click(demoBtn);
    expect(demoCountNode).toHaveExactText('2');

    // ChildService: 3层嵌套，分别查找
    const childCountNodes = screen.getAllByTestId('child-count');
    const childBtns = screen.getAllByTestId('btn-count-child');
    expect(childCountNodes.length).toBe(3);
    childCountNodes.forEach(node => expect(node).toHaveExactText('1'));

    // 依次点击每一层的 child 按钮，分别检查
    fireEvent.click(childBtns[0]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('1');
    expect(childCountNodes[2]).toHaveExactText('1');

    fireEvent.click(childBtns[1]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('2');
    expect(childCountNodes[2]).toHaveExactText('1');

    fireEvent.click(childBtns[2]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('2');
    expect(childCountNodes[2]).toHaveExactText('2');
  });
});
