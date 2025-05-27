import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';
import { IdParamDto } from 'src/core/dto/id-param.dto';
import { GetCropsFiltersDto } from './dto/get-all-crops.dto';

@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) { }

  @Post()
  async create(@Body() createCropDto: CreateCropDto) {
    const result = await this.cropsService.create(createCropDto);
    return result.toJson();
  }

  @Get()
  async findAll(@Query() getCropsFiltersDto: GetCropsFiltersDto) {
    const results = await this.cropsService.findAll(getCropsFiltersDto);
    return results.map((result) => {
      return result.toJson();
    });
  }

  @Get(':id')
  async findOne(@Param() params: IdParamDto) {
    const result = await this.cropsService.findOne(params.id);
    return result.toJson();
  }

  @Patch(':id')
  async partialUpdate(@Param() params: IdParamDto, @Body() partialUpdateCropDto: UpdateCropDto) {
    const result = await this.cropsService.partialUpdate(params.id, partialUpdateCropDto);
    return result.toJson();
  }

  @Put(':id')
  async fullUpdate(@Param() params: IdParamDto, @Body() fullUpdateCropDto: CreateCropDto) {
    const result = await this.cropsService.fullUpdate(params.id, fullUpdateCropDto);
    return result.toJson();
  }

  @Delete(':id')
  async remove(@Param() params: IdParamDto) {
    return await this.cropsService.remove(params.id);
  }
}
