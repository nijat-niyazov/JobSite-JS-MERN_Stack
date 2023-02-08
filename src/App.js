import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Dashboard, Register, Error404, LandingPage } from './pages/exporter';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
