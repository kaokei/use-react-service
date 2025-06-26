import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';
import {
  useRootService,
  FIND_CHILD_SERVICE,
  FIND_CHILDREN_SERVICES,
} from '@/index';
import { ChildService } from './ChildService';

describe('test19', () => {
  it('should render and update demoService and all childService counts correctly', () => {
    render(<DemoComp />);

    const findChildService = useRootService(FIND_CHILD_SERVICE);
    const findChildrenServices = useRootService(FIND_CHILDREN_SERVICES);
    const childService = findChildService(ChildService);
    const childServiceList = findChildrenServices(ChildService);

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
    expect(childService?.count).toBe(1);
    expect(childServiceList.length).toBe(3);
    expect(childServiceList[0].count).toBe(1);
    expect(childServiceList[1].count).toBe(1);
    expect(childServiceList[2].count).toBe(1);

    // 依次点击每一层的 child 按钮，分别检查
    fireEvent.click(childBtns[0]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('1');
    expect(childCountNodes[2]).toHaveExactText('1');
    expect(childService?.count).toBe(2);
    expect(childServiceList[0].count).toBe(2);
    expect(childServiceList[1].count).toBe(1);
    expect(childServiceList[2].count).toBe(1);

    fireEvent.click(childBtns[1]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('2');
    expect(childCountNodes[2]).toHaveExactText('1');
    expect(childService?.count).toBe(2);
    expect(childServiceList[0].count).toBe(2);
    expect(childServiceList[1].count).toBe(2);
    expect(childServiceList[2].count).toBe(1);

    fireEvent.click(childBtns[2]);
    expect(childCountNodes[0]).toHaveExactText('2');
    expect(childCountNodes[1]).toHaveExactText('2');
    expect(childCountNodes[2]).toHaveExactText('2');
    expect(childService?.count).toBe(2);
    expect(childServiceList[0].count).toBe(2);
    expect(childServiceList[1].count).toBe(2);
    expect(childServiceList[2].count).toBe(2);
  });
});
