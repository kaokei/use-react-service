import { Container, type Newable } from '@kaokei/di';
import { reactive, markRaw } from '@vue/reactivity';
import { CURRENT_CONTAINER } from './constants';

function isObject(val: object) {
  return val !== null && typeof val === 'object';
}

function makeReactiveObject(_: any, obj: any) {
  return isObject(obj) ? reactive(obj) : obj;
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

  // 通过onActivation钩子使得所有实例变成响应式对象
  container.onActivation(makeReactiveObject);
  return container;
}

export function hasOwn(target: any, key: string | symbol) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

type NewableProvider = Newable[];
type FunctionProvider = (container: Container) => void;
type Provider = NewableProvider | FunctionProvider;

export function bindProviders(
  container: Container,
  providers: FunctionProvider
): void;
export function bindProviders(
  container: Container,
  providers: NewableProvider
): void;
export function bindProviders(container: Container, providers: Provider): void;
export function bindProviders(container: Container, providers: Provider) {
  if (typeof providers === 'function') {
    providers(container);
  } else {
    for (let i = 0; i < providers.length; i++) {
      container.bind(providers[i]).toSelf();
    }
  }
}
