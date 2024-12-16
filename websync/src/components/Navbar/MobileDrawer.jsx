import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import menuLinks from '../data/menuLinks'; // Import shared menu data

const MobileDrawer = ({ open, toggleDrawer }) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={toggleDrawer}
    sx={{
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 240,
        backgroundColor: '#FFFFFF', // Static background color
        color: '#000000', // Static text color
      },
    }}
  >
    {/* Logo */}
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center', padding: '20px 0' }}>
      <img
        src="/logo1.png"
        alt="WebSync Technologies Logo"
        style={{ height: '50px', margin: '0 auto', display: 'block' }}
      />
    </Box>

    <Divider />


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
            '&:hover': {
              backgroundColor: '#E3F2FD', // Hover color
              color: '#1976D2', // Hover text color
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
              fontFamily: 'Questrial, sans-serif', // Use consistent font
            }}
          />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default MobileDrawer;
