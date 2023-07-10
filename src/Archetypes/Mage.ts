import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Mage.count += 1;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}

export default Mage;