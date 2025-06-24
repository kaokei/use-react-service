import React from 'react';
import { useService, declareProviders } from '@/index';
import { DemoService } from './DemoService';
import { ParentService } from './ParentService';
import ChildComp from './ChildComp.tsx';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

function selectorParentService(s: ParentService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(DemoService, selectorDemoService);
  const parentService = useService(ParentService, selectorParentService);

  return (
    <div>
      <div data-testid="parent-demo-count">{demoService.count}</div>
      <div data-testid="parent-demo-count-2">
        {parentService.demoService.count}
      </div>
      <div data-testid="parent-count">{parentService.count}</div>

      <button
        type="button"
        data-testid="btn-parent-demo"
        onClick={() => demoService.increaseCount()}
      >
        Demo add count
      </button>
      <button
        type="button"
        data-testid="btn-parent"
        onClick={() => parentService.increaseCount()}
      >
        Parent add count
      </button>

      <ChildComp></ChildComp>
    </div>
  );
};

export default declareProviders([ParentService])(Comp);
