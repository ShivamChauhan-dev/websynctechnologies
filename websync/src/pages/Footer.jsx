import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #06153C, #06153C)',
        color: '#fff',
        py: 6,
        textAlign: 'center', // Center alignment
      }}
    >
      {/* Footer Content */}
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontFamily: '"Questrial", sans-serif',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              fontFamily: '"Questrial", sans-serif',
              mb: 2,
            }}
          >
            WebSync Technologies is a leading provider of web design, development, and branding solutions. We are committed to delivering exceptional services to help businesses thrive online.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontFamily: '"Questrial", sans-serif',
            }}
          >
            Quick Links
          </Typography>
          <Box>

            <Link
              href={`/`}
              underline="none"
              color="inherit"
              sx={{
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#05E6C6',
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.9rem',
                  mb: 1,
                  fontFamily: '"Questrial", sans-serif',
                }}
              >
                Home
              </Typography>
            </Link>

            {['About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map(
              (link, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    fontSize: '0.9rem',
                    mb: 1,
                    fontFamily: '"Questrial", sans-serif',
                  }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    underline="none"
                    color="inherit"
                    sx={{
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#05E6C6',
                      },
                    }}
                  >
                    {link}
                  </Link>
                </Typography>
              )
            )}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontFamily: '"Questrial", sans-serif',
            }}
          >
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <EmailOutlined sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontFamily: '"Questrial", sans-serif' }}>
              <Link
                href="mailto:Websynctechnology@gmail.com"
                underline="none"
                color="inherit"
                sx={{ '&:hover': { color: '#05E6C6' } }}
              >
                Websynctechnology@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <PhoneOutlined sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontFamily: '"Questrial", sans-serif' }}>
              <Link
                href="tel:+1234567890"
                underline="none"
                color="inherit"
                sx={{ '&:hover': { color: '#05E6C6' } }}
              >
                +91 9650973902
              </Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <LocationOnOutlined sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Questrial", sans-serif',
              }}
            >
              Websynctechnology.in
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box mt={4}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontFamily: '"Questrial", sans-serif',
            mb: 2,
          }}
        >
          Follow Us
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Link href="https://www.facebook.com" target="_blank" underline="none" color="inherit">
            <Facebook sx={{ fontSize: '2rem', transition: 'color 0.3s', '&:hover': { color: '#3b5998' } }} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" underline="none" color="inherit">
            <Twitter sx={{ fontSize: '2rem', transition: 'color 0.3s', '&:hover': { color: '#1DA1F2' } }} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" underline="none" color="inherit">
            <Instagram sx={{ fontSize: '2rem', transition: 'color 0.3s', '&:hover': { color: '#E1306C' } }} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" underline="none" color="inherit">
            <LinkedIn sx={{ fontSize: '2rem', transition: 'color 0.3s', '&:hover': { color: '#0077B5' } }} />
          </Link>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          pt: 2,
          fontSize: '0.8rem',
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} WebSync Technologies. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
