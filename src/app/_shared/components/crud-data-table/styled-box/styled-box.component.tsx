import Box from '@mui/material/Box';
import {styled} from '@mui/material';

export const StyledBox = styled(Box)(({theme}) => ({
  width: '100%',
  '& .Mui-error': {
    height: '100%',
    backgroundColor: `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: theme.palette.error.main,
  },
}));
