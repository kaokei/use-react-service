import React from 'react';
import { useService, declareProviders } from '@/index';

import { DemoService } from './DemoService';
import ParentComp from './ParentComp.tsx';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(DemoService, selectorDemoService);

  return (
    <div>
      <div data-testid="demo-count">{demoService.count}</div>

      <button
        type="button"
        data-testid="btn-demo"
        onClick={() => demoService.increaseCount()}
      >
        Demo add count
      </button>

      <ParentComp></ParentComp>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
