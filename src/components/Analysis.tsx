import { FC } from 'react';
import { Section, CustomContainer } from './CustomElements';
import { styled } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import Chart from './Chart';

import subtract from '../assets/subtract-icon.svg';
import designEl from '../assets/analysis-group.svg';

const Wrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  height: '100%',
  position: 'relative',
  padding: '160px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '100px 0',
    minHeight: 'unset',
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  flexWrap: 'wrap',
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
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
  marginTop: '40px',
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

const SubtractImage = styled('img')({
  width: '56px',
  height: '56px',
});

const DesignEl = styled('img')(({ theme }) => ({
  display: 'none',
  width: '148.36px',
  height: '148.36px',
  position: 'absolute',
  top: '-35px',
  right: '-152px',
  [theme.breakpoints.up(1500)]: {
    display: 'block',
  }
}));

const Analysis: FC = () => {
  const isMediumScreen = useMediaQuery('(min-width: 600px)');

  return (
    <Section sx={{ backgroundColor: '#ECF4FD' }} id="analysis">
      <CustomContainer>
        <Wrapper>
          <DesignEl src={designEl} />
          <SecondWrapper data-aos="zoom-in-right" data-aos-once="true" data-aos-delay="500">
            <DescrWrapper>
              <SubtractImage src={subtract} />
              <Head>$7M+ paid out to investors</Head>
              <Description>
                Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash
                payments through unique revenue-share and debt financing investments.
              </Description>
            </DescrWrapper>
            {isMediumScreen && <Chart />}
          </SecondWrapper>
        </Wrapper>
      </CustomContainer>
    </Section>
  )
}

export default Analysis
