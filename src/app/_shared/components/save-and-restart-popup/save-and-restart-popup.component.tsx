import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

type SaveAndRestartPopupProps = {
  open: boolean;
};

export const SaveAndRestartPopup: React.FC<SaveAndRestartPopupProps> = ({open}) => {
  const handleClose = (event: Record<string, unknown>, reason: string) => {
    if (reason && reason === 'backdropClick' && 'escapeKeyDown') {
      return;
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            paddingBlock: '3rem',
            paddingInline: '5rem',
          }}
        >
          <CircularProgress />
          <div>Saving...</div>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
