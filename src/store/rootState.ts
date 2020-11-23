import firebase from 'firebase/app';
import Character from './models/character';

class RootState {
  user?: firebase.User;

  characters: Array<Character> = [];
}

export default RootState;
