export class BaseEntity {
  constructor(protected readonly id: number) {}

  getId(): number {
    return this.id;
  }
}
