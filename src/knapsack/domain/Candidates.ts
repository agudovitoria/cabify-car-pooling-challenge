import { Item, Items } from '../application/services/knapsack.service';
import { Optional } from 'typescript-optional';

export class Candidates extends Map<number, Items> {
  private hasNoChildren(key: number) {
    return this.get(key).length === 0;
  }

  getOptionalFirstCandidateForWeight(weight: number): Optional<Item> {
    return Optional.ofNullable(this.get(weight)?.shift() ?? null);
  }

  removeIfEmpty(key: number) {
    if (this.hasNoChildren(key)) {
      this.delete(key);
    }
  }

  static from(items: [number, Items][]): Candidates {
    return new Candidates(new Map(items));
  }
}
