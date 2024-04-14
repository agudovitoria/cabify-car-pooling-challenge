import { Module } from '@nestjs/common';
import { CarsService } from './application/services/cars.service';
import { CarsController } from './presentation/api/cars.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AddCarCommandHandler } from './application/commands/handlers/AddCarCommand.handler';
import { SharedModule } from '../shared/shared.module';
import { InMemoryCarRepository } from './infrastructure/repositories/InMemoryCarRepository';
import { AddCarsCommandHandler } from './application/commands/handlers/AddCarsCommand.handler';

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
    InMemoryCarRepository
  ]
})
export class CarsModule {}
