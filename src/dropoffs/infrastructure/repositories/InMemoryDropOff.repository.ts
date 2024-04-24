import { DropOffRepository } from '../../domain/DropOff.repository';
import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { DropOffEntity } from '../../domain/DropOffEntity';

@Injectable()
export class InMemoryDropOffRepository implements DropOffRepository {
  private readonly logger = new CustomConsoleLogger(
    InMemoryDropOffRepository.name
  );

  constructor(
    private readonly dropOffEntityInMemoryDBService: InMemoryDBService<DropOffEntity>
  ) {}

  delete(id: string): void {
    this.dropOffEntityInMemoryDBService.delete(id);
  }
}
