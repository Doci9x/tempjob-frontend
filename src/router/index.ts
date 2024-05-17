import { createRouter, createWebHistory } from 'vue-router'

import TempjobView from '@/views/TempjobView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import AdminView from '@/views/AdminDashView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [

    // Start-Seite beim Öffnen der Website
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
      name: 'tempjob',
      component: TempjobView
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminView
    },
  ]
})

export default router
