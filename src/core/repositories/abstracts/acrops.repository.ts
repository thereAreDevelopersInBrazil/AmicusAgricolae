import { APrismaRepository } from "./aprisma.repository";
import { PrismaService } from "src/core/database/prisma.service";
import { CreateCropDto } from "src/crops/dto/create-crop.dto";
import { Crop } from "src/crops/entities/crop.entity";
import { UpdateCropDto } from "src/crops/dto/update-crop.dto";
import { GetCropsFiltersDto } from "src/crops/dto/get-all-crops.dto";

export abstract class ACropsRepository extends APrismaRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }
    abstract create(data: CreateCropDto): Promise<Crop>;
    abstract update(id: number, data: UpdateCropDto): Promise<Crop>;
    abstract delete(id: number): Promise<boolean>;
    abstract findOne(id: number): Promise<Crop>;
    abstract findAll(data: GetCropsFiltersDto): Promise<Crop[]>;
    abstract getArableAreaInUse(id: number, harvest: number): Promise<number>
}