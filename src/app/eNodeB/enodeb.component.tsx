import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {ENODEB_SELECTION_PART_ITEMS} from './constants/enodeb-selection-part-items';
import {EnodebRoutes} from './enodeb.routes';

export const Enodeb: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={ENODEB_SELECTION_PART_ITEMS} parent={'enodeb'} />
    <EnodebRoutes />
  </>
);
