import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, Grid2 as Grid, InputLabel, MenuItem, Paper, Select, Stack, Switch, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../app/hook';
import items from '../shared/professionals';
import { createAlert } from '../slices/alerts';
import { useEffect, useState } from 'react';
import { appointmentService } from '../services';
import services from '../shared/services';
import { useNavigate } from 'react-router';
import { timeShifts } from '../shared/appointment';

// Validation Schema using Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9()\- ]+$/, 'Phone number is not valid'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email().required('Email is required'),
});

export default function Appointment() {
    const user = useAppSelector((store) => store.user.user);
    const userData = useAppSelector((store) => store.user.userMetaData);
    const [doctorTimeShift, setDoctorTimeShift] = useState<string[]>([]);
    const [isBookForOtherPerson, setIsBookForOtherPerson] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const availableTimeShifts = timeShifts.filter((_, index) => !doctorTimeShift.includes(index.toString()));
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            dateOfBirth: dayjs(),
            address: '',
            doctorId: items[0].id,
            dateOfAppointment: dayjs(),
            timeShift: undefined,
            services: [] as string[],
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // Here you would typically send the updated profile to your backend
            // Store additional user data
            if (typeof values.timeShift === 'undefined') {
                dispatch(createAlert({ id: Date.now(), message: 'Please choose a time', severity: 'error' }));
                return;
            }

            if (values.services.length === 0) {
                dispatch(createAlert({ id: Date.now(), message: 'Please choose at least one service', severity: 'error' }));
                return;
            }

            handleOpen();
        },
    });



    useEffect(() => {
        const fetchDoctorTimeShift = async () => {
            if (!formik.values.doctorId) {
                return;
            }
            const timeShifts = await appointmentService.getDoctorTimeShifts(formik.values.doctorId, formik.values.dateOfAppointment.format('YYYY-MM-DD'));
            setDoctorTimeShift(timeShifts.map((item) => item.value.toString()));
        }

        fetchDoctorTimeShift();
    }, [formik.values.doctorId, formik.values.dateOfAppointment]);

    useEffect(() => {
        if (!isBookForOtherPerson) {
            handleAutoFill();
        }
    }, [isBookForOtherPerson]);


    const { errors, touched, handleSubmit, getFieldProps, values, setFieldValue } = formik;

    const handleAutoFill = () => {
        formik.setValues({
            ...values,
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            phone: userData?.phone,
            email: user.email,
            dateOfBirth: dayjs(userData?.dateOfBirth),
            address: userData?.address,
        });
    }

    const handleSendData = async () => {
        try {

            await Promise.all([
                appointmentService.addDoctorTimeShift(values.doctorId, values.dateOfAppointment.format('YYYY-MM-DD'), values.timeShift!),
                appointmentService.storeAppointment(user.email, {
                    ...values,
                    dateOfBirth: values.dateOfBirth.toISOString(),
                    dateOfAppointment: values.dateOfAppointment.toISOString(),
                })
            ]);
            dispatch(createAlert({ id: Date.now(), message: 'Book appointment successfully!', severity: 'success' }));
            navigate('/')
        } catch (error) {
            console.error(error);
            dispatch(createAlert({ id: Date.now(), message: 'Failed to book appointment', severity: 'error' }));
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="lg" sx={{ my: 10 }}>
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h4" gutterBottom pb={4}>
                        Appointment
                    </Typography>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid container size={6}>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            {...getFieldProps('firstName')}
                                            error={touched.firstName && Boolean(errors.firstName)}
                                            helperText={touched.firstName && errors.firstName}
                                            required
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            {...getFieldProps('lastName')}
                                            error={touched.lastName && Boolean(errors.lastName)}
                                            helperText={touched.lastName && errors.lastName}
                                            required
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            {...getFieldProps('phone')}
                                            error={touched.phone && Boolean(errors.phone)}
                                            helperText={touched.phone && errors.phone}
                                            required
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            {...getFieldProps('email')}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                            required
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <Grid size={12}>
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
                                                    sx: { width: '100%' }
                                                }
                                            }}
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            {...getFieldProps('address')}
                                            error={touched.address && Boolean(errors.address)}
                                            helperText={touched.address && errors.address}
                                            multiline
                                            rows={2}
                                            required
                                            disabled={!isBookForOtherPerson}
                                        />
                                    </Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Switch
                                            checked={isBookForOtherPerson}
                                            onChange={() => setIsBookForOtherPerson(!isBookForOtherPerson)}
                                        />} label="Book for other person" />
                                    </FormGroup>
                                </Grid>
                                <Grid container size={6}>
                                    <Stack width={"100%"} spacing={3}>
                                        <FormControl fullWidth>
                                            <InputLabel id="doctor">Doctor</InputLabel>
                                            <Select
                                                label="Doctor"
                                                {...getFieldProps('doctorId')}
                                                required
                                            >
                                                {items.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <span style={{ padding: '2px', paddingLeft: '5px' }}><a href="/#professionals" target='_blank'>Click here to see our information</a></span>
                                        </FormControl>
                                        <DatePicker
                                            disablePast
                                            label="Date of appointment"
                                            format="DD/MM/YYYY"
                                            value={values.dateOfAppointment}
                                            onChange={(value) => setFieldValue("dateOfAppointment", value, true)}
                                            maxDate={dayjs().add(7, 'day')}
                                            slotProps={{
                                                textField: {
                                                    variant: "outlined",
                                                    error: touched.dateOfAppointment && Boolean(errors.dateOfAppointment),
                                                    sx: { width: '100%' }
                                                }
                                            }}
                                        />
                                        {availableTimeShifts.length > 0 ? <FormControl fullWidth>
                                            <InputLabel id="timeShift">Time</InputLabel>
                                            <Select
                                                label="Time"
                                                {...getFieldProps('timeShift')}
                                                required
                                            >
                                                {timeShifts.map((item, index) => (
                                                    <MenuItem disabled={!availableTimeShifts.includes(item)} key={index} value={index}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl> : <Typography variant='h6' color='error'>No available time shift</Typography>}
                                        <Typography variant='h6' color='primary' fontWeight={'bold'}>Choose Services</Typography>
                                        <Grid container spacing={3}>
                                            {services?.map(service => (
                                                <Grid size={6} key={service.id}>
                                                    <Field
                                                        type="checkbox"
                                                        name="services"
                                                        value={service.id}
                                                        key={service.id}
                                                        as={FormControlLabel}
                                                        control={<Checkbox size='large' />}
                                                        checked={values.services.includes(service.id.toString())}
                                                        label={service.title}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleSubmit()}
                                >
                                    Book Appointment
                                </Button>
                            </Box>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    Confirm Appointment
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description" color='gray'>
                                        Are you sure you want to book an appointment? Please check your information carefully before confirming.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                                    <Button type='submit' variant='contained' onClick={() => handleSendData()} autoFocus>
                                        Confirm
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Form>
                    </FormikProvider>
                </Paper>
            </Container>
        </LocalizationProvider>
    );
}
