import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CarDto } from '../dto/CarDto';
import { AddCarCommand } from '../commands/impl/AddCar.command';
import { AddCarsCommand } from '../commands/impl/AddCars.command';

@Injectable()
export class CarsService {
  constructor(private commandBus: CommandBus) {}

  async addCar(carDto: CarDto): Promise<void> {
    await this.commandBus.execute(new AddCarCommand(carDto.id, carDto.seats));
  }

  async addCars(carDtos: CarDto[]): Promise<void> {
    await this.commandBus.execute(new AddCarsCommand(carDtos));
  }
}
