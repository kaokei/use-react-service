import { useSyncExternalStore } from 'react';

const store = { value: 0 };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subscribe = (callback: any) => {
  // 正确监听外部变化
  const interval = setInterval(() => {
    store.value++;
    callback();
  }, 1000);
  return () => clearInterval(interval);
};

const getSnapshot = () => {
  // 返回稳定引用
  return store.value;
};

function Component() {
  const value = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div>
      <div>测试useSyncExternalStore</div>
      <div>{value}</div>
    </div>
  ); // 每秒更新一次
}

export default Component;
