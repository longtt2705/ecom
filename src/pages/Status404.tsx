import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
    Box,
    Button,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container component="main" maxWidth="md" sx={{ my: 16 }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <ErrorOutlineIcon
                    sx={{
                        fontSize: isMobile ? 100 : 150,
                        color: 'error.main',
                        mb: 2,
                    }}
                />
                <Typography
                    component="h1"
                    variant={isMobile ? 'h4' : 'h3'}
                    gutterBottom
                >
                    404 - Page Not Found
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Oops! The page you are looking for might have been removed or is
                    temporarily unavailable.
                </Typography>
                <Box
                    sx={{
                        mt: 3,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                        size="large"
                    >
                        Go to Homepage
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/contact"
                        size="large"
                    >
                        Contact Support
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

