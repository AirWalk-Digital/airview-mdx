import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { getContrastYIQ } from './utils/colors.js';

const FontBox = styled(Box)(({ theme, size }) => {
  let fontSize = '1.5rem'; // p
  let margin = '0.5%';

  switch (size) {
    case 'xxlarge':
      fontSize = '2.5rem';
      break;
    case 'xlarge':
      fontSize = '2.2rem';
      margin = '2%';
      break;
    case 'large':
      fontSize = '2rem';
      margin = '1.5%';
      break;
  }

  return {
    '& > *': {
      fontSize: fontSize,
      marginTop: margin,
      marginBottom: margin,
    },
  };
});

const Font = ({ children, size = 'medium', color = 'text.main', sx }) => {
  const theme = useTheme();

  return (
    <FontBox size={size} sx={sx}>
      {children && children}
    </FontBox>
  );
};

export { Font };
