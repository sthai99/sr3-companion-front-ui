import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import RootState from './rootState';

const initialState = () => new RootState();

export default createStore({
  state: initialState(),
  mutations,
  actions,
  getters,
  modules: {
  },
});
