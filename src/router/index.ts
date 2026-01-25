import Dashboard from '@/components/Dashboard.vue'
import Flight from '@/components/Flight.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Welcome from '@/components/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Welcome },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard },
    { path: '/flight', component: Flight },
  ],
})

export default router
