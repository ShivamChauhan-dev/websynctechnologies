import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // Light theme
import { CssBaseline } from '@mui/material';
import { GetStartedProvider } from './context/GetStartedContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GetStartedProvider> {/* Wrap yaha hona chahiye */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </GetStartedProvider>
    </BrowserRouter>
  </React.StrictMode>
);