import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

export default function App() {
  return (
    <div>
      <h3>
        示例：使用useService，并且使用react
        useEffect实现生命周期，使用useMemo实现computed
      </h3>
      <p>在LeftCounter中使用useEffect中设置了1秒的定时器，每个一秒加1</p>
      <p>
        因为LeftCounter和RightCounter是共享数据的，所以定时器修改的数据也会导致RightCounter重新渲染
      </p>
      <p>
        同时注意到默认情况下数据是保存在根Injector中的，而不是和组件绑定的。导致切换导航栏时，会发现数据并不是从1开始，而是一直保留的。如果这不是我们想要的，我们应该在对应的组件上配置providers，这样数据的生命周期就会和这个组件是一致的。
      </p>
      <p>
        还要注意到，虽然数据是外置的，但是定时器是采用的useEffect，导致定时器是和组件绑定的。如果想要定时器一直存在，那么就需要把定时器设置到服务中。
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
