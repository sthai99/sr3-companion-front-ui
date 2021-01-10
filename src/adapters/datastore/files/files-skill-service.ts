import { injectable } from 'inversify';
import SkillService from '@/services/skill-service';
import { AttributeGroup } from '@/store/models/skills';
import skills from './skills.json';

@injectable()
class FilesSkillService implements SkillService {
  async findAll(): Promise<Array<AttributeGroup>> {
    return Promise.resolve(skills);
  }
}

export default FilesSkillService;
