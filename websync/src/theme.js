import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1980F6',
        },
        secondary: {
            main: '#05E6C6',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
        text: {
            primary: '#06153C',
            secondary: '#1980F6',
        },
    },
    typography: {
        fontFamily: "Questrial", // Set Questrial as the primary font
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#05E6C6',
        },
        secondary: {
            main: '#1980F6',
        },
        background: {
            default: '#06153C',
            paper: '#121212',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#05E6C6',
        },
    },
    typography: {
        fontFamily: "Questrial", // Set Questrial as the primary font
    },
});

export { lightTheme, darkTheme };
