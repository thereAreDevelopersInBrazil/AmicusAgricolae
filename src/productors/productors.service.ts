import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';
import { AProductorsRepository } from 'src/core/repositories/abstracts/aproductors.repository';
import { Productor } from './entities/productor.entity';

@Injectable()
export class ProductorsService {
  constructor(private readonly repo: AProductorsRepository) { }

  async create(createProductorDto: CreateProductorDto): Promise<Productor> {
    const sameDocument = await this.repo.findOne(undefined, createProductorDto.document);
    if (sameDocument) {
      throw new UnprocessableEntityException(`Já existe um produtor registrado com documento ${createProductorDto.document}, utilize o cadastro já existente!`);
    }
    return await this.repo.create(createProductorDto);
  }

  async findAll() {
    return await this.repo.findAll();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async partialUpdate(id: number, updateProductorDto: UpdateProductorDto) {
    const productor = await this.repo.findOne(id);
    if (!productor) {
      throw new NotFoundException(`Não foram encontrados quaisquer produtores com id #${id}!`)
    }

    if (updateProductorDto.type && !updateProductorDto.document) {
      throw new UnprocessableEntityException(`Não é possível atualizar o tipo de documento ('PF' ou 'PJ') sem enviar o novo documento no campo 'document'!`);
    }

    const sameDocument = updateProductorDto.document ? await this.repo.findOne(undefined, updateProductorDto.document, id) : false;
    if (sameDocument) {
      throw new UnprocessableEntityException(`Já existe outro produtor registrado com documento ${updateProductorDto.document}, utilize o cadastro já existente!`);
    }
    return await this.repo.update(id, updateProductorDto);
  }

  async fullUpdate(id: number, fullUpdateProductorDto: CreateProductorDto) {
    const productor = await this.repo.findOne(id);
    if (!productor) {
      throw new NotFoundException(`Não foram encontrados quaisquer produtores com id #${id}!`)
    }

    const sameDocument = fullUpdateProductorDto.document ? await this.repo.findOne(undefined, fullUpdateProductorDto.document, id) : false;
    if (sameDocument) {
      throw new UnprocessableEntityException(`Já existe outro produtor registrado com documento ${fullUpdateProductorDto.document}, utilize o cadastro já existente!`);
    }
    return await this.repo.update(id, fullUpdateProductorDto);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result) {
      return {
        success: "Produtor removido com sucesso!"
      }
    } else {
      throw new HttpException("Erro ao identificar se o delete foi realizado com sucesso!", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
