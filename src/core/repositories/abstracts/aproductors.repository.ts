import { APrismaRepository } from "./aprisma.repository";
import { PrismaService } from "src/core/database/prisma.service";
import { CreateProductorDto } from "src/productors/dto/create-productor.dto";
import { UpdateProductorDto } from "src/productors/dto/update-productor.dto";
import { Productor } from "src/productors/entities/productor.entity";

export abstract class AProductorsRepository extends APrismaRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    abstract create(data: CreateProductorDto): Promise<Productor>;
    abstract update(id: number, data: UpdateProductorDto): Promise<Productor>;
    abstract delete(id: number): Promise<boolean>;
    abstract findOneOrThrow(id?: number, document?: string, exclude?: number): Promise<Productor>;
    abstract findOne(id?: number, document?: string, exclude?: number): Promise<Productor | null>;
    abstract findAll(): Promise<Productor[]>;
}