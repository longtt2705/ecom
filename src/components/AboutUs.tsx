import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';

const AboutUsSection = () => {
    return (
        <div id='about-us'>
            <Container maxWidth="lg" sx={{ my: 8 }}>
                <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.default' }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative', height: '400px' }}>
                                <Box
                                    component="img"
                                    src="/images/18.png?height=400&width=500"
                                    alt="Dental team"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                    }}
                                />
                                <Box
                                    component="img"
                                    src="/images/17.png?height=200&width=200"
                                    alt="Dentist portrait"
                                    sx={{
                                        position: 'absolute',
                                        bottom: -30,
                                        left: -30,
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        border: '4px solid white',
                                        boxShadow: 3,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }} textTransform={'uppercase'}>
                                Về Unistars
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'gray' }} fontSize={'1.1rem'} textAlign={'justify'}>
                                UNISTARS là dự án khởi nghiệp bền vững với mục tiêu xây dựng một hệ sinh thái kinh tế tuần hoàn từ việc thu gom, tái chế rác thải tại các trường đại học và cộng đồng, tích hợp nền tảng thương mại điện tử và mạng xã hội xanh
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'gray' }} fontSize={'1.1rem'} textAlign={'justify'}>
                                Chúng tôi mong muốn tạo ra một môi trường sạch hơn, bền vững hơn thông qua các sản phẩm tái chế chất lượng và dịch vụ thu gom rác thải thông minh, đồng thời nâng cao nhận thức bảo vệ môi trường
                            </Typography>
                            <List>
                                {['Bảo vệ môi trường', 'Phát triển bền vững', 'Xây dựng cộng đồng xanh'].map((item, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default AboutUsSection;