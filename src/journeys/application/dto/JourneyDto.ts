import { IsInt, IsPositive, Max, Min } from 'class-validator';
import { BaseDto } from '../../../shared/domain/BaseDto';

export class JourneyDto extends BaseDto {
  constructor(id: number, people: number) {
    super(id);
    this.people = people;
  }

  @Min(2, { message: 'Journey passengers  cannot be lower than 2.' })
  @Max(6, { message: 'Journey passengers cannot be greater than 6.' })
  people: number;
}
