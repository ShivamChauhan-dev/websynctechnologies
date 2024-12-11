import React from 'react';
import { Box, Typography } from '@mui/material';
import './TechStack.css'

const TechStack = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(145deg, #06153C, #1980F6,#06153C, #1980F6,#06153C, #1980F6)',
        // background: 'linear-gradient(360deg , #1980F6 , #06153C)',
        textAlign: 'center',
        color: '#ffffff',
        overflow: 'hidden', 
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: '"Questrial", sans-serif',
          mb: 2,
        }}
      >
        Our <span style={{ color: '#1980F6' }}>Tech Stack</span> is{' '}
        <span style={{ color: '#05E6C6' }}>Vast</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          mx: 'auto',
          mb: 6,
          fontFamily: '"Questrial", sans-serif',
        }}
      >
        We utilize a wide range of technologies to ensure our clients receive
        modern, scalable, and robust solutions.
      </Typography>

      <Box
      // className = 'icons-move'
        sx={{
          mb: 6,
          overflow: 'hidden',
          paddingTop: '10px',
          display:'flex',
          justifyContent:'flex-start' 
        }}
      >
        <img className= 'icons-move' src='/1-4.png' alt='' />
        <img className= 'icons-move' src='/2-2.png' alt='' />
      </Box>
    </Box>
  );
};

export default TechStack;




// import React from 'react';
// import { Box, Typography } from '@mui/material';

// // Tech stack arrays for each row
// const techStackRows1 = [
//   '/icons/shopify.svg',
//   '/icons/python.svg',
//   '/icons/flutter.svg',
//   '/icons/codeigniter.svg',
//   '/icons/django.svg',
//   '/icons/aws.svg',
//   '/icons/magento.svg',
//   '/icons/mysql.svg',
//   '/icons/android.svg',
// ];
// const techStackRows2 = [
//   '/icons/vite.svg',
//   '/icons/js.svg',
//   '/icons/github.svg',
//   '/icons/postgresql.svg',
//   '/icons/cplusplus.svg',
//   '/icons/html5.svg',
//   '/icons/mongo.svg',
//   '/icons/react.svg',
// ];
// const techStackRows3 = [
//   '/icons/java.svg',
//   '/icons/nextjs.svg',
//   '/icons/bluehost.svg',
//   '/icons/nodejs.svg',
//   '/icons/ios.svg',
//   '/icons/digitalocean.svg',
//   '/icons/vercel.svg',
//   '/icons/godaddy.svg',
//   '/icons/vue.svg',
// ];

// const TechStack = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         background: 'linear-gradient(145deg, #06153C, #1980F6,#06153C, #1980F6,#06153C, #1980F6)',
//         // background: 'linear-gradient(360deg , #1980F6 , #06153C)',
//         textAlign: 'center',
//         color: '#ffffff',
//         overflow: 'auto', // Ensure no overflow for animations
//       }}
//     >
//       {/* Section Heading */}
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 'bold',
//           fontFamily: '"Questrial", sans-serif',
//           mb: 2,
//         }}
//       >
//         Our <span style={{ color: '#1980F6' }}>Tech Stack</span> is{' '}
//         <span style={{ color: '#05E6C6' }}>Vast</span>
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           fontSize: '1.2rem',
//           maxWidth: '700px',
//           mx: 'auto',
//           mb: 6,
//           fontFamily: '"Questrial", sans-serif',
//         }}
//       >
//         We utilize a wide range of technologies to ensure our clients receive
//         modern, scalable, and robust solutions.
//       </Typography>

//       {/* Row 1 */}
//       <Box
//         sx={{
//           mb: 6,
//           overflow: 'hidden',
//           paddingTop: '10px'
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-start',
//             gap: 4,
//             animation: `scrollLeft1 6000ms linear infinite`,
//             '@keyframes scrollLeft1': {
//               '0%': { transform: 'translateX(0)' },
//               '100%': { transform: 'translateX(-100%)' },
//             },
//           }}
//         >
//           {techStackRows1.map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: '80px',
//                 width: '80px',
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.2)',
//                   boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
//                 },
//               }}
//             >
//               <img src={logo} alt="Tech Logo" style={{ height: '50%', width: '50%' }} />
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* Row 2 */}
//       <Box
//         sx={{
//           mb: 6,
//           overflow: 'hidden',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-start',
//             gap: 6,
//             overflow:'hidden',
//             animation: `scrollLeft2 6000ms linear infinite`,
//             '@keyframes scrollLeft2': {
//               '0%': { transform: 'translateX(0)' },
//               '100%': { transform: 'translateX(-100%)' },
//             },
//           }}
//         >
//           {techStackRows2.map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: '80px',
//                 width: '80px',
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.2)',
//                   boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
//                 },
//               }}
//             >
//               <img src={logo} alt="Tech Logo" style={{ height: '50%', width: '50%' }} />
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* Row 3 */}
//       <Box
//         sx={{
//           mb: 6,
//           overflow: 'hidden',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-start',
//             gap: 5,
//             animation: `scrollLeft3 6000ms linear infinite`,
//             '@keyframes scrollLeft3': {
//               '0%': { transform: 'translateX(0)' },
//               '100%': { transform: 'translateX(-100%)' },
//             },
//           }}
//         >
//           {techStackRows3.map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: '80px',
//                 width: '80px',
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.2)',
//                   boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
//                 },
//               }}
//             >
//               <img src={logo} alt="Tech Logo" style={{ height: '50%', width: '50%' }} />
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default TechStack;
