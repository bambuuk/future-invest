import { FC, useState } from 'react';
import { styled, Box, Fab, TextField } from '@mui/material';
import { CustomContainer } from './CustomElements';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { scrollOnTop } from '../utils/scrollToSection';
import facebook from '../assets/socialNetwork/facebook.svg';
import twitter from '../assets/socialNetwork/twitter.svg';
import inst from '../assets/socialNetwork/instagram.svg';

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
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px'
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

const InputBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '370px',
  width: '100%',
});

const InputTitle = styled(Box)({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '36px',
});

const SocialNetworks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'end',
  gap: '40px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '20px'
  }
}));

const Footer: FC = () => {
  const [value, setValue] = useState<string>('');



  return (
    <FooterEl>
      <CustomContainer>
        <Wrapper>
          <FirstBlockWrapper>
            <LogoBlock>
              <Logo>FUTURE INVEST</Logo>
              <LogoDescription>Copyright © 2023. Made by Ivan Korobka</LogoDescription>
            </LogoBlock>
            <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <NavigationMenu>
                <ColumnMenu>
                  <ColumnItem sx={{ fontWeight: 700 }} href="/">Services</ColumnItem>
                  <ColumnItem href="/">Email Marketing</ColumnItem>
                  <ColumnItem href="/">Campaigns</ColumnItem>
                  <ColumnItem href="/">Branding</ColumnItem>
                  <ColumnItem href="/">Offline</ColumnItem>
                </ColumnMenu>

                <ColumnMenu>
                  <ColumnItem sx={{ fontWeight: 700 }} href="/">About</ColumnItem>
                  <ColumnItem href="/">Our Story</ColumnItem>
                  <ColumnItem href="/">Benefits</ColumnItem>
                  <ColumnItem href="/">Team</ColumnItem>
                  <ColumnItem href="/">Careers</ColumnItem>
                </ColumnMenu>
              </NavigationMenu>
              <Box sx={{ width: '50px', height: '50px', justifySelf: 'flex-end' }} onClick={scrollOnTop}>
                <Fab color="primary" size='medium'>
                  <KeyboardArrowUpIcon />
                </Fab>
              </Box>
            </Box>
          </FirstBlockWrapper>
          <SecondBlockWrapper>
            <InputBlock>
              <InputTitle>Subscribe to our newsletter</InputTitle>
              <Box sx={{ display: 'flex' }}>
                <TextField
                  label="Email address"
                  id="standard-size-normal"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  variant="standard"
                  sx={{ flex: '1' }}
                />
                <Fab
                  color="secondary"
                  size='small'
                  sx={{ borderRadius: '8px 8px 0px 0px', alignSelf: 'end' }}
                  onClick={() => setValue('')}
                >
                  <NavigateNextIcon onClick={() => setValue('')} />
                </Fab>
              </Box>
            </InputBlock>
            <SocialNetworks>
              <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src={facebook} alt="facebook" /></a>
              <a href='https://twitter.com/' target='_blank' rel="noreferrer"><img src={twitter} alt="twitter" /></a>
              <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={inst} alt="instagram" /></a>
            </SocialNetworks>
          </SecondBlockWrapper>
        </Wrapper>
      </CustomContainer>
    </FooterEl>
  )
}

export default Footer
