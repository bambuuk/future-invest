import { FC } from 'react';
import { styled, Box } from '@mui/material';
import { CustomContainer, CustomBtn } from './CustomElements';

const bgImage = require("../assets/promo-bg-img.png");
const designEl = require('../assets/design-el.png');

const Section = styled('section')(({ theme }) => ({
  position: 'relative',
  height: 'calc(100vh - 90px)',
  width: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down("md")]: {
    height: 'calc(100vh - 75px)',
  },
}));

const CustomHead = styled('h1')(({ theme }) => ({
  color: '#FFF',
  fontFamily: 'Josefin Sans',
  fontSize: '60px',
  fontWeight: 700,
  lineHeight: '80px',
  maxWidth: '770px',
  width: '100%',
  [theme.breakpoints.down("md")]: {
    fontSize: '40px',
    lineHeight: '50px',
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: 'center',
    fontSize: '25px',
    lineHeight: '30px',
  },
}));

const Image = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  display: 'block',
  maxWidth: '400px',
  maxHeight: '400px',
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  [theme.breakpoints.down("md")]: {
    display: 'none',
  },
}));

const Description = styled('div')(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
  maxWidth: '470px',
  width: '100%',
  margin: '40px 0',
  [theme.breakpoints.down("sm")]: {
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center'
  },
}));

const Promo: FC = () => {
  return (
    <Section>
      <CustomContainer>
        <Box sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
          <Box sx={{
            position: 'absolute',
            display: { xs: 'none', sm: 'block', },
            top: '50%',
            transform: 'translateY(-50%)',
            left: '-140px',
            width: '500px',
            height: '500px',
            background: '#336EE1',
            opacity: '50%',
            borderRadius: '50%',
            zIndex: 10
          }} />
          <Box
            data-aos="zoom-out-right"
            data-aos-once="true"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              alignItems: { xs: 'center', sm: 'start' },
              position: 'relative',
              zIndex: 100
            }}
          >
            <CustomHead>Meaningful investments in Main Street businesses</CustomHead>
            <Description>
              Browse vetted investment offerings in communities all over the US.
            </Description>
            <Box>
              <CustomBtn variant="contained" color="primary">Get Started</CustomBtn>
            </Box>
          </Box>
        </Box>
      </CustomContainer>
      <Image src={designEl} alt="" />
    </Section>
  )
}

export default Promo
