import { Test, TestingModule } from '@nestjs/testing';
import { ProductorsService } from './productors.service';

describe('ProductorsService', () => {
  let service: ProductorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductorsService],
    }).compile();

    service = module.get<ProductorsService>(ProductorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
