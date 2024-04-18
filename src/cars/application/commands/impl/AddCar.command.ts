import { Car } from '../../../domain/Car';

export class AddCarCommand {
  constructor(public readonly car: Car) {}
}
