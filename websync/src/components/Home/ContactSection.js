import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSection = () => {
    return (
        <Box
            sx={{
                padding: '100px 20px',
                // background: 'linear-gradient(360deg , #06153C, #1980F6 )',
                background: 'linear-gradient(47deg, #06153C, #1980F6,#06153C, #1980F6,#06153C, #1980F6)',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <Typography
                variant="h3"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    fontFamily: '"Questrial", sans-serif',
                }}
            >
                <span style={{ color: '#06153C' }}>Get</span> in <span style={{ color: '#05E6C6' }}>Touch</span>
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mb: 4,
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontFamily: '"Questrial", sans-serif',
                    fontSize: '1.2rem',
                    paddingBottom: '20px'

                }}
            >
                Have questions or want to work with us? Fill out the form below, and we’ll get back to you shortly.
            </Typography>

            {/* Contact Form */}
            <Box
                component="form"
                sx={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    color: '#000',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Grid container spacing={3}>
                    {/* Name Fields */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="filled"
                            fullWidth
                            required
                            // sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="filled"
                            fullWidth
                            required
                            // sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            required
                            // sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="filled"
                            fullWidth
                            multiline
                            rows={4}
                            required
                            // sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                background: 'linear-gradient(140deg, #06153C,#1980F6,#06153C)',
                                color: '#fff',
                                padding: '10px 20px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#1565C0' },
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactSection;
