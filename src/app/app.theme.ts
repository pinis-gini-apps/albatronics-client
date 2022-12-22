import {createTheme} from '@mui/material/styles';

const baseThemeWithPalette = createTheme({
  palette: {
    primary: {
      light: '#69a4e9',
      main: '#2f76b6',
      dark: '#004b86',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: 0.5,
    },
    h4: {
      fontFamily: [
        "monospace",
        "sans-serif"
      ].join(",")
    },
  },
});
export const appTheme = {
  ...baseThemeWithPalette,
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 1rem',
          minWidth: 0,
          padding: 0,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: '1.5rem',
      },
    },
  },
};
