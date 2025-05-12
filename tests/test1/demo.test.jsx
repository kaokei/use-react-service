import { render, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp.tsx';

describe('test1', () => {
  it('get DemoService instance', async () => {
    const msg = 'Hello world';
    const { container: wrapper } = render(<DemoComp msg={msg} />);

    expect(wrapper.querySelector('.msg')).toHaveTextContent(msg);
    expect(wrapper.querySelector('.count')).toHaveTextContent('1');
    expect(wrapper.querySelector('.age')).toHaveTextContent('100');
    expect(wrapper.querySelector('.name')).toHaveTextContent('DemoService-100');
    expect(wrapper.querySelector('.computedName')).toHaveTextContent(
      'DemoService-100'
    );

    fireEvent.click(wrapper.querySelector('.btn-count'));
    expect(wrapper.querySelector('.msg')).toHaveTextContent(msg);
    expect(wrapper.querySelector('.count')).toHaveTextContent('2');
    expect(wrapper.querySelector('.age')).toHaveTextContent('100');
    expect(wrapper.querySelector('.name')).toHaveTextContent('DemoService-100');
    expect(wrapper.querySelector('.computedName')).toHaveTextContent(
      'DemoService-100'
    );

    fireEvent.click(wrapper.querySelector('.btn-count'));
    expect(wrapper.querySelector('.msg')).toHaveTextContent(msg);
    expect(wrapper.querySelector('.count')).toHaveTextContent('3');
    expect(wrapper.querySelector('.age')).toHaveTextContent('100');
    expect(wrapper.querySelector('.name')).toHaveTextContent('DemoService-100');
    expect(wrapper.querySelector('.computedName')).toHaveTextContent(
      'DemoService-100'
    );

    fireEvent.click(wrapper.querySelector('.btn-age'));
    expect(wrapper.querySelector('.msg')).toHaveTextContent(msg);
    expect(wrapper.querySelector('.count')).toHaveTextContent('3');
    expect(wrapper.querySelector('.age')).toHaveTextContent('101');
    expect(wrapper.querySelector('.name')).toHaveTextContent('DemoService-101');
    expect(wrapper.querySelector('.computedName')).toHaveTextContent(
      'DemoService-101'
    );

    fireEvent.click(wrapper.querySelector('.btn-age'));
    expect(wrapper.querySelector('.msg')).toHaveTextContent(msg);
    expect(wrapper.querySelector('.count')).toHaveTextContent('3');
    expect(wrapper.querySelector('.age')).toHaveTextContent('102');
    expect(wrapper.querySelector('.name')).toHaveTextContent('DemoService-102');
    expect(wrapper.querySelector('.computedName')).toHaveTextContent(
      'DemoService-102'
    );
  });
});
