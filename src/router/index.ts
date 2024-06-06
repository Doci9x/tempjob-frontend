import { createRouter, createWebHistory } from 'vue-router';

import TempjobView from '@/pages/TempjobView.vue';
import RegisterView from '@/pages/RegisterView.vue';
import LoginView from '@/pages/LoginView.vue';
import JobCreate from '@/pages/JobCreate.vue';
import JobDetails from '@/pages/JobDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/login'
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
      path: '/tempjob',
      name: 'Tempjob',
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
  ]
});

export default router;
