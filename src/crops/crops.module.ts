import { Module } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CropsController } from './crops.controller';
import { PrismaService } from 'src/core/database/prisma.service';
import { ACropsRepository } from 'src/core/repositories/abstracts/acrops.repository';
import { CropsRepository } from 'src/core/repositories/crops.repository';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { RuralPropertiesRepository } from 'src/core/repositories/rural_properties.repository';
import { RuralPropertiesModule } from 'src/rural_properties/rural_properties.module';

@Module({
  imports: [RuralPropertiesModule],
  providers: [
    CropsService,
    PrismaService,
    {
      provide: ACropsRepository,
      useClass: CropsRepository
    },
    {
      provide: ARuralPropertiesRepository,
      useClass: RuralPropertiesRepository
    },
  ],
  controllers: [CropsController],
  exports: [ACropsRepository],
})
export class CropsModule { }
