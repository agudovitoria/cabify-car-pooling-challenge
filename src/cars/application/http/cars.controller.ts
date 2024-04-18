import { Body, Controller, Logger, Put } from '@nestjs/common';
import { CarDto } from '../dto/CarDto';
import { CarsService } from '../services/cars.service';

@Controller('cars')
export class CarsController {
  private readonly logger = new Logger(CarsController.name);

  constructor(private readonly carsService: CarsService) {}

  @Put()
  async createCars(@Body() cars: Array<CarDto>): Promise<void> {
    this.logger.debug('Creating cars', { cars });
    await this.carsService.addCars(cars);
  }
}
