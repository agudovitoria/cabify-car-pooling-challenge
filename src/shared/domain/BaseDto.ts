import { IsInt, IsPositive } from 'class-validator';

export class BaseDto {
  constructor(id: number) {
    this.id = id;
  }

  @IsInt({ message: 'Identifier must be a number.' })
  @IsPositive({ message: 'Identifier must be greater than 0.' })
  id: number;
}
