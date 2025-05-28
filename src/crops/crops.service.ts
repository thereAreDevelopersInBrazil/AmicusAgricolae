import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';
import { Crop } from './entities/crop.entity';
import { ARuralPropertiesRepository } from '../core/repositories/abstracts/arural_properties.repository';
import { GetCropsFiltersDto } from './dto/get-all-crops.dto';
import { ACropsRepository } from '../core/repositories/abstracts/acrops.repository';

@Injectable()
export class CropsService {
  constructor(private readonly repo: ACropsRepository, private readonly repoRuralProperty: ARuralPropertiesRepository) { }

  async create(createCropDto: CreateCropDto) {
    await this.doesNewCropFitIntoArableArea(createCropDto);
    return await this.repo.create(createCropDto)
  }

  async findAll(getCropsFiltersDto: GetCropsFiltersDto): Promise<Crop[]> {
    return await this.repo.findAll(getCropsFiltersDto);
  }

  async findOne(id: number): Promise<Crop> {
    return await this.repo.findOne(id);
  }

  async fullUpdate(id: number, createCropDto: CreateCropDto) {
    const result = await this.repo.findOne(id);
    if (!result) {
      throw new NotFoundException(`Não foram encontradas quaisquer propriedades rurais com id fornecido (#${id})!`);
    }

    await this.willCropStillFitIntoArableArea(id, createCropDto);

    return await this.repo.update(id, createCropDto);
  }

  async partialUpdate(id: number, updateCropDto: UpdateCropDto) {
    const result = await this.repo.findOne(id);
    if (!result) {
      throw new NotFoundException(`Não foram encontradas quaisquer propriedades rurais com id fornecido (#${id})!`);
    }

    await this.willCropStillFitIntoArableArea(id, updateCropDto);

    return await this.repo.update(id, updateCropDto);
  }

  async remove(id: number) {
    /**
     * Apenas para verificar se existe, pois o findOne irá lançar um throw se não existir,
     * poderia dar apenas o delete, porém os usuários iriam descobrir que conseguem por exemplo
     * deletar algo que já foi deletado, para simular que realmente o recurso não existe mais
     * resolvi colocar a chamada do findone, um tradeoff
     */
    await this.findOne(id);

    const result = await this.repo.delete(id);
    if (result) {
      return {
        success: "Cultura removida com sucesso!"
      }
    } else {
      throw new HttpException("Erro ao identificar se o delete foi realizado com sucesso!", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  private async doesNewCropFitIntoArableArea(createCropDto: CreateCropDto) {
    const ruralProperty = await this.repoRuralProperty.findOne(createCropDto.rural_property_id);
    const arableAreaInUse = await this.repo.getArableAreaInUse(createCropDto.rural_property_id, createCropDto.harvest);
    const neededArea = Number(Number(arableAreaInUse + createCropDto.area).toFixed(4));
    if (neededArea > ruralProperty.arable_area) {
      throw new UnprocessableEntityException(
        `A soma das áreas de culturas de uma mesma safra (${createCropDto.harvest})` +
        ` não podem exceder a área agricultável da propriedade!` +
        ` Área agricultável da propriedade: ${ruralProperty.arable_area} hectares,` +
        ` Área que seria necessária para realizar atualização: ${neededArea} hectares,` +
        ` Seriam necessários mais ${Number(Number(neededArea - ruralProperty.arable_area).toFixed(4))} hectares para comportar mais uma cultura!`);
    }
    return true;
  }

  private async willCropStillFitIntoArableArea(id: number, updateCropDto: UpdateCropDto) {

    if (!updateCropDto.area) {
      return true;
    }

    const crop = await this.repo.findOne(id);
    const ruralProperty = await this.repoRuralProperty.findOne(crop.rural_property_id);
    const arableAreaInUse = await this.repo.getArableAreaInUse(crop.rural_property_id, crop.harvest);

    let newArableArea = (arableAreaInUse - crop.area) + updateCropDto.area;
    newArableArea = Number(newArableArea.toFixed(4));
    if (newArableArea > ruralProperty.arable_area) {
      throw new UnprocessableEntityException(
        `A soma das áreas de culturas de uma mesma safra (${crop.harvest})` +
        ` não podem exceder a área agricultável da propriedade!` +
        ` Área agricultável da propriedade: ${ruralProperty.arable_area} hectares,` +
        ` Área que seria necessária para realizar atualização: ${newArableArea} hectares,` +
        ` Seriam necessários mais ${Number(Number(newArableArea - ruralProperty.arable_area).toFixed(4))} hectares para comportar mais uma cultura!`);
    }

    return true;
  }

}
