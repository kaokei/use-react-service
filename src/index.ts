export * from '@vue/reactivity';
export * from '@kaokei/di';

export { useService, useRootService, declareRootProviders } from './useService';
export { observer } from './observer';

export {
  useReactiveState,
  useReactiveRef,
  useInjector,
  useSetup,
} from './hooks';

// 以下导出不是面向普通用户使用的
// 而是面向第三方库的开发者
export { DEFAULT_INJECTOR, SERVICE_CONTEXT } from './constants';

export { getInjector, getServiceFromInjector } from './utils';
