import React from 'react';
import { DemoService } from './DemoService';
import { AppService } from './AppService';
import { RootService } from './RootService';
import { declareProviders, useService } from '@/index';

export interface CompProps {
  msg?: string;
}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}
function selectorAppService(s: AppService) {
  return [() => s.count];
}
function selectorRootService(s: RootService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = ({ msg }) => {
  const service = useService(DemoService, selectorDemoService);
  const appService = useService(AppService, selectorAppService);
  const rootService = useService(RootService, selectorRootService);

  return (
    <div>
      <div data-testid="msg">{msg}</div>
      <div data-testid="demo-count">{service.count}</div>
      <div data-testid="app-count">{appService.count}</div>
      <div data-testid="root-count">{rootService.count}</div>

      <button
        type="button"
        data-testid="btn-demo-count"
        onClick={() => service.increaseCount()}
      >
        Add count demo
      </button>
      <button
        type="button"
        data-testid="btn-app-count"
        onClick={() => appService.increaseCount()}
      >
        Add count app
      </button>
      <button
        type="button"
        data-testid="btn-root-count"
        onClick={() => rootService.increaseCount()}
      >
        Add count root
      </button>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
