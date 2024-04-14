import { Body, Controller, Inject, Logger, Put } from '@nestjs/common';
import { CarDto } from '../../application/dto/CarDto';
import { CarsService } from '../../application/services/cars.service';

@Controller('cars')
export class CarsController {
  private readonly logger = new Logger(CarsController.name);
  constructor(@Inject(CarsService) private readonly carsService: CarsService) {}

  @Put()
  async createCars(@Body() cars: CarDto[]): Promise<void> {
    await this.carsService.addCars(cars);
  }
}
