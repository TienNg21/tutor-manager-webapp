import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomePage from '@/pages/home/pages/HomePage.vue';
import LoginPage from '@/pages/login/pages/LoginPage.vue';
import RegisterPage from '@/pages/register/pages/RegisterPage.vue';
import SearchPage from '@/pages/search/pages/SearchPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [{
      path: '/',
      name: 'HomePage',
      component: HomePage,
    }, {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    }, {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    }, {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
