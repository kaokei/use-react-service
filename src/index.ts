export * from '@kaokei/di';

export * from '@vue/reactivity';

export {
  CURRENT_CONTAINER,
  FIND_SERVICE,
  FIND_ALL_SERVICES,
} from './constants.ts';

export { declareProviders } from './declare-providers.tsx';

export { declareRootProviders, useService, useRootService } from './core.ts';

export { Computed } from './computed.ts';

// 不建议业务直接使用
// 建议使用useService(FIND_SERVICE)和useService(FIND_ALL_SERVICES)
export { findService, findAllServices } from './find-service.ts';
