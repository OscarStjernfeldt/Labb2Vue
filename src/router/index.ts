import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SavedWorkoutsView from '../views/SavedWorkoutsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/saved-workouts',
      name: 'saved-workouts',
      component: SavedWorkoutsView
    }
  ]
})

export default router
