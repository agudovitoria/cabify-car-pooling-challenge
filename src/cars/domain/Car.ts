export class Car {
  constructor(
    private readonly id: number,
    private readonly numberOfSeats: number
  ) {}

  getId(): number {
    return this.id;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
