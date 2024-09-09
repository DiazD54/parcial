import { Test, TestingModule } from '@nestjs/testing';
import { RelocationService } from './relocation.service';

describe('RelocationService', () => {
  let service: RelocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelocationService],
    }).compile();

    service = module.get<RelocationService>(RelocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
