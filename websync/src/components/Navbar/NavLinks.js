import React from 'react';
import { Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuLinks from '../data/menuLinks'; // Import shared menu data

const NavLinks = ({ isScrolled }) => {
  const location = useLocation(); // Get current route location

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px', // Controls spacing between links
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
            color: isScrolled
              ? '#000000' // Black when scrolled
              : location.pathname === link.path
              ? '#1980f6' // Active link color
              : '#FFFFFF', // Default color
            fontSize: '16px', // Adjust font size
            fontFamily: 'Questrial', // Use consistent font
            textTransform: 'uppercase', // Makes text consistent
            padding: '8px 15px', // Adds consistent padding for click area
            position: 'relative', // Enable positioning for underline
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: location.pathname === link.path ? '100%' : '0', // Full width for active link
              height: '2px',
              backgroundColor: '#1980f6', // Underline color
              transition: 'width 0.3s ease', // Smooth transition
            },
            '&:hover:after': {
              width: '100%', // Expand underline on hover
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
