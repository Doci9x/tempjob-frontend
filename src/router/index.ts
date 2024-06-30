import { createRouter, createWebHistory } from 'vue-router';
import TempjobList from '@/components/TempjobList.vue';
import Register from '@/pages/Register/Register.vue';
import LoginView from '@/pages/Login/LoginView.vue';
import JobCreate from '@/pages/Job/JobCreate.vue';
import JobDetails from '@/pages/Job/JobDetails.vue';
import WelcomeView from '@/pages/FirstWelcome/WelcomeView.vue';
import AdminDashboard from '@/pages/AdminDashboard/AdminDashboard.vue';
import JobEdit from '@/pages/AdminDashboard/JobEdit.vue';
import UserEdit from '@/pages/AdminDashboard/UserEdit.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/tempjob',
    name: 'TempJob',
    component: TempjobList
  },
  {
    path: '/job-create',
    name: 'JobCreate',
    component: JobCreate
  },
  {
    path: '/job/:id',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/job-edit/:id',
    name: 'JobEdit',
    component: JobEdit
  },
  {
    path: '/user-edit/:id',
    name: 'UserEdit',
    component: UserEdit
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;