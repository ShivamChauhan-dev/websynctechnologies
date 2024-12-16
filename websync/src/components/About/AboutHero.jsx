import React from 'react';
import { Box, Typography } from '@mui/material';
import { Fade } from '@mui/material'; // For animation

const AboutHero = () => {
  return (
    <Fade in timeout={1000}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontFamily: '"Questrial", sans-serif',
            // textTransform: 'uppercase',
            mb: 2,
            background: 'linear-gradient(to right, #1980F6, #05E6C6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 300,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          WebSync Technologies is a leading provider of innovative web design, branding, and digital marketing solutions.
          Our mission is to empower businesses to grow online.
        </Typography>
      </Box>
    </Fade>
  );
};

export default AboutHero;
