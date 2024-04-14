import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddCarCommand } from '../impl/AddCar.command';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CarRepository } from '../../../domain/CarRepository';
import { Car } from '../../../domain/Car';
import { Logger } from '../../../../shared/Logger';
import { InMemoryCarRepository } from '../../../infrastructure/repositories/InMemoryCarRepository';

@CommandHandler(AddCarCommand)
export class AddCarCommandHandler implements ICommandHandler<AddCarCommand> {
  private readonly logger = new Logger(AddCarCommandHandler.name);
  constructor(
    private readonly publisher: EventPublisher,
    @Inject(InMemoryCarRepository) private readonly repository: CarRepository
  ) {}

  async execute(command: AddCarCommand) {
    this.logger.log(clc.green('Executing AddCar command...'));

    const {
      carId,
      numberOfSeats
    } = command;

    this.repository.save(new Car(carId, numberOfSeats));
  }
}
