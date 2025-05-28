import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RuralPropertiesService } from './rural_properties.service';
import { CreateRuralPropertyDto } from './dto/create-rural_property.dto';
import { UpdateRuralPropertyDto } from './dto/update-rural_property.dto';
import { IdParamDto } from 'src/core/dto/id-param.dto';

@Controller('rural-properties')
export class RuralPropertiesController {
  constructor(private readonly ruralPropertiesService: RuralPropertiesService) { }

  @Post()
  async create(@Body() createRuralPropertyDto: CreateRuralPropertyDto) {
    const result = await this.ruralPropertiesService.create(createRuralPropertyDto);
    return result;
  }

  @Get()
  async findAll() {
    const results = await this.ruralPropertiesService.findAll();
    return results.map((result) => {
      return result;
    });
  }

  @Get(':id')
  async findOne(@Param() params: IdParamDto) {
    const result = await this.ruralPropertiesService.findOne(params.id);
    return result;
  }

  @Patch(':id')
  async partialUpdate(@Param() params: IdParamDto, @Body() partialUpdateRuralPropertyDto: UpdateRuralPropertyDto) {
    const result = await this.ruralPropertiesService.partialUpdate(params.id, partialUpdateRuralPropertyDto);
    return result;
  }

  @Put(':id')
  async fullUpdate(@Param() params: IdParamDto, @Body() fullUpdateRuralPropertyDto: CreateRuralPropertyDto) {
    const result = await this.ruralPropertiesService.fullUpdate(params.id, fullUpdateRuralPropertyDto);
    return result;
  }

  @Delete(':id')
  async remove(@Param() params: IdParamDto) {
    return await this.ruralPropertiesService.remove(params.id);
  }
}
