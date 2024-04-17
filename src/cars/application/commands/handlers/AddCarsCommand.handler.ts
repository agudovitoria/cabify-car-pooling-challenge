import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CarRepository } from '../../../domain/CarRepository';
import { Logger } from '../../../../shared/application/Logger';
import { InMemoryCarRepository } from '../../../infrastructure/repositories/InMemoryCarRepository';
import { AddCarsCommand } from '../impl/AddCars.command';
import { CarEntityMapper } from '../../mappers/CarEntityMapper';

@CommandHandler(AddCarsCommand)
export class AddCarsCommandHandler implements ICommandHandler<AddCarsCommand> {
  private readonly logger = new Logger(AddCarsCommandHandler.name);
  constructor(
    private readonly publisher: EventPublisher,
    private readonly carEntityMapper: CarEntityMapper,
    @Inject(InMemoryCarRepository) private readonly repository: CarRepository
  ) {}

  async execute(command: AddCarsCommand) {
    this.logger.log(clc.green('Executing AddCars command...'));

    for (const car of command.cars) {
      this.repository.save(this.carEntityMapper.from(car));
    }
  }
}
