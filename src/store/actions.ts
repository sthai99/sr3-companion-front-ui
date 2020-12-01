import container from '@/container';
import firebase from 'firebase/app';
import { Commit } from 'vuex';
import TYPES from '@/services/types';
import CharacterService from '@/services/character-service';
import ActionTypes from './action-types';
import MutationTypes from './mutation-types';

const characterService = container.get<CharacterService>(TYPES.CharacterService);

const actions = {
  [ActionTypes.CHANGE_USER]: ({ commit }: { commit: Commit }, user: firebase.User) => {
    commit(MutationTypes.SET_USER, user);
    return characterService.findAllByUserId(user.uid)
      .then((characters) => commit(MutationTypes.SET_CHARACTERS, characters))
      .catch((error) => {
        console.log('Error getting characters: ', error);
      });
  },
  [ActionTypes.RESET_USER]: ({ commit }: { commit: Commit }) => {
    commit(MutationTypes.SET_USER, undefined);
    commit(MutationTypes.SET_CHARACTERS, []);
  },
};

export default actions;
