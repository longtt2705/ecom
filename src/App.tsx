import { Backdrop, CircularProgress, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import firebase from './app/firebase';
import { useAppDispatch, useAppSelector } from './app/hook';
import ConsecutiveSnackbars from './components/ConsecutiveSnackbars';
import router from './router';
import { fetchUserData } from './services/user';
import { setLoading, setUser, setUserData } from './slices/user';
function App() {

  const isAuth = useAppSelector((store) => store.user.isAuth);
  const user = useAppSelector((store) => store.user.user);
  const isLoading = useAppSelector((store) => store.user.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth.onAuthStateChanged(
      function (user) {
        if (user) {
          dispatch(setUser(user));
        } else {
          dispatch(setLoading(false));
        }
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    if (user) {
      const loadUserData = async () => {
        const data = await fetchUserData(user.uid);
        if (data === null) {
          return;
        }
        dispatch(setUserData(data));
      };
      loadUserData();
    }
  }, [user]);

  const content = useRoutes(router(isAuth));

  return (
    <>
      <CssBaseline />
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {content}
      <ConsecutiveSnackbars />
    </>
  );
}

export default App
