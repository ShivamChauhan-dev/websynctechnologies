import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme'; // Only light theme
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar component
import HomePage from './pages/HomePage'; // Home page
import AboutPage from './pages/AboutPage'; // About page
import ServicesPage from './pages/ServicesPage'; // Services page
import './App.css'; // Add CSS styles for preloader
import Footer from './pages/Footer';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
// import OurServices from './components/Home/OurServices';
import OurWorkPage from './pages/OurWorkPage';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Preloader state
  const [fadeOut, setFadeOut] = useState(false); // Fade-out animation state

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => setIsLoading(false), 1000); // Wait for fade-out to complete
    }, 1000); // 2 seconds loading delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <ThemeProvider theme={theme}> {/* Apply static light theme */}
      <CssBaseline /> {/* Normalize CSS styles */}
      {isLoading ? (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
          <img src="/logo1.png" alt="Loading..." className="preloader-image" />
        </div>
      ) : (
        <>
          <Navbar /> {/* Navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
          </Routes>
          <Footer/>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
