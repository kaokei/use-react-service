# test2 测试模块

## 测试目的

验证父组件能够通过FIND_CHILD_SERVICE查找并操作子组件中的服务实例，实现组件间通信而无需props传递。

## 覆盖要点

- 验证父组件能够通过FIND_CHILD_SERVICE成功获取到子组件的DemoService实例
- 验证父组件能够调用子组件服务实例的方法(increaseAge、increaseCount)并成功修改其状态
- 验证子组件能够正确响应服务状态变化，无论变化是由子组件自身还是父组件触发的
- 验证计算属性(name、computedName)能够在依赖属性变化时自动更新
- 验证组件间通信机制在复杂嵌套结构中的可靠性

## 业务场景价值

这种机制避免了通过props层层传递参数的复杂性，使父组件能够直接操作子组件的服务状态，适用于页面中需要跨组件通信的场景，提升了代码的可维护性和组件的独立性。

## 测试场景-当前组件的服务访问当前组件

```
@Inject(CURRENT_COMPONENT)
public component: ComponentInternalInstance | null = null;
```

测试了在服务中获取当前组件的功能，主要功能可以获取 props 或者发送事件

```
this.component.props
this.component.emit()

// 还可以获取组件的defineExpose的数据，但是不建议使用
// 因为所有数据都在服务中，服务可以通过依赖注入引用其他服务
this.component.exposeProxy
```
