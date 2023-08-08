import { createBrowserRouter } from 'react-router-dom';
import loginRouter from './login.router';
import dashboardRouter from './Dashboard.router';
import homepageRouter from './Homepage.router';

const router = createBrowserRouter([homepageRouter, loginRouter, dashboardRouter]);
export default router;
