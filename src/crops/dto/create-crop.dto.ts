import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { IsValidRuralPropertyId } from "src/core/validators/IsValidRuralPropertyId";

export class CreateCropDto {
    static maxYear = new Date().getFullYear() + 10;

    @IsNotEmpty({ message: "O nome da cultura é um campo obrigatório!" })
    @IsString({ message: "O nome da cultura deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da cultura deve conter no mínimo 3 caracteres" })
    product: string;

    @IsNotEmpty({ message: "A área da plantação da cultura em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área da plantação da cultura em hectares deve ser um número de até 4 casas decimais!" })
    @IsPositive({ message: "A área da plantação da cultura em hectares deve ser um número positivo!" })
    area: number;


    @IsNotEmpty({ message: "O ano da safra é um campo obrigatório!" })
    @IsInt({ message: "O ano da safra deve ser um número inteiro!" })
    @IsPositive({ message: "O ano da safra deve ser um número inteiro positivo!" })
    @Min(1500, { message: "Só é possível registrar histórico de safras até o ano de 1500!" })
    @Max(CreateCropDto.maxYear, { message: `Só é possível planejar safras até os proximos 10 anos (${CreateCropDto.maxYear})!` })
    harvest: number;

    @IsNotEmpty({ message: "O id da propriedade rural é um campo obrigatório!" })
    @IsInt({ message: "O id da propriedade rural deve ser um número inteiro!" })
    @IsPositive({ message: "O id da propriedade rural deve ser um número inteiro positivo!" })
    @Min(1, { message: "O id da propriedade rural deve ser maior que zero!" })
    @IsValidRuralPropertyId()
    rural_property_id: number;
}
