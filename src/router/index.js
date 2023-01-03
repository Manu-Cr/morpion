import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GrilleView from "@/views/GrilleView";
import RegleView from "@/views/RegleView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/grille',
    name: 'grille',
    component: GrilleView
  },
  {
    path: '/regle',
    name: 'regle',
    component: RegleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
