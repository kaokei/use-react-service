import React from 'react';
import { useCounter } from './useCounter';

export default function LeftCounter() {
  const [count, add] = useCounter();

  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={add}>自增</button>
        <span>count=</span>
        <span>{count}</span>
      </div>
    </div>
  );
}
