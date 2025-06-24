import React from 'react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';
import { OtherService } from './OtherService';
import { TYPES } from './token';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [
    () => s.count,
    () => s.otherService.count,
    () => s.age,
    () => s.name,
    () => s.computedName,
  ];
}

const Comp: React.FC<CompProps> = ({ msg }) => {
  const demoService = useService(TYPES.DemoService, selectorDemoService);

  return (
    <div>
      <div data-testid="msg">{msg}</div>
      <div data-testid="count">{demoService.count}</div>
      <div data-testid="other-count">{demoService.otherService.count}</div>
      <div data-testid="age">{demoService.age}</div>
      <div data-testid="name">{demoService.name}</div>
      <div data-testid="computedName">{demoService.computedName}</div>

      <button
        type="button"
        data-testid="btn-age"
        onClick={() => demoService.increaseAge()}
      >
        Add age
      </button>
      <button
        type="button"
        data-testid="btn-count"
        onClick={() => demoService.increaseCount()}
      >
        Add count
      </button>
      <button
        type="button"
        data-testid="btn-other-count"
        onClick={() => demoService.increaseOtherCount()}
      >
        Add other count
      </button>
    </div>
  );
};

export default declareProviders(con => {
  con.bind(TYPES.DemoService).to(DemoService);
  con.bind(TYPES.OtherService).to(OtherService);
})(Comp);
