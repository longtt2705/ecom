import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    Card,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppDispatch } from '../app/hook';
import { signIn } from '../slices/user';

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema,
        onSubmit: async (values, formikHelper) => {
            try {
                setLoading(true);
                await dispatch(signIn({ email: values.email, password: values.password })).unwrap();
            } catch (err) {
                formikHelper.setErrors({
                    email: 'Invalid email or password',
                });
            } finally {
                setLoading(false);
            }
        }
    });
    const { errors, touched, handleSubmit, getFieldProps } = formik;

    const renderForm = (
        <FormikProvider value={formik}>
            <Form autoComplete="off" onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Stack spacing={3}>
                    <TextField
                        label="Email"
                        autoComplete="email"
                        {...getFieldProps('email')}
                        required
                        error={Boolean(errors.email && touched.email)}
                        helperText={touched.email && errors.email}
                    />

                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        {...getFieldProps('password')}
                        error={Boolean(errors.password && touched.password)}
                        helperText={touched.password && errors.password}
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
                    <NavLink to="/register">
                        Don't have an account? Sign Up
                    </NavLink>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    loading={isLoading}
                >
                    Sign In
                </LoadingButton>
            </Form>
        </FormikProvider>
    );

    return (
        <Box
            sx={{
                height: '85vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                    sx={{
                        p: 5,
                        width: 500
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 5 }} textAlign={'center'}>
                        Sign In
                    </Typography>

                    {renderForm}
                </Card>
            </Stack>
        </Box>
    );
}