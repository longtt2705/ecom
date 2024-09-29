import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

import Header from './Header';
import Nav from './Nav';
import { Outlet } from 'react-router';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const DashboardLayout: FC<SidebarLayoutProps> = () => {

    return (
        <>
            <Header />
            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' }
                }}
            >
                <Nav />
                <Box position='fixed' top={100} left={300} maxWidth={'calc(100vw - 300px)'}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;
