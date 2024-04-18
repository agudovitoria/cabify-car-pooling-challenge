import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

@Entity()
export class DropOffEntity implements InMemoryDBEntity {
  constructor(id: string, numberOfSeats: number) {
    this.id = id;
    this.numberOfSeats = numberOfSeats;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  numberOfSeats: number;
}
