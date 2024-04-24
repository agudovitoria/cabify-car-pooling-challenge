import { Mapper } from '../../../shared/domain/Mapper';
import { Injectable } from '@nestjs/common';
import { BaseDto } from '../../domain/BaseDto';
import { BaseEntity } from '../../domain/BaseEntity';

@Injectable()
export class BaseDtoMapper implements Mapper<BaseDto, BaseEntity> {
  to(baseDto: BaseDto): BaseEntity {
    return new BaseEntity(baseDto.id);
  }

  from(baseEntity: BaseEntity): BaseDto {
    return new BaseDto(baseEntity.getId());
  }
}
