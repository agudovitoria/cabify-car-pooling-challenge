import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from '../services/cars.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { CarDto } from '../dto/CarDto';

describe('CarsController', () => {
  let controller: CarsController;
  let carsServiceMock: DeepMocked<CarsService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        {
          provide: CarsService,
          useValue: createMock<CarsService>()
        }
      ]
    }).compile();

    controller = module.get<CarsController>(CarsController);
    carsServiceMock = module.get<DeepMocked<CarsService>>(CarsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call to addCars method from service when createCars method is called', () => {
    const carDtoMock: CarDto = new CarDto(1, 4);
    const carDtoMocks: CarDto[] = [carDtoMock];
    controller.createCars(carDtoMocks);

    expect(carsServiceMock.addCars).toHaveBeenCalledTimes(1);
    expect(carsServiceMock.addCars).toHaveBeenCalledWith(carDtoMocks);
  });
});
