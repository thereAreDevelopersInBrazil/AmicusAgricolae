import { Module } from '@nestjs/common';
import { RuralPropertiesService } from './rural_properties.service';
import { RuralPropertiesController } from './rural_properties.controller';
import { PrismaService } from 'src/core/database/prisma.service';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { RuralPropertiesRepository } from 'src/core/repositories/rural_properties.repository';
import { ProductorsModule } from 'src/productors/productors.module';
import { IsValidRuralPropertyIdConstraint } from 'src/core/validators/IsValidRuralPropertyId';

@Module({
  imports: [ProductorsModule],
  providers: [
    RuralPropertiesService,
    PrismaService,
    {
      provide: ARuralPropertiesRepository,
      useClass: RuralPropertiesRepository,
    },
    IsValidRuralPropertyIdConstraint
  ],
  controllers: [RuralPropertiesController],
  exports: [ARuralPropertiesRepository, IsValidRuralPropertyIdConstraint],
})
export class RuralPropertiesModule { }
