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
    borderRadius: '16px',
    boxShadow: theme.shadows[1],
}));

const testimonials = [
    {
        name: 'Dang Dang',
        image: '/images/test.jpg',
        text: 'Dịch vụ thu gom rác của UNISTARS rất tiện lợi! Không chỉ giúp tôi xử lý rác dễ dàng, mà chi phí cũng rất hợp lý. Tôi cảm thấy yên tâm vì biết rằng rác thải của mình sẽ được tái chế đúng cách để bảo vệ môi trường.',
        rating: 5,
        type: 'Hộ gia đình'
    },
    {
        name: 'Vy Vy',
        image: '/images/test 2.jpg',
        text: 'Việc đổi 100 chai nhựa lấy quà thật sự là một trải nghiệm thú vị! Nó không chỉ giúp tôi gom gọn rác nhựa mà còn tạo động lực để tôi tái chế nhiều hơn. Tôi thấy mình đã góp phần nhỏ vào việc giảm thiểu rác thải nhựa.',
        rating: 4,
        type: 'Sinh viên'
    },
    {
        name: 'Dat Dat',
        image: '/images/test 3.jpg',
        text: 'UNISTARS đã cho tôi thấy rằng bảo vệ môi trường không khó như mình nghĩ. Các bài viết, thử thách và câu chuyện trên platform này đã truyền cảm hứng mạnh mẽ, giúp tôi có thêm động lực sống xanh và lan tỏa tinh thần này đến bạn bè.',
        rating: 5,
        type: 'Sinh viên'
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
                        Phản Hồi Của Khách Hàng
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                                Khách hàng nói gì về chúng tôi
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Những nhận xét này thể hiện sự hài lòng và cảm hứng của khách hàng, cũng như tác động tích cực của UNISTARS trong việc thúc đẩy cộng đồng sống xanh và bền vững.                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <TestimonialCard>
                                    <Avatar
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        sx={{ width: 120, height: 120, mb: 2 }}
                                    />
                                    <Typography variant="h6" component="h4">
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body1" color='gray' gutterBottom>
                                        {testimonial.type}
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