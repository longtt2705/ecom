
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import AccountPopover from './AccountPopover';

const StyledImage = styled('img')({
    width: 40,
    height: 40,
});
// ----------------------------------------------------------------------

export default function Header() {
    const theme = useTheme();
    const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();

    const renderContent = (
        <>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
                <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <StyledImage src="/images/green_leaves_logo.jpg" alt="tooth" />
                    <Typography variant="h5" fontWeight={'bolder'} flexGrow={1} fontSize={'1.5rem'}>
                        Unistars
                    </Typography>
                </Stack>
            </NavLink>
            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton onClick={() => navigate('/cart')}>
                    <Badge badgeContent={totalQuantity} color="primary" >
                        <ShoppingCartIcon sx={{
                            color: '#000',
                            fontSize: '2.5rem'
                        }} />
                    </Badge>
                </IconButton>
                <AccountPopover />
            </Stack>
        </>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: theme.zIndex.appBar + 1,
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter
                }),
                height: 80,
                backgroundColor: 'white',
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 }
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}


