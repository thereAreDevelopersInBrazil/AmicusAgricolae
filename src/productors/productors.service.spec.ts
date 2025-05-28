import { Test, TestingModule } from '@nestjs/testing';
import { ProductorsService } from './productors.service';
import { AProductorsRepository } from 'src/core/repositories/abstracts/aproductors.repository';

describe('ProductorsService', () => {
  let service: ProductorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductorsService,
        {
          provide: AProductorsRepository,
          useValue: {},
        }
      ],
    }).compile();

    service = module.get<ProductorsService>(ProductorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
