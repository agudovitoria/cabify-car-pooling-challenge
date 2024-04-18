import { Module } from '@nestjs/common';
import { JourneysService } from './application/services/journeys.service';
import { JourneysController } from './application/http/journeys.controller';
import { SharedModule } from '../shared/shared.module';
import { InMemoryJourneyRepository } from './infrastructure/repositories/InMemoryJourneyRepository';
import { AddJourneyCommandHandler } from './application/commands/handlers/AddJourneyCommandHandler';
import { JourneyEntityMapper } from './application/mappers/JourneyEntityMapper';
import { JourneyDtoMapper } from './application/mappers/JourneyDtoMapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [SharedModule],
  controllers: [JourneysController],
  providers: [
    InMemoryDBService,
    JourneysService,
    AddJourneyCommandHandler,
    InMemoryJourneyRepository,
    JourneyEntityMapper,
    JourneyDtoMapper,
  ],
})
export class JourneysModule {}
