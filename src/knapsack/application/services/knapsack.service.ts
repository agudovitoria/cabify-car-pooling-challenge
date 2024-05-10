import { Injectable } from '@nestjs/common';
import { CustomConsoleLogger } from '../../../shared/application/CustomConsoleLogger';
import { Candidates } from '../../domain/Candidates';

export type Item = {
  id: number;
  weight: number;
};

export type Items = Array<Item>;

@Injectable()
export class KnapSackService {
  private readonly logger = new CustomConsoleLogger(KnapSackService.name);
  private result: Items;

  private calculate(
    candidates: Candidates,
    capacity: number,
    weightTarget: number
  ): void {
    const isEqualToZero = (capacity: number): boolean => capacity === 0;
    const noCapacityOrTarget =
      isEqualToZero(capacity) || isEqualToZero(weightTarget);

    if (noCapacityOrTarget) {
      return;
    }

    const substractWeightAndTryAgainForSameTarget = (candidate: Item) => {
      this.result.push(candidate);

      const currentCandidateWeight = candidate.weight;
      const updatedCapacity = capacity - currentCandidateWeight;
      const updatedTarget = updatedCapacity;

      return this.calculate(
        this.filterValidCandidatesByCapacity(candidates, updatedCapacity),
        updatedCapacity,
        updatedTarget
      );
    };

    const tryAgainWithLowerWeightCandidates = () => {
      const updatedTarget = weightTarget - 1;

      return this.calculate(
        this.filterValidCandidatesByCapacity(candidates, capacity),
        capacity,
        updatedTarget
      );
    };

    return candidates
      .getOptionalFirstCandidateForWeight(weightTarget)
      .ifPresentOrElse(
        substractWeightAndTryAgainForSameTarget,
        tryAgainWithLowerWeightCandidates
      );
  }

  getCandidatesFor(capacity: number, candidates: Candidates): Items {
    this.result = [];

    this.calculate(
      this.filterValidCandidatesByCapacity(candidates, capacity),
      capacity,
      capacity
    );

    return this.result;
  }

  private filterValidCandidatesByCapacity(
    candidates: Candidates,
    capacity: number
  ): Candidates {
    const hasLowerOrEqualCapacityCandidates = ([
      candidateCapacity,
      candidateItems
    ]) => candidateItems.length > 0 && candidateCapacity <= capacity;

    const candidatesWithGreaterOrEqualCapacity = Array.from(candidates).filter(
      hasLowerOrEqualCapacityCandidates
    );

    return Candidates.from(candidatesWithGreaterOrEqualCapacity);
  }
}
