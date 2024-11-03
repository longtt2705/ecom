
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FeedbackIcon from '@mui/icons-material/Feedback';

const navConfig = [
  {
    title: 'Trang Cá Nhân',
    path: '/dashboard/details',
    icon: <AssignmentIndIcon />
  },
  {
    title: 'Lịch Sử Mua',
    path: '/dashboard/bookings',
    icon: <DomainAddIcon />
  },
  {
    title: 'Lịch Sử Đặt Dịch Vụ',
    path: '/dashboard/orders-history',
    icon: <ShoppingBagIcon />
  },
  {
    title: 'Tích Điểm',
    path: '/dashboard/appointment',
    icon: <LocalHospitalIcon />
  },
  {
    title: 'Đăng Bài',
    path: '/dashboard/feedback',
    icon: <FeedbackIcon />
  }
];

export default navConfig;
