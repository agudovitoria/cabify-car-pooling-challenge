import { Repository } from '../../shared/domain/Repository';
import { CarEntity } from './Car.entity';

export interface CarRepository extends Repository<CarEntity> {}
