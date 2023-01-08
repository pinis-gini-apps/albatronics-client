import React, { useEffect, useState } from 'react';
import { useSystemData } from 'store/useSystemData';
import { GET_TIME_AND_DATE_INTERVAL } from '../constants';

const useSystemTimeAndDate = () => {

    const [timestamp, setTimestamp] = useState<number>(0);

    useEffect(() => {    
        const getTimestamp = async () => {
          try {
            if (window.location.pathname !== '/login' && localStorage.getItem('authToken')) {
              const response = await fetch('/api/v1/user/timestamp', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    sensitive: 'true', mode: 'cors',
                    'Content-Type': 'application/json'
                },
              });
              const text = await response.text();  
              const res = await JSON.parse(text);                  
              setTimestamp(res?.timestamp)
            }
          } catch (error) {
            localStorage.removeItem('authToken')
          }
        };
    
        const interval = setInterval(() => {
            getTimestamp();
        }, GET_TIME_AND_DATE_INTERVAL);
    
        return () => {
          clearInterval(interval);
        };
    
      }, []);


      useEffect(() => {    
        useSystemData.getState().setSystemData('timestamp', timestamp);
      }, [timestamp]);

}

export default useSystemTimeAndDate;