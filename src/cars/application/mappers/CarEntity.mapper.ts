import { Car } from '../../domain/Car';
import { CarEntity } from '../../domain/CarEntity';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarEntityMapper implements Mapper<CarEntity, Car> {
  to(carEntity: CarEntity): Car {
    return new Car(parseInt(carEntity.id, 10), carEntity.numberOfSeats);
  }

  from(car: Car): CarEntity {
    return new CarEntity(car.getId().toString(10), car.getNumberOfSeats());
  }
}
