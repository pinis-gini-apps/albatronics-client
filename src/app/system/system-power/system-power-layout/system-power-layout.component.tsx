import React from 'react';

import Box from '@mui/material/Box';

type SystemPowerLayoutProps = {
  children: React.ReactNode;
};

const getWidth = (data: any): any => {
    const width = '50%';
    return data?.props['data-width'] ? data.props['data-width'] : width;
};

export const SystemPowerLayout: React.FC<SystemPowerLayoutProps> = ({children}) => {
    return (<Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
    }}>
        {children && (
            React.Children.map(children, (item, i) => (
                <Box sx={{
                    flex: `0 0 calc(clamp(calc(${getWidth(item)} - 1.5rem), calc((45rem - 100%) * 999), 100%))`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}>
                    {item}
                </Box>
            ))
        )}
    </Box>)
}
