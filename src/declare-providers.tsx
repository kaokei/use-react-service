import React, { useContext, useEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { createContainer, bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT } from './constants.ts';
import type { Provider } from './interface.ts';

export function declareProviders(providers: Provider) {
  return (WrappedComponent: any) => {
    const ConnectedComponent = (props: any) => {
      const parentContainer = useContext(CONTAINER_CONTEXT);

      const currentContainer = React.useMemo(() => {
        const currentContainer = createContainer(parentContainer);
        bindProviders(currentContainer, providers);
        return currentContainer;
      }, [parentContainer]);

      useEffect(() => () => currentContainer.unbindAll(), [currentContainer]);

      return (
        <CONTAINER_CONTEXT.Provider value={currentContainer}>
          <WrappedComponent {...props} />
        </CONTAINER_CONTEXT.Provider>
      );
    };

    const name =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ConnectedComponent.displayName = `Connect(${name})`;
    ConnectedComponent.WrappedComponent = WrappedComponent;

    return hoistNonReactStatics(ConnectedComponent, WrappedComponent);
  };
}
