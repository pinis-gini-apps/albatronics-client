import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

import {GuardedRoute} from './_shared/components/guarded-route/guarded-route.component';
import {useAuth} from './_shared/modules/auth/hooks/use-auth';

const LoginLazy = React.lazy(() => import('./login/login.component').then(({Login}) => ({default: Login})));
const MainLazy = React.lazy(() => import('./main/main.component').then(({Main}) => ({default: Main})));
const NotFoundPageLazy = React.lazy(() => import('./not-found-page/not-found-page.component').then(({NotFoundPage}) => ({default: NotFoundPage})));

export const AppRoutes = () => {
  const {isLogged} = useAuth();
  return useRoutes([
    {
      path: '/',
      element: isLogged ? <Navigate to="main" replace /> : <LoginLazy/>
    },
    {
      path: '/login',
      element: <LoginLazy/>,
    },
    {
      path: '/main/*',
      element: <GuardedRoute isAllowed={isLogged} redirectPath="/login"><MainLazy /></GuardedRoute>,
    },
    {
      path: '*',
      element: <NotFoundPageLazy/>,
    },
  ]);
};

