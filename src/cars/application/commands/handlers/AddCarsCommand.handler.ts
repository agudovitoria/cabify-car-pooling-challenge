import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CarRepository } from '../../../domain/CarRepository';
import { Car } from '../../../domain/Car';
import { Logger } from '../../../../shared/Logger';
import { InMemoryCarRepository } from '../../../infrastructure/repositories/InMemoryCarRepository';
import { AddCarsCommand } from '../impl/AddCars.command';

@CommandHandler(AddCarsCommand)
export class AddCarsCommandHandler implements ICommandHandler<AddCarsCommand> {
  private readonly logger = new Logger(AddCarsCommandHandler.name);
  constructor(
    private readonly publisher: EventPublisher,
    @Inject(InMemoryCarRepository) private readonly repository: CarRepository
  ) {}

  async execute(command: AddCarsCommand) {
    this.logger.log(clc.green('Executing AddCars command...'));

    const { carDtos } = command;

    for (const carDto of carDtos) {
      this.repository.save(new Car(carDto.id, carDto.seats));
    }
  }
}
