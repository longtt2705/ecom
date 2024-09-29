import {
    Avatar,
    Box,
    Card,
    Container,
    Grid,
    Rating,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const TestimonialCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
}));

const testimonials = [
    {
        name: 'Ha Vy',
        image: '/placeholder.svg?height=80&width=80',
        text: 'This is the best dental clinic I have ever been to. The staff is friendly and professional. I highly recommend Molarrific Clinic to anyone looking for quality dental care.',
        rating: 5,
    },
    {
        name: 'Vy Ha',
        image: '/placeholder.svg?height=80&width=80',
        text: 'I have been a patient of Molarrific Clinic for years and I am always impressed with the quality of care I receive. Having a beautiful smile is important.',
        rating: 4,
    },
    {
        name: 'Cu Ha Vy',
        image: '/placeholder.svg?height=80&width=80',
        text: 'Every time I visit Molarrific Clinic, I am greeted with a smile. The staff is friendly and professional. I highly recommend this clinic to anyone looking for quality dental care.',
        rating: 5,
    },
];

const TestimonialSection: React.FC = () => {
    return (
        <div id='testimonial'>
            <Box sx={{ bgcolor: 'aliceblue', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="overline"
                        component="h2"
                        sx={{ color: 'primary.main', mb: 2, fontWeight: 'bold' }}
                    >
                        TESTIMONIAL
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                                What people have said about us
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Our clinic is committed to providing exceptional dental care. We believe that every patient deserves to feel comfortable, confident, and cared for. With years of experience and a team of highly trained professionals, we ensure that your oral health is in the best hands.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <TestimonialCard>
                                    <Avatar
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        sx={{ width: 80, height: 80, mb: 2 }}
                                    />
                                    <Typography variant="h6" component="h4" gutterBottom>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                                        {testimonial.text}
                                    </Typography>
                                    <Rating value={testimonial.rating} readOnly />
                                </TestimonialCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default TestimonialSection;