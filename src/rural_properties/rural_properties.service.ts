import { Injectable } from '@nestjs/common';
import { CreateRuralPropertyDto } from './dto/create-rural_property.dto';
import { UpdateRuralPropertyDto } from './dto/update-rural_property.dto';

@Injectable()
export class RuralPropertiesService {
  create(createRuralPropertyDto: CreateRuralPropertyDto) {
    return 'This action adds a new ruralProperty';
  }

  findAll() {
    return `This action returns all ruralProperties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruralProperty`;
  }

  update(id: number, updateRuralPropertyDto: UpdateRuralPropertyDto) {
    return `This action updates a #${id} ruralProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruralProperty`;
  }
}
