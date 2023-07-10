import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Ranger.count += 1;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }
}

export default Ranger;