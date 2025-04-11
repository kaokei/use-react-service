import React from 'react';

import { CounterService } from '../counter.service';
import { observer } from '../../../../../src';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

export function LeftAndRight() {
  return (
    <div>
      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>
    </div>
  );
}

export default observer([CounterService])(LeftAndRight);
