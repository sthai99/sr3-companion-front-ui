import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import firebase from 'firebase/app';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ROUTE_NAME from './route-names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ROUTE_NAME.HOME,
    component: Home,
  },
  {
    path: '/login',
    name: ROUTE_NAME.LOGIN,
    component: Login,
  },
  {
    path: '/characters',
    name: ROUTE_NAME.CHARACTERS,
    // route level code-splitting
    // this generates a separate chunk (characters.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "characters" */ '@/views/Characters.vue'),
  },
  {
    path: '/references',
    name: ROUTE_NAME.REFERENCE,
    component: () => import(/* webpackChunkName: "references" */ '@/views/References.vue'),
    children: [
      {
        path: 'attributes',
        name: ROUTE_NAME.ATTRIBUTES,
        component: () => import(/* webpackChunkName: "attributes" */ '@/views/Attributes.vue'),
      },
      {
        path: 'skills',
        name: ROUTE_NAME.SKILLS,
        component: () => import(/* webpackChunkName: "skills" */ '@/views/Skills.vue'),
      },
    ]
    ,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const authenticated = !!firebase.auth().currentUser;
  if (to.name === ROUTE_NAME.LOGIN) {
    if (authenticated) {
      return { name: ROUTE_NAME.HOME };
    }
  } else if (!authenticated) {
    return { name: ROUTE_NAME.LOGIN };
  }
  return true;
});

export default router;
