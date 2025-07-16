import { declareProviders } from '@/index';
import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';
import { CounterService } from './counter.service';

export function App() {
  return (
    <div style={{ width: '550px', marginBottom: '50px' }}>
      <h3>
        示例：使用useService，并且使用react
        useEffect实现生命周期，使用useMemo实现computed
      </h3>
      <p>在LeftCounter中使用useEffect中设置了1秒的定时器，每隔一秒加1</p>
      <p>
        因为LeftCounter和RightCounter是共享数据的，所以定时器修改的数据也会导致RightCounter重新渲染
      </p>

      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>

      <p>
        <b>
          总结：推荐在项目中直接使用useService+useEffect+useMemo。而且通过useService可以实现服务的依赖注入。
        </b>
      </p>
    </div>
  );
}

export default declareProviders([CounterService])(App);
