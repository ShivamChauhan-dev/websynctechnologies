import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  {
    icon: '/icons/web-design.png', // Replace with your actual path
    title: 'Web Design',
    description: 'Website Design, Corporate Identity Design, Banner & Print Designs.',
  },
  {
    icon: '/icons/development.png', // Replace with your actual path
    title: 'Web Development',
    description: 'Custom Coding and CMS Integration.',
  },
  {
    icon: '/icons/online-shop.png', // Replace with your actual path
    title: 'ECommerce',
    description: 'Sell your products online with ease.',
  },
  {
    icon: '/icons/app-development.png', // Replace with your actual path
    title: 'Mobile Apps',
    description: 'iOS and Android mobile app solutions.',
  },
//   {
//     icon: '/icons/ppc.svg', // Replace with your actual path
//     title: 'Pay Per Click',
//     description: 'Drive traffic and increase leads with PPC campaigns.',
//   },
//   {
//     icon: '/icons/cms.svg', // Replace with your actual path
//     title: 'CMS Development',
//     description: 'WordPress, Shopify, and other CMS solutions.',
//   },
  {
    icon: '/icons/php.png', // Replace with your actual path
    title: 'PHP Development',
    description: 'Fully customized backend solutions.',
  },
  {
    icon: '/icons/seo.png', // Replace with your actual path
    title: 'Search Engine Marketing',
    description: 'Increase visibility with SEM and SEO.',
  },
];

const OurServices = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        // background: 'linear-gradient(180deg, #1980F6,#06153C,#1980F6)',
        background: 'linear-gradient(47deg, #06153C, #1980F6,#06153C, #1980F6,#06153C, #1980F6)',
        color: '#fff',
        textAlign: 'center',
        
      }}
    >
      {/* Heading Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontFamily: '"Questrial", sans-serif',
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            mx: 'auto',
            fontFamily: '"Questrial", sans-serif',
          }}
        >
          Our clients nurture a passion for digital growth, and it shows in their success. Brands that believe in outperforming the market love to associate with us.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: '#fff',
                color: '#000',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                textAlign: 'center',
                padding: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, #1980f6, #05e6c6)', // Change to orange on hover
                  color: '#FFFFFF', // Optional: Change text color on hover
                //   boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)', // Optional: Enhance shadow
                },
              }}
            >
              <Box
                component="img"
                src={service.icon}
                alt={service.title}
                sx={{
                  height: '80px',
                  mb: 2,
                }}
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
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.9rem',
                    fontFamily: '"Questrial", sans-serif',
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
