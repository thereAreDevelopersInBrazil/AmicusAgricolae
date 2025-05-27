import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateRuralPropertyDto } from './dto/create-rural_property.dto';
import { UpdateRuralPropertyDto } from './dto/update-rural_property.dto';
import { ARuralPropertiesRepository } from 'src/core/repositories/abstracts/arural_properties.repository';
import { RuralProperty } from './entities/rural_property.entity';

@Injectable()
export class RuralPropertiesService {
  constructor(private readonly repo: ARuralPropertiesRepository) { }

  async create(createRuralPropertyDto: CreateRuralPropertyDto) {
    this.doesAreasFitIntoProperty(createRuralPropertyDto);
    return await this.repo.create(createRuralPropertyDto)
  }

  async findAll(): Promise<RuralProperty[]> {
    return await this.repo.findAll();
  }

  async findOne(id: number): Promise<RuralProperty> {
    return await this.repo.findOne(id);
  }

  async fullUpdate(id: number, createRuralPropertyDto: CreateRuralPropertyDto) {
    const result = await this.repo.findOne(id);
    if (!result) {
      throw new NotFoundException(`Não foram encontradas quaisquer propriedades rurais com id fornecido (#${id})!`);
    }

    this.doesAreasFitIntoProperty(createRuralPropertyDto);

    return await this.repo.update(id, createRuralPropertyDto);
  }

  async partialUpdate(id: number, updateRuralPropertyDto: UpdateRuralPropertyDto) {
    const result = await this.repo.findOne(id);
    if (!result) {
      throw new NotFoundException(`Não foram encontradas quaisquer propriedades rurais com id fornecido (#${id})!`);
    }

    await this.willAreasStillFitIntoProperty(id, updateRuralPropertyDto);

    return await this.repo.update(id, updateRuralPropertyDto);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result) {
      return {
        success: "Propriedade Rural removida com sucesso!"
      }
    } else {
      throw new HttpException("Erro ao identificar se o delete foi realizado com sucesso!", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private dosentFitException = new UnprocessableEntityException(`A soma das áreas de vegetação e de agricultura não pode exceder a área total da propriedade! Revise e tente novamente!`);

  private doesAreasFitIntoProperty(createRuralPropertyDto: CreateRuralPropertyDto) {
    const areas = createRuralPropertyDto.arable_area + createRuralPropertyDto.vegetation_area;
    if (areas > createRuralPropertyDto.total_area) {
      throw this.dosentFitException;
    }
    return true;
  }

  private async willAreasStillFitIntoProperty(id: number, updateRuralPropertyDto: UpdateRuralPropertyDto) {
    const property = await this.repo.findOne(id);
    const totalArea = updateRuralPropertyDto.total_area ? updateRuralPropertyDto.total_area : property.total_area;

    let areas = 0;
    areas = updateRuralPropertyDto.arable_area ? areas + updateRuralPropertyDto.arable_area : areas + property.arable_area;
    areas = updateRuralPropertyDto.vegetation_area ? areas + updateRuralPropertyDto.vegetation_area : areas + property.vegetation_area;
    if (areas > totalArea) {
      throw this.dosentFitException;
    }
    return true;
  }

}
