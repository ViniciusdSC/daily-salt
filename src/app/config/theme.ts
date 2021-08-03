import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#5e35b1',
    },
  },
});

export default theme;

export const drawerWidth = 240;
