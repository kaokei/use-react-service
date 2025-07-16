import { useEffect, useRef, useSyncExternalStore } from 'react';

const store = {
  value: 1000,
  listener: null as null | (() => void),
  timer: 0,

  start: () => {
    store.timer = window.setInterval(() => {
      store.value++;
      store.emitChange();
    }, 1000);
  },

  stop: () => {
    window.clearInterval(store.timer);
  },

  emitChange: () => {
    if (store.listener) {
      store.listener();
    }
  },

  add100: () => {
    store.value += 100;
    store.emitChange();
  },

  subscribe: (callback: any) => {
    store.listener = callback;
    return () => (store.listener = null);
  },

  getSnapshot: () => {
    return store.value;
  },
};

function App() {
  const value = useSyncExternalStore(store.subscribe, store.getSnapshot);

  const renderCount = useRef(0);
  renderCount.current++;

  useEffect(() => {
    store.start();
    return () => store.stop();
  }, []);

  return (
    <div style={{ width: '550px', marginBottom: '50px' }}>
      <h2>测试useSyncExternalStore</h2>
      <div className="flex flex-row items-center">
        <div>外部数据count = {value}</div>
        <button className="ml-20" onClick={() => store.add100()}>
          ADD 100
        </button>
      </div>
      <div>当前组件渲染次数 = {renderCount.current}</div>
    </div>
  );
}

export default App;
