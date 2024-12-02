import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default, // Dynamic background
        color: theme.palette.text.primary, // Dynamic text color
        padding: '20px',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1">
        At WebSync Technologies, we aim to provide exceptional solutions to help your business grow.
      </Typography>
    </Box>
  );
};

export default AboutPage;
