import Race from './Race';

class Orc extends Race {
  private _maxLife: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 74;
    Orc.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }
}

export default Orc;