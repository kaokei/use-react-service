import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';
import RightCounter2 from './RightCounter2';
import RightCounter3 from './RightCounter3';
import RightCounter4 from './RightCounter4';

export default function App() {
  return (
    <div>
      <h3>示例：使用useReactiveRef和useReactiveState</h3>
      <p>LeftCounter使用的是useReactiveRef</p>
      <p>RightCounter使用的是useReactiveState</p>
      <p>
        注意到LeftCounter和RightCounter都是使用的类来封装数据和方法的，而在RightCounter2中则尝试使用了原始对象的方式来封装数据和方法。
      </p>
      <p>
        最终发现在点击按钮不起作用。因为在原始对象中的add方法中时直接修改的原始数据，而不是proxy封装后的响应式数据，导致没能触发组件重新渲染。
      </p>
      <p>
        在RightCounter3例子中尝试手动在proxy对象上附加add方法，确实是可以工作的。
      </p>
      <p>
        在RightCounter4例子中，我只是用useReactiveState来管理数据，然后在组件中定义add方法去修改数据，也是可以工作的。
      </p>

      <p>
        <b>总结：</b>{' '}
        总体上来说并不是很推荐大家使用这两个api，除非是在非常简单的应用中可以尝试一下。非常推荐使用后面介绍的useService。同时注意到所有组件需要被observer进行包裹。还注意到如果使用类来封装数据和方法，那么在组件的模版中直接使用这个add方法，会发现找不到this。这个问题在react中是非常常见的，可以使用bind或者定义新的函数来解决。
      </p>

      <LeftCounter></LeftCounter>
      <RightCounter></RightCounter>
      <RightCounter2></RightCounter2>
      <RightCounter3></RightCounter3>
      <RightCounter4></RightCounter4>
    </div>
  );
}
