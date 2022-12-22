import React from 'react';

import {LedInfo} from './led-info.interface';

export const LedInfoContext = React.createContext<LedInfo>({powerLed: 0, accessLed: 0, stripLed: 0});
