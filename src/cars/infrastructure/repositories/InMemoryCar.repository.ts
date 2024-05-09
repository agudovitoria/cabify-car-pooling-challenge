import { CarRepository } from '../../domain/Car.repository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CarEntity } from '../../domain/Car.entity';

@Injectable()
export class InMemoryCarRepository implements Partial<CarRepository> {
  private readonly logger = new CustomConsoleLogger(InMemoryCarRepository.name);

  constructor(
    private readonly carEntityInMemoryDBService: InMemoryDBService<CarEntity>
  ) {}

  save(carEntity: CarEntity): void {
    this.logger.debug('Saving car entity', carEntity);
    this.carEntityInMemoryDBService.create(carEntity);
  }
}
