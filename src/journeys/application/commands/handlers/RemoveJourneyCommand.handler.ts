import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { JourneyRepository } from '../../../domain/Journey.repository';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { InMemoryJourneyRepository } from '../../../infrastructure/repositories/InMemoryJourney.repository';
import { RemoveJourneyCommand } from '../impl/RemoveJourney.command';

@CommandHandler(RemoveJourneyCommand)
export class RemoveJourneyCommandHandler
  implements ICommandHandler<RemoveJourneyCommand>
{
  private readonly logger = new CustomConsoleLogger(
    RemoveJourneyCommandHandler.name
  );
  constructor(
    @Inject(InMemoryJourneyRepository)
    private readonly repository: JourneyRepository
  ) {}

  async execute(command: RemoveJourneyCommand) {
    this.logger.debug(clc.green('Executing RemoveJourney command...'));
    this.repository.delete(command.baseDto.id.toString());
  }
}
