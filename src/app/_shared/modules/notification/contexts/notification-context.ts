import React from 'react';

import {Notification} from '../models/notification';

export interface NotificationApi {
  show: (notification: Notification) => void;
  close: VoidFunction;
}

export const NotificationContext = React.createContext<NotificationApi>({} as NotificationApi);
