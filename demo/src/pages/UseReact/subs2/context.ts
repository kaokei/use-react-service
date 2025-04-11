import { createContext } from 'react';

export const counter = {
  count: 1,
  add: () => {
    console.log('add start: ', counter.count);
    counter.count++;
    console.log('add end: ', counter.count);
  },
};

interface Counter {
  count: number;
  add: () => void;
}

export const COUNTER_CONTEXT = createContext<Counter>(counter);
