import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const DiagnosticSummery = lazy(() => import('./diagnostic-summery/diagnostic-summery.component').then(({DiagnosticSummery}) => ({default: DiagnosticSummery})));

export const DiagnosticRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="summery" replace />
  },
  {
    path: 'summery',
    element: <DiagnosticSummery />,
  },
]);
