import { render } from '@testing-library/react';
import DemoComp from './DemoComp';

describe('test13', () => {
  it('get DemoService instance', async () => {
    const msg = 'Hello world';
    expect(() => {
      render(<DemoComp msg={msg} />);
    }).toThrow('No matching binding found for token: DemoService');
  });
});
