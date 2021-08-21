import React from 'react';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

export default function App() {
  return (
    <div>
      <h3>示例：使用useSetup</h3>

      <p>
        可以在useSetup这个hooks函数中直接使用reactive、ref、computed这三个vue中的方法
      </p>

      <p>useSetup对类型的支持不好</p>

      <p>useSetup对数据和方法的封装也不够友好</p>

      <p>
        可以直接使用useMemo代替computed，这样的话就没有必要使用useSetup了，所以推荐直接使用useService。
      </p>

      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>
    </div>
  );
}
