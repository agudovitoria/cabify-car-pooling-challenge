import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class JourneyDto {
  constructor(id: number, people: number) {
    this.id = id;
    this.people = people;
  }

  @IsInt({ message: 'Identifier must be a number.' })
  @IsPositive({ message: 'Identifier must be greater than 0.' })
  id: number;

  @Min(2, { message: 'Journey passengers  cannot be lower than 2.' })
  @Max(6, { message: 'Journey passengers cannot be greater than 6.' })
  people: number;
}
