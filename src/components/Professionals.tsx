import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import items from "../shared/professionals";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
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

const Professionals = () => {

    return (
        <div id={'professionals'}>
            <Container maxWidth="lg" sx={{ my: 10 }}>
                <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight={"bolder"} textTransform={'capitalize'}>
                    Đối tác của chúng tôi
                </Typography>
                <Carousel responsive={responsive}>
                    {
                        items.map((item, index) => (
                            <Card key={index} sx={{
                                borderRadius: '16px',
                                mx: 2,
                                height: 450,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}>
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={item.image}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>

                        ))
                    }
                </Carousel>
            </Container>
        </div>
    );
}

export default Professionals;