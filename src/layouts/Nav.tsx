
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Scrollbar from './Scrollbar';

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import { usePathname } from '../hooks/use-pathname';
import { NAV } from './config-layout';
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav() {
  const userMetaData = useAppSelector((state) => state.user.userMetaData);

  const renderAccount = (
    <Stack
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        borderRadius: 1.5,
      }}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={2}
    >
      <Avatar sx={{ height: 100, width: 100 }} />

      <Box sx={{ ml: 1 }}>
        <Typography variant="h4" textAlign='center'>
          {userMetaData.firstName} {userMetaData.lastName}
        </Typography>
      </Box>
    </Stack>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        width: { lg: NAV.WIDTH },
      }}
    >
      <Box
        sx={{
          height: 1,
          position: 'fixed',
          width: NAV.WIDTH,
          boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        {renderContent}
      </Box>
    </Box>
  );
}



// ----------------------------------------------------------------------

const NavItem: FC<{
  item: {
    title: string;
    path: string;
    icon: any;
  }
}> = ({ item }) => {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16)
          }
        })
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

