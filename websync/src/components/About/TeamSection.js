import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const TeamSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mb: 6,
        width: '100%',
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
        {[1, 2, 3].map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={`/team-member-${member}.jpg`} // Replace with actual team member image paths
                alt={`Team Member ${member}`}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  Team Member {member}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.9rem',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar risus sed.
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
