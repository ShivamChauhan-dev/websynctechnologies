import React from 'react';
import { Box } from '@mui/material';
import AboutHero from '../components/About/AboutHero';
import MissionSection from '../components/About/MissionSection';
import TeamSection from '../components/About/TeamSection';

const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #06153C,#06153C,#1980F6)', // Gradient background
        color: '#FFFFFF',
        fontFamily:'Questrial',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:'100px',
      }}
    >
      {/* Hero Section */}
      <AboutHero />

      {/* Mission Section */}
      <MissionSection />

      {/* Team Section */}
      <TeamSection />
    </Box>
  );
};

export default AboutPage;
