import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class GetCropsFiltersDto {
    static maxYear = new Date().getFullYear() + 10;

    /**
     * Filtro por nome do produto final da colheita
     * @example "Soja"
     */
    @IsOptional()
    @IsString({ message: "Caso seja informado, o filtro por nome da cultura deve ser um valor textual!" })
    @MinLength(3, { message: "Caso seja informado, o filtro por nome da cultura deve conter no mínimo 3 caracteres" })
    product?: string;

    /**
     * Filtro por ano da safra<br/>
     * Obs.: Deve ser superior ao ano de 1500 e no máximo 10 anos no futuro
     * @example 2022
     */
    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: "Caso seja informado, o filtro por ano da safra deve ser um número inteiro!" })
    @Min(1500, { message: "Caso seja informado, o filtro por ano da safra deve ser superior a 1500!" })
    @Max(GetCropsFiltersDto.maxYear, { message: `Caso seja informado, o filtro por ano da safra deve ser inferior a ${GetCropsFiltersDto.maxYear}!` })
    harvest?: number;

    /**
     * Filtro por Id da propriedade rural à qual a cultura pertence / pertenceu / pertencerá<br/>
     * Obs.: Deve referenciar um ID de uma propriedade rural válida!
     * @example 17
     */
    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: "Caso seja informado, o filtro por id da propriedade rural deve ser um número inteiro!" })
    @Min(1, { message: "Caso seja informado, o filtro por id da propriedade rural deve ser maior que zero!" })
    rural_property_id?: number;
}
