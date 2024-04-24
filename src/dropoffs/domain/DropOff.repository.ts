import { Repository } from '../../shared/domain/Repository';
import { DropOffEntity } from './DropOffEntity';

export interface DropOffRepository extends Partial<Repository<DropOffEntity>> {}
