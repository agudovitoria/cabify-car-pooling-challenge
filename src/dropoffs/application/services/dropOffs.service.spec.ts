import { Test, TestingModule } from '@nestjs/testing';
import { DropOffsService } from './dropOffs.service';

describe('DropOffs.service', () => {
  let service: DropOffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropOffsService],
    }).compile();

    service = module.get<DropOffsService>(DropOffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
