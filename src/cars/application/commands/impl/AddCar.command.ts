export class AddCarCommand {
  constructor(
    public readonly carId: string,
    public readonly numberOfSeats: number,
  ) {}
}
