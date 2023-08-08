import { Navigate, RouteObject } from 'react-router-dom';
import routePath from './routes.path';

const homepageRouter: RouteObject = {
  path: '',
  index: true,
  Component: () => {
    return <Navigate to={routePath.login} />;
  }
};
export default homepageRouter;
