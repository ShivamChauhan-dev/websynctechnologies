import React from 'react';
import { Drawer, useTheme } from '@mui/material';
import ProfileLinks from './ProfileLinks';

const ProfileDrawer = ({ open, toggleDrawer }) => {
    const theme = useTheme(); // Access the current theme

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    backgroundColor: theme.palette.background.default, // Theme background color
                    color: theme.palette.text.primary, // Theme text color
                    borderRadius: '8px', // Optional for softer drawer edges
                    boxShadow: theme.shadows[5], // Consistent with theme shadows
                },
            }}
        >
            <ProfileLinks
                sx={{
                    fontFamily: theme.typography.fontFamily, // Use theme typography
                    color: theme.palette.text.primary, // Theme text color
                }}
            />
        </Drawer>
    );
};

export default ProfileDrawer;
