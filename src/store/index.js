import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const requireModule = require.context('./modules', true, /\.js$/);
const module = {};
requireModule.keys().forEach((key) => {
  const moduleName = key.replace(/(\.\/|.*\/|\.js)/g, '');
  module[moduleName] = {
    ...requireModule(key).default,
  };
});

export const store = createStore({
  modules: {
    ...module,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 修改存储的状态
    }),
  ], // 状态持久化
});
