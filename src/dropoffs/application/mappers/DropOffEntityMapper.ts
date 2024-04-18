import { DropOff } from '../../domain/DropOff';
import { DropOffEntity } from '../../domain/DropOffEntity';
import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DropOffEntityMapper implements Mapper<DropOffEntity, DropOff> {
  to(dropOffEntity: DropOffEntity): DropOff {
    return new DropOff(dropOffEntity.id, dropOffEntity.numberOfSeats);
  }

  from(dropOff: DropOff): DropOffEntity {
    return new DropOffEntity(dropOff.getId(), dropOff.getNumberOfSeats());
  }
}
