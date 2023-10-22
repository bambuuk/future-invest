import { styled, Box } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  height: '100%',
  padding: '18px 15px',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'flex-start',
  },
}));

const Header = styled('header')(({ theme }) => ({
  width: '100%',
  height: '90px',
  [theme.breakpoints.down("md")]: {
    height: '75px',
  },
}));

const Logo = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '1.44px',
}));

const Link = styled('a')({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
});

const LoginButton = styled('button')(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
}));

const RegisterButton = styled('button')(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: 'transparent',
  color: theme.palette.secondary.main,
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
}));

const Navbar = () => {
  return (
    <Header>
      <HeaderContainer>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{
            mr: 2,
            display: { xs: "block", md: "none" },
            color: "#128C76",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Logo>
          NEXT INVEST
        </Logo>

        <Box sx={{ display: 'flex', gap: '24px', }}>
          <Box sx={{
            display: { xs: "none", md: "flex" },
            gap: '16px',
            alignItems: 'center',
          }}>
            <Link href="/">Offers</Link>
            <Link href="/">Analysis</Link>
            <Link href="/">Raise Capital</Link>
          </Box>
          <Box sx={{
            display: { xs: "none", md: "flex" },
            gap: '16px',
          }}>
            <LoginButton>LOGIN</LoginButton>
            <RegisterButton>Register</RegisterButton>
          </Box>
        </Box>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar;
