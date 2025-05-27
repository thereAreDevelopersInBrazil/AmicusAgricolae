import { PrismaService } from "../database/prisma.service";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ACropsRepository } from "./abstracts/acrops.repository";
import { CreateCropDto } from "src/crops/dto/create-crop.dto";
import { Crop } from "src/crops/entities/crop.entity";
import { UpdateCropDto } from "src/crops/dto/update-crop.dto";
import { GetCropsFiltersDto } from "src/crops/dto/get-all-crops.dto";

@Injectable()
export class CropsRepository extends ACropsRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    async create(data: CreateCropDto): Promise<Crop> {
        const result = await this.prisma.crops.create({
            data: {
                rural_property_id: data.rural_property_id,
                product: data.product,
                area: data.area,
                harvest: data.harvest
            }
        });

        if (!result || !result.id) {
            throw new HttpException("Erro ao identificar a cultura inserida!", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return Crop.fromRaw(result);
    }

    async update(id: number, data: UpdateCropDto): Promise<Crop> {
        const result = await this.prisma.crops.update({
            data: data,
            where: {
                id: id
            }
        });

        if (!result) {
            throw new HttpException("Erro ao identificar a cultura atualizada!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return Crop.fromRaw(result);
    }

    async delete(id: number): Promise<boolean> {
        const crop = await this.prisma.crops.findUnique({
            where: {
                id
            }
        });
        if (!crop) {
            throw new NotFoundException(`Não foram encontrados quaisquer culturas com id #${id}!`)
        }

        if (crop.is_deleted) {
            throw new NotFoundException(`Não foram encontrados quaisquer culturas com id #${id}!`)
        }

        const result = await this.prisma.crops.update({
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

    async findOne(id: number): Promise<Crop> {
        const result = await this.prisma.crops.findUnique({
            where: {
                id: id,
                is_deleted: false
            }
        });

        if (!result) {
            throw new NotFoundException(`Não foram encontradas culturas com o id fornecido (#${id})!`);
        }

        return Crop.fromRaw(result);
    }

    async findAll(getCropsFiltersDto: GetCropsFiltersDto): Promise<Crop[]> {

        const result = await this.prisma.crops.findMany({
            where: {
                is_deleted: false,
                ...getCropsFiltersDto
            }
        });

        if (result && Array.isArray(result) && result.length > 0) {
            return Crop.fromRawArray(result);
        }

        return [];
    }


    async getArableAreaInUse(id: number, harvest: number): Promise<number> {
        const result = await this.prisma.crops.aggregate(
            {
                _sum: {
                    area: true
                },
                where: {
                    rural_property_id: id,
                    harvest: harvest,
                    is_deleted: false
                }
            }
        );

        if (!result || result._sum == null) {
            throw new HttpException("Houve um erro desconhecido ao calcular a área já utilizada pelas plantações existentes! Tente novamente mais tarde.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return result._sum.area ? result._sum.area : 0;
    }

}