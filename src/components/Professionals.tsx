import { Container, Grid2, styled, Typography } from "@mui/material";
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

const StyledGrid = styled(Grid2)({
    backgroundColor: '#fff',
    borderRadius: '40px',
    padding: '15px',
    margin: '20px',
    boxShadow: '0 0 10px 2px rgba(0,0,0,0.1)',
});

const StyledImage = styled('img')({
    width: '250px',
    height: '380px',
    borderRadius: '40px',
});

const Professionals = () => {

    return (
        <Container maxWidth="lg" sx={{ my: 10 }}>
            <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight={"bolder"}>
                Qualified Healthcare
                Professionals
            </Typography>
            <Carousel responsive={responsive}>
                {
                    items.map((item, index) => (
                        <StyledGrid key={index} container spacing={2}>
                            <Grid2 size={7}>
                                <StyledImage src={item.image} alt={item.name} />
                            </Grid2>
                            <Grid2 size={5} spacing={2}>
                                <Typography variant="h5" fontWeight={"bold"} sx={{ my: 2 }}>Dr. {item.name}</Typography>
                                <Typography variant="body2" fontWeight={"bold"} color="primary" sx={{ my: 1 }}>{item.specialty}</Typography>
                                <Typography variant="body1" color="gray" sx={{
                                }}>{item.description}</Typography>
                            </Grid2>
                        </StyledGrid>
                    ))
                }
            </Carousel>
        </Container>
    );
}

export default Professionals;