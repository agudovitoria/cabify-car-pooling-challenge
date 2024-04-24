import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CarRepository } from '../../../domain/Car.repository';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { InMemoryCarRepository } from '../../../infrastructure/repositories/InMemoryCar.repository';
import { AddCarsCommand } from '../impl/AddCars.command';
import { CarEntityMapper } from '../../mappers/CarEntity.mapper';

@CommandHandler(AddCarsCommand)
export class AddCarsCommandHandler implements ICommandHandler<AddCarsCommand> {
  private readonly logger = new CustomConsoleLogger(AddCarsCommandHandler.name);
  constructor(
    private readonly carEntityMapper: CarEntityMapper,
    @Inject(InMemoryCarRepository) private readonly repository: CarRepository
  ) {}

  async execute(command: AddCarsCommand) {
    this.logger.debug(clc.green('Executing AddCars command...'));

    for (const car of command.cars) {
      this.repository.save(this.carEntityMapper.from(car));
    }
  }
}
