import React from 'react';
import { createContainer } from './utils';
import { CONTAINER_CONTEXT } from './constants';

export function declareProviders(providers: any) {
  // 创建container实例
  const container = createContainer(providers);

  return (WrappedComponent: any) => {
    // 返回的新组件
    const ConnectedComponent = (props: any) => (
      <CONTAINER_CONTEXT.Provider value={container}>
        <WrappedComponent {...props} />
      </CONTAINER_CONTEXT.Provider>
    );

    // 设置displayName便于调试
    const name =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ConnectedComponent.displayName = `Connect(${name})`;

    // todo: ref、hoist、React.memo

    return ConnectedComponent;
  };
}
