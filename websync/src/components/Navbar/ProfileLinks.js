import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Box } from '@mui/material';

const ProfileLinks = () => (
    <Box sx={{ width: 240, padding: 2 }}>
        <Typography variant="h6" sx={{ my: 2 }}>Registered Users</Typography>
        <List>
            <ListItem button>
                <ListItemText primary="Sign In" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Create an Account" />
            </ListItem>
        </List>
        <Divider />
        {/* <Typography variant="h6" sx={{ my: 2 }}>Inbox Links</Typography>
        <List>
            <ListItem button>
                <ListItemText primary="Sign in to Office 365 Email" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sign in to GoDaddy Webmail" />
            </ListItem>
        </List> */}
    </Box>
);

export default ProfileLinks;
