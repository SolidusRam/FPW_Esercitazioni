import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContattiView from '@/views/Contatti.vue'
import NewsView from '@/views/News.vue'
import AboutView from '@/views/About.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: AboutView,

      //oppure per importare il componente in modo lazy

      component:AboutView,
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: ContattiView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
  ],
})

export default router
