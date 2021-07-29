import React from 'react';

import { observer } from '../../src/observer';

import { reactive } from '@vue/reactivity';

function Counter() {
  const person = reactive({ count: 1 });

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

export default observer(Counter);
