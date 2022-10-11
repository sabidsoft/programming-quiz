import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts.js/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics',
          element: <Topics/>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics/:topicId',
          element: <Quiz/>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        {
          path: '/statistics',
          element: <Statistics/>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blog',
          element: <Blog/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

