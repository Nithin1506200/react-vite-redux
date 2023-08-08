import { createBrowserRouter } from 'react-router-dom';
import loginRouter from './login.router';
import dashboardRouter from './Dashboard.router';

const router = createBrowserRouter([loginRouter, dashboardRouter]);
export default router;
