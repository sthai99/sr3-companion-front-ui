import Attributes from './attributes';

class Character {
  private privateId: string;

  private privateName: string;

  private privateRace: string;

  private privateAttributes?: Attributes;

  constructor(id: string, name: string, race: string) {
    this.privateId = id;
    this.privateName = name;
    this.privateRace = race;
  }

  public get id(): string {
    return this.privateId;
  }

  public get name(): string {
    return this.privateName;
  }

  public get race(): string {
    return this.privateRace;
  }

  public get attributes(): Attributes {
    return this.attributes;
  }

  public set attributes(attributes: Attributes) {
    this.attributes = attributes;
  }
}

export default Character;
