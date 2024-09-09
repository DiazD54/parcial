import { Test, TestingModule } from '@nestjs/testing';
import { RelocationController } from './relocation.controller';

describe('RelocationController', () => {
  let controller: RelocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelocationController],
    }).compile();

    controller = module.get<RelocationController>(RelocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
