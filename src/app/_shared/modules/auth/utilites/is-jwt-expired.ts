import { useSystemData } from 'store/useSystemData';
import {getJwtExpirationDate} from './get-jwt-expiration-date';

const hhmmssToTimestamp =(time: string) => {
  // expected format: hh:mm:ss
  let parts = time.split(":");
  let hours = parseInt(parts[0], 10);
  let minutes = parseInt(parts[1], 10);
  let seconds = parseInt(parts[2], 10);

  // Create a new Date object with the current year, month, and day
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  // Return the Unix timestamp 
  return date.getTime();
}

export const isJwtExpired = (token: string): boolean => {
  const deviceTime = useSystemData.getState().systemData.timestamp;;
  if (!deviceTime[0]) return false;

  const deviceTimeInHours = deviceTime.split(' ')[1];
  const expirationDate = getJwtExpirationDate(token);

  return (
    expirationDate
      ? expirationDate < hhmmssToTimestamp(deviceTimeInHours) 
      : true
  );
}
