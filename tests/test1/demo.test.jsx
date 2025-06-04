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

    expect(msgNode).toHaveTextContent(msg);
    expect(countNode).toHaveTextContent(/^1$/);
    expect(ageNode).toHaveTextContent(/^100$/);
    expect(nameNode).toHaveTextContent(/^DemoService-100$/);
    expect(computedNameNode).toHaveTextContent(/^DemoService-100$/);

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveTextContent(msg);
    expect(countNode).toHaveTextContent(/^2$/);
    expect(ageNode).toHaveTextContent(/^100$/);
    expect(nameNode).toHaveTextContent(/^DemoService-100$/);
    expect(computedNameNode).toHaveTextContent(/^DemoService-100$/);

    fireEvent.click(btnCountNode);
    expect(msgNode).toHaveTextContent(msg);
    expect(countNode).toHaveTextContent(/^3$/);
    expect(ageNode).toHaveTextContent(/^100$/);
    expect(nameNode).toHaveTextContent(/^DemoService-100$/);
    expect(computedNameNode).toHaveTextContent(/^DemoService-100$/);

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveTextContent(msg);
    expect(countNode).toHaveTextContent(/^3$/);
    expect(ageNode).toHaveTextContent(/^101$/);
    expect(nameNode).toHaveTextContent(/^DemoService-101$/);
    expect(computedNameNode).toHaveTextContent(/^DemoService-101$/);

    fireEvent.click(btnAgeNode);
    expect(msgNode).toHaveTextContent(msg);
    expect(countNode).toHaveTextContent(/^3$/);
    expect(ageNode).toHaveTextContent(/^102$/);
    expect(nameNode).toHaveTextContent(/^DemoService-102$/);
    expect(computedNameNode).toHaveTextContent(/^DemoService-102$/);
  });
});
