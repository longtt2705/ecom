import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { CartItem, clearCart, removeItemFromCart, setItemToCheckout } from '../slices/cart';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Button,
    Divider,
    Paper,
    Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartItems: CartItem[] = useAppSelector((state) => state.cart.cartItems);
    const totalAmount = useAppSelector((state) => state.cart.totalAmount);
    const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();

    const removeItemHandler = (id: number) => {
        dispatch(removeItemFromCart(id));
    };

    const clearCartHandler = () => {
        dispatch(clearCart());
    };

    return (
        <Container maxWidth="md" sx={{ minHeight: 650, my: 10 }}>
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
                <Typography variant="h4" gutterBottom component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon sx={{ mr: 1 }} /> Your Cart
                </Typography>
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Your cart is empty.</Typography>
                ) : (
                    <>
                        <List sx={{ minHeight: 250 }}>
                            {cartItems.map((item) => (
                                <React.Fragment key={item.id}>
                                    <ListItem
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                onClick={() => removeItemHandler(item.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemText
                                            primary={item.title}
                                            secondary={`Quantity: ${item.quantity} | Total Price: $${item.totalPrice.toFixed(2)}`}
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography variant="subtitle1">Total Items: {totalQuantity}</Typography>
                                <Typography variant="h6">Total Amount: ${totalAmount.toFixed(2)}</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={clearCartHandler}
                                startIcon={<DeleteIcon />}
                            >
                                Clear Cart
                            </Button>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" color="primary" onClick={() => {
                                dispatch(setItemToCheckout(cartItems));
                                navigate('/checkout')
                            }}>
                                Checkout
                            </Button>
                        </Box>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default Cart;