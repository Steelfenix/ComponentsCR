import Vue from 'vue';
import VueRouter from 'vue-router';

import Users from '../views/Users.vue';
import Repo from '../views/Repo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/Repo',
    name: 'Repo',
    component: Repo
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
