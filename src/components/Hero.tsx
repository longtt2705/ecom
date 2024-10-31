import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
    Box,
    Container,
    Grid,
    Stack,
    styled,
    Typography
} from '@mui/material';


const HeroContainer = styled(Box)({
    background: 'url(/images/banner.png) no-repeat center center',
    borderRadius: '40px',
    position: 'relative',
    minHeight: '800px',
    overflow: 'hidden',
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '100px',
});



export default function DentalistHero() {
    return (
        <Container maxWidth='xl'>
            <HeroContainer mt={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h2" component="h1" color='white' gutterBottom sx={{ fontWeight: 'bold', fontSize: '4.5rem', textTransform: 'uppercase' }}>
                            Unistars
                        </Typography>
                        <Typography variant="h2" color='white' textTransform={"uppercase"} fontWeight={'bolder'}>
                            eco-friendly
                        </Typography>
                        <Typography variant="h6" color='secondary' sx={{ mt: 2, ml: 0. }} fontStyle={'italic'} width={525} textAlign={'justify'}>
                            UNISTARS là nền tảng thương mại điện tử và dịch vụ thu gom rác thải tái chế thân thiện với môi trường, mang đến các sản phẩm bền vững và tạo cơ hội việc làm cho cộng đồng
                        </Typography>

                        <Typography variant="h6" color='secondary' sx={{ mt: 2, ml: 0. }} fontStyle={'italic'} width={525}>
                            Hướng đến một cộng đồng xanh, bảo vệ môi trường từ những hành động nhỏ nhất
                        </Typography>
                        <Box display="flex" alignItems="center" mt={5} gap={3}>
                            <Stack spacing={2}>
                                {['Bảo vệ môi trường', 'Phát triển bền vững', 'Xây dựng cộng đồng xanh'].map((item, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} spacing={2}>
                                        <CheckCircleOutlineIcon color="primary" />
                                        <Typography variant='h6' color='white'>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </HeroContainer>
        </Container>
    );
}