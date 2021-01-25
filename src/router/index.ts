import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import note from './note';

const R = (name: string) => () => import(`@/views/${name}.vue`);

Vue.use(Router);

const RoutesConfig: RouteConfig[] = [
  ...note,
  {
    name: 'Home',
    path: '/',
    component: R('Home'),
    meta: {
      title: '首页',
    },
  }, {
    name: 'About',
    path: '/about',
    component: R('About'),
    meta: {
      title: '关于',
    },
  }, {
    name: 'NotFound',
    path: '*',
    component: R('NotFound'),
    meta: {
      title: '404',
    },
  },
];

const createRouter = () => new Router({
  mode: 'hash',
  routes: RoutesConfig,
});
const router = createRouter();

router.beforeEach((to: any, from: any, next: () => void): void => {
  const title = to.meta && to.meta.title ? to.meta.title : '首页';
  document.title = title;

  // check login, so that ...
});

router.afterEach((to: any, from: any): void => {
  // do something ...
});

router.onError((error: any) => {
  // do something ...
});

export default router;
