import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { storeUserData } from '../services/user';
import { createAlert } from '../slices/alerts';
import { setUserData } from '../slices/user';

// Validation Schema using Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9()\- ]+$/, 'Phone number is not valid'),
    address: Yup.string().required('Address is required'),
});

export default function UserProfile() {
    const user = useAppSelector((store) => store.user.user);
    const userData = useAppSelector((store) => store.user.userMetaData);
    const dispatch = useAppDispatch();

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            phone: userData?.phone,
            email: user.email,
            dateOfBirth: dayjs(userData?.dateOfBirth) || dayjs().toISOString(),
            address: userData?.address,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // Here you would typically send the updated profile to your backend
            try {
                // Store additional user data
                await storeUserData(user.uid, { ...values, dateOfBirth: values.dateOfBirth.toISOString() });
                dispatch(setUserData(values));
                dispatch(createAlert({ id: Date.now(), message: 'Profile updated', severity: 'success' }));
            } catch (error) {
                console.error(error);
                dispatch(createAlert({ id: Date.now(), message: 'Failed to update profile', severity: 'error' }));
            }
        },
    });

    const { errors, touched, handleSubmit, getFieldProps, values, setFieldValue } = formik;


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="sm" sx={{ mt: 20 }}>
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h4" gutterBottom pb={4}>
                        User Profile
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
                                        helperText={touched.firstName && typeof errors.firstName === 'string' ? errors.firstName : undefined}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        {...getFieldProps('lastName')}
                                        error={touched.lastName && Boolean(errors.lastName)}
                                        helperText={touched.lastName && typeof errors.lastName === 'string' ? errors.lastName : undefined}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        {...getFieldProps('phone')}
                                        error={touched.phone && Boolean(errors.phone)}
                                        helperText={touched.phone && typeof errors.phone === 'string' ? errors.phone : undefined}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        {...getFieldProps('email')}
                                        disabled={true}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <DatePicker
                                        disableFuture
                                        label="Date of Birth"
                                        format="DD/MM/YYYY"
                                        value={values.dateOfBirth}
                                        onChange={(value) => setFieldValue("dateOfBirth", value, true)}
                                        slotProps={{
                                            textField: {
                                                variant: "outlined",
                                                error: touched.dateOfBirth && Boolean(errors.dateOfBirth),
                                                helperText: touched.dateOfBirth && typeof errors.dateOfBirth === 'string' ? errors.dateOfBirth : undefined,
                                                sx: { width: '100%' }
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        {...getFieldProps('address')}
                                        error={touched.address && Boolean(errors.address)}
                                        helperText={touched.address && typeof errors.address === 'string' ? errors.address : undefined}
                                        multiline
                                        rows={2}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleSubmit()}
                                >
                                    Update Profile
                                </Button>
                            </Box>
                        </Form>
                    </FormikProvider>
                </Paper>
            </Container>
        </LocalizationProvider>
    );
}
