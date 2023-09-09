import './App.css';
import './css/colors.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
function App() {
  return <div className="App">{<RouterProvider router={router} />}</div>;
}

export default App;
