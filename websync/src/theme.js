import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Questrial", sans-serif', // Default font (used in Navbar and other components)
    technoCharm: {
      fontFamily: '"Techno Charm", sans-serif', // Custom font for Hero Section
    },
  },
  palette: {
    primary: {
      main: '#1980F6', // Primary color
    },
    secondary: {
      main: '#05E6C6', // Secondary color
    },
    background: {
      default: '#FFFFFF', // Background color
      paper: '#F9FAFB',
    },
    text: {
      primary: '#000000',
      secondary: '#4F4F4F',
    },
  },
});

export { theme };
