import { Journey } from '../../domain/Journey';
import { JourneyEntity } from '../../domain/JourneyEntity';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JourneyEntityMapper implements Mapper<JourneyEntity, Journey> {
  to(journeyEntity: JourneyEntity): Journey {
    return new Journey(parseInt(journeyEntity.id), journeyEntity.numberOfSeats);
  }

  from(journey: Journey): JourneyEntity {
    return new JourneyEntity(journey.getId().toString(), journey.getPeople());
  }
}
