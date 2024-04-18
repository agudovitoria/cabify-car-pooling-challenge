export class JourneyIdAlreadyUsedException extends Error {
  constructor(id: string) {
    super(`Journey with id "${id}" already exists`);
  }
}
