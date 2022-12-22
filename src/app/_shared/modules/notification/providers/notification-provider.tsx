import React, {ReactNode} from 'react';

import {NotificationApi, NotificationContext} from '../contexts/notification-context';
import {NotificationComponentProps} from '../models/notification-component-props';
import {Notification} from '../models/notification';

type NotificationProviderProps = {
  readonly Component: React.FC<NotificationComponentProps>;
  readonly children: ReactNode;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({children, Component}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [notification, setNotification] = React.useState<Notification | null>(null);
  const value = React.useMemo<NotificationApi>(
    () => ({
      show: (notification: Notification) => {
        setIsOpen(true);
        setNotification(notification);
      },
      close: () => {
        setIsOpen(false);
        setNotification(null);
      },
    }),
    [setIsOpen, setNotification],
  );
  return (
    <NotificationContext.Provider value={value}>
      <>
        {children}
        {isOpen && notification && (
          <Component
            open={isOpen}
            type={notification?.type}
            message={notification?.message}
            onClose={() => value.close()}
          />
        )}
      </>
    </NotificationContext.Provider>
  );
};
