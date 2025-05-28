import { Test, TestingModule } from '@nestjs/testing';
import { ProductorsController } from './productors.controller';
import { ProductorsService } from './productors.service';
import { AProductorsRepository } from 'src/core/repositories/abstracts/aproductors.repository';

describe('ProductorsController', () => {
  let controller: ProductorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductorsController],
      providers: [
        ProductorsService,
        {
          provide: AProductorsRepository,
          useValue: {},
        }
      ],
    }).compile();

    controller = module.get<ProductorsController>(ProductorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
