import * as Yup from 'yup';
import { FC, useState } from 'react';
import { Form, useFormik, FormikProvider } from 'formik';

import { LoadingButton } from '@mui/lab';
import {
  Card,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
  CardContent,
  CardActions,
  InputAdornment
} from '@mui/material';

import { createAlert } from '../slices/alerts';
import { changePassword } from '../services/auth';
import { useAppDispatch, useAppSelector } from '../app/hook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useMutation } from '@tanstack/react-query';

const ChangePasswordForm: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const changePasswordMutation = useMutation({
    mutationFn: (value: { oldPassword: string, password: string }) => changePassword(user, value.oldPassword, value.password),

    onSuccess: () => {
      // Invalidate and refetch
      dispatch(
        createAlert({
          id: Date.now(),
          severity: 'success',
          message: `Changed password successfully`
        })
      );
    },
    onSettled: () => {
      handleClose();
    },
    onError: (error: Error) => {
      dispatch(
        createAlert({
          id: Date.now(), severity: 'error', message: `Changed password failed: ${error.message}`
        })
      );
    }
  });
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Old password is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('New password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: async (data) => {
      changePasswordMutation.mutate(data);
    }
  });
  const { errors, touched, handleSubmit, getFieldProps, submitForm } = formik;
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" pb={3}>
          Change Password
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="on" onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack spacing={1}>
              <TextField
                label="Old Password"
                {...getFieldProps('oldPassword')}
                error={Boolean(errors.oldPassword && touched.oldPassword)}
                helperText={touched.oldPassword && errors.oldPassword}
                required
                fullWidth
                type={showOldPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                        {showOldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="New Password"
                {...getFieldProps('password')}
                error={Boolean(errors.password && touched.password)}
                helperText={touched.password && errors.password}
                required
                fullWidth
                type={showNewPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                        {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Confirm Password"
                {...getFieldProps('confirmPassword')}
                error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
                required
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
          </Form>
        </FormikProvider>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <LoadingButton
          variant="contained"
          color="primary"
          loading={changePasswordMutation.isPending}
          onClick={submitForm}
        >
          Change
        </LoadingButton>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}

export default ChangePasswordForm;
