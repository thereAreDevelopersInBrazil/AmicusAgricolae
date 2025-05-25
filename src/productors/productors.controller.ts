import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductorsService } from './productors.service';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';

@Controller('productors')
export class ProductorsController {
  constructor(private readonly productorsService: ProductorsService) {}

  @Post()
  create(@Body() createProductorDto: CreateProductorDto) {
    return this.productorsService.create(createProductorDto);
  }

  @Get()
  findAll() {
    return this.productorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductorDto: UpdateProductorDto) {
    return this.productorsService.update(+id, updateProductorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productorsService.remove(+id);
  }
}
