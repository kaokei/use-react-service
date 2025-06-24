import { render, screen, fireEvent } from '@testing-library/react';
import DemoComp from './DemoComp';
import { declareProviders, declareRootProviders } from '@/index';
import { RootService } from './RootService';
import { AppService } from './AppService';

describe('test7', () => {
  it('get DemoService instance', async () => {
    declareRootProviders([RootService]);

    const msg = 'Hello world';
    const App = declareProviders([AppService])(DemoComp);
    render(<App msg={msg} />);

    const msgNode = screen.getByTestId('msg');
    const demoCountNode = screen.getByTestId('demo-count');
    const appCountNode = screen.getByTestId('app-count');
    const rootCountNode = screen.getByTestId('root-count');
    const btnDemoCount = screen.getByTestId('btn-demo-count');
    const btnAppCount = screen.getByTestId('btn-app-count');
    const btnRootCount = screen.getByTestId('btn-root-count');

    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText('10');
    expect(appCountNode).toHaveExactText('100');
    expect(rootCountNode).toHaveExactText('1000');

    fireEvent.click(btnDemoCount);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText('20');
    expect(appCountNode).toHaveExactText('100');
    expect(rootCountNode).toHaveExactText('1000');

    fireEvent.click(btnAppCount);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText('20');
    expect(appCountNode).toHaveExactText('200');
    expect(rootCountNode).toHaveExactText('1000');

    fireEvent.click(btnRootCount);
    expect(msgNode).toHaveExactText(msg);
    expect(demoCountNode).toHaveExactText('20');
    expect(appCountNode).toHaveExactText('200');
    expect(rootCountNode).toHaveExactText('2000');
  });
});
