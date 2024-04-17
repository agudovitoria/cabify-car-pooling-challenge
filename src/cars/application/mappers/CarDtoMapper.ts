import { CarDto } from '../dto/CarDto';
import { Car } from '../../domain/Car';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarDtoMapper implements Mapper<CarDto, Car> {
  to(carDto: CarDto): Car {
    return new Car(carDto.id, carDto.seats);
  }

  from(car: Car): CarDto {
    return {
      id: car.getId(),
      seats: car.getNumberOfSeats()
    };
  }
}
