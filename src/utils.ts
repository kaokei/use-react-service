import { Container, CommonToken, Context } from '@kaokei/di';
import { reactive, markRaw } from '@vue/reactivity';
import {
  CURRENT_CONTAINER,
  FIND_SERVICE,
  FIND_ALL_SERVICES,
} from './constants.ts';
import type { Provider } from './interface.ts';
import { findService, findAllServices } from './find-service.ts';

export function isObject(val: object) {
  return val !== null && typeof val === 'object';
}

function makeReactiveObject(_: Context, obj: any) {
  return isObject(obj) ? reactive(obj) : obj;
}

function makeFindService({ container }: Context) {
  return <T>(token: CommonToken<T>) => findService<T>(token, container);
}

function makeFindAllServices({ container }: Context) {
  return <T>(token: CommonToken<T>) => findAllServices<T>(token, container);
}

export function createContainer(parent?: Container) {
  let container: Container;

  if (parent) {
    container = parent.createChild();
  } else {
    container = new Container();
  }

  // 容器绑定容器对象-方便后续通过依赖注入获取当前容器对象
  container.bind(CURRENT_CONTAINER).toConstantValue(markRaw(container));
  container.bind(FIND_SERVICE).toDynamicValue(makeFindService);
  container.bind(FIND_ALL_SERVICES).toDynamicValue(makeFindAllServices);

  // 通过onActivation钩子使得所有实例变成响应式对象
  container.onActivation(makeReactiveObject);
  return container;
}

export function bindProviders(container: Container, providers: Provider) {
  if (typeof providers === 'function') {
    providers(container);
  } else {
    for (let i = 0; i < providers.length; i++) {
      container.bind(providers[i]).toSelf();
    }
  }
}
