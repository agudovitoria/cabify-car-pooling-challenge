import { BaseDto } from '../../../shared/domain/BaseDto';
import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class CarDto extends BaseDto {
  constructor(id: number, seats: number) {
    super(id);
    this.seats = seats;
  }

  @IsInt({ message: 'Car seats should be an integer' })
  @IsPositive({ message: 'Car seats should be a positive number' })
  @Min(2, { message: 'Car seats  cannot be lower than 2.' })
  @Max(6, { message: 'Car seats cannot be greater than 6.' })
  seats: number;
}
