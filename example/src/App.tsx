import React, { useRef, useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import CounterWithContext from './CounterWithContext';
import CounterWithClass from './CounterWithClass';

import { COUNTER_CONTEXT } from './constants';

function App() {
  const [, forceUpdate] = useReducer(s => s + 1, 0);
  const ctx = useRef({ count: 100 });

  const add1 = () => {
    ctx.current.count++;
  };
  const replace1 = () => {
    ctx.current = {
      count: ctx.current.count + 1,
    };
  };

  return (
    <div className="App">
      <div>
        <Counter></Counter>
      </div>
      <div>
        <COUNTER_CONTEXT.Provider value={ctx.current}>
          <CounterWithContext></CounterWithContext>
        </COUNTER_CONTEXT.Provider>

        <button type="button" onClick={add1}>
          useRef mutable 修改 Provider value
        </button>
        <button type="button" onClick={replace1}>
          useRef immutable 替换 Provider value
        </button>
        <button type="button" onClick={() => forceUpdate()}>
          forceUpdate
        </button>
      </div>
      <div>
        <CounterWithClass></CounterWithClass>
      </div>
    </div>
  );
}

export default App;
