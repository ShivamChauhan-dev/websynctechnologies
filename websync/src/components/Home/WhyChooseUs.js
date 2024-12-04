import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/icons/technology.svg', // Replace with your actual path
      title: 'New Technology Integrations',
      description:
        'Integrating new technologies into website development is a trend that will continue.',
    },
    {
      icon: '/icons/customized.svg', // Replace with your actual path
      title: '100% Customized Solutions',
      description:
        'We offer our clients a variety of website development services and solutions.',
    },
    {
      icon: '/icons/support.svg', // Replace with your actual path
      title: '24x7 Support',
      description:
        'Our support team offers the most practical solutions to your technical problems.',
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #06153c, #06153c, #06153c)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        Why Choose Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 6,
          fontSize: '1.2rem',
          maxWidth: '800px',
          mx: 'auto',
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        We work with our clients to create websites that are not only aesthetically pleasing but also built on the latest technology and SEO standards.
      </Typography>

      {/* Features Section */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 4,
                background: '#FFFFFF',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                color: '#000',
              }}
            >
              {/* Icon */}
              <Box
                component="img"
                src={feature.icon}
                alt={feature.title}
                sx={{
                  height: '80px',
                  mb: 2,
                  filter: 'invert(25%) sepia(83%) saturate(747%) hue-rotate(350deg) brightness(102%) contrast(102%)', // Optional color
                }}
              />
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontFamily: '"Questrial", sans-serif',
                }}
              >
                {feature.title}
              </Typography>
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.9rem',
                  fontFamily: '"Questrial", sans-serif',
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
