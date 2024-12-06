import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const works = [
  {
    title: 'E-Commerce Website',
    description: 'A modern and responsive e-commerce platform built for online retailers.',
    image: '/images/work1.jpg', // Replace with actual image path
  },
  {
    title: 'Corporate Website',
    description: 'A sleek and professional website for a multinational corporation.',
    image: '/images/work2.jpg',
  },
  {
    title: 'Mobile Application',
    description: 'An intuitive and user-friendly mobile app for food delivery services.',
    image: '/images/work3.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing a creative individual’s work.',
    image: '/images/work4.jpg',
  },
  {
    title: 'Event Management Website',
    description: 'A vibrant and interactive website for event planning and bookings.',
    image: '/images/work5.jpg',
  },
  {
    title: 'Healthcare Website',
    description: 'A feature-rich healthcare website for patients and professionals.',
    image: '/images/work6.jpg',
  },
];

const OurWorkPage = () => {
  return (
    <Box
      sx={{
        padding: '50px 20px',
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      {/* Page Header */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        Our <span style={{ color: '#1980F6' }}>Work</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          mx: 'auto',
          mb: 6,
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        Explore our portfolio of successful projects. We take pride in delivering creative and functional designs tailored to meet our clients’ needs.
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={4}>
        {works.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={work.image}
                alt={work.title}
                sx={{ borderRadius: '8px 8px 0 0' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontFamily: '"Questrial", sans-serif',
                  }}
                >
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#757575',
                    fontFamily: '"Questrial", sans-serif',
                  }}
                >
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorkPage;
