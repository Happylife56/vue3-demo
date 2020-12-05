export const orderRouter = [
  {
    path: '/order',
    name: 'order',
    meta: { title: '订单' },
    component: () => import(/* webpackChunkName: "order" */'@/views/order/index.vue'),
  },
];
