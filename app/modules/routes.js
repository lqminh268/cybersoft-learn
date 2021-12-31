import React from 'react';
import Login from '../containers/Login/Loadable';
import Register from '../containers/Register/Loadable';
import NotFound from '../containers/NotFoundPage/Loadable';
import HomePage from './HomePage/Loadable';

const routes = [
  {
    path: `/`,
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: `/login`,
    exact: true,
    main: () => <Login />,
  },
  {
    path: `/register`,
    exact: true,
    main: () => <Register />,
  },
  {
    path: ``,
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
