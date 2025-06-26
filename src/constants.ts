import { createContext } from 'react';
import { Token } from '@kaokei/di';
import { createContainer } from './utils.ts';
import { FindChildService, FindChildrenServices } from './interface.ts';

// 给依赖注入库使用的token
export const FIND_CHILD_SERVICE = new Token<FindChildService>(
  'USE_REACT_SERVICE_FIND_CHILD_SERVICE'
);
// 给依赖注入库使用的token
export const FIND_CHILDREN_SERVICES = new Token<FindChildrenServices>(
  'USE_REACT_SERVICE_FIND_CHILDREN_SERVICES'
);

// 每个实例对象自身维护的effectScope的key
export const SCOPE_KEY = Symbol();

// 默认Container，对应declareRootProviders/getRootService
export const DEFAULT_CONTAINER = createContainer();

// 用于绑定组件和容器
export const CONTAINER_CONTEXT = createContext(DEFAULT_CONTAINER);
