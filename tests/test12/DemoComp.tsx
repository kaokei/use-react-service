import React from 'react';
import { DemoService } from './DemoService';
import { declareProviders, useService } from '@/index';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = ({ msg }) => {
  const service = useService(DemoService, selectorDemoService);

  return (
    <div>
      <div data-testid="msg">{msg}</div>
      <div data-testid="count">{service.count}</div>
      <button
        type="button"
        data-testid="btn-count"
        onClick={() => service.increaseCount()}
      >
        Add count
      </button>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
