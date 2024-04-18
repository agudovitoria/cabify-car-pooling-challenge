export class Journey {
  constructor(
    private readonly id: number,
    private readonly people: number,
  ) {}

  getId(): number {
    return this.id;
  }

  getPeople(): number {
    return this.people;
  }
}
