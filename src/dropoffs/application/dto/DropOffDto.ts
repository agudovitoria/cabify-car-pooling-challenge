import { IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class DropOffDto {
  @IsPositive()
  @Type(() => Number) // Needed in order to validated x-ww-form-urlencoded property properly
  id: number;
}
