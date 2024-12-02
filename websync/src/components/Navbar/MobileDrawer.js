import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, useTheme, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import menuLinks from '../data/menuLinks'; // Import shared menu data

const MobileDrawer = ({ open, toggleDrawer, isDarkMode }) => {
    const theme = useTheme(); // Access the theme

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    backgroundColor: theme.palette.background.default, // Dynamic background
                    color: theme.palette.text.primary, // Dynamic text color
                },
            }}
        >
            {/* Logo Section */}
            <Box
                onClick={toggleDrawer}
                sx={{
                    textAlign: 'center',
                    padding: '20px 0',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={isDarkMode ? '/logo2.png' : '/logo1.png'} // Dynamic logo based on theme
                    alt="WebSync Technologies Logo"
                    style={{ height: '50px', margin: '0 auto', display: 'block' }}
                />
            </Box>

            {/* Divider */}
            <Divider
                sx={{
                    backgroundColor: theme.palette.divider, // Use theme's divider color
                }}
            />

            {/* Menu Links */}
            <List>
                {menuLinks.map((link) => (
                    <ListItem
                        button
                        key={link.name}
                        component={Link}
                        to={link.path}
                        sx={{
                            justifyContent: 'center',
                            color: theme.palette.text.primary, // Dynamic text color
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main, // Hover with primary color
                                color: theme.palette.background.default, // Text on hover
                            },
                            '&.Mui-selected': {
                                backgroundColor: theme.palette.primary.light, // Selected link background
                                color: theme.palette.primary.contrastText, // Selected link text color
                            },
                        }}
                        onClick={toggleDrawer} // Close the drawer on link click
                    >
                        <ListItemText
                            primary={link.name}
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                fontFamily: theme.typography.fontFamily, // Use theme font
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default MobileDrawer;
