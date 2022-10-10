import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './layouts.js/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/home',
          element: <Home/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
