import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuralPropertiesService } from './rural_properties.service';
import { CreateRuralPropertyDto } from './dto/create-rural_property.dto';
import { UpdateRuralPropertyDto } from './dto/update-rural_property.dto';

@Controller('rural-properties')
export class RuralPropertiesController {
  constructor(private readonly ruralPropertiesService: RuralPropertiesService) {}

  @Post()
  create(@Body() createRuralPropertyDto: CreateRuralPropertyDto) {
    return this.ruralPropertiesService.create(createRuralPropertyDto);
  }

  @Get()
  findAll() {
    return this.ruralPropertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruralPropertiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuralPropertyDto: UpdateRuralPropertyDto) {
    return this.ruralPropertiesService.update(+id, updateRuralPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruralPropertiesService.remove(+id);
  }
}
