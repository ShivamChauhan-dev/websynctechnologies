import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #06153c, #06153c)',
        padding: '50px 20px',
        minHeight: '100vh',
        color: '#000',
        paddingTop:'100px'
      }}
    >
      {/* Main Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Section: Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: '"Questrial", sans-serif',
              }}
            >
              Get In Touch.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 4,
                fontFamily: '"Questrial", sans-serif',
              }}
            >
              Please fill the form and we will guide you to the best solution.
              Our experts will get in touch soon.
            </Typography>

            {/* Form */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name*"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ background: '#f9f9f9' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name*"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ background: '#f9f9f9' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="*Phone"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ background: '#f9f9f9' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="*Email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ background: '#f9f9f9' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Notes / Project brief"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ background: '#f9f9f9' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mb: 2,
                    fontFamily: '"Questrial", sans-serif',
                  }}
                >
                  Note: Your information is secured with us! Your details will
                  never be shared.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: '#1980F6',
                    color: '#fff',
                    padding: '10px 20px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    '&:hover': {
                      background: '#1565C0',
                    },
                  }}
                >
                  Contact Us Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Section: Contact Details */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              padding: '30px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: '"Questrial", sans-serif',
              }}
            >
              Hate filling out forms?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 4,
                fontFamily: '"Questrial", sans-serif',
              }}
            >
              Let’s start speaking with our expert.
            </Typography>

            {/* Contact Details */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: '"Questrial", sans-serif',
                  mb: 1,
                }}
              >
                <PhoneIcon sx={{ mr: 1, color: '#1980F6' }} />
                <strong>Give a ring:</strong> +91 9650973902
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: '"Questrial", sans-serif',
                  mb: 1,
                }}
              >
                <EmailIcon sx={{ mr: 1, color: '#1980F6' }} />
                <strong>New Business Inquiries :</strong>{' '}
                <a
                  href="mailto:info@bitstreaks.com"
                  style={{ color: '#1980F6', textDecoration: 'none' }}
                >
                  Websynctechnology@gmail.com
                </a>
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: '"Questrial", sans-serif',
                  mb: 1,
                }}
              >
              <LocationOnIcon sx={{ mr: 1, color: '#1980F6' }} />
                <Link to='https://websynctechnologies.in/' > <strong>Corp. Office  :</strong>  Websynctechnologies.in </Link>
              </Typography>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
