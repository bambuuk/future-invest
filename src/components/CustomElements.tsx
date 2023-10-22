import { styled, Box } from '@mui/material';

export const CustomContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  height: '100%',
  padding: '18px 15px'
}));