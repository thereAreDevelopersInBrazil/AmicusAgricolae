import { PartialType } from '@nestjs/mapped-types';
import { CreateRuralPropertyDto } from './create-rural_property.dto';

export class UpdateRuralPropertyDto extends PartialType(CreateRuralPropertyDto) {}
