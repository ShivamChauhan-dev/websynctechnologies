import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const portfolioItems = [
    { image: '/project1.jpg', title: 'Project 1', description: 'Description of Project 1' },
    { image: '/project2.jpg', title: 'Project 2', description: 'Description of Project 2' },
    { image: '/project3.jpg', title: 'Project 3', description: 'Description of Project 3' },
];

const PortfolioSection = () => {
    return (
        <Box sx={{ padding: '50px 20px' }}>
            <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                Our Portfolio
            </Typography>
            <Grid container spacing={4}>
                {portfolioItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2">{item.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PortfolioSection;
