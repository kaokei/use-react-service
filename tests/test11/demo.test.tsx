import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider } from 'react-router';
import { TYPES } from './types';
import { router } from './router';
import { declareRootProviders } from '@/index';

describe('test11', () => {
  it('count and route navigation', async () => {
    declareRootProviders(con => {
      con.bind(TYPES.route).toConstantValue('route');
      con.bind(TYPES.router).toConstantValue(99);
    });
    render(<RouterProvider router={router} />);

    // 初始状态断言
    expect(screen.getByTestId('count')).toHaveExactText('1');
    expect(screen.getByTestId('fullpath1')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath2')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath3')).toHaveExactText('99');
    expect(screen.getByTestId('fullpath4')).toHaveExactText('99');
    expect(screen.getByTestId('location')).toHaveExactText('/');
    expect(screen.getByTestId('main-content')).toHaveExactText('HomeView');

    // 增加 count
    fireEvent.click(screen.getByTestId('btn-count'));
    expect(screen.getByTestId('count')).toHaveExactText('2');
    expect(screen.getByTestId('fullpath1')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath2')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath3')).toHaveExactText('99');
    expect(screen.getByTestId('fullpath4')).toHaveExactText('99');
    expect(screen.getByTestId('location')).toHaveExactText('/');
    expect(screen.getByTestId('main-content')).toHaveExactText('HomeView');

    // 再次点击增加 count
    fireEvent.click(screen.getByTestId('btn-count'));
    expect(screen.getByTestId('count')).toHaveExactText('3');
    expect(screen.getByTestId('fullpath1')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath2')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath3')).toHaveExactText('99');
    expect(screen.getByTestId('fullpath4')).toHaveExactText('99');
    expect(screen.getByTestId('location')).toHaveExactText('/');
    expect(screen.getByTestId('main-content')).toHaveExactText('HomeView');

    // 跳转到 about
    fireEvent.click(screen.getByTestId('route-about'));
    expect(screen.getByTestId('count')).toHaveExactText('3');
    expect(screen.getByTestId('fullpath1')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath2')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath3')).toHaveExactText('99');
    expect(screen.getByTestId('fullpath4')).toHaveExactText('99');
    expect(screen.getByTestId('location')).toHaveExactText('/about');
    expect(screen.getByTestId('main-content')).toHaveExactText('AboutView');

    // 跳转回 home
    fireEvent.click(screen.getByTestId('route-home'));
    expect(screen.getByTestId('count')).toHaveExactText('3');
    expect(screen.getByTestId('fullpath1')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath2')).toHaveExactText('route');
    expect(screen.getByTestId('fullpath3')).toHaveExactText('99');
    expect(screen.getByTestId('fullpath4')).toHaveExactText('99');
    expect(screen.getByTestId('location')).toHaveExactText('/');
    expect(screen.getByTestId('main-content')).toHaveExactText('HomeView');
  });
});
