import React from 'react';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @ts-ignore
import logo from '../../../assets/images/iai-logo.png';

import {AuthContext} from '../../_shared/modules/auth/contexts/auth-context';
import {LedInfoContext} from '../../_shared/contexts/led-info/led-info.context';

import './app-header.style.scss';
import {initPowerLedProtocol} from './constants/init-power-led.protocol';
import {initAccessLedProtocol} from './constants/init-access-led.protocol';
import {calculateLedFrequency} from './constants/calculate-led.frequency';
import {strip1LedConfig} from './constants/strip1-led.config';
import {strip2LedConfig} from './constants/strip2-led.config';
import {strip3LedConfig} from './constants/strip3-led.config';
import {strip4LedConfig} from './constants/strip4-led.config';
import {strip5LedConfig} from './constants/strip5-led.config';
import {formatHeaderDate} from './constants/format-header-date';

export const AppHeader: React.FC = () => {
  const ledInfo = React.useContext(LedInfoContext);

  const navigate = useNavigate();
  const {logout} = React.useContext(AuthContext);
  const handleLogout = React.useCallback(async () => {
    await logout();
    navigate('/login');
  }, [logout]);

  return (
    <header className="header">
      <div className="logo">
        <img height={'50px'} srcSet={logo} alt="Company logo" />
      </div>
      <ul className="widgets">
        <li className="list">
          <div className="typing-indicator single-dot">
            <Box
              className={initPowerLedProtocol(ledInfo?.powerLed).interval}
              sx={{bgcolor: `${initPowerLedProtocol(ledInfo?.powerLed).color}.main`}}
            >
            </Box>
          </div>
          Power
        </li>
        <li className="list">
          <div className="typing-indicator single-dot">
            <Box
              className={initAccessLedProtocol(ledInfo?.accessLed).interval}
              sx={{bgcolor: `${initAccessLedProtocol(ledInfo?.accessLed).color}.main`}}
            >
            </Box>
          </div>
          Access
        </li>
        <li className="list">
          <div className="bars">
            <Box
              className={calculateLedFrequency(ledInfo?.stripLed, strip1LedConfig).interval}
              sx={{'&&': {bgcolor: `${calculateLedFrequency(ledInfo?.stripLed, strip1LedConfig).color}.main`}}}
            />
            <Box
              className={calculateLedFrequency(ledInfo?.stripLed, strip2LedConfig).interval}
              sx={{'&&': {bgcolor: `${calculateLedFrequency(ledInfo?.stripLed, strip2LedConfig).color}.main`}}}

            />
            <Box
              className={calculateLedFrequency(ledInfo?.stripLed, strip3LedConfig).interval}
              sx={{'&&': {bgcolor: `${calculateLedFrequency(ledInfo?.stripLed, strip3LedConfig).color}.main`}}}
            />
            <Box
              className={calculateLedFrequency(ledInfo?.stripLed, strip4LedConfig).interval}
              sx={{'&&': {bgcolor: `${calculateLedFrequency(ledInfo?.stripLed, strip4LedConfig).color}.main`}}}
            />
            <Box
              className={calculateLedFrequency(ledInfo?.stripLed, strip5LedConfig).interval}
              sx={{'&&': {bgcolor: `${calculateLedFrequency(ledInfo?.stripLed, strip5LedConfig).color}.main`}}}
            />
          </div>
          <div>Backhaul</div>
        </li>
        <div className="d-grid j-i-center">
          <Typography variant="h5" className="j-self-center">Developer</Typography>
          <div className="j-self-center">{formatHeaderDate(new Date())}</div>
        </div>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </ul>
    </header>
  );
};
