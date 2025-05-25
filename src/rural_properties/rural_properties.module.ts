import { Module } from '@nestjs/common';
import { RuralPropertiesService } from './rural_properties.service';
import { RuralPropertiesController } from './rural_properties.controller';

@Module({
  controllers: [RuralPropertiesController],
  providers: [RuralPropertiesService],
})
export class RuralPropertiesModule {}
