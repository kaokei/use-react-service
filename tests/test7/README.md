# test7 测试模块

## 测试目的

验证多层次服务注册和使用机制，测试根级别服务(RootService)、应用级别服务(AppService)和组件级别服务(DemoService)是否能正确注册并在组件中使用。

## 覆盖要点

- 验证使用`declareRootProviders`在根级别注册服务的功能
- 验证使用`declareProviders`数组形式在应用级别注册服务的功能
- 验证使用`declareProviders`在组件级别注册服务的功能
- 验证组件能够同时访问并使用来自不同级别的服务实例
- 验证各级别服务的状态变化能够正确反映到UI界面
- 验证不同级别服务之间的独立性，一个服务状态变化不影响其他服务

## 业务场景价值

多层次服务注册机制对于大型应用架构设计具有重要价值：

1. 根级别服务(RootService)适用于整个应用共享的全局服务，如身份验证、主题配置等。
2. 应用级别服务(AppService)适用于特定功能模块内共享的服务，这里的AppService其实也是一个组件级别的服务，只不过是根组件的服务，可以被任意子组件访问。
3. 组件级别服务(DemoService)适用于特定组件的专用逻辑，也可以被其子组件访问。

这种分层注册机制使应用架构更加清晰，并提供了灵活的服务生命周期和作用域管理，有助于构建复杂的企业级应用。

## 测试场景

验证了 declareProviders 和 declareRootProviders。

declareRootProviders+getRootService 相当于验证了默认容器 DEFAULT_CONTAINER
