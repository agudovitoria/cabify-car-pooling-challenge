import { Column, Entity, PrimaryColumn } from 'typeorm';
import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

@Entity()
export class JourneyEntity implements InMemoryDBEntity {
  constructor(id: string, numberOfSeats: number) {
    this.id = id;
    this.numberOfSeats = numberOfSeats;
    this.insertedAt = new Date();
  }

  @PrimaryColumn({
    unique: true
  })
  id: string;

  @Column('int')
  numberOfSeats: number;

  @Column('date')
  insertedAt: Date;
}
