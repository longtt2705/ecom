import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';


interface Props {
    children?: ReactNode;
}

const HomeLayout: FC<Props> = () => {

    return (
        <>
            <Header />
            <Box display="block" mt={'160px'}>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
};

export default HomeLayout;
