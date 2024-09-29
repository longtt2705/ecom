import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import { FormikProvider, useFormik, Form } from 'formik';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { RootState } from '../app/store';
import { CartItem, clearCart, setItemToCheckout } from '../slices/cart';
import * as Yup from 'yup';
import { createAlert } from '../slices/alerts';
import { purchaseProducts } from '../services/products';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9()\- ]+$/, 'Phone number is not valid'),
    address: Yup.string().required('Address is required'),
});


const CheckoutPage = () => {
    const itemsToCheckout = useAppSelector((state: RootState) => state.cart.itemsToCheckout) || [];
    const totalAmount = itemsToCheckout.reduce((acc: number, item: CartItem) => acc + item.totalPrice, 0);
    const totalQuantity = itemsToCheckout.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
    const userData = useAppSelector((store) => store.user.userMetaData);
    const user = useAppSelector((store) => store.user.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // Here you would typically send the updated profile to your backend
            try {
                // Store additional user data
                await purchaseProducts(user.email, { ...values, cartItems: itemsToCheckout, totalAmount, totalQuantity, createdAt: new Date().toISOString() });
                dispatch(createAlert({ id: Date.now(), message: 'Ordered successfully', severity: 'success' }));
                dispatch(setItemToCheckout([]));
                dispatch(clearCart());
                navigate('/');
            } catch (error) {
                console.error(error);
                dispatch(createAlert({ id: Date.now(), message: 'Failed to order', severity: 'error' }));
            }
        },
    });

    const handleAutoFill = () => {
        formik.setValues({
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            phone: userData?.phone,
            email: user.email,
            address: userData?.address,
        });
    }

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 3, my: 4 }}>
                {
                    itemsToCheckout.length === 0 ? (
                        <Typography variant="h5" gutterBottom>
                            Your cart is empty
                        </Typography>
                    ) :
                        <Grid container spacing={4}>
                            {/* Left Column */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
                                    <IconButton sx={{ mr: 1 }}>
                                        <ArrowBackIcon sx={{ mr: 1 }} />
                                    </IconButton>
                                    <Typography variant="h4" component="span">
                                        Order Summary
                                    </Typography>
                                </Box>
                                {itemsToCheckout.map((cartItem: CartItem) => (
                                    <Box sx={{ mb: 2 }} key={cartItem.id}>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item xs>
                                                <Typography variant="h6" color='primary'>{cartItem.title}</Typography>
                                                <Typography variant="body2" color="gray">
                                                    Quantity: {cartItem.quantity}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">${cartItem.totalPrice}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>))}
                                <Divider sx={{ my: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body1">Subtotal</Typography>
                                    <Typography variant="body1">${totalAmount}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="gray">
                                        Shipping
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        $5.00
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="gray" gutterBottom>
                                    Ground shipping (3-5 business days)
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6">Total due</Typography>
                                    <Typography variant="h6">${totalAmount + 5}</Typography>
                                </Box>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" gutterBottom mb={3}>
                                    Shipping information
                                </Typography>
                                <FormikProvider value={formik}>
                                    <Form onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="First Name"
                                                    {...getFieldProps('firstName')}
                                                    error={touched.firstName && Boolean(errors.firstName)}
                                                    helperText={touched.firstName && errors.firstName}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Last Name"
                                                    {...getFieldProps('lastName')}
                                                    error={touched.lastName && Boolean(errors.lastName)}
                                                    helperText={touched.lastName && errors.lastName}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Phone"
                                                    {...getFieldProps('phone')}
                                                    error={touched.phone && Boolean(errors.phone)}
                                                    helperText={touched.phone && errors.phone}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Email"
                                                    {...getFieldProps('email')}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Address"
                                                    {...getFieldProps('address')}
                                                    error={touched.address && Boolean(errors.address)}
                                                    helperText={touched.address && errors.address}
                                                    multiline
                                                    rows={2}
                                                    required
                                                />
                                            </Grid>

                                        </Grid>
                                    </Form>
                                </FormikProvider>
                                <Button color="primary" onClick={handleAutoFill}>
                                    Auto fill my information
                                </Button>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Payment details
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Card information
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Card number"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="MM / YY"
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="CVC"
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Pay ${totalAmount + 5}
                                </Button>
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="gray">
                                        Powered by Momo
                                    </Typography>
                                    <Box>
                                        <Typography variant="body2" color="gray" component="span" sx={{ mr: 1 }}>
                                            Terms
                                        </Typography>
                                        <Typography variant="body2" color="gray" component="span">
                                            Privacy
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>}
            </Paper>
        </Container>
    );
};

export default CheckoutPage;