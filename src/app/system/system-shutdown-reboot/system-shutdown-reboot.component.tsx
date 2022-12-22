import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const SystemShutdownReboot: React.FC = () => {
  return (
    <Stack>
      <Box>
        <Typography variant="h4">Sutdown / Rebbot</Typography>
        <Paper sx={{paddingBlock: '1rem', paddingInline: '1rem'}}>
          <Stack
            direction="row"
            alignContent="center"
            justifyContent="space-between"
          >
            <Button
              disableElevation
              variant="contained"
              size="medium"
              color="warning"
            >
              TacMAN REBOOT
            </Button>
            <Button
              disableElevation
              variant="contained"
              size="medium"
              color="error"
            >
              TacMAN SHUTDOWN
            </Button>
            <Button
              disableElevation
              variant="contained"
              size="medium"
              color="warning"
            >
              FACTORY DEFAULT
            </Button>
          </Stack>
        </Paper>
      </Box>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignContent="center"
        sx={{gap: '1.5rem'}}
      >
        <Box sx={{flex: '1 1 min(40ch, 100%)'}}>
          <Typography variant="h4">BBU / FEM On / Off</Typography>
          <Stack
            component={Paper}
            sx={{paddingBlock: '1rem', paddingInline: '1rem'}}
          >
            <FormControl>
              <FormLabel>BBU</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={1} control={<Radio/>} label="On"/>
                <FormControlLabel value={0} control={<Radio/>} label="Off"/>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>FEM</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={1} control={<Radio/>} label="On"/>
                <FormControlLabel value={0} control={<Radio/>} label="Off"/>
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
        <Stack sx={{gap: '1.5rem', flex: '1 1 min(40ch, 100%)'}}>
          <Box>
            <Typography variant="h4">RF On / Off</Typography>
            <Stack
              component={Paper}
              sx={{paddingBlock: '1rem', paddingInline: '1rem'}}>
              <Stack
                direction="row"
                spacing="1rem"
                alignItems="center"
              >
                <div>RF Policy</div>
                <Switch/>
              </Stack>
              <Stack
                direction="row"
                spacing="1rem"
                alignItems="center"
              >
                <div>eNodeB State</div>
                <Paper
                  variant="outlined"
                  sx={{
                    paddingInline: '0.75rem',
                    paddingBlock: '0.25rem',
                    bgcolor: 'error.main',
                    color: 'secondary.contrastText'
                  }}
                >
                  not transmitting
                </Paper>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h4">LEDs Status</Typography>
            <Stack
              component={Paper}
              sx={{paddingBlock: '1rem', paddingInline: '1rem'}}>
              <Stack
                direction="row"
                spacing="1rem"
                alignItems="center"
              >
                <div>Leds Status</div>
                <Paper
                  variant="outlined"
                  sx={{
                    paddingInline: '0.75rem',
                    paddingBlock: '0.25rem',
                    bgcolor: 'success.main',
                    color: 'success.contrastText'
                  }}
                >
                  On
                </Paper>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
      >
        <Button
          disableElevation
          variant="contained"
          size="medium"
          color="success"
        >
          SAVE & Apply
        </Button>
        <Button
          disableElevation
          variant="contained"
          size="medium"
          color="error"
        >
          CANCEL
        </Button>
      </Stack>
    </Stack>
  );
};
