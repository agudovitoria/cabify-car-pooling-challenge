import { Test, TestingModule } from '@nestjs/testing';
import { DropOffsController } from './dropOffs.controller';

describe('DropOffsController', () => {
  let controller: DropOffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropOffsController],
    }).compile();

    controller = module.get<DropOffsController>(DropOffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
