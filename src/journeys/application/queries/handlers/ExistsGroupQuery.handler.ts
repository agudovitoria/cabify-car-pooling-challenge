import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { JourneyRepository } from '../../../domain/Journey.repository';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';
import { InMemoryJourneyRepository } from '../../../infrastructure/repositories/InMemoryJourney.repository';
import { ExistsGroupQuery } from '../impl/ExistsGroupQuery';

@QueryHandler(ExistsGroupQuery)
export class ExistsGroupQueryHandler
  implements IQueryHandler<ExistsGroupQuery>
{
  private readonly logger = new CustomConsoleLogger(
    ExistsGroupQueryHandler.name
  );
  constructor(
    @Inject(InMemoryJourneyRepository)
    private readonly repository: JourneyRepository
  ) {}

  async execute(query: ExistsGroupQuery): Promise<boolean> {
    this.logger.debug(clc.green('Executing AddJourneys query...'));
    return !!this.repository.findById(query.group.getId().toString());
  }
}
