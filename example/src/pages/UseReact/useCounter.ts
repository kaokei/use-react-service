import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(1);

  const add = () => {
    setCount(count + 1);
  };

  return [count, add] as const;
}
