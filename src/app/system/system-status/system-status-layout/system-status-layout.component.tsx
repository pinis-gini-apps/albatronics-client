import React from 'react';

import Box from '@mui/material/Box';

type SystemStatusLayoutProps = {
  children: React.ReactNode;
};

export const SystemStatusLayout: React.FC<SystemStatusLayoutProps> = ({children}) => (
  <Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem',
  }}>
    {children && (
      React.Children.map(children, item => (
        <Box sx={{
          flex: '0 0 calc(clamp(calc(50% - 1.5rem), calc((45rem - 100%) * 999), 100%))',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {item}
        </Box>
      ))
    )}
  </Box>
);
