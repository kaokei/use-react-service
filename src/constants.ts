import { createContext } from 'react';
import { getInjector } from './utils';

export const DEFAULT_INJECTOR = getInjector();

export const SERVICE_CONTEXT = createContext(DEFAULT_INJECTOR);
