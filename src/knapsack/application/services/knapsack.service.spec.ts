import { Test, TestingModule } from '@nestjs/testing';
import 'jest-extended';
import { Items, KnapSackService } from './knapsack.service';
import { Candidates } from '../../domain/Candidates';

describe('KnapSackService', () => {
  let service: KnapSackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnapSackService]
    }).compile();
    service = module.get<KnapSackService>(KnapSackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should take the first item which meets the requirements', () => {
    const oneSeatCandidates: Items = [{ id: 1, weight: 1 }];
    const twoSeatsCandidates: Items = [{ id: 2, weight: 2 }];
    const threeSeatsCandidates: Items = [];
    const fourSeatsCandidates: Items = [{ id: 4, weight: 4 }];
    const fiveSeatsCandidates: Items = [];
    const sixSeatsCandidates: Items = [{ id: 6, weight: 6 }];

    const candidates: Candidates = Candidates.from([
      [1, oneSeatCandidates],
      [2, twoSeatsCandidates],
      [3, threeSeatsCandidates],
      [4, fourSeatsCandidates],
      [5, fiveSeatsCandidates],
      [6, sixSeatsCandidates]
    ]);

    const expectedKnapSack: Items = [sixSeatsCandidates[0]];

    const capacity: number = 6;

    const knapSack = service.getCandidatesFor(capacity, candidates);

    expect(knapSack).toIncludeSameMembers(expectedKnapSack);
  });

  it('should take lower items recursively [5 = 4 + 1]', () => {
    const oneSeatCandidates: Items = [{ id: 1, weight: 1 }];
    const twoSeatsCandidates: Items = [{ id: 2, weight: 2 }];
    const threeSeatsCandidates: Items = [];
    const fourSeatsCandidates: Items = [{ id: 4, weight: 4 }];
    const fiveSeatsCandidates: Items = [];
    const sixSeatsCandidates: Items = [{ id: 6, weight: 6 }];

    const candidates: Candidates = Candidates.from([
      [1, oneSeatCandidates],
      [2, twoSeatsCandidates],
      [3, threeSeatsCandidates],
      [4, fourSeatsCandidates],
      [5, fiveSeatsCandidates],
      [6, sixSeatsCandidates]
    ]);

    const expectedKnapSack: Items = [
      fourSeatsCandidates[0],
      oneSeatCandidates[0]
    ];

    const capacity: number = 5;

    const knapSack = service.getCandidatesFor(capacity, candidates);

    expect(knapSack).toIncludeSameMembers(expectedKnapSack);
  });

  it('should take the same candidate twice [4 = 2 + 2]', () => {
    const oneSeatCandidates: Items = [{ id: 1, weight: 1 }];
    const twoSeatsCandidates: Items = [
      { id: 2, weight: 2 },
      { id: 3, weight: 2 }
    ];
    const threeSeatsCandidates: Items = [];
    const fourSeatsCandidates: Items = [];
    const fiveSeatsCandidates: Items = [];
    const sixSeatsCandidates: Items = [{ id: 6, weight: 6 }];

    const candidates: Candidates = Candidates.from([
      [1, oneSeatCandidates],
      [2, twoSeatsCandidates],
      [3, threeSeatsCandidates],
      [4, fourSeatsCandidates],
      [5, fiveSeatsCandidates],
      [6, sixSeatsCandidates]
    ]);

    const expectedKnapSack: Items = [
      twoSeatsCandidates[0],
      twoSeatsCandidates[1]
    ];

    const capacity: number = 4;

    const knapSack = service.getCandidatesFor(capacity, candidates);

    expect(knapSack).toIncludeSameMembers(expectedKnapSack);
  });

  it('should avoid overpass the capacity [8 = 2 + 2 + 3]', () => {
    const oneSeatCandidates: Items = [];
    const twoSeatsCandidates: Items = [
      { id: 1, weight: 2 },
      { id: 2, weight: 2 }
    ];
    const threeSeatsCandidates: Items = [{ id: 3, weight: 3 }];
    const fourSeatsCandidates: Items = [];
    const fiveSeatsCandidates: Items = [];
    const sixSeatsCandidates: Items = [];

    const candidates: Candidates = Candidates.from([
      [1, oneSeatCandidates],
      [2, twoSeatsCandidates],
      [3, threeSeatsCandidates],
      [4, fourSeatsCandidates],
      [5, fiveSeatsCandidates],
      [6, sixSeatsCandidates]
    ]);

    const expectedKnapSack: Items = [
      twoSeatsCandidates[0],
      twoSeatsCandidates[1],
      threeSeatsCandidates[0]
    ];

    const capacity: number = 8;

    const knapSack = service.getCandidatesFor(capacity, candidates);

    expect(knapSack).toIncludeSameMembers(expectedKnapSack);
  });

  it('should fit the capacity [8 = 5 + 2 + 1]', () => {
    const oneSeatCandidates: Items = [{ id: 1, weight: 1 }];
    const twoSeatsCandidates: Items = [
      { id: 2, weight: 2 },
      { id: 3, weight: 2 }
    ];
    const threeSeatsCandidates: Items = [];
    const fourSeatsCandidates: Items = [];
    const fiveSeatsCandidates: Items = [{ id: 4, weight: 5 }];
    const sixSeatsCandidates: Items = [];

    const candidates: Candidates = Candidates.from([
      [1, oneSeatCandidates],
      [2, twoSeatsCandidates],
      [3, threeSeatsCandidates],
      [4, fourSeatsCandidates],
      [5, fiveSeatsCandidates],
      [6, sixSeatsCandidates]
    ]);

    const expectedKnapSack: Items = [
      fiveSeatsCandidates[0],
      twoSeatsCandidates[0],
      oneSeatCandidates[0]
    ];

    const capacity: number = 8;

    const knapSack = service.getCandidatesFor(capacity, candidates);

    expect(knapSack).toIncludeSameMembers(expectedKnapSack);
  });
});
