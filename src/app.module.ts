import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { CarsModule } from './cars/cars.module';
import { JourneysModule } from './journeys/journeys.module';
import { DropOffsModule } from './dropoffs/dropOffs.module';
import { KnapSackModule } from './knapsack/knapsack.module';
import { CarAssignmentsModule } from './car-assignments/car-assignments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    CarsModule,
    JourneysModule,
    DropOffsModule,
    KnapSackModule,
    CarAssignmentsModule
  ]
})
export class AppModule {}
