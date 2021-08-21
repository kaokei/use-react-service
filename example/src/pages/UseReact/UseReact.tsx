import React from 'react';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

import LeftAndRight from './subs/LeftAndRight';
import LeftAndRight2 from './subs2/LeftAndRight';
import LeftAndRight3 from './subs3/LeftAndRight';

export default function App() {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h3>示例1: 使用react hooks实现代码复用</h3>
      <p>特点：hooks的状态是和组件绑定的，很难做到状态提升。</p>
      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>
      <hr />
      <LeftAndRight></LeftAndRight>
      <hr />
      <LeftAndRight2></LeftAndRight2>
      <hr />
      <LeftAndRight3></LeftAndRight3>
    </div>
  );
}
