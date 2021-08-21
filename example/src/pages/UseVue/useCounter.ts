import { useReactiveRef, useReactiveState } from '../../../../src';

class Counter {
  public count = 1;

  public add() {
    console.log('add start: ', this.count);
    this.count++;
    console.log('add end: ', this.count);
  }
}

function getCounter() {
  return new Counter();
}

export function useCounter1() {
  const counterRef = useReactiveRef(getCounter);

  return counterRef.value;
}

export function useCounter2() {
  const counterState = useReactiveState(getCounter);

  return counterState;
}

function getCounter3() {
  const counter = {
    count: 1,
    add: function () {
      console.log('add start: ', counter.count);
      counter.count++;
      console.log('add end: ', counter.count);
    },
  };
  return counter;
}

export function useCounter3() {
  const counterState = useReactiveState(getCounter3);

  return counterState;
}

function getCounter4() {
  const counter = {
    count: 1,
  };
  return counter;
}

export function useCounter4() {
  const counterState = useReactiveState(getCounter4);

  if (!counterState.add) {
    counterState.add = function () {
      counterState.count++;
    };
  }

  return counterState;
}
