import React from 'react';

import Stack from '@mui/material/Stack';
import {Typography} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';


import './system-battery-status.style.scss';

export const SystemBatteryStatus: React.FC = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    sx={{maxWidth: 'min(450px, 100%)', gap: '0.5rem'}}
  >
    <div className="battery">
      <div className="level">
        <div className="percentage"></div>
      </div>
      <div className="cindtr">
        <BoltIcon
          className={'icon'}
          style={{display: 'none'}}
        >
        </BoltIcon>
      </div>
    </div>
    <Typography variant="h5">100%</Typography>
  </Stack>);
