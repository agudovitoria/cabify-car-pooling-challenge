export class Car {
  constructor(
    private readonly id: string,
    private readonly numberOfSeats: number,
  ) {}

  getId(): string {
    return this.id;
  }
}
