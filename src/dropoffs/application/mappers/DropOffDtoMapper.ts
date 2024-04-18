import { DropOffDto } from '../dto/DropOffDto';
import { DropOff } from '../../domain/DropOff';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DropOffDtoMapper implements Mapper<DropOffDto, DropOff> {
  to(dropOffDto: DropOffDto): DropOff {
    return new DropOff(dropOffDto.id, dropOffDto.seats);
  }

  from(dropOff: DropOff): DropOffDto {
    return {
      id: dropOff.getId(),
      seats: dropOff.getNumberOfSeats(),
    };
  }
}
