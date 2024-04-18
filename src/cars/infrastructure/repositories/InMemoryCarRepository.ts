import { CarRepository } from '../../domain/CarRepository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CarEntity } from '../../domain/CarEntity';

@Injectable()
export class InMemoryCarRepository implements CarRepository {
  private readonly logger = new CustomConsoleLogger(InMemoryCarRepository.name);

  constructor(
    private readonly carEntityInMemoryDBService: InMemoryDBService<CarEntity>,
  ) {}

  delete(id: string): void {
    this.carEntityInMemoryDBService.delete(id);
  }

  find(): Array<CarEntity> {
    return this.carEntityInMemoryDBService.getAll();
  }

  findById(id: string): CarEntity | null {
    return this.carEntityInMemoryDBService.get(id);
  }

  save(carEntity: CarEntity): void {
    this.carEntityInMemoryDBService.create(carEntity);
    this.logger.debug({ cars: this.find() });
  }

  update(carEntity: CarEntity): void {
    this.carEntityInMemoryDBService.update(carEntity);
  }
}
