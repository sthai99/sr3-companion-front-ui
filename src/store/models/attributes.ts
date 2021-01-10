import Stat from './stat';

class Attributes {
  private privateBody: Stat;

  private privateStrength: Stat;

  private privateQuickness: Stat;

  private privateCharisma: Stat;

  private privateIntelligence: Stat;

  private privateWillpower: Stat;

  private privateReaction: Stat;

  public constructor(body: Stat,
    strength: Stat,
    quickness: Stat,
    charisma: Stat,
    intelligence: Stat,
    willpower: Stat,
    reaction: Stat) {
    this.privateBody = body;
    this.privateStrength = strength;
    this.privateQuickness = quickness;
    this.privateCharisma = charisma;
    this.privateIntelligence = intelligence;
    this.privateWillpower = willpower;
    this.privateReaction = reaction;
  }

  public get body(): Stat {
    return this.privateBody;
  }

  public get strength(): Stat {
    return this.privateStrength;
  }

  public get quickness(): Stat {
    return this.privateQuickness;
  }

  public get charisma(): Stat {
    return this.privateCharisma;
  }

  public get intelligence(): Stat {
    return this.privateIntelligence;
  }

  public get willpower(): Stat {
    return this.privateWillpower;
  }

  public get reaction(): Stat {
    return this.privateReaction;
  }
}

export default Attributes;
