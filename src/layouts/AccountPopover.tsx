import { useState } from 'react';

import { Modal } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { signOut } from '../slices/user';

import { useAppDispatch, useAppSelector } from '../app/hook';
import ChangePasswordForm from './ChangePasswordForm';

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userMetaData = useAppSelector((state) => state.user.userMetaData);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    await dispatch(signOut()).unwrap();
  };

  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
    handleClose();
  };

  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open ? {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
          } : {})
        }}
      >
        <Avatar
          alt="admin"
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`
          }}
        >

        </Avatar>
      </IconButton>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200
          }
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {userMetaData.firstName} {userMetaData.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleOpenChangePassword}
          sx={{ typography: 'body2', py: 1.5 }}
        >
          Change Password
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Sign Out
        </MenuItem>
      </Popover>
      <Modal
        open={openChangePassword}
        onClose={handleCloseChangePassword}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ChangePasswordForm handleClose={handleCloseChangePassword} />
      </Modal>{' '}
    </>
  );
}
