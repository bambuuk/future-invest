import { styled, Box, Button } from '@mui/material';
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
  boxShadow: '0px 4px 40px 0px rgba(51, 51, 51, 0.08)',
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

const Link = styled('a')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    color: 'transparent',
    background: theme.palette.primary.main,
    height: '2px',
    transition: 'all 0.7s',
  },
  '&:hover:after': {
    width: '100%',
    left: 0,
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: 'transparent',
  color: theme.palette.secondary.main,
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0
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
            <LoginButton variant="contained" color="primary">LOGIN</LoginButton>
            <RegisterButton color="secondary">Register</RegisterButton>
          </Box>
        </Box>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar;
