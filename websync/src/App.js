import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme'; // Import themes
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar component
import HomePage from './pages/HomePage'; // Home page
import AboutPage from './pages/AboutPage'; // About page
import ServicesPage from './pages/ServicesPage'; // Services page

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme mode

  // Function to toggle between themes
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    // Apply dynamic theme based on state
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Normalize CSS styles */}

        {/* Pass toggleTheme and isDarkMode to Navbar */}
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
   
    </ThemeProvider>
  );
}

export default App;
