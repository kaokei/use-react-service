import React from 'react';
import { useService, FIND_CHILD_SERVICE } from '@/index';
import { DemoService } from './DemoService';
import DemoComp from './DemoComp.tsx';

const ParentComp: React.FC = () => {
  const findChildService = useService(FIND_CHILD_SERVICE);

  const handleAddAge = () => {
    const service = findChildService(DemoService);
    service?.increaseAge();
  };

  const handleAddCount = () => {
    const service = findChildService(DemoService);
    service?.increaseCount();
  };

  return (
    <div>
      <DemoComp msg="nihao"></DemoComp>

      <button data-testid="btn-parent-age" type="button" onClick={handleAddAge}>
        Add age
      </button>

      <button
        data-testid="btn-parent-count"
        type="button"
        onClick={handleAddCount}
      >
        Add count
      </button>
    </div>
  );
};

export default ParentComp;
