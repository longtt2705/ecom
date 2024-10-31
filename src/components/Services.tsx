import { Button, Container, Grid2, Stack, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import items from "../shared/services";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const StyledStack = styled(Stack)({
    backgroundColor: '#fff',
    borderRadius: '40px',
    padding: '15px',
    margin: '20px',
    boxShadow: '0 0 10px 2px rgba(0,0,0,0.1)',
    height: 525
});

const StyledImage = styled('img')({
    marginTop: '20px',
    width: '300px',
    height: '300px',
    borderRadius: '40px',
});

const Services = () => {
    const navigate = useNavigate();

    return (
        <div id={'services'}>
            <Container maxWidth="xl" sx={{ my: 10 }}>
                <Typography variant="h2" gutterBottom color="primary" fontWeight={"bolder"} textTransform={'uppercase'}>
                    Dịch vụ
                </Typography>
                <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                        <Typography variant="h3" fontWeight={"bold"} sx={{ my: 2 }}>Thông tin chi tiết dịch vụ UNISTARS</Typography>
                        <Typography variant="body1" color="gray" fontSize={'1.2rem'} sx={{ my: 2 }} textAlign={'justify'}>
                            UNISTARS cung cấp các giải pháp bảo vệ môi trường thông qua mô hình thu gom và tái chế rác thải với chi phí ưu đãi, kết hợp nền tảng thương mại điện tử và cộng đồng xanh. Chúng tôi hướng đến việc xây dựng hệ sinh thái bền vững từ nguồn rác thải dồi dào, giúp khách hàng không chỉ xử lý rác hiệu quả mà còn tham gia vào chuỗi giá trị xanh, đóng góp cho cộng đồng và môi trường.                        </Typography>
                        <Typography variant="h4" color="primary" textTransform='uppercase' fontWeight={"bold"} sx={{ mt: 6 }}>
                            Đăng ký dịch vụ ngay tại đây
                        </Typography>
                        <Button variant="contained" color="primary" size="large" sx={{ mt: 2, padding: '20px 40px', borderRadius: '40px', fontWeight: 'bold', fontSize: '1.3rem' }} onClick={() => navigate('/dashboard//appointment')}>
                            Đăng ký dịch vụ
                        </Button>
                    </Grid2>
                    <Grid2 size={6}>
                        <Carousel responsive={responsive}>
                            {
                                items.map((item, index) => (
                                    <StyledStack key={index} alignItems={'center'} spacing={1}>
                                        <StyledImage src={item.image} alt={item.title} />
                                        <Typography variant="h5" fontWeight={"bold"} textAlign={'center'} sx={{ my: 2, height: 70 }}>{item.title}</Typography>
                                        <Typography variant="body1" color="gray" textAlign={'center'} sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '3',
                                            WebkitBoxOrient: 'vertical',
                                            height: 100
                                        }}>{item.description}</Typography>
                                    </StyledStack>
                                ))
                            }
                        </Carousel>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
}

export default Services;