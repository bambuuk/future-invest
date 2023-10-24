import { FC } from 'react';
import { styled, Box, Fab } from '@mui/material';
import { CustomContainer } from './CustomElements';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

const FooterEl = styled('footer')({
  position: 'relative',
  width: '100%',
  backgroundColor: '#ECECEC',
});

const Wrapper = styled(Box)({
  padding: '60px 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '77px'
});

const FirstBlockWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  }
}));

const SecondBlockWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

const LogoBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '370px',
  minWidth: '285px',
  width: '100%',
  flex: '1',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    gap: '20px',
    alignItems: 'center'
  },
}));

const Logo = styled(Box)({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '1.44px',
});

const LogoDescription = styled(Box)({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.205px',
});

const NavigationMenu = styled('nav')(({ theme }) => ({
  maxWidth: '570px',
  width: '100%',
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  },
}));

const ColumnMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  }
}));

const ColumnItem = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  width: '270px',
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  cursor: 'pointer',
  [theme.breakpoints.down(1000)]: {
    width: '200px',
  },
  [theme.breakpoints.down('md')]: {
    width: '135px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: 0,
    color: 'transparent',
    background: theme.palette.primary.main,
    height: '2px',
    transition: 'all 0.7s',
  },
  '&:hover:after': {
    width: '100%',
  }
}));

const Footer: FC = () => {
  return (
    <FooterEl>
      <CustomContainer>
        <Wrapper>
          <FirstBlockWrapper>
            <LogoBlock>
              <Logo>NEXT INVEST</Logo>
              <LogoDescription>Copyright © 2023. Made by Ivan Korobka</LogoDescription>
            </LogoBlock>
            <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <NavigationMenu>
                <ColumnMenu>
                  <ColumnItem sx={{ fontWeight: 700 }}>Services</ColumnItem>
                  <ColumnItem>Email Marketing</ColumnItem>
                  <ColumnItem>Campaigns</ColumnItem>
                  <ColumnItem>Branding</ColumnItem>
                  <ColumnItem>Offline</ColumnItem>
                </ColumnMenu>

                <ColumnMenu>
                  <ColumnItem sx={{ fontWeight: 700 }}>About</ColumnItem>
                  <ColumnItem>Our Story</ColumnItem>
                  <ColumnItem>Benefits</ColumnItem>
                  <ColumnItem>Team</ColumnItem>
                  <ColumnItem>Careers</ColumnItem>
                </ColumnMenu>
              </NavigationMenu>
              <Box sx={{ width: '50px', height: '50px', justifySelf: 'flex-end' }}>
                <Fab color="primary" size='medium'>
                  <ArrowCircleUpOutlinedIcon />
                </Fab>
              </Box>
            </Box>
          </FirstBlockWrapper>
          <SecondBlockWrapper>
            s
          </SecondBlockWrapper>
        </Wrapper>
      </CustomContainer>
    </FooterEl>
  )
}

export default Footer
