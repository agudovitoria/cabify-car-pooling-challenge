import { DropOffRepository } from '../../domain/DropOffRepository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { DropOffEntity } from '../../domain/DropOffEntity';

@Injectable()
export class InMemoryDropOffRepository implements DropOffRepository {
  private readonly logger = new CustomConsoleLogger(InMemoryDropOffRepository.name);

  constructor(
    private readonly dropOffEntityInMemoryDBService: InMemoryDBService<DropOffEntity>,
  ) {}

  delete(id: string): void {
    this.dropOffEntityInMemoryDBService.delete(id);
  }

  find(): Array<DropOffEntity> {
    return this.dropOffEntityInMemoryDBService.getAll();
  }

  findById(id: string): DropOffEntity | null {
    return this.dropOffEntityInMemoryDBService.get(id);
  }

  save(dropOffEntity: DropOffEntity): void {
    this.dropOffEntityInMemoryDBService.create(dropOffEntity);
    this.logger.debug({ dropOffs: this.find() });
  }

  update(dropOffEntity: DropOffEntity): void {
    this.dropOffEntityInMemoryDBService.update(dropOffEntity);
  }
}
