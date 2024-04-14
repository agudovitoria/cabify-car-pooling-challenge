import { CarDto } from '../../dto/CarDto';

export class AddCarsCommand {
  constructor(public readonly carDtos: CarDto[]) {}
}
