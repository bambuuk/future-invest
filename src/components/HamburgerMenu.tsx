import { FC } from 'react';
import { styled, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { scrollToSection } from '../utils/scrollToSection';

const Wrapper = styled('div')({
  position: 'fixed',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(206, 206, 206, 0.60)',
  top: 0,
  left: 0,
  zIndex: 1000,
});

const Sidebar = styled('div')({
  width: '250px',
  height: '100%',
  backgroundColor: '#333',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  transition: 'transform 0.3s',
  zIndex: 1100,
  transform: 'translateX(-250px)',
  overflow: 'hidden'
});

const SidebarLink = styled(ListItem)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const LoginButton = styled(Button)(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0,
  width: '100%'
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  padding: '16px 40px 14px 40px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: 'transparent',
  color: theme.palette.secondary.main,
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  textTransform: 'uppercase',
  borderRadius: 0,
  width: '100%'
}));

interface HamburgerMenuProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ open, onClose }) => {
  return (
    <Box>
      <Sidebar sx={{ transform: open ? 'translateX(0)' : 'translateX(-250px)' }}>
        <CloseIcon
          sx={{ color: '#fff', position: 'absolute', left: '210px' }}
          onClick={() => onClose(false)}
        />
        <List sx={{ flex: 1 }}>
          <SidebarLink onClick={() => {
            onClose(false);
            scrollToSection('offers');
          }}>
            <ListItemText>Offers</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            onClose(false);
            scrollToSection('analysis')
          }}>
            <ListItemText>Analysis</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            onClose(false);
            scrollToSection('raise-capital')
          }}
          >
            <ListItemText>Raise Capital</ListItemText>
          </SidebarLink>
        </List>
        <Box sx={{
          display: { xs: "block", md: "none" },
          width: '100%'
        }}>
          <LoginButton
            variant="contained"
            color="primary"
            onClick={() => onClose(false)}
          >
            LOGIN
          </LoginButton>
          <RegisterButton
            color="secondary"
            sx={{ marginTop: '20px' }}
            onClick={() => onClose(false)}
          >
            Register
          </RegisterButton>
        </Box>
      </Sidebar>
      <Wrapper sx={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }} onClick={() => onClose(false)} />
    </Box>
  );
};

export default HamburgerMenu;