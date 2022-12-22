import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {BACKHAUL_SELECTION_PART_ITEMS} from './constants/backhaul-selection-part-items';
import {BackhaulRoutes} from './backhaul.routes';

export const Backhaul: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={BACKHAUL_SELECTION_PART_ITEMS} parent='backhaul' />
    <BackhaulRoutes />
  </>
);
