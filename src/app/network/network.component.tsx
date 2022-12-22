import React from 'react';

import Box from '@mui/material/Box';

import {
  SelectionPartWithButtons,
} from '../_shared/components/selection-part-with-buttons/selection-part-with-buttons.component';

import {NetworkRoutes} from './network.routes';
import {NETWORK_SELECTION_PART_ITEMS} from './constants/network-selection-part-items';

export const Network: React.FC = () => (
  <>
    <SelectionPartWithButtons selectionItems={NETWORK_SELECTION_PART_ITEMS} parent={'network'}/>
    <Box sx={{
      paddingBlock: '1.5rem',
      paddingInline: '1.5rem',
    }}>
      <NetworkRoutes />
    </Box>
  </>
);
