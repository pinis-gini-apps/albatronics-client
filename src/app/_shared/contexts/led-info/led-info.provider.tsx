import React, {useEffect} from 'react';

import {LedInfoContext} from './led-info.context';
import {useHttp} from '../../modules/http/hooks/use-http';
import {LedInfo} from './led-info.interface';

type LedInfoProviderProps = {
  children: React.ReactNode;
};

export const LedInfoProvider: React.FC<LedInfoProviderProps> = ({children}) => {
  const {
    operation: fetchLedInfo,
    data: ledInfo = {powerLed: 0, accessLed: 0, stripLed: 0},
  } = useHttp<LedInfo>({
    url: '/api/v1/led/info',
    method: 'GET',
  });
  useEffect(() => {
    fetchLedInfo();
    const intervalId = setInterval(() => {
      fetchLedInfo();
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <LedInfoContext.Provider value={ledInfo}>{children}</LedInfoContext.Provider>
  );
};
