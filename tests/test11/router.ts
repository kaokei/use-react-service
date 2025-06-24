import { createBrowserRouter } from 'react-router';

import DemoComp from './DemoComp.tsx';
import HomeView from './HomeView.tsx';
import AboutView from './AboutView.tsx';

const routes = [
  {
    path: '/',
    Component: DemoComp,
    children: [
      { index: true, Component: HomeView },
      { path: 'about', Component: AboutView },
    ],
  },
];

export const router = createBrowserRouter(routes);
