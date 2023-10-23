import React from 'react';
import { styled } from '@mui/material';
import InvestorItem from './InvestorItem';

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

  return (
    <List>
      <InvestorItem />
    </List>
  )
}

export default InvestorCardList;