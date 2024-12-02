import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme'; // Added darkTheme for theme toggle
import { CssBaseline } from '@mui/material';
import '@fontsource/questrial'; // Import Questrial font


const root = ReactDOM.createRoot(document.getElementById('root'));

// Dynamic Theme Setup (Optional)
const isDarkMode = false; // Replace this with dynamic logic if needed

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}> {/* Toggle themes dynamically */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
