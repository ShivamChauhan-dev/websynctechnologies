import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: 'url(/hero-bg.jpg)', // Replace with your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Welcome to WebSync Technologies
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
                We build powerful websites to grow your business.
            </Typography>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#1976D2',
                    padding: '10px 20px',
                    '&:hover': { backgroundColor: '#1565C0' },
                }}
            >
                Get Started
            </Button>
        </Box>
    );
};

export default HeroSection;
