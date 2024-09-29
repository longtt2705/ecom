import {
    Box,
    Button,
    Container,
    Grid,
    styled,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router';


const BookButton = styled(Button)({
    borderRadius: '50px',
    padding: '20px 30px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
});

const HeroContainer = styled(Box)({
    backgroundColor: '#dbeefa',
    borderRadius: '40px',
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '100px',
});

const FloatingIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
    top: '20%',
    right: '35%',
    transform: 'rotate(10deg)',
}));

export default function DentalistHero() {
    const navigate = useNavigate();
    return (
        <Container maxWidth='xl'>
            <HeroContainer mt={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h2" component="h1" color='primary' gutterBottom sx={{ fontWeight: 'bold', fontSize: '4.5rem' }}>
                            Your Smile Deserves Our Highest Attention
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#6E7191' }} fontSize={'1.2rem'}>
                            At our clinic, we prioritize exceptional dental care by combining the latest treatments with a highly experienced team, ensuring your comfort and oral health are in the best hands. With modern equipment and comprehensive services, we help keep your smile bright and healthy.
                        </Typography>
                        <Box display="flex" alignItems="center" mt={10} gap={3}>
                            <BookButton variant="contained" sx={{ mr: 2 }} onClick={() => navigate('/appointment')}>
                                Book an appointment
                            </BookButton>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: '#1F2B6C' }}>
                                    DENTAL 24H EMERGENCY
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#159EEC' }}>
                                    +84 969 696 969
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
                        <img src="/images/smiling_woman.png" alt="Smiling woman" style={{ width: '95%', height: 'auto' }} />
                    </Grid>
                </Grid>
                <FloatingIcon>🦷</FloatingIcon>
            </HeroContainer>
        </Container>
    );
}