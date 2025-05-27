import { Module } from '@nestjs/common';
import { ProductorsController } from './productors.controller';
import { ProductorsRepository } from 'src/core/repositories/productors.repository';
import { PrismaService } from 'src/core/database/prisma.service';
import { AProductorsRepository } from 'src/core/repositories/abstracts/aproductors.repository';
import { ProductorsService } from './productors.service';
import { IsValidProductorId, IsValidProductorIdConstraint } from 'src/core/validators/IsValidProductorId';

@Module({
  providers: [
    ProductorsService,
    PrismaService,
    {
      provide: AProductorsRepository,
      useClass: ProductorsRepository,
    },
    IsValidProductorIdConstraint
  ],
  controllers: [ProductorsController],
  exports: [AProductorsRepository, IsValidProductorIdConstraint],
})
export class ProductorsModule { }

