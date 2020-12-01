import Character from '../store/models/character';

interface CharacterService {
    findAllByUserId(userId: string): Promise<Array<Character>>
}

export default CharacterService;