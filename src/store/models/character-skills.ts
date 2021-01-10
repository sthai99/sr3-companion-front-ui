import { Skill } from './skills';
import Stat from './stat';

class Skills {

    private privateActive: Map<Skill, Stat> = new Map();
    private privateKnowledge: Map<Skill, Stat> = new Map();
    private privateLanguage: Map<Skill, Stat> = new Map();

    public get active(): Map<Skill, Stat> {
        return this.privateActive;
    }

    public get knowledge(): Map<Skill, Stat> {
        return this.privateKnowledge;
    }

    public get language(): Map<Skill, Stat> {
        return this.privateLanguage;
    }

}