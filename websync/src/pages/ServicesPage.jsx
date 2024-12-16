import * as React from 'react';
import { Box, Typography, Button, Grid, Container, TextField } from '@mui/material';

function Services() {
  return (
    <Box sx={{paddingTop: '100px'}}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', py: 5, background: 'linear-gradient(90deg, #4f3cc9, #8247e5)', color: '#fff' }}>
        <Typography variant="h3" fontWeight="bold">
          From Concept To Reality
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Fusing Creativity With Marketing & Technology To Drive Business Growth
        </Typography>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: '#00b8d4', '&:hover': { backgroundColor: '#0097a7' } }}>
          SPEAK WITH OUR EXPERTS
        </Button>
      </Box>

      {/* Section-1 */}
      <Container sx={{ py: 5 }}>
        {contentData.map((item, index) => (
          <Grid
            container
            spacing={3}
            key={index}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <img src={item.image} alt="Service" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="primary">
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: '#555' }}>
                {item.description}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#00b8d4',
                    '&:hover': { backgroundColor: '#0097a7' },
                  }}
                >
                  {item.buttonText}
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>

      {/* Signup Section */}
      <Box sx={{ textAlign: 'center', py: 5, background: 'linear-gradient(90deg, #4f3cc9, #8247e5)', color: '#fff' }}>
        <Typography variant="h4" fontWeight="bold">
          Sign Up To Get The Latest Digital Trends
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              mr: 2,
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: 1,
            }}
          />
          <Button variant="contained" sx={{ backgroundColor: '#00b8d4', '&:hover': { backgroundColor: '#0097a7' } }}>
            SIGN UP
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const contentData = [
  {
    title: 'Digital Strategies & Branding',
    description:
      'Integrating brand strategy with digital initiatives to improve customer experience online & offline.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Branding Services',
  },
  {
    title: 'Web Design & Development',
    description:
      'Custom web & app development with strategic insights to generate greater brand engagement, higher conversions & measurable results.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Web Design Services',
  },
  {
    title: 'Results-Driven Digital Marketing',
    description:
      'Multichannel marketing approaches focused on increasing conversions, encouraging repeat traffic and heightening visibility.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Marketing Services',
  },
  {
    title: 'Custom Development',
    description:
      'An agile approach to building scalable custom software and integrating the latest technologies with a dynamic user experience.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Development Services',
  },
  {
    title: 'Full-Service eCommerce Development',
    description:
      'Custom eCommerce sites developed for superior performance, greater conversions and engagement.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore eCommerce Services',
  },
  {
    title: 'High-Performance Shopify Websites',
    description:
      'Custom Shopify eCommerce sites designed, developed and optimized for superior performance, better rankings and higher conversion.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Shopify Services',
  },
  {
    title: 'Enterprise Resource Planning',
    description:
      'Customizing & integrating enterprise resource planning solutions for deeper insights & better decision-making.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore ERP Services',
  },
  {
    title: 'B2B Lead Generation',
    description:
      'Harnessing the power of data and multichannel strategy to optimize sales pipeline and funnel in high-quality leads.',
    image: '/pexels-fauxels-3184360.jpg',
    buttonText: 'Explore Lead Generation',
  },
];

export default Services;
