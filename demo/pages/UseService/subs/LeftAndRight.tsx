import { CounterService } from '../counter.service';
import { declareProviders } from '@/index';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

export default function LeftAndRight() {
  return (
    <div>
      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>
    </div>
  );
}

export const LeftAndRight2 = declareProviders([CounterService])(LeftAndRight);
