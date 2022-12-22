export interface LedInfo {
  powerLed: number | 0;
  accessLed: number | 0;
  stripLed: number | 0;
}

export interface IUser {
  id: string;
  role: string;
  username: string;
  setUserData: any;
}