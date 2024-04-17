import { Car } from '../../domain/Car';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';
import { AddCarCommand } from '../commands/impl/AddCar.command';

@Injectable()
export class AddCarCommandMapper implements Mapper<AddCarCommand, Car>{
  to(addCarCommand: AddCarCommand): Car {
    return new Car(addCarCommand.carId, addCarCommand.numberOfSeats);
  }

  from(car: Car): AddCarCommand {
    return {
      carId: car.getId(),
      numberOfSeats: car.getNumberOfSeats()
    };
  }
}
