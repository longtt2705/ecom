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
                                    src="/images/dentist-bg.webp?height=400&width=500"
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
                                    src="/images/dentist-bg-mini.jpg?height=200&width=200"
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
                            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                Why You Should Trust Us? Get Know About Us!
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'gray' }}>
                                Our clinic is committed to providing exceptional dental care. We believe
                                that every patient deserves to feel comfortable, confident, and cared
                                for. With years of experience and a team of highly trained
                                professionals, we ensure that your oral health is in the best hands.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'gray' }}>
                                We focus on the latest advancements in dental treatments and patient
                                care, ensuring that your smile remains bright and healthy.
                            </Typography>
                            <List>
                                {['Comprehensive Dental Services', 'Highly Qualified and Experienced Dentists', 'Modern Equipment and Techniques'].map((item, index) => (
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