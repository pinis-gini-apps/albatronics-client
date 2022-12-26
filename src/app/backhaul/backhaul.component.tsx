import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {BACKHAUL_SELECTION_PART_ITEMS} from './constants/backhaul-selection-part-items';
import {BackhaulRoutes} from './backhaul.routes';
import { useAllowedRoutes } from 'store/useAllowedRoutes';
import { Navigate } from 'react-router-dom';

export const Backhaul: React.FC = () => {
  const allowedRoutes = useAllowedRoutes(state => state.allowedRoutes);
  const location = window.location.pathname.split('/')[2];
  if (!allowedRoutes.includes(location)) return <Navigate to='/main' replace />
  
  return <>
    <SelectionPartWithButtons selectionItems={BACKHAUL_SELECTION_PART_ITEMS} parent='backhaul' />
    <BackhaulRoutes />
  </>
};
