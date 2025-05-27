import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductorsModule } from './productors/productors.module';
import { RuralPropertiesModule } from './rural_properties/rural_properties.module';
import { CropsModule } from './crops/crops.module';
import { PrismaService } from './core/database/prisma.service';

@Module({
  imports: [ProductorsModule, RuralPropertiesModule, CropsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
