import { Test, TestingModule } from '@nestjs/testing';
import { RuralPropertiesService } from './rural_properties.service';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { IsValidRuralPropertyIdConstraint } from 'src/core/validators/IsValidRuralPropertyId';
import { PrismaService } from 'src/core/database/prisma.service';
import { ProductorsModule } from 'src/productors/productors.module';

describe('RuralPropertiesService', () => {
  let service: RuralPropertiesService;

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
      exports: [ARuralPropertiesRepository, IsValidRuralPropertyIdConstraint],
    }).compile();

    service = module.get<RuralPropertiesService>(RuralPropertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
