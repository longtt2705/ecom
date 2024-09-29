import { Button, Container, Stack, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import items, { Product } from "../shared/products";
import { useAppDispatch } from "../app/hook";
import { addItemToCart, setItemToCheckout } from "../slices/cart";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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



const StyledButton = styled(Button)({
    padding: '10px',
    borderRadius: '40px',
});

const Products = () => {
    const dispatch = useAppDispatch();

    const addToCartHandler = (item: Product) => {
        dispatch(addItemToCart(item));
    };

    const navigate = useNavigate();

    return (
        <div id={'products'}>
            <Container maxWidth="lg" sx={{ my: 10 }}>
                <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight={"bolder"}>
                    Our Products
                </Typography>
                <Carousel responsive={responsive}>
                    {
                        items.map((item, index) => (
                            <StyledStack key={index} alignItems={'center'} spacing={1}>
                                <StyledImage src={item.image} alt={item.title} />
                                <Typography variant="h5" fontWeight={"bold"} textAlign={'center'} sx={{ my: 2 }}>{item.title}</Typography>
                                <Typography variant="body1" color="gray" textAlign={'center'} sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical'
                                }}>{item.description}</Typography>
                                <NavLink to={`/products/${item.id}`} color="primary">Read More</NavLink>
                                <Typography variant="h6" fontWeight={"bold"} textAlign={'center'} color="secondary" sx={{ mt: 2 }}>${item.price}</Typography>
                                <StyledButton variant="outlined" color="primary" fullWidth onClick={() => addToCartHandler(item)}>Add to Cart</StyledButton>
                                <StyledButton variant="contained" color="primary" fullWidth onClick={() => {
                                    dispatch(setItemToCheckout([{ ...item, quantity: 1, totalPrice: item.price }]));
                                    navigate('/checkout');
                                }}>Buy Now</StyledButton>
                            </StyledStack>
                        ))
                    }
                </Carousel>
            </Container>
        </div>
    );
}

export default Products;