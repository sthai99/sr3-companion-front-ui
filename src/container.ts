import { Container } from 'inversify';
import TYPES from '@/services/types';
import FirestoreCharacterService from '@/adapters/datastore/firestore/firestore-character-service';
import CharacterService from './services/character-service';

const container = new Container();
container.bind<CharacterService>(TYPES.CharacterService).to(FirestoreCharacterService);

export default container;
