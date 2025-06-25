import React from 'react';
import { DemoService } from './DemoService';
import { useService, declareProviders } from '@/index';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const service = useService(DemoService, selectorDemoService);

  return (
    <div>
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
