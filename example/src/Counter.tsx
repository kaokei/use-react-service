import React from 'react';

import { observer } from '../../src/observer';
import { useReactiveState } from '../../src/hooks';

function Counter1() {
  console.log('Counter1 render :>> ');
  const person = useReactiveState({ count: 1 });

  console.log('person.count :>> ', person.count);

  const add1 = () => {
    person.count++;
  };

  return (
    <div className="Counter">
      <button type="button" onClick={add1}>
        加1 - {person.count}
      </button>
    </div>
  );
}

export default observer(Counter1);
