import React from 'react';

import Box from '@mui/material/Box';
import {Typography} from '@mui/material';

export const NotFoundPage: React.FC = () => (
  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', height: '100vh'}}>
    <Typography variant="h1">404</Typography>
    <Typography variant="h4">Not found</Typography>
  </Box>
);
