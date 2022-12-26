import React from 'react';

import Box from '@mui/material/Box';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {SystemRoutes} from './system.routes';
import {SYSTEM_SELECTION_PART_ITEMS} from './constants/system-selection-part-items';

export const System: React.FC = () => {

 return <>
    <SelectionPartWithButtons selectionItems={SYSTEM_SELECTION_PART_ITEMS} parent={'system'}/>
    <Box sx={{
      paddingBlock: '1.5rem',
      paddingInline: '1.5rem',
    }}>
      <SystemRoutes />
    </Box>
  </>
};
