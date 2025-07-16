import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

import UseCount from './pages/UseCount/index';
import TestSyncStore from './pages/TestSyncStore/TestSyncStore';
import UseReact from './pages/UseReact/UseReact';
import UseService from './pages/UseService/UseService';
import Lifecycle from './pages/Lifecycle/Lifecycle';

function Home() {
  return <h2>请选择不同的示例查看不同的效果</h2>;
}

function Header() {
  return (
    <nav>
      <ol>
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/UseCount">验证CountService</NavLink>
        </li>
        <li>
          <NavLink to="/TestSyncStore">测试useSyncExternalStore</NavLink>
        </li>
        <li>
          <NavLink to="/UseReact">完全使用react实现的demo</NavLink>
        </li>
        <li>
          <NavLink to="/UseService">使用useService这个hooks</NavLink>
        </li>
        <li>
          <NavLink to="/Lifecycle">使用useService和useEffect</NavLink>
        </li>
      </ol>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="UseCount" element={<UseCount />} />
        <Route path="TestSyncStore" element={<TestSyncStore />} />
        <Route path="UseReact" element={<UseReact />} />
        <Route path="UseService" element={<UseService />} />
        {/*


          <Route path="Lifecycle" element={<Lifecycle />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
