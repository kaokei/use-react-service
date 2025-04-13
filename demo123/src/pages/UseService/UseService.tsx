import React from 'react';

import LeftCounterDefault, { LeftCounter2 } from './LeftCounter';
import RightCounterDefault, { RightCounter2 } from './RightCounter';

import LeftAndRightDefault, { LeftAndRight } from './subs/LeftAndRight';

export default function App() {
  return (
    <div>
      <h3>示例1：使用useService</h3>
      <p>默认是共享数据的</p>
      <LeftCounterDefault></LeftCounterDefault>
      <RightCounterDefault></RightCounterDefault>

      <hr />
      <h3>示例2：使用observer配置providers从而隔离状态</h3>
      <LeftCounter2></LeftCounter2>
      <RightCounter2></RightCounter2>

      <hr />
      <h3>示例3：在父组件中配置providres从而不使用默认的根Injector</h3>
      <LeftAndRightDefault></LeftAndRightDefault>

      <p>
        注意下面的组件没有配置providers导致使用的是根Injector，所以和示例1是共享数据的
      </p>
      <LeftAndRight></LeftAndRight>
    </div>
  );
}
