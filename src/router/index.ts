import { createRouter, createWebHistory } from 'vue-router'

import TempjobView from "@/views/TempjobView.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [

    // Start-Seite beim Öffnen der Website
    {
      path: '/',
      redirect: '/home' // Füge eine Umleitung von '/' zu '/home' hinzu
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/tempjob',
      name: 'tempjob',
      component: TempjobView
    },
  ]
})

export default router
