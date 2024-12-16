import { Box, Typography } from '@mui/material'
import React from 'react'

const Branding = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                background: "#000000",
                overflow: 'hidden'
            }}
        >
            <Typography sx={{
                fontSize: '48px',
                textTransform: 'uppercase',
                color: '#ffffff',
                whiteSpace: 'nowrap',
                padding: '0.6rem',
                letterSpacing: '1px',
                animation: `move-rtl 6000ms linear infinite`,
                '@keyframes move-rtl': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            }}
            >
                bhai ka suystme
            </Typography>
            <Typography sx={{
                fontSize: '48px',
                textTransform: 'uppercase',
                color: '#ffffff',
                whiteSpace: 'nowrap',
                padding: '0.6rem',
                letterSpacing: '1px',
                animation: `move-rtl 6000ms linear infinite`,
                '@keyframes move-rtl': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            }}
            >
                bhai ka suystme
            </Typography>
            <Typography sx={{
                fontSize: '48px',
                textTransform: 'uppercase',
                color: '#ffffff',
                whiteSpace: 'nowrap',
                padding: '0.6rem',
                letterSpacing: '1px',
                animation: `move-rtl 6000ms linear infinite`,
                '@keyframes move-rtl': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            }}
            >
                bhai ka suystme
            </Typography>
            <Typography sx={{
                fontSize: '48px',
                textTransform: 'uppercase',
                color: '#ffffff',
                whiteSpace: 'nowrap',
                padding: '0.6rem',
                letterSpacing: '1px',
                animation: `move-rtl 6000ms linear infinite`,
                '@keyframes move-rtl': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            }}
            >
                bhai ka suystme
            </Typography>

            
        </Box>
    )
}

export default Branding