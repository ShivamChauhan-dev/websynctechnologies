import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const teamMembers = [
  {
    id: 1,
    name: 'Shivam Chauhan',
    designation: 'CEO AND FOUNDER',
    image: '/team-member-3.png',
  },
  {
    id: 3,
    name: 'Avdhesh Giri',
    designation: 'Data Scientist',
    image: '/team-member-1.png',
  },
  {
    id: 2,
    name: 'Vineet Beniwal',
    designation: 'Frontend Developer',
    image: '/team-member-2.png',
  },

  {
    id: 4,
    name: 'Himanshu Sharma',
    designation: 'CMO',
    image: '/team-member-4.png',
  },
  {
    id: 5,
    name: 'Nikhil Chauhan',
    designation: 'HEAD OF DESIGN ',
    image: '/team-member-5.png',
  },
  {
    id: 6,
    name: 'Piyush cittoria',
    designation: 'Software Engineer',
    image: '/team-member-6.png',
  },


];

const TeamSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 2,
        // background: 'linear-gradient(135deg, #0c1b53, #1c478d)',
        color: '#fff',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: '"Questrial", sans-serif',
          mb: 4,
        }}
      >
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.id}>
            <Card
              sx={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
                sx={{
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {member.designation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
