import { Module } from '@nestjs/common';
import { CarsService } from './application/services/cars.service';
import { CarsController } from './application/http/cars.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AddCarCommandHandler } from './application/commands/handlers/AddCarCommand.handler';
import { SharedModule } from '../shared/shared.module';
import { InMemoryCarRepository } from './infrastructure/repositories/InMemoryCarRepository';
import { AddCarsCommandHandler } from './application/commands/handlers/AddCarsCommand.handler';
import { CarEntityMapper } from './application/mappers/CarEntityMapper';
import { CarDtoMapper } from './application/mappers/CarDtoMapper';
import { AddCarCommandMapper } from './application/mappers/AddCarCommandMapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    CqrsModule,
    SharedModule
  ],
  controllers: [CarsController],
  providers: [
    CarsService,
    AddCarCommandHandler,
    AddCarsCommandHandler,
    InMemoryCarRepository,
    InMemoryDBService,
    CarEntityMapper,
    CarDtoMapper,
    AddCarCommandMapper
  ]
})
export class CarsModule {}
