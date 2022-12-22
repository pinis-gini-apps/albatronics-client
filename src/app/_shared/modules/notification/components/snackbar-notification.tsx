import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {NotificationComponentProps} from '../models/notification-component-props';

export const SnackbarNotification: React.FC<NotificationComponentProps> = ({message, open, onClose, type, duration= 5000}) => (
  <Snackbar
    open={open}
    message={message}
    onClose={onClose}
    autoHideDuration={duration}
  >
    <MuiAlert
      elevation={6}
      variant="filled"
      onClose={onClose}
      severity={type}
      sx={{width: '100%'}}
    >
      {message}
    </MuiAlert>
  </Snackbar>
);
