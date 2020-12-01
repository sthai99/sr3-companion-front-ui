import firebase from 'firebase/app';
import Character from '@/store/models/character';

class CharacterConverter implements firebase.firestore.FirestoreDataConverter<Character> {
  toFirestore(character: Character): firebase.firestore.DocumentData {
    return {
      name: character.name,
      race: character.race,
    };
  }

  fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions): Character {
    const data = snapshot.data(options);
    return new Character(snapshot.id, data.name, data.race);
  }
}

export default CharacterConverter;
