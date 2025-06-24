import React from 'react';
import { DemoService } from './DemoService';
import { OtherService } from './OtherService';
import { useService, declareProviders } from '@/index';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

function selectorOtherService(s: OtherService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = ({ msg }) => {
  const demoService = useService(DemoService, selectorDemoService);
  const otherService = useService(OtherService, selectorOtherService);

  return (
    <div>
      <div data-testid="msg">{msg}</div>
      <div data-testid="demo-count">{demoService.count}</div>
      <div data-testid="demo-sum">{demoService.sum}</div>

      <div data-testid="other-count">{otherService.count}</div>

      <button
        type="button"
        data-testid="btn-demo"
        onClick={() => demoService.increaseCount()}
      >
        Demo add count
      </button>

      <button
        type="button"
        data-testid="btn-other"
        onClick={() => otherService.increaseCount()}
      >
        Other add count
      </button>
    </div>
  );
};

export default declareProviders([DemoService, OtherService])(Comp);
