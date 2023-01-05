import { useUserData } from './../../../../../store/useUserData';
import { useSystemData } from 'store/useSystemData';
import {getJwtExpirationDate} from './get-jwt-expiration-date';

const hhmmssToTimestamp =(deviceTime: string) => {
  const deviceTimeInDays = deviceTime.split(' ')[0];
  const deviceTimeInHours = deviceTime.split(' ')[1];

  // expected format: hh:mm:ss
  let hoursParts = deviceTimeInHours.split(":");
  let hours = parseInt(hoursParts[0], 10);
  let minutes = parseInt(hoursParts[1], 10);
  let seconds = parseInt(hoursParts[2], 10);

  let DaysParts = deviceTimeInDays.split("/");
  let d = parseInt(DaysParts[0], 10);
  let m = parseInt(DaysParts[1], 10);
  let y = parseInt(DaysParts[2], 10);
  
  // Create a new Date object with the current year, month, and day
  let date = new Date();
  date.setDate(d);
  date.setMonth(m - 1);
  date.setFullYear(y);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  // Return the Unix timestamp 
  console.log(date)
  return date.getTime();
}

export const isJwtExpired = (token: string): boolean => {
  const deviceTime = useSystemData.getState().systemData.timestamp;
  const { lastLoginTime } = useUserData.getState().userData;
  const halfHour = 1800;
  if (!deviceTime[0]) return false;

  console.log(lastLoginTime + halfHour);
  
  return (
    lastLoginTime
      ? lastLoginTime + halfHour >= hhmmssToTimestamp(deviceTime) 
      : true
  );
}
