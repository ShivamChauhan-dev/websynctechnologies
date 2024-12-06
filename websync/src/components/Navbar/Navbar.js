import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileDrawer from './MobileDrawer';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

function Navbar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md')); // Check for mobile view
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // State for mobile drawer
  const [isScrolled, setIsScrolled] = useState(false); // State to handle scroll behavior

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // If scrolled, set true
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? '#FFFFFF' : 'transparent', // Solid on scroll, transparent otherwise
          color: isScrolled ? '#000000' : '#FFFFFF', // Change text color based on scroll
          boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none', // Add shadow when scrolled
          transition: 'background-color 0.3s, box-shadow 0.3s', // Smooth transition for background and shadow
          
        }}
      >
        <Toolbar>
          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleMobileNav}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src={isScrolled ? '/logo1.png' : '/logo2.png'} // Switch logo based on scroll
              alt="WebSync Technologies Logo"
              style={{ height: '50px' }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                flexGrow: 10,
              }}
            >
              <NavLinks isScrolled={isScrolled} />
            </Box>
          )}
          <Link to='/contact'>
        <button className="btn" style={{ fontSize: '1rem', padding: '10px 20px' }}>
          GET QUOTE
        </button>
        </Link>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer open={mobileNavOpen} toggleDrawer={toggleMobileNav} />
    </>
  );
}

export default Navbar;
