import React, { useEffect, useState } from 'react';
import { MAX_FAIL_TIME_COUNT, FAIL_TIME_INTERVAL } from '../constants';

const usePingServer = () => {
    const [failedCount, setFailedCount] = useState<number>(0);


    useEffect(() => {    
        const pingServer = async () => {
          try {
            if (failedCount < 2  && window.location.pathname !== '/login' && localStorage.getItem('authToken')) {
              const response = await fetch('/api/v1/user/ping', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    sensitive: 'true', mode: 'cors',
                    'Content-Type': 'application/json'
                },
              });
              const text = await response.text();                    
              if (text !== 'OK') {
                setFailedCount(prevState => prevState + 1)
              }
            } else if (!localStorage.getItem('authToken')) {
              setFailedCount(MAX_FAIL_TIME_COUNT)
            }
          } catch (error) {
            setFailedCount(prevState => prevState + 1)
          }
        };
    
        const interval = setInterval(() => {
          pingServer();
        }, FAIL_TIME_INTERVAL);
    
        return () => {
          clearInterval(interval);
        };
    
      }, []);


      useEffect(() => {    
        if (failedCount === MAX_FAIL_TIME_COUNT) {
            setFailedCount(0)
        }
      }, [failedCount]);

      return failedCount;

}

export default usePingServer;