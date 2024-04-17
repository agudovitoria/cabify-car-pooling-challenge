import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddCarCommand } from '../impl/AddCar.command';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CarRepository } from '../../../domain/CarRepository';
import { Logger } from '../../../../shared/application/Logger';
import { InMemoryCarRepository } from '../../../infrastructure/repositories/InMemoryCarRepository';
import { AddCarCommandMapper } from '../../mappers/AddCarCommandMapper';
import { CarEntityMapper } from '../../mappers/CarEntityMapper';

@CommandHandler(AddCarCommand)
export class AddCarCommandHandler implements ICommandHandler<AddCarCommand> {
  private readonly logger = new Logger(AddCarCommandHandler.name);
  constructor(
    private readonly publisher: EventPublisher,
    private readonly carEntityMapper: CarEntityMapper,
    private readonly addCarCommandMapper: AddCarCommandMapper,
    @Inject(InMemoryCarRepository) private readonly repository: CarRepository
  ) {}

  async execute(command: AddCarCommand) {
    this.logger.log(clc.green('Executing AddCar command...'));
    this.repository.save(
      this.carEntityMapper.from(this.addCarCommandMapper.to(command)),
    );
  }
}
