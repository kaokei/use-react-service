import React from 'react';
import { useService } from '@/index';
import { DemoService } from './DemoService';
import { OtherService } from './OtherService';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count];
}
function selectorOtherService(s: OtherService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = () => {
  const demoService1 = useService(DemoService, selectorDemoService);
  const demoService2 = useService(DemoService, selectorDemoService);
  const otherService1 = useService(OtherService, selectorOtherService);
  const otherService2 = useService(OtherService, selectorOtherService);

  return (
    <div>
      <div data-testid="demo1-count">{demoService1.count}</div>
      <div data-testid="demo2-count">{demoService2.count}</div>
      <div data-testid="other1-count">{otherService1.count}</div>
      <div data-testid="other2-count">{otherService2.count}</div>

      <button
        type="button"
        data-testid="btn-demo1"
        onClick={() => {
          demoService1.increaseCount();
        }}
      >
        Demo1 add count
      </button>

      <button
        type="button"
        data-testid="btn-demo2"
        onClick={() => {
          demoService2.increaseCount();
        }}
      >
        Demo2 add count
      </button>

      <button
        type="button"
        data-testid="btn-other1"
        onClick={() => {
          otherService1.increaseCount();
        }}
      >
        Other1 add count
      </button>

      <button
        type="button"
        data-testid="btn-other2"
        onClick={() => {
          otherService2.increaseCount();
        }}
      >
        Other2 add count
      </button>
    </div>
  );
};

export default Comp;
