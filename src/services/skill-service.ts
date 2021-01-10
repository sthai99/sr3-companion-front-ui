import { AttributeGroup } from "@/store/models/skills";

interface SkillService {
    findAll(): Promise<Array<AttributeGroup>>;
}

export default SkillService;