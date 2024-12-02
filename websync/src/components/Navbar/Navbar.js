import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, useTheme, useMediaQuery, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LightModeIcon from '@mui/icons-material/LightMode'; // Light mode icon
// import DarkModeIcon from '@mui/icons-material/DarkMode'; // Dark mode icon
import MobileDrawer from './MobileDrawer';
import ProfileDrawer from './ProfileDrawer';
import NavLinks from './NavLinks';

function Navbar({ toggleTheme, isDarkMode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

    const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
    const toggleProfileDrawer = () => setProfileDrawerOpen(!profileDrawerOpen);

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: isDarkMode
                        ? theme.palette.background.default
                        : theme.palette.background.paper,
                    color: isDarkMode
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary,
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    {/* Mobile Menu Icon */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={toggleMobileNav}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <img
                            src={isDarkMode ? '/logo2.png' : '/logo1.png'}
                            alt="WebSync Technologies Logo"
                            style={{ height: '50px' }}
                        />
                    </Box>

                    {/* Desktop Navigation Links */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '20px',
                                flexGrow: 10,
                            }}
                        >
                            <NavLinks />
                        </Box>
                    )}

                    {/* Dark/Light Mode Toggle */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            sx={{
                                width: 62,
                                height: 34,
                                padding: 0,
                                borderRadius: 17, // Rounded edges for the track
                                '& .MuiSwitch-switchBase': {
                                    padding: '4px',
                                    transform: 'translateX(0px)', // Initial thumb position
                                    '&.Mui-checked': {
                                        transform: 'translateX(27px)', // Position when checked
                                        '& .MuiSwitch-thumb': {
                                            backgroundColor: '#06153C', // Thumb color in dark mode
                                            border: '2px solid #ffff', // Border around the thumb
                                        },
                                        '& + .MuiSwitch-track': {
                                            backgroundColor: '#06153C', // Track color in dark mode
                                            opacity: 1,
                                        },
                                    },
                                },
                                '& .MuiSwitch-thumb': {
                                    width: 26,
                                    height: 26,
                                    backgroundColor: isDarkMode ? '#FFFFFF' : '#FFFFFF', // Thumb color dynamically
                                    border: `2px solid ${isDarkMode ? '#05E6C6' : '#1980F6'}`, // Border dynamically
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for the thumb
                                    '&:before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '16px',
                                        height: '16px',
                                        backgroundImage: `url(${isDarkMode
                                            ? '/icons/moon.svg' // Path to moon icon
                                            : '/icons/brightness.svg' // Path to sun icon
                                            })`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'contain', // Ensures the image fits within the thumb
                                        backgroundPosition: 'center',
                                    },
                                },
                                '& .MuiSwitch-track': {
                                    borderRadius: 17,
                                    backgroundColor: isDarkMode ? '#1980F6' : '#E3F2FD', // Track color dynamically
                                    opacity: 1,
                                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)', // Subtle inner shadow for the track
                                },
                            }}
                        />
                    </Box>


                    {/* Profile Icon
                    <IconButton
                        color="inherit"
                        aria-label="open profile"
                        edge="end"
                        onClick={toggleProfileDrawer}
                    >
                        <PersonOutlineIcon />
                    </IconButton> */}

                    
                </Toolbar>
            </AppBar>

            {/* Mobile Navigation Drawer */}
            <MobileDrawer open={mobileNavOpen} toggleDrawer={toggleMobileNav} />

            {/* Profile Drawer */}
            <ProfileDrawer open={profileDrawerOpen} toggleDrawer={toggleProfileDrawer} />
        </>
    );
}

export default Navbar;
