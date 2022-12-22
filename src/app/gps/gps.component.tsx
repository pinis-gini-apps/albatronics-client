import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {GPS_SELECTION_PART_ITEMS} from './constants/gps-selection-part-items';
import {GpsRoutes} from './gps.routes';

export const Gps: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={GPS_SELECTION_PART_ITEMS} parent={'gps'}/>
    <GpsRoutes />
  </>
);
