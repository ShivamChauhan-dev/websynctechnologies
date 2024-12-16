import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import './HeroSection.css';
import { useGetStartedContext } from '../../context/GetStartedContext'; // Import the context

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
  const { openModal } = useGetStartedContext(); // Get the openModal function from context

  const handleRequestQuote = () => {
    console.log('Request a Quote button clicked'); // Debugging
    openModal('Quote');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        backgroundImage: 'url(/hero-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        paddingLeft: { xs: '20px', md: '100px' },
        paddingRight: { xs: '20px', md: '100px' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-in-out`,
          maxWidth: '600px',
          width: { xs: '100%', md: 'auto' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            letterSpacing: '2px',
            fontWeight: 300,
            textTransform: 'uppercase',
            fontFamily: (theme) => theme.typography.technoCharm.fontFamily,
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: { xs: '2rem', md: '5rem' },
            lineHeight: { xs: '1.2', md: '1' },
          }}
        >
          <Box
            component="span"
            sx={{
              background: '#ffffff',
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
              background: 'linear-gradient(to right, #1980F6, #05E6C6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            TECHNOLOGIES
          </Box>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: '#add8e6',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontFamily: '"Questrial", sans-serif',
          }}
        >
          We Grow Brands Online
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: '#add8e6',
            mb: 4,
            fontSize: { xs: '0.8rem', md: '1rem' },
            fontWeight: 300,
            fontFamily: '"Questrial", sans-serif',
          }}
        >
          Custom Websites, Branding & Digital Marketing
        </Typography>

        {/* Request a Quote Button */}
        <button
          className="btn"
          style={{ fontSize: '1rem', padding: '10px 20px' }}
          onClick={handleRequestQuote} // Open the modal on click
        >
          REQUEST A QUOTE
        </button>
      </Box>
    </Box>
  );
};

export default HeroSection;
