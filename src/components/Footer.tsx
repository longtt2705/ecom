import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, IconButton, Link, styled, Typography } from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(6, 0),
}));

const Logo = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#fff',
}));

const SocialIcon = styled(IconButton)(({
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const QuickLink = styled(Link)(({
    color: 'whitesmoke',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

const ContactIcon = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2),
}));

export default function Footer() {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Logo variant="h6">
                            🦷 Molarrific
                        </Logo>
                        <Typography variant="body2" sx={{ mb: 2 }} color='whitesmoke'>
                            At our clinic, we prioritize exceptional dental care by combining the latest treatments with a highly experienced team, ensuring your comfort and oral health are in the best hands. With modern equipment and comprehensive services, we help keep your smile bright and healthy.
                        </Typography>
                        <Typography variant="body2" fontWeight={"bold"} sx={{ mb: 1 }} color="#fff">
                            FOLLOW US ON
                        </Typography>
                        <Box>
                            <SocialIcon aria-label="facebook">
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon aria-label="twitter">
                                <TwitterIcon />
                            </SocialIcon>
                            <SocialIcon aria-label="instagram">
                                <InstagramIcon />
                            </SocialIcon>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }} color="white" fontWeight={"bold"}>
                            Quick Links
                        </Typography>
                        <Box display="flex" flexDirection="column">
                            <QuickLink href="/">Home</QuickLink>
                            <QuickLink href="/#products">Products</QuickLink>
                            <QuickLink href="/#services">Services</QuickLink>
                            <QuickLink href="/#testimonial">Testimonial</QuickLink>
                            <QuickLink href="/#about-us">About Us</QuickLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }} color="white" fontWeight={"bold"}>
                            CONTACT & INFORMATION
                        </Typography>
                        <ContactItem>
                            <ContactIcon>
                                <PhoneIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Phone Number
                                </Typography>
                                <Typography variant="body1">+84 969 696 969</Typography>
                            </Box>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>
                                <AccessTimeIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Open Hour
                                </Typography>
                                <Typography variant="body1">09:00 AM - 18:00 PM</Typography>
                            </Box>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>
                                <LocationOnIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Clinic Address
                                </Typography>
                                <Typography variant="body1">279 Nguyen Tri Phuong, Ward 5, District 10</Typography>
                            </Box>
                        </ContactItem>
                    </Grid>
                </Grid>
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="#fff">
                        © Dental Clinic. All Right Reserved
                    </Typography>
                    <Box>
                        <QuickLink href="#" sx={{ mr: 2 }}>
                            Terms of Use
                        </QuickLink>
                        <QuickLink href="#">
                            Privacy Policy
                        </QuickLink>
                    </Box>
                </Box>
            </Container>
        </FooterContainer>
    );
}