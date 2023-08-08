import LoginPage from '@/pages/Login.page';
import { RouteObject } from 'react-router-dom';
import routePath from './routes.path';

const loginRouter: RouteObject = {
  path: routePath.login,
  loader: () => <h1>Loaing</h1>,
  Component: LoginPage
};
export default loginRouter;
