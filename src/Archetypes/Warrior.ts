import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Warrior.count += 1;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }
}

export default Warrior;