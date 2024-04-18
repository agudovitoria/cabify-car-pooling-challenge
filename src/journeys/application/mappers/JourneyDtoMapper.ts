import { JourneyDto } from '../dto/JourneyDto';
import { Journey } from '../../domain/Journey';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JourneyDtoMapper implements Mapper<JourneyDto, Journey> {
  to(journeyDto: JourneyDto): Journey {
    return new Journey(journeyDto.id, journeyDto.people);
  }

  from(journey: Journey): JourneyDto {
    return new JourneyDto(journey.getId(), journey.getPeople());
  }
}
