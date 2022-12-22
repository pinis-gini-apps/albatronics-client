import React from 'react';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {DIAGNOSTIC_SELECTION_PART_ITEMS} from './constants/diagnostic-selection-part-items';
import {DiagnosticRoutes} from './diagnostic.routes';

export const Diagnostic: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={DIAGNOSTIC_SELECTION_PART_ITEMS} parent='diagnostic' />
    <DiagnosticRoutes />
  </>
);
