import { Injectable } from '@nestjs/common';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';

@Injectable()
export class ProductorsService {
  create(createProductorDto: CreateProductorDto) {
    return 'This action adds a new productor';
  }

  findAll() {
    return `This action returns all productors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productor`;
  }

  update(id: number, updateProductorDto: UpdateProductorDto) {
    return `This action updates a #${id} productor`;
  }

  remove(id: number) {
    return `This action removes a #${id} productor`;
  }
}
