class Stat {
  private privateNatural: number;

  private privateAugmented?: number;

  constructor(natural: number, augmented?: number) {
    this.privateNatural = natural;
    if (augmented) {
      this.privateAugmented = augmented;
    }
  }

  public get natural(): number {
    return this.privateNatural;
  }

  public get augmented(): number | undefined {
    return this.privateAugmented ? this.privateAugmented : undefined;
  }
}

export default Stat;
