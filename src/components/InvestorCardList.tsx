import React from 'react';
import { styled } from '@mui/material';
import InvestorItem from './InvestorItem';
import offers from '../data.json';

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

const InvestorCardList = () => {
  const content = offers.map(offer => (
    <InvestorItem key={offer.id} offer={offer} />
  ));

  return (
    <List>
      {content}
    </List>
  )
}

export default InvestorCardList;