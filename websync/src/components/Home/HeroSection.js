import React from 'react'; 
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';

// Animation Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align content to the left
        textAlign: 'left',
        backgroundImage: 'url(/hero-image.jpg)', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        paddingLeft: { xs: '20px', md: '100px' }, // Adjust padding for mobile and larger screens
        paddingRight: { xs: '20px', md: '100px' }, // Add padding on the right for smaller screens
        position: 'relative',
        
      }}
    >
      {/* Top Content */}
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-in-out`,
          maxWidth: '600px', // Limit content width
          width: { xs: '100%', md: 'auto' }, // Full width on mobile, auto on larger screens
        }}
      >
        {/* Gradient Text */}
        <Typography
          variant="h1"
          sx={{
            letterSpacing: '2px',
            fontWeight: 300,
            textTransform: 'uppercase',
            // mb:1,
            fontFamily: (theme) => theme.typography.technoCharm.fontFamily, // Apply the font
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: { xs: '2rem', md: '5rem' }, // Smaller font size for mobile
            lineHeight: { xs: '1.2', md: '1' }, // Adjust line height for readability
          }}
        >
          <Box
            component="span"
            sx={{
              background: '#ffffff', // Gradient for WEBSYNC
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mr: 1, 
            }}
          >
            WEBSYNC
          </Box>
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(to right, #1980F6, #05E6C6)', // Gradient for TECHNOLOGIES
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            TECHNOLOGIES
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h2"
          sx={{
            color: '#add8e6',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.5rem' }, // Adjust font size for smaller screens
            fontFamily: '"Questrial", sans-serif',
            // mb: 1,
          }}
        >
          We Grow Brands Online
        </Typography>

        {/* Description */}
        <Typography
          variant="h6"
          sx={{
            color: '#add8e6',
            mb: 4,
            fontSize: { xs: '0.8rem', md: '1rem' }, // Adjust font size for smaller screens
            fontWeight: 300,
            fontFamily: '"Questrial", sans-serif',
          }}
        >
          Custom Websites, Branding & Digital Marketing
        </Typography>

        {/* Button */}
        <Link to='/contact'>
        <button className="btn" style={{ fontSize: '1rem', padding: '10px 20px' }}>
          REQUEST A QUOTE 
        </button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
