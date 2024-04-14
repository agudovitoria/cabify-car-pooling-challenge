import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CarsModule,
    SharedModule
  ],
})
export class AppModule {}
