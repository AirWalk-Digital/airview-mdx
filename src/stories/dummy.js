import Box from '@mui/material/Box';

const Dummy = ({ children, key = 0, sx = {}, ...props }) => {
  return (
    <Box key={key} sx={sx}>{children}</Box>
  )
};

export { Dummy };