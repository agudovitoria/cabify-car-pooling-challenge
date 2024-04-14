export class CarNotFoundException extends Error {
  constructor(id: string) {
    super(`Car not found with id "${id}"`);
  }
}
