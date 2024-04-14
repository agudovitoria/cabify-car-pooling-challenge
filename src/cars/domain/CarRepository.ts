import { Car } from './Car';

export interface CarRepository {
  find(): Car[];
  findById(id: string): Car | null;

  save(car: Car): void;
  update(car: Car): void;
  delete(id: string): void;
}
