import { FC } from 'react';
import { Section, CustomContainer, CustomBtn } from './CustomElements';
import { styled, Box } from '@mui/material';

import designEl from '../assets/offers-design-img.png';
import moneyTree from '../assets/money-tree.svg';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '70px',
  flexWrap: 'wrap',
  minHeight: '100vh',
  height: '100%',
  position: 'relative',
  padding: '160px 0',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    padding: '100px 0',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '100px 0',
    minHeight: 'unset',
  }
}));

const DescrWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '570px',
  minWidth: '400px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '800px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
  }
}));

const Head = styled('h2')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '64px',
  [theme.breakpoints.down("md")]: {
    fontSize: '39px',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '30px',
    lineHeight: '30px',
  },
}));

const Description = styled('p')(({ theme }) => ({
  marginTop: '24px',
  color: '#999',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
  [theme.breakpoints.down("md")]: {
    fontSize: '19px',
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: '24px',
  },
}));

const DesignEl = styled('img')(({ theme }) => ({
  display: 'none',
  width: '206px',
  height: '201px',
  position: 'absolute',
  top: '145px',
  right: '-275px',
  [theme.breakpoints.up(1720)]: {
    display: 'block',
  }
}));

const Image = styled('img')(({ theme }) => ({
  maxWidth: '470px',
  maxHeight: '461.381px',
  width: '100%',
  height: '100%',
}));

const RaiseCapital: FC = () => {
  return (
    <Section id="raise-capital">
      <CustomContainer>
        <Wrapper>
          <DesignEl src={designEl} />
          <DescrWrapper data-aos="zoom-out" data-aos-delay="500" data-aos-once="true">
            <Head>Looking to raise capital for your growing business?</Head>
            <Description>
              Whether expanding or opening a brand-new concept, we make it easy to raise
              money from thousands of local investors.
            </Description>
            <Box marginTop='40px'>
              <CustomBtn variant="contained" color="primary">Apply Online</CustomBtn>
            </Box>
          </DescrWrapper>
          <Image data-aos="zoom-out" data-aos-delay="500" data-aos-once="true" src={moneyTree} />
        </Wrapper>
      </CustomContainer>
    </Section>
  )
}

export default RaiseCapital;
