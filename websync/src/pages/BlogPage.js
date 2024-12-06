import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogs = [
    {
        title: 'How to Build a Successful Website in 2023',
        description: 'Learn the latest trends and tips for building a website that stands out.',
        image: '/images/blog1.jpg', // Replace with your image path
        date: 'December 6, 2023',
    },
    {
        title: 'The Power of SEO for Your Business',
        description: 'Discover how SEO can help your website rank higher and attract more traffic.',
        image: '/images/blog2.jpg',
        date: 'November 20, 2023',
    },
    {
        title: 'Choosing the Right Tech Stack for Your Project',
        description: 'Understand the importance of selecting the right technologies for your website.',
        image: '/images/blog3.jpg',
        date: 'November 10, 2023',
    },
];

const BlogPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #06153C,#06153C,#1980F6)', // Gradient background
                color: '#FFFFFF',
                fontFamily: 'Questrial',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '100px',
            }}
        >
            {/* Page Heading */}
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    fontFamily: '"Questrial", sans-serif',
                    // textTransform: 'uppercase',
                    mb: 2,
                    background: 'linear-gradient(to right, #1980F6, #05E6C6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Our Blog
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    fontSize: '1.2rem',
                    maxWidth: '700px',
                    mx: 'auto',
                    fontFamily: '"Questrial", sans-serif',
                }}
            >
                Stay updated with the latest trends, tips, and insights in web development, design, and technology.
            </Typography>

            {/* Blog Cards */}
            <Grid container spacing={4}>
                {blogs.map((blog, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                backgroundColor: '#fff',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                                borderRadius: '12px',
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
                                image={blog.image}
                                alt={blog.title}
                                sx={{ borderRadius: '12px 12px 0 0' }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontFamily: '"Questrial", sans-serif',
                                        mb: 1,
                                    }}
                                >
                                    {blog.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#757575',
                                        fontSize: '0.9rem',
                                        mb: 2,
                                    }}
                                >
                                    {blog.date}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        color: '#555',
                                    }}
                                >
                                    {blog.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1980F6',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        padding: '10px 20px',
                                        '&:hover': {
                                            backgroundColor: '#1565C0',
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BlogPage;
