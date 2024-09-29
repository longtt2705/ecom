import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const DashboardLayout: FC<SidebarLayoutProps> = () => {

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                    minHeight: '100vh',
                    height: 'fit-contents',
                }}
            >
                <Header />
                <Nav />
                <Container
                    sx={{
                        position: 'relative',
                        zIndex: 5,
                        display: 'block',
                        flex: 1,
                        overflow: 'auto',
                    }}
                >
                    <Box display="block" mt={'100px'} height={'calc(100vh - 100px)'} width={1}>
                        <Outlet />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default DashboardLayout;
