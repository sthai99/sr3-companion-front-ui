import { Container } from 'inversify';
import TYPES from '@/services/types';
import FirestoreCharacterService from '@/adapters/datastore/firestore/firestore-character-service';
import FilesSkillService from '@/adapters/datastore/files/files-skill-service';
import CharacterService from './services/character-service';
import SkillService from './services/skill-service';

const container = new Container();
container.bind<CharacterService>(TYPES.CharacterService).to(FirestoreCharacterService);
container.bind<SkillService>(TYPES.SkillService).to(FilesSkillService);

export default container;
