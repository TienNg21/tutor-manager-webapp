import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomePage from '@/pages/home/pages/HomePage.vue';
import LoginPage from '@/pages/login/pages/LoginPage.vue';
import RegisterPage from '@/pages/register/pages/RegisterPage.vue';
import SearchPage from '@/pages/search/pages/SearchPage.vue'
import AccountPage from '@/pages/account/pages/AccountPage.vue'
import VerifyPage from '@/pages/verify/pages/VerifyPage.vue';
import AccountInfo from '@/pages/account/components/account/AccountInfo.vue'
import RequiedClass from '@/pages/account/components/required-class/RequiredClass.vue'
import ClassList from '@/pages/account/components/class/ClassList.vue';

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
    }, {
      path: '/account',
      name: 'AccountPage',
      component: AccountPage,
      children: [{
        path: '',
        component: AccountInfo,
      }, {
        path: 'required-class',
        component: RequiedClass,
      }, {
        path: 'class',
        name: 'ClassList',
        component: ClassList,
      }],
    }, {
      path: '/verify/:id/:uniqueString',
      name: 'VerifyPage',
      component: VerifyPage,
    }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
