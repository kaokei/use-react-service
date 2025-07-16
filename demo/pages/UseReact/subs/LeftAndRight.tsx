import { useCounter } from '../useCounter';

import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

export default function App() {
  const [count, add] = useCounter();

  return (
    <div>
      <h3>示例2: 在父组件中使用hooks</h3>
      <p>
        在不使用redux的情况下，通常的做法只能是提升数据到父组件中，然后通过props传递数据和方法到各个子组件中，这样就能实现各个子组件共享数据了。
      </p>
      <p>缺点是复杂场景下需要传递多层props，非常的麻烦</p>
      <LeftCounter count={count} add={add}></LeftCounter>
      <RightCounter count={count} add={add}></RightCounter>
    </div>
  );
}
