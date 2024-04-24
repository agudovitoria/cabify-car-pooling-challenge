import { BaseEntity } from '../../../../shared/domain/BaseEntity';

export class ExistsGroupQuery {
  constructor(public readonly group: BaseEntity) {}
}
