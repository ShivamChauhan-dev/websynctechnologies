import React from 'react';
import { Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import menuLinks from '../data/menuLinks'; // Import shared data file

const NavLinks = () => {
    const theme = useTheme(); // Access the theme dynamically

    return (
        <Box
            sx={{
                display: 'flex',
                gap: '20px', // Spacing between links
                alignItems: 'center', // Vertically aligns the links
                justifyContent: 'center', // Horizontally centers the links
            }}
        >
            {menuLinks.map((link) => (
                <Button
                    key={link.name}
                    component={Link}
                    to={link.path}
                    sx={{
                        color: theme.palette.text.primary, // Dynamic text color
                        fontSize: '16px', // Adjusts font size
                        fontFamily: theme.typography.fontFamily, // Dynamic font family
                        textTransform: 'uppercase', // Consistent text style
                        padding: '8px 15px', // Clickable padding area
                        '&:hover': {
                            color: theme.palette.primary.main, // Hover text color
                            backgroundColor: theme.palette.action.hover, // Hover background
                        },
                    }}
                >
                    {link.name}
                </Button>
            ))}
        </Box>
    );
};

export default NavLinks;
