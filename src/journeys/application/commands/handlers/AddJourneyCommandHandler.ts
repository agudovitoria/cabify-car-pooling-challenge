import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { JourneyRepository } from '../../../domain/JourneyRepository';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { InMemoryJourneyRepository } from '../../../infrastructure/repositories/InMemoryJourneyRepository';
import { JourneyEntityMapper } from '../../mappers/JourneyEntityMapper';
import { AddJourneyCommand } from '../impl/AddJourney.command';

@CommandHandler(AddJourneyCommand)
export class AddJourneyCommandHandler
  implements ICommandHandler<AddJourneyCommand>
{
  private readonly logger = new CustomConsoleLogger(AddJourneyCommandHandler.name);
  constructor(
    private readonly journeyEntityMapper: JourneyEntityMapper,
    @Inject(InMemoryJourneyRepository) private readonly repository: JourneyRepository,
  ) {}

  async execute(command: AddJourneyCommand) {
    this.logger.debug(clc.green('Executing AddJourneys command...'));
    this.repository.save(this.journeyEntityMapper.from(command.journey));
    this.logger.debug(clc.green('Executed AddJourneys command...'), {
      journeys: this.repository.find(),
    });
  }
}
