const SET_TOKEN = 'setToken'; // 设置token

const state = {
  token: '', // token
};

const getters = {};

const mutations = {
  // 设置token
  [SET_TOKEN](state, data) {
    state.token = data;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
