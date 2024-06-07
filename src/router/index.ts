import { createRouter, createWebHistory } from 'vue-router';

import TempjobView from '@/pages/TempjobView.vue';
import RegisterView from '@/pages/RegisterView.vue';
import RegisterDetails from '@/pages/RegisterDetails.vue';
import LoginView from '@/pages/LoginView.vue';
import JobCreate from '@/pages/JobCreate.vue';
import JobDetails from '@/pages/JobDetails.vue';
import WelcomeView from '@/pages/WelcomeView.vue';

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
    component: RegisterView
  },
  {
    path: '/register-details',
    name: 'RegisterDetails',
    component: RegisterDetails
  },
  {
    path: '/tempjob',
    name: 'TempJob',
    component: TempjobView
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
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
