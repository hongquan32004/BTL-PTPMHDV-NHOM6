import { useState } from 'react'
import { useRoutes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import LayoutHeader from './layouts/main-layout';

function App() {
  const routes = useRoutes([
    {
      path: '',
      element: <LayoutHeader />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])
  return (
    routes
  )
}

export default App