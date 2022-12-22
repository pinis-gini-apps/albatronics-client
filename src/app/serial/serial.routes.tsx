import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const SerialSummery = lazy(() => import('./serial-summery/serial-summery.component').then(({SerialSummery}) => ({default: SerialSummery})));

export const SerialRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="summery" replace />
  },
  {
    path: 'summery',
    element: <SerialSummery />,
  },
]);
