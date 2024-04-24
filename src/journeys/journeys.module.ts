import { Module } from '@nestjs/common';
import { JourneysService } from './application/services/journeys.service';
import { JourneysController } from './application/http/journeys.controller';
import { SharedModule } from '../shared/shared.module';
import { InMemoryJourneyRepository } from './infrastructure/repositories/InMemoryJourney.repository';
import { AddJourneyCommandHandler } from './application/commands/handlers/AddJourneyCommand.handler';
import { JourneyEntityMapper } from './application/mappers/JourneyEntity.mapper';
import { JourneyDtoMapper } from './application/mappers/JourneyDto.mapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ExistsGroupQueryHandler } from './application/queries/handlers/ExistsGroupQuery.handler';
import { RemoveJourneyCommandHandler } from './application/commands/handlers/RemoveJourneyCommand.handler';

@Module({
  imports: [SharedModule],
  controllers: [JourneysController],
  providers: [
    InMemoryDBService,
    JourneysService,
    AddJourneyCommandHandler,
    RemoveJourneyCommandHandler,
    ExistsGroupQueryHandler,
    InMemoryJourneyRepository,
    JourneyEntityMapper,
    JourneyDtoMapper
  ]
})
export class JourneysModule {}
