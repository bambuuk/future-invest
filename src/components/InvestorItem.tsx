import React from 'react';
import { styled, Box, Button, Divider } from '@mui/material';

const cardImg = require('../assets/offers/oxalis.png');

const Item = styled('div')({
  boxShadow: '0px 24px 60px 0px rgba(51, 51, 51, 0.16)',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
});

const SecondItem = styled(Item)({
  cursor: 'auto',
})

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

const DescrBody = styled('div')({
  padding: '24px',
  width: '100%',
  flex: 1,
});

const CustomBtn = styled(Button)(({ theme }) => ({
  padding: '24px 40px 22px 40px',
  width: '100%',
  borderRadius: 0,
  color: '#FFF',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  backgroundColor: theme.palette.secondary.main,
}));

const Parameters = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const ParameterLine = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const LeftUnitParameter = styled('span')({
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
});

const RightUnitParameter = styled('span')({
  marginLeft: '24px',
  color: '#333',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
});

const InvestorItem = () => {
  return (
    <Box>
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

      <SecondItem sx={{ display: 'none' }}>
        <DescrBody>
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

          <Divider sx={{ backgroundColor: '#ECECEC', margin: '24px 0' }} />

          <Parameters>
            <ParameterLine>
              <LeftUnitParameter>Security Type</LeftUnitParameter>
              <RightUnitParameter>Revenue Sharing Note</RightUnitParameter>
            </ParameterLine>

            <ParameterLine>
              <LeftUnitParameter>Investment Multiple</LeftUnitParameter>
              <RightUnitParameter>1.4x</RightUnitParameter>
            </ParameterLine>

            <ParameterLine>
              <LeftUnitParameter>Maturity</LeftUnitParameter>
              <RightUnitParameter>48 Months</RightUnitParameter>
            </ParameterLine>

            <ParameterLine>
              <LeftUnitParameter>Min. Investment</LeftUnitParameter>
              <RightUnitParameter>$100</RightUnitParameter>
            </ParameterLine>

          </Parameters>
        </DescrBody>
        <CustomBtn variant="contained" color="secondary">View</CustomBtn>
      </SecondItem>
    </Box>
  )
}

export default InvestorItem
