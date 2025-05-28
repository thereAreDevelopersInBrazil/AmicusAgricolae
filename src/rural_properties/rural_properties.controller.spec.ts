import { Test, TestingModule } from '@nestjs/testing';
import { RuralPropertiesController } from './rural_properties.controller';
import { RuralPropertiesService } from './rural_properties.service';
import { ProductorsModule } from 'src/productors/productors.module';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { IsValidRuralPropertyIdConstraint } from 'src/core/validators/IsValidRuralPropertyId';
import { PrismaService } from 'src/core/database/prisma.service';

describe('RuralPropertiesController', () => {
  let controller: RuralPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProductorsModule],
      providers: [
        RuralPropertiesService,
        PrismaService,
        {
          provide: ARuralPropertiesRepository,
          useValue: {},
        },
        IsValidRuralPropertyIdConstraint
      ],
      controllers: [RuralPropertiesController],
      exports: [ARuralPropertiesRepository, IsValidRuralPropertyIdConstraint],
    }).compile();

    controller = module.get<RuralPropertiesController>(RuralPropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
