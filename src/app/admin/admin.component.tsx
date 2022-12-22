import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {ADMIN_SELECTION_PART_ITEMS} from './constants/admin-selection-part-items';
import {AdminRoutes} from './admin.routes';

export const Admin: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={ADMIN_SELECTION_PART_ITEMS} parent='privileges' />
    <AdminRoutes />
  </>
);
