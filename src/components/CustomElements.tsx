import { styled, Box, Button } from '@mui/material';

export const CustomContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  padding: '0 15px'
}));

export const Section = styled('section')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const CustomBtn = styled(Button)(({ theme }) => ({
  padding: '24px 40px 22px 40px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0,
  [theme.breakpoints.down("md")]: {
    padding: '20px 40px 18px 40px',
  },
}));