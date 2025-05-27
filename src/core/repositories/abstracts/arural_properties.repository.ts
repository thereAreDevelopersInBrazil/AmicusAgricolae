import { APrismaRepository } from "./aprisma.repository";
import { PrismaService } from "src/core/database/prisma.service";
import { CreateRuralPropertyDto } from "src/rural_properties/dto/create-rural_property.dto";
import { RuralProperty } from "src/rural_properties/entities/rural_property.entity";
import { UpdateRuralPropertyDto } from "src/rural_properties/dto/update-rural_property.dto";

export abstract class ARuralPropertiesRepository extends APrismaRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    abstract create(data: CreateRuralPropertyDto): Promise<RuralProperty>;
    abstract update(id: number, data: UpdateRuralPropertyDto): Promise<RuralProperty>;
    abstract delete(id: number): Promise<boolean>;
    abstract findOne(id: number): Promise<RuralProperty>;
    abstract findAll(): Promise<RuralProperty[]>;
}