import { Module } from '@nestjs/common';
import { CarsService } from './application/services/cars.service';
import { CarsController } from './application/http/cars.controller';
import { SharedModule } from '../shared/shared.module';
import { InMemoryCarRepository } from './infrastructure/repositories/InMemoryCarRepository';
import { AddCarsCommandHandler } from './application/commands/handlers/AddCarsCommand.handler';
import { CarEntityMapper } from './application/mappers/CarEntityMapper';
import { CarDtoMapper } from './application/mappers/CarDtoMapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [SharedModule],
  controllers: [CarsController],
  providers: [
    InMemoryDBService,
    CarsService,
    AddCarsCommandHandler,
    InMemoryCarRepository,
    CarEntityMapper,
    CarDtoMapper,
  ],
})
export class CarsModule {}
