export class GroupToDropOffNotFoundException extends Error {
  constructor(id: number) {
    super(`Group with id "${id}" to drop off not found`);
  }
}
