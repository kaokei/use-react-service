import React from 'react';
import { useService, declareProviders } from '@/index';
import { DemoService } from './DemoService';
import { ParentService } from './ParentService';
import { ChildService } from './ChildService';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

function selectorParentService(s: ParentService) {
  return [() => s.count];
}

function selectorChildService(s: ChildService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(DemoService, selectorDemoService);
  const parentService = useService(ParentService, selectorParentService);
  const childService = useService(ChildService, selectorChildService);

  return (
    <div>
      <div data-testid="child-demo-count">{demoService.count}</div>
      <div data-testid="child-demo-count-2">
        {childService.demoService.count}
      </div>
      <div data-testid="child-parent-count">{parentService.count}</div>
      <div data-testid="child-parent-count-2">
        {childService.parentService.count}
      </div>
      <div data-testid="child-count">{childService.count}</div>

      <button
        type="button"
        data-testid="btn-child-demo"
        onClick={() => demoService.increaseCount()}
      >
        Demo add count
      </button>
      <button
        type="button"
        data-testid="btn-child-parent"
        onClick={() => parentService.increaseCount()}
      >
        Parent add count
      </button>
      <button
        type="button"
        data-testid="btn-child"
        onClick={() => childService.increaseCount()}
      >
        Child add count
      </button>
    </div>
  );
};

export default declareProviders([ChildService])(Comp);
