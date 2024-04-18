export class DropOff {
  constructor(
    private readonly id: string,
    private readonly numberOfSeats: number,
  ) {}

  getId(): string {
    return this.id;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}