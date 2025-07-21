# API 文档

## [@kaokei/di](https://github.com/kaokei/di/blob/main/docs/api/README.md)

本库是基于`@kaokei/di`开发的，默认导出了`@kaokei/di`中的所有 API。

主要是业务开发中也是经常需要使用到`@kaokei/di`中的 API，本库默认导出了`@kaokei/di`是为了方便用户导入 API，也就是只需要从`@kaokei/use-react-service`中可以导入所有 API。不需要从不同的库中分别导入 API，从而避免一定的记忆成本。

## [@vue/reactivity](https://vuejs.org/api/reactivity-core.html#ref)

本库的响应式能力是基于`@vue/reactivity`开发的，默认导出了`@vue/reactivity`中的所有 API。

## declareProviders

```ts
function declareProviders(
  providers: Provider
): (WrappedComponent: any) => ConnectedComponent;
```

`declareProviders`的使用示例如下：

```ts
export default declareProviders([LoggerService, CounterService])(DemoComponent);
```

类似react-redux中的connect方法：

```ts
export default connect(mapStateToProps, mapDispatchToProps)(DemoComponent);
```

## useService

```ts
function useService<T>(
  token: CommonToken<T>,
  selector?: (service: T) => WatchSource | WatchSource[]
): T;
```

`useService`方法和`declareProviders`方法是一对。
也就是`declareProviders`方法声明的服务，需要通过`useService`来获取。

`useService`的使用示例如下：

```ts
// 假设已经通过declareProviders绑定了[LoggerService, CounterService]
const loggerService = useService(LoggerService);
const counterService = useService(CounterService);
```

这里通过useService获取的实例对象是不具有响应式能力的，也就是数据变化时不会触发组件重新渲染。
这是react本身的“缺陷”导致的，实际上在vue项目中是可以直接实现组件重新渲染的。
所以在react项目中只能手动订阅数据的变化。也就是通过第2个参数selector来订阅数据的变化。

```ts
function selectorCounterService(s: CounterService) {
  return [() => s.count];
}
// 这里只以CounterService为例子进行说明
// selectorCounterService中订阅了count属性，也就是当count属性变化时，组件会重新渲染
const counterService = useService(CounterService, selectorCounterService);
```

## declareRootProviders

```ts
function declareRootProviders(providers: Provider): void;
```

`declareRootProviders`的使用示例如下：

```ts
// 根据providers的类型，绑定对应的服务
declareRootProviders([[LoggerService, CounterService]]);
```

注意这里和declareProviders的区别是declareRootProviders只负责注册全局的服务，并不与特定组件进行绑定。
不过组件内也是可以通过useService获取到declareRootProviders注册的服务。

## getRootService

```ts
function getRootService<T>(token: CommonToken<T>): T;
```

`getRootService`方法和`declareRootProviders`方法是一对。
也就是`declareRootProviders`方法声明的服务，可以通过`getRootService`来获取。

`getRootService`的使用示例如下：

```ts
// 假设已经通过declareRootProviders绑定了[LoggerService, CounterService]
const loggerService = getRootService(LoggerService);
const counterService = getRootService(CounterService);
```

这里再次声明一下，declareRootProviders注册的全局服务，既可以通过getRootService获取服务对象，也可以通过useService获取服务对象。  
只是getRootService是直接在根容器中寻找指定的服务，而useService则是通过组件一层层的向上寻找，一直找到根容器中。这两者的寻找过程不同。  
另一点，useService可以通过selector订阅数据的变化，getRootService则没有这个能力。

## FIND_CHILD_SERVICE

注意到useService可以在组件内向上寻找指定的服务对象。这里的FIND_CHILD_SERVICE则用于在组件内向下寻找指定的服务对象。

```ts
// 注意这里不需要指定selector，因为这里并没有需要订阅的会发生变化的属性
// findService是一个函数而不是一个对象
const findService = useService(FIND_CHILD_SERVICE);
// 这里就可以在子组件中寻找CounterService服务对象了，会返回找到的第一个对象
const counterService = findService(CounterService);
```

首先通过 useService 获取一个工具方法，该工具方法用于查找当前组件的子孙组件中绑定的 token 服务。返回找到的第一个服务实例。

FIND_CHILD_SERVICE 本身是一个 token，所以也可以用在服务中。

```ts
class DemoService {
  @Inject(FIND_CHILD_SERVICE)
  public findService!: TokenType<typeof FIND_CHILD_SERVICE>;

  public handleClickBtn() {
    const childService = this.findService(ChildService);
    childService.doSomething();
  }
}
```

## FIND_CHILDREN_SERVICES

```ts
// 注意这里不需要指定selector，因为这里并没有需要订阅的会发生变化的属性
// findAllService是一个函数而不是一个对象
const findAllService = useService(FIND_CHILDREN_SERVICES);
// 这里就可以在子组件中寻找CounterService服务对象了，返回所有CounterService服务实例
const counterServiceList = findAllService(CounterService);
```

功能同上，返回指定 token 服务的多个实例组成的数组。FIND_CHILDREN_SERVICES 本身是一个 token，所以也可以用在服务中。

```ts
class DemoService {
  @Inject(FIND_CHILDREN_SERVICES)
  public findAllService!: TokenType<typeof FIND_CHILDREN_SERVICES>;

  public handleClickBtn() {
    const childServices = this.findAllService(ChildService);
    childServices.forEach(service => service.doSomething());
  }
}
```

## Computed

```ts
class DemoService {
  public _count = 1;

  @Computed
  public get count() {
    return this._count * 100;
  }
}
```

通过 `@vue/reactivity` 的`computed`对 class 的 getter 属性进行性能优化，避免每次访问都重复执行 getter 方法，只有在确实有依赖变化时，才会重新执行 getter 方法。

## getEffectScope

```ts
class DemoService {
  public init() {
    getEffectScope().run(() => {
      const doubled = computed(() => counter.value * 2);
      watch(doubled, () => console.log(doubled.value));
      watchEffect(() => console.log('Count: ', doubled.value));
    });
  }
}
```

主要是用于解决`computed`、`watch`、`watchEffect`等方法的副作用销毁问题。
也就是当实力对象被销毁时，`computed`、`watch`、`watchEffect`等方法的副作用也会被销毁。

如果没有`getEffectScope`工具方法，那么就需要自己手动管理 effectScope 的生命周期。

```ts
class DemoService {
  public init() {
    this.scope = effectScope();
    this.scope.run(() => {
      const doubled = computed(() => counter.value * 2);
      watch(doubled, () => console.log(doubled.value));
      watchEffect(() => console.log('Count: ', doubled.value));
    });
  }

  @PreDestroy()
  public dispose() {
    this.scope.stop();
  }
}
```
