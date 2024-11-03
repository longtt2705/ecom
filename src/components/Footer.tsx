import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, IconButton, Link, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

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
    const navigate = useNavigate();
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Logo variant="h6">
                            ⭐ Unistars
                        </Logo>
                        <Typography variant="body2" sx={{ mb: 2 }} color='whitesmoke'>
                            UNISTARS là dự án khởi nghiệp bền vững với mục tiêu xây dựng một hệ sinh thái kinh tế tuần hoàn từ việc thu gom, tái chế rác thải tại các trường đại học và cộng đồng, tích hợp nền tảng thương mại điện tử và mạng xã hội xanh                        </Typography>
                        <Typography variant="body2" fontWeight={"bold"} sx={{ mb: 1 }} color="#fff">
                            THEO DÕI CHÚNG TÔI
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
                            Mục lục
                        </Typography>
                        <Box display="flex" flexDirection="column">
                            <QuickLink href="/">Trang chủ</QuickLink>
                            <QuickLink href="/#products">Sản phẩm</QuickLink>
                            <QuickLink href="/#services">Dịch vụ</QuickLink>
                            <QuickLink onClick={() => navigate('/blogs')}>Blog</QuickLink>
                            <QuickLink href="/#about-us">Giới thiệu</QuickLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }} color="white" fontWeight={"bold"}>
                            THÔNG TIN LIÊN HỆ
                        </Typography>
                        <ContactItem>
                            <ContactIcon>
                                <PhoneIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Số điện thoại
                                </Typography>
                                <Typography variant="body1" color='lightgray'>+84 969 696 969</Typography>
                            </Box>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>
                                <AccessTimeIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Mở cửa
                                </Typography>
                                <Typography variant="body1" color='lightgray'>24/24</Typography>
                            </Box>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>
                                <LocationOnIcon color="primary" />
                            </ContactIcon>
                            <Box>
                                <Typography variant="body2" color="whitesmoke">
                                    Địa chỉ
                                </Typography>
                                <Typography variant="body1" color='lightgray'>279 Nguyen Tri Phuong, Ward 5, District 10</Typography>
                            </Box>
                        </ContactItem>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
}