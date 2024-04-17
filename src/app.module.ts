import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { InMemoryDBModule, InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InMemoryDBModule.forRoot(),
    CarsModule,
    SharedModule
  ],
})
export class AppModule {}
