import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { JourneysModule } from './journeys/journeys.module';
import { DropOffsModule } from './dropoffs/dropOffs.module';

@Module({
  imports: [ConfigModule.forRoot(), CarsModule, JourneysModule, DropOffsModule],
})
export class AppModule {}
