import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const features = [
    { title: 'Web Development', description: 'Custom websites tailored to your business.' },
    { title: 'E-commerce Solutions', description: 'Scalable online stores for all your needs.' },
    { title: 'SEO Optimization', description: 'Boost your online visibility and traffic.' },
];

const FeaturesSection = () => {
    return (
        <Box sx={{ padding: '50px 20px', backgroundColor: '#F5F5F5' }}>
            <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                Our Services
            </Typography>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2">{feature.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
