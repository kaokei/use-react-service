import { screen, render, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test4', () => {
  it('get DemoService instance', async () => {
    render(<DemoComp />);

    const demoCount = screen.getByTestId('demo-count');
    const btnDemo = screen.getByTestId('btn-demo');

    const parentDemoCount = screen.getByTestId('parent-demo-count');
    const parentDemoCount2 = screen.getByTestId('parent-demo-count-2');
    const parentCount = screen.getByTestId('parent-count');
    const btnParentDemo = screen.getByTestId('btn-parent-demo');
    const btnParent = screen.getByTestId('btn-parent');

    const childDemoCount = screen.getByTestId('child-demo-count');
    const childDemoCount2 = screen.getByTestId('child-demo-count-2');
    const childParentCount = screen.getByTestId('child-parent-count');
    const childParentCount2 = screen.getByTestId('child-parent-count-2');
    const childCount = screen.getByTestId('child-count');
    const btnChildDemo = screen.getByTestId('btn-child-demo');
    const btnChildParent = screen.getByTestId('btn-child-parent');
    const btnChild = screen.getByTestId('btn-child');

    expect(demoCount).toHaveExactText('100');
    expect(parentDemoCount).toHaveExactText('100');
    expect(parentDemoCount2).toHaveExactText('100');
    expect(parentCount).toHaveExactText('200');
    expect(childDemoCount).toHaveExactText('100');
    expect(childDemoCount2).toHaveExactText('100');
    expect(childParentCount).toHaveExactText('200');
    expect(childParentCount2).toHaveExactText('200');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnDemo);
    expect(demoCount).toHaveExactText('101');
    expect(parentDemoCount).toHaveExactText('101');
    expect(parentDemoCount2).toHaveExactText('101');
    expect(parentCount).toHaveExactText('200');
    expect(childDemoCount).toHaveExactText('101');
    expect(childDemoCount2).toHaveExactText('101');
    expect(childParentCount).toHaveExactText('200');
    expect(childParentCount2).toHaveExactText('200');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnParentDemo);
    expect(demoCount).toHaveExactText('102');
    expect(parentDemoCount).toHaveExactText('102');
    expect(parentDemoCount2).toHaveExactText('102');
    expect(parentCount).toHaveExactText('200');
    expect(childDemoCount).toHaveExactText('102');
    expect(childDemoCount2).toHaveExactText('102');
    expect(childParentCount).toHaveExactText('200');
    expect(childParentCount2).toHaveExactText('200');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnParent);
    expect(demoCount).toHaveExactText('102');
    expect(parentDemoCount).toHaveExactText('102');
    expect(parentDemoCount2).toHaveExactText('102');
    expect(parentCount).toHaveExactText('210');
    expect(childDemoCount).toHaveExactText('102');
    expect(childDemoCount2).toHaveExactText('102');
    expect(childParentCount).toHaveExactText('210');
    expect(childParentCount2).toHaveExactText('210');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnChildDemo);
    expect(demoCount).toHaveExactText('103');
    expect(parentDemoCount).toHaveExactText('103');
    expect(parentDemoCount2).toHaveExactText('103');
    expect(parentCount).toHaveExactText('210');
    expect(childDemoCount).toHaveExactText('103');
    expect(childDemoCount2).toHaveExactText('103');
    expect(childParentCount).toHaveExactText('210');
    expect(childParentCount2).toHaveExactText('210');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnChildParent);
    expect(demoCount).toHaveExactText('103');
    expect(parentDemoCount).toHaveExactText('103');
    expect(parentDemoCount2).toHaveExactText('103');
    expect(parentCount).toHaveExactText('220');
    expect(childDemoCount).toHaveExactText('103');
    expect(childDemoCount2).toHaveExactText('103');
    expect(childParentCount).toHaveExactText('220');
    expect(childParentCount2).toHaveExactText('220');
    expect(childCount).toHaveExactText('300');

    fireEvent.click(btnChild);
    expect(demoCount).toHaveExactText('103');
    expect(parentDemoCount).toHaveExactText('103');
    expect(parentDemoCount2).toHaveExactText('103');
    expect(parentCount).toHaveExactText('220');
    expect(childDemoCount).toHaveExactText('103');
    expect(childDemoCount2).toHaveExactText('103');
    expect(childParentCount).toHaveExactText('220');
    expect(childParentCount2).toHaveExactText('220');
    expect(childCount).toHaveExactText('400');
  });
});
