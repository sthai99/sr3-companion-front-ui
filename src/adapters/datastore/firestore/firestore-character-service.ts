import firebase from 'firebase/app';
import { injectable } from 'inversify';
import Character from '@/store/models/character';
import CharacterService from '@/services/character-service';
import CharacterConverter from './character-converter';

@injectable()
class FirestoreCharacterService implements CharacterService {
  async findAllByUserId(userId: string): Promise<Array<Character>> {
    const db = firebase.firestore();
    try {
      const querySnapshot = await db.collection('characters').where('author', '==', userId).withConverter(new CharacterConverter()).get();
      return querySnapshot.docs.map((doc) => doc.data());
    } catch (error) {
      return [];
    }
  }
}

export default FirestoreCharacterService;
