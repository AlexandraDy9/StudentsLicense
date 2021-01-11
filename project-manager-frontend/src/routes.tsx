/*!

=========================================================
=========================================================

=========================================================


*/
// @material-ui/icons
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginView from "./app/views/Login/mapping";
import RegisterView from "./app/views/Register/mapping";
import ChooseLicenseView from "./app/views/ChooseLicense/mapping";
import StudentHomeView from './app/views/StudentHome/mapping';
import Logout from './app/views/Logout/Logout';
import TeacherPendingList from './app/views/TeacherPendingList/mapping';
import TeacherHome from './app/views/TeacherHome/mapping';
// core components/views for Admin layout

const dashboardRoutes = [
  {
    path: "/student-home",
    name: "Acasa",
    icon: HomeIcon,
    component: StudentHomeView,
    layout: "/admin",
    hideInNav: false,
    role: "student"
  },
  {
    path: "/teacher-home",
    name: "Acasa",
    icon: HomeIcon,
    component: TeacherHome,
    layout: "/admin",
    hideInNav: false,
    role: "teacher"
  },
  {
    path: "/license",
    name: "Alegere proiect",
    icon: AccountTreeIcon,
    component: ChooseLicenseView,
    layout: "/admin",
    hideInNav: false,
    role: "student"
  },
  // {
  //   path: "/teacher-themes",
  //   name: "Teme propuse",
  //   icon: AccountTreeIcon,
  //   component: TeacherThemes,
  //   layout: "/admin",
  //   hideInNav: false,
  //   role: "teacher"
  // },
  {
    path: "/teacher-pending-list",
    name: "In asteptare",
    icon: AccountTreeIcon,
    component: TeacherPendingList,
    layout: "/admin",
    hideInNav: false,
    role: "teacher"
  },
  {
    path: "/login",
    name: "Autentificare",
    icon: AccountTreeIcon,
    component: LoginView,
    layout: "/admin",
    hideInNav: true,
  },
  {
    path: "/register",
    name: "Inregistrare",
    icon: AccountTreeIcon,
    component: RegisterView,
    layout: "/admin",
    hideInNav: true,
  },
  {
    path: "/logout",
    name: "Delogare",
    icon: ExitToAppIcon,
    component: Logout,
    layout: "/admin",
    hideInNav: false,
  },
];

export default dashboardRoutes;
