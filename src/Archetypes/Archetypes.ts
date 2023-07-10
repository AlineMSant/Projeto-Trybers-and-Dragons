import { EnergyType } from '../Energy';

abstract class Archetypes {
  protected _name: string;
  protected _special: number;
  protected _cost: number;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._special = 0; 
    this._cost = 0;
  }

  get name(): string {
    return this.name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetypes;