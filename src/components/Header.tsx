
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Stack, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../app/hook';
import { NavLink } from 'react-router-dom';

const StyledImage = styled('img')({
  width: 40,
  height: 40,
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  padding: '1.5rem 0',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  justifyItems: 'center',
});

const StyledButton = styled('a')({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#000',
  textDecoration: 'none',
});

const BookButton = styled(Button)({
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '1rem 1.5rem',
  borderRadius: '50px',
  boxShadow: 'none'
});

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
            <StyledImage src="/images/tooth.png" alt="tooth" />
            <Typography variant="h5" fontWeight={'bolder'} flexGrow={1} fontSize={'1.8rem'}>
              Molarrific Clinic
            </Typography>
          </Stack>
        </NavLink>
        <Stack direction={'row'} spacing={2}>
          <StyledButton href='/'>Home</StyledButton>
          <StyledButton href='/#products'>Products</StyledButton>
          <StyledButton href='/#services'>Services</StyledButton>
          <StyledButton href='/#testimonial'>Testimonial</StyledButton>
          <StyledButton href='/#about-us'>About Us</StyledButton>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <IconButton onClick={() => navigate('/cart')}>
            <Badge badgeContent={totalQuantity} color="primary" >
              <ShoppingCartIcon sx={{
                color: '#000',
                fontSize: '2.5rem'
              }} />
            </Badge>
          </IconButton>
          <BookButton color="primary" variant='contained' onClick={
            () => user ? navigate('dashboard') : navigate('/login')
          }>{user ? 'Go to Dashboard' : 'Login Now'}</BookButton>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;