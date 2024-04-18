export class DropOffNotFoundException extends Error {
  constructor(id: string) {
    super(`DropOff not found with id "${id}"`);
  }
}
