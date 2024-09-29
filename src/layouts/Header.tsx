
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import AccountPopover from './AccountPopover';
import { NAV } from './config-layout';
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from '../app/hook';

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
                    <StyledImage src="/images/tooth.png" alt="tooth" />
                    <Typography variant="h5" fontWeight={'bolder'} flexGrow={1} fontSize={'1.5rem'}>
                        Molarrific Clinic
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
            sx={{
                zIndex: theme.zIndex.appBar + 1,
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter
                }),
                width: `calc(100% - ${NAV.WIDTH + 1}px)`,
                height: 80,
                backgroundColor: 'transparent',
                boxShadow: 'none',
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


