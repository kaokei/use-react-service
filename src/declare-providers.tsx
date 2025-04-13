import { Container } from '@kaokei/di';
import { useContext, useEffect, useRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { createContainer, bindProviders } from './utils.ts';
import { CONTAINER_CONTEXT } from './constants.ts';
import type { Provider } from './interface.ts';

export function declareProviders(providers: Provider) {
  return (WrappedComponent: any) => {
    const ConnectedComponent = (props: any) => {
      const parentContainer = useContext(CONTAINER_CONTEXT);
      const currentContainer = useRef<Container>(null);

      if (!currentContainer.current) {
        currentContainer.current = createContainer(parentContainer);
        bindProviders(currentContainer.current, providers);
      }

      useEffect(() => () => currentContainer.current?.destroy(), []);

      return (
        <CONTAINER_CONTEXT.Provider value={currentContainer.current}>
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
