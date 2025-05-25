import { Module } from '@nestjs/common';
import { ProductorsService } from './productors.service';
import { ProductorsController } from './productors.controller';

@Module({
  controllers: [ProductorsController],
  providers: [ProductorsService],
})
export class ProductorsModule {}
