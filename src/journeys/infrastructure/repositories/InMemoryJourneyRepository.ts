import { JourneyRepository } from '../../domain/JourneyRepository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { JourneyEntity } from '../../domain/JourneyEntity';
import { JourneyIdAlreadyUsedException } from '../../domain/errors/JourneyIdAlreadyUsedException';

@Injectable()
export class InMemoryJourneyRepository implements JourneyRepository {
  private readonly logger = new CustomConsoleLogger(
    InMemoryJourneyRepository.name,
  );

  constructor(
    private readonly journeyEntityInMemoryDBService: InMemoryDBService<JourneyEntity>,
  ) {}

  delete(id: string): void {
    this.journeyEntityInMemoryDBService.delete(id);
  }

  find(): Array<JourneyEntity> {
    return this.journeyEntityInMemoryDBService.getAll();
  }

  findById(id: string): JourneyEntity | null {
    return this.journeyEntityInMemoryDBService.get(id);
  }

  save(journeyEntity: JourneyEntity): void {
    if(this.findById(journeyEntity.id)) {
      throw new JourneyIdAlreadyUsedException(journeyEntity.id);
    }

    this.journeyEntityInMemoryDBService.create(journeyEntity);
    this.logger.debug({ journeys: this.find() });
  }

  update(journeyEntity: JourneyEntity): void {
    this.journeyEntityInMemoryDBService.update(journeyEntity);
  }
}
