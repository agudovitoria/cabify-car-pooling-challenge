export class GroupToDropOffCannotBeDeletedException extends Error {
  constructor(id: number) {
    super(`Group with id "${id}" cannot be deleted`);
  }
}
