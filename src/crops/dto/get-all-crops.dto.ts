import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class GetCropsFiltersDto {
    static maxYear = new Date().getFullYear() + 10;

    @IsOptional()
    @IsString({ message: "Caso seja informado, o filtro por nome da cultura deve ser um valor textual!" })
    @MinLength(3, { message: "Caso seja informado, o filtro por nome da cultura deve conter no mínimo 3 caracteres" })
    product?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: "Caso seja informado, o filtro por ano da safra deve ser um número inteiro!" })
    @IsPositive({ message: "Caso seja informado, o filtro por ano da safra deve ser um número inteiro positivo!" })
    @Min(1500, { message: "Caso seja informado, o filtro por ano da safra deve ser superior a 1500!" })
    @Max(GetCropsFiltersDto.maxYear, { message: `Caso seja informado, o filtro por ano da safra deve ser inferior a ${GetCropsFiltersDto.maxYear}!` })
    harvest?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: "Caso seja informado, o filtro por id da propriedade rural deve ser um número inteiro!" })
    @IsPositive({ message: "Caso seja informado, o filtro por id da propriedade rural deve ser um número inteiro positivo!" })
    @Min(1, { message: "Caso seja informado, o filtro por id da propriedade rural deve ser maior que zero!" })
    rural_property_id?: number;
}
