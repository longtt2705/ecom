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
    height: 600
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
                <Typography variant="h2" gutterBottom color="primary" fontWeight={"bolder"}>
                    Our Services Offered
                </Typography>
                <Grid2 container>
                    <Grid2 size={6}>
                        <Typography variant="h2" fontWeight={"bold"} sx={{ my: 2 }}>We offer a wide range of services to cater to your dental needs.</Typography>
                        <Typography variant="body1" color="gray" fontSize={'1.3rem'} sx={{ my: 2 }}>
                            At our dental clinic, we are committed to delivering exceptional, personalized care with a focus on your comfort and well-being. We promise to provide top-quality services at preferential prices, ensuring that you receive the best treatment without compromising on affordability.
                        </Typography>
                        <Typography variant="h4" color="primary" textTransform='uppercase' fontWeight={"bold"} sx={{ mt: 6 }} onClick={() => navigate('/appointment')}>
                            Book an appointment now
                        </Typography>
                        <Button variant="contained" color="primary" size="large" sx={{ mt: 2, padding: '20px 40px', borderRadius: '40px', fontWeight: 'bold', fontSize: '1.3rem' }} onClick={() => navigate('/appointment')}>
                            Book Appointment
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
                                        <Typography variant="h6" fontWeight={"bold"} textAlign={'center'} color="secondary" sx={{ mt: 2 }}>
                                            ${item.price.min} - ${item.price.max}
                                        </Typography>
                                        <Typography variant="h6" fontWeight={"bold"} textAlign={'center'} color="secondary">
                                            Per {item.price.unit.toUpperCase()}
                                        </Typography>
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