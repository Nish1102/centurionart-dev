import Dashboard from '../pages/Dashboard';
import LoginComponent from '../components/loging/LoginComponent';
import RegistrationComponent from '../pages/RegisterComponent';
import BuyerDashboard from '../components/dashboard/buyerdashboard/BuyerDashboard';
import ResellerDashboard from '../components/dashboard/resellerdashboard/ResellerDashboard';
import VendorDashboard from '../components/dashboard/vendordashboard/VendorDashboard';
import AdminDashboard from '../components/dashboard/admindashboard/AdminDashboard';
import ArtGalleryLanding from '../components/landingpage/LandingPage';
import Unauthorized from '../pages/Unauthorized';
import { AuthGuard } from '../guards/AuthGuard';
import { RoleGuard } from '../guards/RoleGuard';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ArtEdit from '../components/dashboard/resellerdashboard/ArtEdit';

export const routes = [
  {
    path: '/',
    name: 'Landing',
    component: ArtGalleryLanding
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationComponent,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
   component: DashboardLayout,
    guard: AuthGuard
  },
  {
    path: '/collector-dashboard',
    name: 'Buyer Dashboard',
    component: BuyerDashboard,
    guard: (props) => <RoleGuard {...props} roles={['collector']} />
  },
  {
    path: '/artists-dashboard',
    name: 'Artists Dashboard',
    component: DashboardLayout,
    guard: (props) => <RoleGuard {...props} roles={['artist']} />
  },
  {
    
    path: '/vendor-dashboard',
    name: 'Vendor Dashboard',
    component: VendorDashboard,
    guard: (props) => <RoleGuard {...props} roles={['vendor']} />
  },
  {
    path: '/admin-dashboard',
    name: 'Admin Dashboard',
    component: AdminDashboard,
    guard: (props) => <RoleGuard {...props} roles={['admin']} />
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized
  }
];