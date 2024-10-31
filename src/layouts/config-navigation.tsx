
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FeedbackIcon from '@mui/icons-material/Feedback';

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
  {
    title: 'Đặt dịch vụ',
    path: '/dashboard/appointment',
    icon: <LocalHospitalIcon />
  },
  {
    title: 'Feedback',
    path: '/dashboard/feedback',
    icon: <FeedbackIcon />
  }
];

export default navConfig;
