class Skill {
  name: String;

  constructor(name: String) {
	this.name = name;
  }
}

class SkillGroup {
	skills: Array<Skill> = [];

	constructor(skills: Array<Skill>) {
		this.skills.push(...skills);
	}
}

class AttributeGroup {
	name: String;

	skillGroups: Array<SkillGroup> = [];

	constructor(name: String, skillGroups: Array<SkillGroup>) {
		this.name = name;
		this.skillGroups.push(...skillGroups);
	}
}

export {
	Skill,
	SkillGroup,
	AttributeGroup,
}