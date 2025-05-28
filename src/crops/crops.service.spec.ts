import { Test, TestingModule } from '@nestjs/testing';
import { CropsService } from './crops.service';
import { ACropsRepository } from 'src/core/repositories/abstracts/acrops.repository';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { PrismaService } from 'src/core/database/prisma.service';
import { RuralPropertiesModule } from 'src/rural_properties/rural_properties.module';

describe('CropsService', () => {
  let service: CropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RuralPropertiesModule],
      providers: [
        CropsService,
        PrismaService,
        {
          provide: ACropsRepository,
          useValue: {}
        },
        {
          provide: ARuralPropertiesRepository,
          useValue: {}
        },
      ],
      exports: [ACropsRepository],
    }).compile();

    service = module.get<CropsService>(CropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
