import { PrismaService } from "../database/prisma.service";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ARuralPropertiesRepository } from "./abstracts/arural_properties.repository";
import { CreateRuralPropertyDto } from "src/rural_properties/dto/create-rural_property.dto";
import { RuralProperty } from "src/rural_properties/entities/rural_property.entity";
import { UpdateRuralPropertyDto } from "src/rural_properties/dto/update-rural_property.dto";

@Injectable()
export class RuralPropertiesRepository extends ARuralPropertiesRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    async create(data: CreateRuralPropertyDto): Promise<RuralProperty> {
        const result = await this.prisma.rural_properties.create({
            data: {
                name: data.name,
                city: data.city,
                state: data.state,
                total_area: data.total_area,
                arable_area: data.arable_area,
                vegetation_area: data.vegetation_area,
                productor_id: data.productor_id
            }
        });

        if (!result || !result.id) {
            throw new HttpException("Erro ao identificar a propriedade rural inserida!", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return RuralProperty.fromRaw(result);
    }

    async update(id: number, data: UpdateRuralPropertyDto): Promise<RuralProperty> {
        const result = await this.prisma.rural_properties.update({
            data: data,
            where: {
                id: id
            }
        });

        if (!result) {
            throw new HttpException("Erro ao identificar a propriedade rural atualizada!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return RuralProperty.fromRaw(result);
    }

    async delete(id: number): Promise<boolean> {
        const ruralProperty = await this.prisma.rural_properties.findUnique({
            where: {
                id
            }
        });
        if (!ruralProperty) {
            throw new NotFoundException(`Não foram encontrados quaisquer propriedades rurais com id #${id}!`)
        }

        if (ruralProperty.is_deleted) {
            throw new NotFoundException(`Não foram encontrados quaisquer propriedades rurais com id #${id}!`)
        }

        const result = await this.prisma.rural_properties.update({
            data: {
                is_deleted: true,
                deleted_at: new Date()
            },
            where: {
                id: id
            }
        });

        if (!result || !result.is_deleted) {
            throw new HttpException("Erro ao identificar se o delete foi realizado com sucesso!", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return result.is_deleted;
    }

    async findOne(id: number): Promise<RuralProperty> {
        const result = await this.prisma.rural_properties.findUnique({
            where: {
                id: id,
                is_deleted: false
            }
        });

        if (!result) {
            throw new NotFoundException(`Não foram encontradas propriedades rurais com o id fornecido (#${id})!`);
        }

        return RuralProperty.fromRaw(result);
    }

    async findAll(): Promise<RuralProperty[]> {
        const result = await this.prisma.rural_properties.findMany({
            where: {
                is_deleted: false
            }
        });

        if (result && Array.isArray(result) && result.length > 0) {
            return RuralProperty.fromRawArray(result);
        }

        return [];
    }

}