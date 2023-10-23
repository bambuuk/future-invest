import { FC } from 'react';
import { styled, Button, Box } from '@mui/material';
import InvestorItem from './InvestorItem';
import offers from '../data.json';

const List = styled('div')(({ theme }) => ({
  marginTop: '60px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 350px)',
  columnGap: '40px',
  gridTemplateRows: "minmax('480px', auto)",
  gridAutoRows: "minmax('480px', auto)",
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

const ProjectsBtn = styled(Button)(({ theme }) => ({
  marginTop: '80px',
  padding: '24px 40px 22px 40px',
  color: theme.palette.secondary.main,
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0,
}));

const InvestorCardList: FC = () => {
  const content = offers.map(offer => (
    <InvestorItem key={offer.id} offer={offer} />
  ));

  return (
    <>
      <List>
        {content}
      </List>
      <Box sx={{ margin: '0 auto' }}>
        <ProjectsBtn variant="outlined" color="secondary">View All Projects</ProjectsBtn>
      </Box>
    </>
  )
}

export default InvestorCardList;