import firebase from 'firebase/app';
import 'firebase/firestore';
import { Commit } from 'vuex';
import ActionTypes from './action-types';
import MutationTypes from './mutation-types';
import CharacterConverter from '../adapters/datastore/character-converter';

const actions = {
  [ActionTypes.CHANGE_USER]: ({ commit }: { commit: Commit }, user: firebase.User) => {
    commit(MutationTypes.SET_USER, user);
    const db = firebase.firestore();
    db.collection('characters').where('author', '==', user.uid).withConverter(new CharacterConverter()).get()
      .then((querySnapshot) => {
        commit(MutationTypes.SET_CHARACTERS, querySnapshot.docs.map((doc) => doc.data()));
      })
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
