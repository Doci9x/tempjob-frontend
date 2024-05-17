import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    users: [
      { username: 'user', password: '123', role: 'user' },
      { username: 'admin', password: '123', role: 'admin' },
    ],
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit, state }, { username, password }) {
      const user = state.users.find(user => user.username === username && user.password === password);
      if (user) {
        commit('login', user);
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    isAdmin: state => state.user?.role === 'admin',
    getUser: state => state.user,
  },
});

export default store;
