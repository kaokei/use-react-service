import { createContext } from 'react';
import { type Container, Token } from '@kaokei/di';
import { createContainer } from './utils.ts';

// 给依赖注入库使用的token
export const CURRENT_CONTAINER = new Token<Container>(
  'USE_REACT_SERVICE_CURRENT_CONTAINER'
);

// 默认Container，对应declareRootProviders/useRootService
export const DEFAULT_CONTAINER = createContainer();

// 用于绑定组件和容器
export const CONTAINER_CONTEXT = createContext(DEFAULT_CONTAINER);
