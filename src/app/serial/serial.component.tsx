import React from 'react';

import {
  SelectionPartWithButtons
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {SerialRoutes} from './serial.routes';
import {SERIAL_SELECTION_PART_ITEMS} from './constants/serial-selection-part-items';

export const Serial: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={SERIAL_SELECTION_PART_ITEMS} parent={'serial'} />
    <SerialRoutes />
  </>
);
