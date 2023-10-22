import React from 'react';
import { styled, Box } from '@mui/material';

const cardImg = require('../assets/offers/oxalis.png');

const List = styled('div')({
  marginTop: '60px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 370px)',
  columnGap: '30px',
  gridTemplateRows: '480px',
  gridAutoRows: '480px',
  rowGap: '40px',
  justifyContent: 'center'
});

const Item = styled('div')({
  boxShadow: '0px 24px 60px 0px rgba(51, 51, 51, 0.16)',
  display: 'flex',
  flexDirection: 'column',
});

const Image = styled('img')({
  display: 'block',
  width: '100%',
  height: 'calc(50%)',
  objectFit: 'cover',
});

const Title = styled('h5')({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
});

const Subtitle = styled('div')({
  color: '#999',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
});

const Description = styled('div')({
  marginTop: '24px',
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
});

const Range = styled('div')({
  height: '8px',
  width: '100%',
  background: '#ECECEC',
});

const MainRangeUnit = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '182px',
  height: '100%'
}));

const RangeWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '8px',
  marginTop: '24px'
});

const Amount = styled('div')({
  display: 'flex',
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
});

const CurrentAmount = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: 700,
}));

const InvestorCardList = () => {
  return (
    <List>
      <Item>
        <Image src={cardImg} />
        <Box sx={{ padding: '24px' }}>
          <Title>Oxalis</Title>
          <Subtitle>Brooklyn, NY</Subtitle>
          <Description>
            A recognized leader in language immersion & early education, opening second school.
          </Description>
          <RangeWrapper>
            <Range>
              <MainRangeUnit sx={{ width: '80%' }} />
            </Range>
            <Amount><CurrentAmount>$574,920</CurrentAmount>&nbsp;raised of $1,000,000</Amount>
          </RangeWrapper>
        </Box>
      </Item>
    </List>
  )
}

export default InvestorCardList;
