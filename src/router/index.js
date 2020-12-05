import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const requireModule = require.context('./modules', true, /\.js$/);
const module = [];
requireModule.keys().forEach((key) => {
  const moduleName = key.replace(/(\.\/|.*\/|\.js)/g, '');
  module.push(...requireModule(key)[`${moduleName}Router`]);
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/collect',
    children: [
      ...module,
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
