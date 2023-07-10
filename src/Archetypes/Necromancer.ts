import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Necromancer.count += 1;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }
}

export default Necromancer;