import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import UsersPrivileges from './usersPrivileges';

const AdminPassword = lazy(() => import('./admin-password/admin-password.component').then(({AdminPassword}) => ({default: AdminPassword})));

export const AdminRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="password" replace />
  },
  {
    path: 'password',
    element: <AdminPassword />,
  },
  {
    path: 'admin-privileges',
    element: <UsersPrivileges />
  }
]);
