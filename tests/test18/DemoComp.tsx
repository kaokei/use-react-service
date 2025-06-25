import React from 'react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';
import { OtherService } from './OtherService';
import { TYPES } from './token';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}
function selectorOtherService(s: OtherService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService = useService(TYPES.DemoService, selectorDemoService);
  const otherService = useService(TYPES.OtherService, selectorOtherService);

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

export default declareProviders(con => {
  con.bind(TYPES.DemoService).to(DemoService);
  con.bind(TYPES.OtherService).to(OtherService);
})(Comp);
