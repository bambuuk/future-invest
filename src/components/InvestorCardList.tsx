import { FC } from 'react';
import { styled } from '@mui/material';
import InvestorItem from './InvestorItem';
import offers from '../data.json';

const List = styled('div')(({ theme }) => ({
  marginTop: '60px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 350px)',
  columnGap: '40px',
  gridTemplateRows: '480px',
  gridAutoRows: '480px',
  rowGap: '40px',
  justifyContent: 'center',
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: 'repeat(2, minmax(250px, 400px))',
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gridAutoRows: 'auto',
  },
}));

const InvestorCardList: FC = () => {
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