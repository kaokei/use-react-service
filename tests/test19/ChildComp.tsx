import React from 'react';
import { declareProviders, useService } from '@/index';
import { ChildService } from './ChildService';

export interface CompProps {
  children?: React.ReactNode;
}

function selectorChildService(s: ChildService) {
  return [() => s.count];
}

const Comp: React.FC<CompProps> = ({ children }) => {
  const childService = useService(ChildService, selectorChildService);

  return (
    <div>
      <div data-testid="child-count">{childService.count}</div>
      <button
        type="button"
        data-testid="btn-count-child"
        onClick={() => childService.increaseCount()}
      >
        Add count child
      </button>
      <div>{children || 'default content'}</div>
    </div>
  );
};

export default declareProviders([ChildService])(Comp);
