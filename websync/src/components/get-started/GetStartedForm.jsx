import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { useGetStarted } from '../../hooks/useGetStarted';

export function GetStartedForm({ selectedPlan, onSuccess }) {
  const { submitGetStarted, isLoading } = useGetStarted();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: selectedPlan || 'Professional',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitGetStarted(formData);
    onSuccess();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        padding: 4,
        backgroundColor: '#fff',
        borderRadius: 2,
        // boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h2" fontWeight="bold" textAlign="center">
        Get Started with TechServe
      </Typography>

      <TextField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />

      <TextField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />

      <TextField
        label="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />

      <TextField
        label="Selected Plan"
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        select
        fullWidth
        variant="outlined"
        SelectProps={{
          MenuProps: {
            disablePortal: true,
          },
        }}
      >
        <MenuItem value="Starter">Starter</MenuItem>
        <MenuItem value="Professional">Professional</MenuItem>
        <MenuItem value="Enterprise">Enterprise</MenuItem>
      </TextField>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {isLoading ? 'Processing...' : 'Submit'}
      </Button>
    </Box>
  );
}
