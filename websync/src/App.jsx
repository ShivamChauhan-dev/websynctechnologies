import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar component
import Footer from './pages/Footer'; // Footer component
import HomePage from './pages/HomePage'; // Home page
import AboutPage from './pages/AboutPage'; // About page
import ServicesPage from './pages/ServicesPage'; // Services page
import ContactPage from './pages/ContactPage'; // Contact page
import BlogPage from './pages/BlogPage'; // Blog page
import OurWorkPage from './pages/OurWorkPage'; // Our Work page
import { GetStartedModal } from './components/get-started/GetStartedModal';
import './App.css'; // Preloader styles

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
          <img src="/logo1.png" alt="Loading..." className="preloader-image" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
          </Routes>
          <Footer />
          <GetStartedModal />
        </>
      )}
    </>
  );
}

export default App;
