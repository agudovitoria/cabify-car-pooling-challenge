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

  /**
   * Emulates 'count' behaviour
   */
  hasPendingJourneys(): boolean {
    return this.journeyEntityInMemoryDBService.records.length > 0;
  }

  delete(id: string): void {
    this.journeyEntityInMemoryDBService.delete(id);
  }

  findById(id: string): JourneyEntity | null {
    return this.journeyEntityInMemoryDBService.get(id);
  }

  save(journeyEntity: JourneyEntity): void {
    this.journeyEntityInMemoryDBService.create(journeyEntity);
  }

  update(journeyEntity: JourneyEntity): void {
    this.journeyEntityInMemoryDBService.update(journeyEntity);
  }

  /**
   * Retrieves older inserted journey request
   * Journey which has been longer waiting for a car
   */
  getNextUnassigned(): JourneyEntity {
    const compareByInsertDate = (
      a: JourneyEntity,
      b: JourneyEntity
    ): number => {
      const firstDateTime = a.insertedAt.getTime();
      const secondDateTime = b.insertedAt.getTime();

      if (firstDateTime < secondDateTime) {
        return -1;
      }

      if (firstDateTime > secondDateTime) {
        return 1;
      }

      return 0;
    };

    if (!this.hasPendingJourneys()) {
      this.logger.warn('No journeys waiting for car');
      return;
    }

    return this.journeyEntityInMemoryDBService.records
      .sort(compareByInsertDate)
      .shift();
  }
}
