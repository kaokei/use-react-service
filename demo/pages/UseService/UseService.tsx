import { declareRootProviders } from '@/core';
import LeftCounterDefault, { LeftCounter2 } from './LeftCounter';
import RightCounterDefault, { RightCounter2 } from './RightCounter';

import LeftAndRightDefault, { LeftAndRight2 } from './subs/LeftAndRight';
import { CounterService } from './counter.service';

declareRootProviders([CounterService]);

export default function App() {
  return (
    <div style={{ width: '550px', marginBottom: '50px' }}>
      <h3>示例1：测试declareRootProviders</h3>
      <p>
        因为组件没有使用declareProviders绑定对应的服务，最终组件使用的是declareRootProviders绑定的服务，所以数据是共享的。
      </p>
      <p>因为数据存储在root provider中，是独立于vue应用的，当切换不同菜单时，root provider中的数据并不会被清除。</p>
      <LeftCounterDefault></LeftCounterDefault>
      <RightCounterDefault></RightCounterDefault>

      <hr />
      <h3>
        示例2：LeftCounter和RightCounter都使用了declareProviders绑定了服务，所以数据是独立的。
      </h3>
      <LeftCounter2></LeftCounter2>
      <RightCounter2></RightCounter2>

      <hr />
      <h3>示例3：测试declareRootProviders，和示例1相同</h3>
      <p>
        因为组件没有使用declareProviders绑定对应的服务，最终组件使用的是declareRootProviders绑定的服务，所以数据和示例1是共享的。
      </p>
      <p>因为数据存储在root provider中，是独立于vue应用的，当切换不同菜单时，root provider中的数据并不会被清除。</p>
      <LeftAndRightDefault></LeftAndRightDefault>

      <hr />
      <h3>示例4：测试declareProviders</h3>
      <p>
        因为父组件使用了declareProviders绑定了服务，所以LeftCounter组件和RightCounter组件的数据是共享的。
      </p>
      <LeftAndRight2></LeftAndRight2>
    </div>
  );
}
