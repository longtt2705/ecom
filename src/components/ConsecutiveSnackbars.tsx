import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setOpenAlert, skipAlert, SnackbarMessage } from '../slices/alerts';
import { useEffect, useState } from 'react';

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

export default function ConsecutiveSnackbars() {
  const snackPack = useAppSelector((state) => state.alerts.messages);
  const open = useAppSelector((state) => state.alerts.open);

  const [messageInfo, setMessageInfo] = useState<
    SnackbarMessage | undefined
  >(undefined);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      dispatch(setOpenAlert(true));
    }
  }, [snackPack, open]);

  const handleClose = () => {
    dispatch(setOpenAlert(false));
    setMessageInfo(undefined);
    dispatch(skipAlert());
  };

  return (
    <Snackbar
      key={messageInfo ? messageInfo.id : undefined}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert
        severity={messageInfo?.severity}
        onClose={handleClose}
        sx={{ width: '100%' }}
      >
        <AlertTitle>{messageInfo?.severity.toUpperCase()}</AlertTitle>
        {messageInfo?.message}
      </Alert>
    </Snackbar>
  );
}
