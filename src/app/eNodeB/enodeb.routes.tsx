import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const EnodebSpectrum = lazy(() => import('./enodeb-spectrum/enodeb-spectrum.component').
  then(({EnodebSpectrum}) => ({default: EnodebSpectrum})));

export const EnodebRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="performances" replace />
  },
  {
    path: 'spectrum',
    element: <EnodebSpectrum />,
  },
]);
