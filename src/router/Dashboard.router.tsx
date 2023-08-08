import { Route, RouteObject, Routes } from 'react-router-dom';
import routePath from './routes.path';
import Dummy from '@/components/generic/dummy/DummyComponent';
import ReduxDemoPage from '@/pages/ReduxDemo.page';
const ReduxDemoRouter = () => (
  <Routes>
    <Route path="/" element={<ReduxDemoPage />}>
      <Route path="/" index={true} element={<h2>Home</h2>} />
      <Route path={routePath.dashboard.redux} element={<Dummy />} />
    </Route>
  </Routes>
);

const dashboardRouter: RouteObject = {
  path: routePath.dashboard.base + '/*',
  Component: ReduxDemoRouter,
  loader: () => <h1>Loading...</h1>
};
export default dashboardRouter;
