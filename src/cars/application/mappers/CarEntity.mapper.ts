import { Car } from '../../domain/Car';
import { CarEntity } from '../../domain/CarEntity';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarEntityMapper implements Mapper<CarEntity, Car> {
  to(carEntity: CarEntity): Car {
    return new Car(carEntity.id, carEntity.numberOfSeats);
  }

  from(car: Car): CarEntity {
    return new CarEntity(car.getId(), car.getNumberOfSeats());
  }
}
