import React from 'react';

import {FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack, Typography} from '@mui/material';

import {SystemPowerLayout} from './system-power-layout/system-power-layout.component';
import Button from '@mui/material/Button';
import {SystemBatteryStatus} from './system-battery-status/system-battery-status.component';

import './system-power.style.scss';
import {SystemTimer} from './system-timer/system-timer.component';

export const SystemPower: React.FC = () => {
  return (
    <SystemPowerLayout>
      <div data-width={'30%'}>
        <Typography variant="h4">Power Mode</Typography>
        <Paper sx={{
          paddingBlock: '1rem',
          paddingInline: '1rem',
        }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="batteryOne"
              name="radio-buttons-group"
              sx={{
                padding: '0rem 0rem 2rem 1rem',
              }}
            >
              <FormControlLabel value="batteryOne" control={<Radio />} label="Battery 1" />
              <FormControlLabel value="batteryTwo" control={<Radio />} label="Battery 2" />
              <FormControlLabel value="automatic" control={<Radio />} label="Automatic" />
            </RadioGroup>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing="1rem"
              flexWrap="wrap"
            >
              <Button
                disableElevation
                color="success"
                variant="contained"
              >
                Save & Restart
              </Button>
              <Button
                disableElevation
                color="error"
                variant="contained"
              >
                Cancel
              </Button>
            </Stack>
          </FormControl>
        </Paper>
      </div>
      <div data-width={'70%'}>
        <Typography variant="h4">Power Sources</Typography>
        <Paper sx={{
          paddingBlock: '1rem',
          paddingInline: '1rem',
        }}>
          <Stack
            display={'flex'}
            flexWrap={'wrap'}
            gap={'1.5rem'}
            direction={'row'}
          >
            <div style={{
              flex: '1 1 min(35ch, 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderRight: '1px solid',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
            }}>
              <Typography variant="h5">Power Source 1</Typography>
              <div className={'battery-label'}>Battery</div>
              <SystemBatteryStatus></SystemBatteryStatus>
            </div>
            <div style={{
              flex: '1 1 min(35ch, 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
              height: 'max-content',
            }}>

              <Typography variant="h5">Power Source 2</Typography>
              <div className={'battery-label'}>NA</div>
            </div>
          </Stack>
        </Paper>
      </div>
      <div data-width={'100%'}>
        <Typography variant="h4">Remaining Work Time</Typography>
        <Paper sx={{
          paddingBlock: '1rem',
          paddingInline: '1rem',
        }}>
          <Stack
            display={'flex'}
            flexWrap={'wrap'}
            gap={'1.5rem'}
            direction={'row'}
          >
            <div style={{
              flex: `0 0 calc(clamp(calc(100% - 1.5rem), calc((45rem - 100%) * 999), 100%))`,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
            }}>
              <SystemTimer></SystemTimer>
            </div>
          </Stack>
        </Paper>
      </div>
    </SystemPowerLayout>
  );
};
