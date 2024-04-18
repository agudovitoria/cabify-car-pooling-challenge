import { Car } from '../../../domain/Car';

export class AddCarsCommand {
  constructor(public readonly cars: Array<Car>) {}
}
