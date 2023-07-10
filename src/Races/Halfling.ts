import Race from './Race';

class Halfling extends Race {
  private _maxLife: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }
}

export default Halfling;