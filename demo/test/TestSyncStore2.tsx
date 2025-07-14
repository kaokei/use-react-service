import { useSyncExternalStore } from 'react';

const store = { value: 0 };

let outerCallback: any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subscribe = (callback: any) => {
  // 正确监听外部变化
  // const interval = setInterval(() => {
  //   store.value++;
  // callback();
  // }, 1000);
  console.log(callback);
  outerCallback = callback;
  // return () => clearInterval(interval);
  return () => ({});
};

const getSnapshot = () => {
  // 返回稳定引用
  console.log('getSnapshot store.value => ', store.value);
  // if (store.value < 10) {
  //   return store.value++;
  // }
  return store.value;
};

const handleClick = () => {
  store.value ++;
  outerCallback();
}

function TestSyncStore2() {
  console.log('TestSyncStore2 refreshed => ', store.value);
  const value = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div>
      <button onClick={handleClick}>测试getSnapshot</button>
      <div>测试useSyncExternalStore</div>
      <div>{value}</div>
    </div>
  ); // 每秒更新一次
}

export default TestSyncStore2;
