import React from 'react';

import Stack from '@mui/material/Stack';
import {Typography} from '@mui/material';

type SystemCellularEditFormItemProps = {
  label: string;
  children: React.ReactElement;
};

export const SystemCellularEditFormItem: React.FC<SystemCellularEditFormItemProps> = ({label, children}) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    sx={{maxWidth: 'min(450px, 100%)'}}
  >
    <Typography variant="subtitle2">{label}</Typography>
    {children}
  </Stack>
);
