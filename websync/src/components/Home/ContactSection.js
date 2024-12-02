import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
    return (
        <Box
            sx={{
                padding: '50px 20px',
                backgroundColor: '#06153C',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Contact Us
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
            >
                <TextField label="Name" variant="outlined" fullWidth required />
                <TextField label="Email" variant="outlined" fullWidth required />
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#1976D2',
                        '&:hover': { backgroundColor: '#1565C0' },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default ContactSection;
