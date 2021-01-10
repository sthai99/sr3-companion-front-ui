import Stat from './stat';
import Attributes from './attributes';

class AttributesBuilder {
  private privateBody?: Stat;

  private privateStrength?: Stat;

  private privateQuickness?: Stat;

  private privateCharisma?: Stat;

  private privateIntelligence?: Stat;

  private privateWillpower?: Stat;

  private privateReaction?: Stat;

  withBody(body: Stat): AttributesBuilder {
    this.privateBody = body;
    return this;
  }

  withStrength(strength: Stat): AttributesBuilder {
    this.privateStrength = strength;
    return this;
  }

  withQuickness(quickness: Stat): AttributesBuilder {
    this.privateQuickness = quickness;
    return this;
  }

  withCharisma(charisma: Stat): AttributesBuilder {
    this.privateCharisma = charisma;
    return this;
  }

  withIntelligence(intelligence: Stat): AttributesBuilder {
    this.privateIntelligence = intelligence;
    return this;
  }

  withWillpower(willpower: Stat): AttributesBuilder {
    this.privateWillpower = willpower;
    return this;
  }

  withReaction(reaction: Stat): AttributesBuilder {
    this.privateReaction = reaction;
    return this;
  }

  build(): Attributes | Error {
    if (this.privateBody && this.privateQuickness && this.privateCharisma
      && this.privateIntelligence && this.privateStrength && this.privateWillpower
      && this.privateReaction) {
      return new Attributes(this.privateBody,
        this.privateStrength,
        this.privateQuickness,
        this.privateCharisma,
        this.privateIntelligence,
        this.privateWillpower,
        this.privateReaction);
    }
    return new Error('Missing parameters for Attributes.Builder');
  }
}

export default AttributesBuilder;
