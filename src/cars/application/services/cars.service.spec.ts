import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { CommandBus } from '@nestjs/cqrs';
import { CarDtoMapper } from '../mappers/CarDto.mapper';
import { CarDto } from '../dto/CarDto';
import { Car } from '../../domain/Car';
import { AddCarsCommand } from '../commands/impl/AddCars.command';

describe('CarsService', () => {
  let service: CarsService;
  let commandBusMock: DeepMocked<CommandBus>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsService,
        CarDtoMapper,
        {
          provide: CommandBus,
          useValue: createMock<CommandBus>()
        }
      ]
    }).compile();

    service = module.get<CarsService>(CarsService);
    commandBusMock = module.get<DeepMocked<CommandBus>>(CommandBus);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should execute command bus for cars', () => {
    const carDtoMock: CarDto = new CarDto(1, 4);
    const carDtoMocks: CarDto[] = [carDtoMock];
    service.addCars(carDtoMocks);

    expect(commandBusMock.execute).toHaveBeenCalledTimes(1);

    const carMocks: Car[] = carDtoMocks.map((carDtoMock: CarDto) =>
      new CarDtoMapper().to(carDtoMock)
    );
    expect(commandBusMock.execute).toHaveBeenCalledWith(
      new AddCarsCommand(carMocks)
    );
  });
});
