import { Repository } from '../../shared/domain/Repository';
import { CarEntity } from './CarEntity';

export interface CarRepository extends Repository<CarEntity>{}
