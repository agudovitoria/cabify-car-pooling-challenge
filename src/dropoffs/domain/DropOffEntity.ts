import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

@Entity()
export class DropOffEntity implements InMemoryDBEntity {
  constructor(id: string) {
    this.id = id;
  }

  @PrimaryGeneratedColumn()
  id: string;
}
