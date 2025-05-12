import React from 'react';
import { DemoService } from './DemoService';
import { useService, declareProviders } from '@/index';

export interface DemoCompProps {
  msg?: string;
}

const DemoComp: React.FC<DemoCompProps> = ({ msg }) => {
  const service = useService(DemoService);

  return (
    <div>
      <div className="msg">{msg}</div>
      <div className="count">{service.count}</div>
      <div className="age">{service.age}</div>
      <div className="name">{service.name}</div>
      <div className="computedName">{service.computedName}</div>
      <button
        type="button"
        className="btn-age"
        onClick={() => service.increaseAge()}
      >
        Add age
      </button>
      <button
        type="button"
        className="btn-count"
        onClick={() => service.increaseCount()}
      >
        Add count
      </button>
    </div>
  );
};

export default declareProviders([DemoService])(DemoComp);
