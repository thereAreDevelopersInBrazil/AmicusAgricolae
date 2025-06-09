import { PrismaService } from "../database/prisma.service";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductorDto } from "src/productors/dto/create-productor.dto";
import { UpdateProductorDto } from "src/productors/dto/update-productor.dto";
import { Productor } from "src/productors/entities/productor.entity";
import { AProductorsRepository } from "./abstracts/aproductors.repository";

@Injectable()
export class ProductorsRepository extends AProductorsRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    async create(data: CreateProductorDto): Promise<Productor> {
        const result = await this.prisma.productors.create({
            data: {
                name: data.name,
                document: data.document,
                type: data.type
            }
        });

        if (!result || !result.id) {
            throw new HttpException("Erro ao identificar o produtor inserido!", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return Productor.fromRaw(result);
    }

    async update(id: number, data: UpdateProductorDto): Promise<Productor> {
        const result = await this.prisma.productors.update({
            data: data,
            where: {
                id: id
            }
        });

        if (!result) {
            throw new HttpException("Erro ao identificar o produtor atualizado!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return Productor.fromRaw(result);
    }

    async delete(id: number): Promise<boolean> {
        const productor = await this.prisma.productors.findUnique({
            where: {
                id
            }
        });
        if (!productor) {
            throw new NotFoundException(`Não foram encontrados quaisquer produtores com id #${id}!`)
        }

        if (productor.is_deleted) {
            throw new NotFoundException(`Não foram encontrados quaisquer produtores com id #${id}!`)
        }

        const result = await this.prisma.productors.update({
            data: {
                document: ("deleted_" + productor.id + "_" + productor.document),
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

    async findOneOrThrow(id?: number, document?: string, exclude?: number): Promise<Productor> {
        const where = {};
        if (id) {
            where['id'] = id;
        }
        if (document) {
            where['document'] = document;
            if (exclude) {
                where['id'] = { not: exclude };
            }
        }
        const result = await this.prisma.productors.findFirst({
            where: {
                ...where,
                is_deleted: false
            }
        });

        if (!result) {
            throw new NotFoundException(`Não foram encontrados produtores com o id fornecido (#${id})!`);
        }

        return Productor.fromRaw(result);
    }

    async findOne(id?: number, document?: string, exclude?: number): Promise<Productor | null> {
        const where = {};
        if (id) {
            where['id'] = id;
        }
        if (document) {
            where['document'] = document;
            if (exclude) {
                where['id'] = { not: exclude };
            }
        }
        const result = await this.prisma.productors.findFirst({
            where: {
                ...where,
                is_deleted: false
            }
        });

        return result ? Productor.fromRaw(result) : null;
    }

    async findAll(): Promise<Productor[]> {
        const result = await this.prisma.productors.findMany({
            where: {
                is_deleted: false
            }
        });

        if (result && Array.isArray(result) && result.length > 0) {
            return Productor.fromRawArray(result);
        }

        return [];
    }

}