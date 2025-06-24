import React from 'react';
import { declareProviders, useService } from '@/index';
import { DemoService } from './DemoService';
import { TYPES } from './types';
import { NavLink, Outlet, useLocation } from 'react-router';

export interface CompProps {}

function selectorDemoService(s: DemoService) {
  return [() => s.count, () => s.route, () => s.router];
}

const Comp: React.FC<CompProps> = () => {
  const service = useService(DemoService, selectorDemoService);

  const rootRoute = useService(TYPES.route);
  const rootRouter = useService(TYPES.router);

  const location = useLocation();

  return (
    <div>
      <div>
        <div data-testid="count">{service.count}</div>

        <button
          type="button"
          data-testid="btn-count"
          onClick={() => service.increaseCount()}
        >
          Add count
        </button>
      </div>

      <div data-testid="fullpath1">{rootRoute}</div>
      <div data-testid="fullpath2">{service.route}</div>
      <div data-testid="fullpath3">{rootRouter}</div>
      <div data-testid="fullpath4">{service.router}</div>
      <div data-testid="location">{location.pathname}</div>

      <nav>
        <NavLink data-testid="route-home" to="/">
          Go to Home
        </NavLink>
        <NavLink data-testid="route-about" to="/about">
          Go to About
        </NavLink>
      </nav>

      <main data-testid="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default declareProviders([DemoService])(Comp);
