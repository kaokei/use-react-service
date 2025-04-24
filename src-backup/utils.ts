import { reactive } from '@vue/reactivity';
import { Container, Context } from '@kaokei/di';
import { FIND_CHILD_SERVICE, FIND_CHILDREN_SERVICES } from './constants.ts';
import { findChildService, findChildrenServices } from './find-service.ts';
import { removeScope } from './scope.ts';
import type {
  Provider,
  FindChildService,
  FindChildrenServices,
} from './interface.ts';

function isObject(val: object) {
  return val !== null && typeof val === 'object';
}

function activationHandle(_: any, obj: any) {
  return isObject(obj) ? reactive(obj) : obj;
}

function deactivationHandle(obj: any) {
  return removeScope(obj);
}

function findChildServiceFactory({ container }: Context): FindChildService {
  return (token: any) => findChildService(token, container);
}

function findChildrenServicesFactory({
  container,
}: Context): FindChildrenServices {
  return (token: any) => findChildrenServices(token, container);
}

export function createContainer(parent?: Container) {
  let container: Container;

  if (parent) {
    container = parent.createChild();
  } else {
    container = new Container();
  }

  container.bind(FIND_CHILD_SERVICE).toDynamicValue(findChildServiceFactory);
  container
    .bind(FIND_CHILDREN_SERVICES)
    .toDynamicValue(findChildrenServicesFactory);

  // 通过onActivation钩子使得所有实例变成响应式对象
  container.onActivation(activationHandle);
  // 通过onDeactivation钩子删除所有scope
  container.onDeactivation(deactivationHandle);
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
