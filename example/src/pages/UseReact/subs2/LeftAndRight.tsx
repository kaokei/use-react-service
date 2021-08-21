import React from 'react';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

import { COUNTER_CONTEXT, counter } from './context';

export default function App() {
  return (
    <COUNTER_CONTEXT.Provider value={counter}>
      <div>
        <h3>示例3: 在父组件中使用context</h3>
        <p>
          本来想通过context来实现状态的提升，发现如果是存粹的外部数据，是不能自动触发组件渲染的。当然这也是符合预期的。
        </p>
        <p>
          需要注意点击下方的“自增”按钮是不会出发组件渲染的，看起来似乎没有任何反应，但是在console日志中是有对应的输出日志的。说明对应的add函数确实已经执行了。
        </p>
        <LeftCounter></LeftCounter>
        <RightCounter></RightCounter>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}
