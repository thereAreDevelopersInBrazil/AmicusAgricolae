import { IsInt, IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from "class-validator";
import { IsValidRuralPropertyId } from "src/core/validators/IsValidRuralPropertyId";

export class CreateCropDto {
    static maxYear = new Date().getFullYear() + 10;

    /**
     * Nome do produto final da colheita
     * @example "Soja"
     */
    @IsNotEmpty({ message: "O nome da cultura é um campo obrigatório!" })
    @IsString({ message: "O nome da cultura deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da cultura deve conter no mínimo 3 caracteres" })
    product: string;

    /**
     * Área da cultura em HECTARES<br/>
     * Obs.: A soma das áreas de todas culturas em um mesmo ano de safra não pode exceder a área agricultável da propriedade rural!<br/>
     * Obs.: Máximo de 4 casas decimais, exemplo: 0.0001 (equivalente a 1 metro quadrado)
     * @example 1.0595
     */
    @IsNotEmpty({ message: "A área da plantação da cultura em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área da plantação da cultura em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0.0001, { message: "A área da plantação da cultura em hectares deve ser um número positivo!" })
    area: number;

    /**
     * Ano da safra<br/>
     * Obs.: Deve ser superior ao ano de 1500 e no máximo 10 anos no futuro
     * @example 2022
     */
    @IsNotEmpty({ message: "O ano da safra é um campo obrigatório!" })
    @IsInt({ message: "O ano da safra deve ser um número inteiro!" })
    @Min(1500, { message: "Só é possível registrar histórico de safras até o ano de 1500!" })
    @Max(CreateCropDto.maxYear, { message: `Só é possível planejar safras até os proximos 10 anos (${CreateCropDto.maxYear})!` })
    harvest: number;

    /**
     * Id da propriedade rural à qual a cultura pertence / pertenceu / pertencerá<br/>
     * Obs.: Deve referenciar um ID de uma propriedade rural válida!
     * @example 17
     */
    @IsNotEmpty({ message: "O id da propriedade rural é um campo obrigatório!" })
    @IsInt({ message: "O id da propriedade rural deve ser um número inteiro!" })
    @Min(1, { message: "O id da propriedade rural deve ser maior que zero!" })
    @IsValidRuralPropertyId()
    rural_property_id: number;
}
