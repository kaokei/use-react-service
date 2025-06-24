import React from 'react';
import { DemoService } from './DemoService';
import { useService, declareProviders } from '@/index';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.age, () => s.count, () => s.name, () => s.computedName];
}

const Comp: React.FC<CompProps> = ({ msg }) => {
  const service = useService(DemoService, selectorDemoService);

  return (
    <div>
      <div data-testid="msg">{msg}</div>
      <div data-testid="count">{service.count}</div>
      <div data-testid="age">{service.age}</div>
      <div data-testid="name">{service.name}</div>
      <div data-testid="computedName">{service.computedName}</div>
      <button
        type="button"
        data-testid="btn-age"
        onClick={() => service.increaseAge()}
      >
        Add age
      </button>
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
