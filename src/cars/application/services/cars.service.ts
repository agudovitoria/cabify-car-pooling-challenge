import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CarDto } from '../dto/CarDto';
import { AddCarsCommand } from '../commands/impl/AddCars.command';
import { CarDtoMapper } from '../mappers/CarDtoMapper';

@Injectable()
export class CarsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly carDtoMapper: CarDtoMapper
  ) {}

  async addCars(carDtos: CarDto[]): Promise<void> {
    const cars = carDtos.map((carDto: CarDto) => this.carDtoMapper.to(carDto));
    await this.commandBus.execute(new AddCarsCommand(cars));
  }
}
