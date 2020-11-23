import firebase from 'firebase/app';
import Character from './models/character';
import MutationTypes from './mutation-types';
import RootState from './rootState';

const mutations = {
  [MutationTypes.SET_USER]: (state: RootState, user: firebase.User) => {
    state.user = user;
  },
  [MutationTypes.SET_CHARACTERS]: (state: RootState, characters: Array<Character>) => {
    state.characters = characters;
  },
};

export default mutations;
