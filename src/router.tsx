import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

import SuspenseLoader from './components/SuspenseLoader';
import HomeLayout from './layouts/HomeLayout';

const Loader =
  (Component: React.LazyExoticComponent<() => JSX.Element>) =>
    (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

// Pages
const Login = Loader(
  lazy(() => import('./pages/Login'))
);

const Register = Loader(
  lazy(() => import('./pages/Register'))
);

const Home = Loader(
  lazy(() => import('./pages/Home'))
);

const Status404 = Loader(
  lazy(() => import('./pages/Status404'))
);

const Products = Loader(
  lazy(() => import('./pages/ProductDetail'))
);

const Cart = Loader(
  lazy(() => import('./pages/Cart'))
);

const UserProfile = Loader(
  lazy(() => import('./pages/UserProfile'))
);

const Checkout = Loader(
  lazy(() => import('./pages/Checkout'))
);

const Appointment = Loader(
  lazy(() => import('./pages/Appointment'))
);

const OrdersHistory = Loader(
  lazy(() => import('./pages/OrderHistory'))
);

const BookingHistory = Loader(
  lazy(() => import('./pages/BookingHistory'))
);

const Feedback = Loader(
  lazy(() => import('./pages/Feedback'))
);

const routes = (isAuth: boolean): RouteObject[] => {
  return [
    {
      path: '',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: isAuth ? <Navigate to='/dashboard' replace /> : <Login />
        },
        {
          path: 'register',
          element: isAuth ? <Navigate to='/dashboard' replace /> : <Register />
        },
        {
          path: 'products/:id',
          element: <Products />
        },
        {
          path: 'status',
          children: [
            {
              path: '',
              element: <Navigate to="404" replace />
            },
            {
              path: '404',
              element: <Status404 />
            },
          ]
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: '*',
          element: <Status404 />
        }
      ]
    },
    {
      path: 'dashboard',
      element: isAuth ? (
        <DashboardLayout />
      ) : (
        <Navigate to='/login' replace />
      ),
      children: [
        {
          path: '',
          element: <Navigate to="details" replace />
        },
        {
          path: 'appointment',
          element: <Appointment />
        },
        {
          path: 'details',
          element: <UserProfile />
        },
        {
          path: 'bookings',
          element: <BookingHistory />
        },
        {
          path: 'orders-history',
          element: <OrdersHistory />
        },
        {
          path: 'feedback',
          element: <Feedback />
        }
      ]
    }
  ];
};

export default routes;
