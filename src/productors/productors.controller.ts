import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { ProductorsService } from './productors.service';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';
import { IdParamDto } from 'src/core/dto/id-param.dto';

@Controller('productors')
export class ProductorsController {
  constructor(private readonly productorsService: ProductorsService) { }

  @Post()
  async create(@Body() createProductorDto: CreateProductorDto) {
    return (await this.productorsService.create(createProductorDto)).toJson();
  }

  @Get()
  async findAll() {
    const results = await this.productorsService.findAll();
    return results.map((result) => {
      return result.toJson();
    });
  }

  @Get(':id')
  async findOne(@Param() params: IdParamDto) {
    const result = await this.productorsService.findOne(params.id);
    return result.toJson();
  }

  @Patch(':id')
  async partialUpdate(@Param() params: IdParamDto, @Body() partialUpdateDto: UpdateProductorDto) {
    const result = await this.productorsService.partialUpdate(params.id, partialUpdateDto);

    return result.toJson();
  }

  @Put(':id')
  async fullUpdate(@Param() params: IdParamDto, @Body() fullUpdateDto: CreateProductorDto) {
    const result = await this.productorsService.partialUpdate(params.id, fullUpdateDto);

    return result.toJson();
  }

  @Delete(':id')
  async remove(@Param() params: IdParamDto) {
    return await this.productorsService.remove(params.id);
  }
}
