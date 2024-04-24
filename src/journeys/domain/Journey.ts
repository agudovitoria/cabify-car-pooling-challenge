import { BaseEntity } from '../../shared/domain/BaseEntity';

export class Journey extends BaseEntity {
  constructor(
    protected readonly id: number,
    private readonly people: number
  ) {
    super(id);
  }

  getPeople(): number {
    return this.people;
  }
}
