import Vue from 'vue';
import Router from 'vue-router';

const requireContext = require.context('../views/', true, /(\/|\\)[a-zA-Z0-9]+\.vue$/);

const Routes: any[] = [];

Routes.push({
  path: '/',
  redirect: '/home'
});

requireContext.keys().forEach((fileName: string) => {
  const file = fileName.replace(/^\./, '');
  const path = file.replace(/\.vue$/, '');
  const name = path.replace(/(\/)/g, '_');
  Routes.push({
    path,
    name,
    component: () => import(`@/views${file}`),
  });
});

const RoutesVm = new Router({
  routes: Routes,
});

Vue.use(Router);

export default RoutesVm;
