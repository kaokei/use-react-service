import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import UseReact from './pages/UseReact/UseReact';
import UseVue from './pages/UseVue/UseVue';
import UseService from './pages/UseService/UseService';
import UseSetup from './pages/UseSetup/UseSetup';
import Lifecycle from './pages/Lifecycle/Lifecycle';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="selected" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/UseReact">
                完全使用react实现的demo
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/UseVue">
                直接使用useReactiveState和useReactiveVue
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/UseSetup">
                使用useSetup这个hooks
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/UseService">
                使用useService这个hooks
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/Lifecycle">
                使用useService和useEffect
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/UseReact">
            <UseReact />
          </Route>
          <Route path="/UseVue">
            <UseVue />
          </Route>
          <Route path="/UseSetup">
            <UseSetup />
          </Route>
          <Route path="/UseService">
            <UseService />
          </Route>
          <Route path="/Lifecycle">
            <Lifecycle />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>请选择各种例子查看效果</h2>;
}
