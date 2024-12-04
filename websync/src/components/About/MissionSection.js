import React from 'react';
import { Box, Typography } from '@mui/material';
import { Fade } from '@mui/material'; // For animation

const MissionSection = () => {
  return (
    <Fade in timeout={1000}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontFamily: '"Questrial", sans-serif',
            mb: 2,
          }}
        >
          Our Mission & Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            fontWeight: 300,
          }}
        >
          At WebSync Technologies, we aim to transform the digital landscape by delivering creative, high-quality, and
          result-oriented solutions. Our vision is to become the go-to partner for businesses seeking unparalleled digital
          growth.
        </Typography>
      </Box>
    </Fade>
  );
};

export default MissionSection;
