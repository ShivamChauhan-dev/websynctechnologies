import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme'; // Only light theme
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar component
import HomePage from './pages/HomePage'; // Home page
import AboutPage from './pages/AboutPage'; // About page
import ServicesPage from './pages/ServicesPage'; // Services page

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Apply static light theme */}
      <CssBaseline /> {/* Normalize CSS styles */}
      <Navbar /> {/* Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
