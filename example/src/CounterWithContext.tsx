import React, { useContext } from 'react';

import { COUNTER_CONTEXT } from './constants';

function Counter() {
  const counter1 = useContext(COUNTER_CONTEXT);

  const add1 = () => {
    counter1.count++;
    console.log('CounterWithContext counter1.count :>> ', counter1.count);
  };

  return (
    <div className="Counter">
      <button type="button" onClick={add1}>
        useContext : {counter1.count}
      </button>
    </div>
  );
}

export default Counter;
