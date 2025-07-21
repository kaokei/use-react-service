# 快速开始

## 简介

本库是一个轻量级的适用于 react 项目的状态管理库。

本库是基于[@kaokei/di](https://github.com/kaokei/di) 和 [@vue/reactivity](https://vuejs.org/api/reactivity-core.html#ref) 开发的。  
其中`@kaokei/di`提供了依赖注入的能力，`@vue/reactivity`提供了响应式数据能力。

本库的灵感来源于[Angular Service](https://angular.dev/guide/di/creating-injectable-service)，优势是管理数据的方式更加灵活。

同时也是对标[use-vue-service](https://use-vue-service.kaokei.com/)的兄弟项目。

## 安装

```sh
npm install @kaokei/di @vue/reactivity @kaokei/use-react-service
```

本库 **不依赖** `reflect-metadata`，所以 **不需要** 安装这个 npm 包。

本库依赖 typescript 环境，其实是依赖装饰器特性。需要在 tsconfig.js 文件中配置如下字段。

> "experimentalDecorators": true  
> ~~"emitDecoratorMetadata": true~~ 不需要配置这个字段，因为本库不依赖装饰器元数据

## 基本使用

```ts
// 这个service.ts文件中定义了2个服务，LoggerService和CountService
// 并且CountService依赖着LoggerService
import { Inject } from '@kaokei/use-react-service';

export class LoggerService {
  public log(...msg: any[]) {
    console.log('from logger service ==>', ...msg);
  }
}

export class CountService {
  public count = 0;

  @Inject(LoggerService)
  private logger: LoggerService;

  public addOne() {
    this.count++;
    this.logger.log('addOne ==> ', this.count);
  }
}
```

```tsx
// 这个组件使用了service.ts文件中定义的服务
import { declareProviders, useService } from '@kaokei/use-react-service';
import { CountService, LoggerService } from './service.ts';

function selectorCountService(s: CountService) {
  // 订阅了CountService中的count属性
  // 当count属性发生变化时，组件会重新渲染
  return [() => s.count];
}

function DempComponent() {
  // 这行代码实例化了CountService得到一个countService对象
  const countService = useService(CountService, selectorCountService);
  return (
    <div>
      <div>{ countService.count }</div>
      <button onClick={() => countService.addOne()}>点击按钮+1</button>
    </div>
  )
}

// 这行代码将CountService、LoggerService和当前组件进行了绑定
export default declareProviders([CountService, LoggerService])(DempComponent);
```
