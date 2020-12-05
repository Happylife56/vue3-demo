export const financialRouter = [
  {
    path: '/financial',
    name: 'financial',
    meta: { title: '财务' },
    component: () => import(/* webpackChunkName: "financial" */'@/views/financial/index.vue'),
  },
];
