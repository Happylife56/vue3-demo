export const collectRouter = [
  {
    path: '/collect',
    name: 'collect',
    meta: { title: '收银平台' },
    component: () => import(/* webpackChunkName: "collect" */'@/views/collect/index.vue'),
  },
];
