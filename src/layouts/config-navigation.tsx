
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const navConfig = [
  {
    title: 'User Profile',
    path: '/dashboard/details',
    icon: <AssignmentIndIcon />
  },
  {
    title: 'Bookings History',
    path: '/dashboard/bookings',
    icon: <DomainAddIcon />
  },
  {
    title: 'Orders History',
    path: '/dashboard/orders-history',
    icon: <ShoppingBagIcon />
  },
];

export default navConfig;
