import React from 'react';
import { DemoService } from './DemoService';
import { OtherService } from './OtherService';
import { useService, declareProviders } from '@/index';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}
function selectorOtherService(s: OtherService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(DemoService, selectorDemoService);
  const otherService = useService(OtherService, selectorOtherService);

  return (
    <div>
      <div data-testid="demo-count">{demoService.count}</div>
      <div data-testid="other-count">{otherService.count}</div>
      <button
        type="button"
        data-testid="btn-count-demo"
        onClick={() => demoService.increaseCount()}
      >
        Add count demo
      </button>
      <button
        type="button"
        data-testid="btn-count-other"
        onClick={() => otherService.increaseCount()}
      >
        Add count other
      </button>
    </div>
  );
};

export default declareProviders([OtherService])(Comp);
