import React from 'react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';
import ChildComp from './ChildComp';

export interface CompProps {}

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
        data-testid="btn-count-demo"
        onClick={() => demoService.increaseCount()}
      >
        Add count demo
      </button>
      <div className="child-1-container">
        <div className="child-1-wrapper">
          <ChildComp>
            <p>001</p>
            <p>002</p>
            <p>003</p>
          </ChildComp>
        </div>
      </div>
      <div className="child-2-container">
        <div className="child-2-wrapper">
          <div className="child-2-box">
            <ChildComp />
          </div>
        </div>
      </div>
      <div className="child-3-container">
        {/* 深层嵌套演示，可根据实际需要添加更多逻辑 */}
        <ChildComp />
      </div>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
