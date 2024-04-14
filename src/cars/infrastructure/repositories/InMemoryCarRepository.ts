import { CarRepository } from '../../domain/CarRepository';
import { Car } from '../../domain/Car';
import { CarNotFoundException } from '../../domain/errors/CarNotFoundException';
import { Injectable } from '@nestjs/common';
import { Logger } from '../../../shared/Logger';

/**
 * This is a simulated "in memory database"
 * This let me avoid to use any kind of Relational or documental database like SQLite
 */
const cars: Map<string, Car> = new Map();

@Injectable()
export class InMemoryCarRepository implements CarRepository {
  private readonly logger = new Logger(InMemoryCarRepository.name);

  delete(id: string): void {
    if (!cars.has(id)) {
      throw new CarNotFoundException(id);
    }

    cars.delete(id);
  }

  find(): Car[] {
    return Array.from(cars.values());
  }

  findById(id: string): Car | null {
    if (!cars.has(id)) {
      return null;
    }

    return cars.get(id);
  }

  save(car: Car): void {
    this.logger.debug(`InMemoryCarRepository for ${JSON.stringify(car)}`);
    cars.set(car.getId(), car);
    this.logger.debug({ cars: this.find() });
  }

  update(car: Car): void {
    const carId = car.getId();

    if (!cars.has(carId)) {
      throw new CarNotFoundException(carId);
    }

    cars.set(carId, car);
  }
}
