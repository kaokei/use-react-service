import { useState } from 'react';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

import { COUNTER_CONTEXT } from './context';

export default function App() {
  const [counter, setCounter] = useState({
    count: 1,
  });

  const counterProvider = {
    count: counter.count,
    add: () => {
      console.log('add start', counter.count);
      setCounter(prev => ({
        count: prev.count + 1,
      }));
      console.log('add end', counter.count);
    },
  };

  return (
    <COUNTER_CONTEXT.Provider value={counterProvider}>
      <div>
        <h3>示例4: 在父组件中使用context</h3>
        <p>使用useState来更新context，确实可以触发组件的重新渲染。</p>
        <p>缺点就是会导致所有子组件都会渲染</p>
        <LeftCounter></LeftCounter>
        <RightCounter></RightCounter>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}
