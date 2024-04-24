import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { DropOffEntityMapper } from '../../mappers/DropOffEntity.mapper';
import { AddDropOffCommand } from '../impl/AddDropOff.command';
import { InMemoryDropOffRepository } from '../../../infrastructure/repositories/InMemoryDropOff.repository';

@CommandHandler(AddDropOffCommand)
export class AddDropOffCommandHandler
  implements ICommandHandler<AddDropOffCommand>
{
  private readonly logger = new CustomConsoleLogger(
    AddDropOffCommandHandler.name
  );
  constructor(
    private readonly dropOffEntityMapper: DropOffEntityMapper,
    private readonly repository: InMemoryDropOffRepository
  ) {}

  async execute(command: AddDropOffCommand) {
    this.logger.debug(clc.green('Executing AddDropOff command...'));
    const dropOffEntity = this.dropOffEntityMapper.from(command.dropOff);
    this.repository.delete(dropOffEntity.id);
  }
}
