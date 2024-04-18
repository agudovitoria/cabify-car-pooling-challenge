import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { DropOffRepository } from '../../../domain/DropOffRepository';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { InMemoryDropOffRepository } from '../../../infrastructure/repositories/InMemoryDropOffRepository';
import { AddDropOffsCommand } from '../impl/AddDropOffs.command';
import { DropOffEntityMapper } from '../../mappers/DropOffEntityMapper';

@CommandHandler(AddDropOffsCommand)
export class AddDropOffsCommandHandler implements ICommandHandler<AddDropOffsCommand> {
  private readonly logger = new CustomConsoleLogger(AddDropOffsCommandHandler.name);
  constructor(
    private readonly dropOffEntityMapper: DropOffEntityMapper,
    @Inject(InMemoryDropOffRepository) private readonly repository: DropOffRepository,
  ) {}

  async execute(command: AddDropOffsCommand) {
    this.logger.debug(clc.green('Executing AddDropOffs command...'));

    for (const dropOff of command.dropOffs) {
      this.repository.save(this.dropOffEntityMapper.from(dropOff));
    }
  }
}
