import { Repository } from '../../shared/domain/Repository';
import { JourneyEntity } from './JourneyEntity';

export interface JourneyRepository extends Repository<JourneyEntity> {
  getNextUnassigned(): JourneyEntity;
  hasPendingJourneys(): boolean;
}
