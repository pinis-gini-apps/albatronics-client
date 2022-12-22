import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {LOGS_SELECTION_PART_ITEMS} from './constants/logs-selection-part-items';
import {LogsRoutes} from './logs.routes';

export const Logs: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={LOGS_SELECTION_PART_ITEMS} parent={'logs'}/>
    <LogsRoutes />
  </>
);
