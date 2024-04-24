import { JourneyRepository } from '../../domain/Journey.repository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { JourneyEntity } from '../../domain/JourneyEntity';

@Injectable()
export class InMemoryJourneyRepository implements JourneyRepository {
  private readonly logger = new CustomConsoleLogger(
    InMemoryJourneyRepository.name
  );

  constructor(
    private readonly journeyEntityInMemoryDBService: InMemoryDBService<JourneyEntity>
  ) {}

  delete(id: string): void {
    this.journeyEntityInMemoryDBService.delete(id);
  }

  findById(id: string): JourneyEntity | null {
    return this.journeyEntityInMemoryDBService.get(id);
  }

  save(journeyEntity: JourneyEntity): void {
    this.logger.debug(`Creating journey ${journeyEntity.id}`);
    this.journeyEntityInMemoryDBService.create(journeyEntity);
  }

  update(journeyEntity: JourneyEntity): void {
    this.journeyEntityInMemoryDBService.update(journeyEntity);
  }
}
