import React from 'react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count, () => s.sum];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(DemoService, selectorDemoService);

  return (
    <div>
      <div data-testid="demo-count">{demoService.count}</div>
      <div data-testid="demo-sum">{demoService.sum}</div>
      <button
        type="button"
        data-testid="btn-count-demo"
        onClick={() => demoService.increaseCount()}
      >
        Add count demo
      </button>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
