import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";
import { IsValidProductorId } from "src/core/validators/IsValidProductorId";

export class CreateRuralPropertyDto {

    /**
     * Nome da propriedade rural / fazenda
     * @example "Rancho Fundo"
    */
    @IsNotEmpty({ message: "O nome da propriedade rural é um campo obrigatório!" })
    @IsString({ message: "O nome da propriedade rural deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da propriedade rural deve conter no mínimo 3 caracteres" })
    name: string;

    /**
     * 
     * Nome da cidade onde a propriedade rural está situada
     * @example "Goiânia"
    */
    @IsNotEmpty({ message: "Por favor informe o nome da cidade onde está localizada a propriedade rural!" })
    @IsString({ message: "O nome da cidade deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da cidade deve conter no mínimo 3 caracteres" })
    city: string;

    /**
     * Nome do estado onde a propriedade rural está situada
     * @example "Goiás"
    */
    @IsNotEmpty({ message: "Por favor informe o nome do estado onde está localizada a propriedade rural!" })
    @IsString({ message: "O nome do estado deve ser um valor textual!" })
    @MinLength(3, { message: "O nome do estado deve conter no mínimo 3 caracteres" })
    state: string;

    /**
     * Área total da propriedade rural em HECTARES<br/>
     * Obs.: Máximo de 4 casas decimais<br/>
     * Obs.: Mínimo 0.0005 hectares, que corresponde a uma propriedade de no mínimo 50m²
     * @example 102.0007
    */
    @IsNotEmpty({ message: "A área total da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área total da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0.0005, { message: "A área total da propriedade em hectares deve ser maior que o mínimo de 50m² equivalente a 0.0005 hectares!" })
    total_area: number;

    /**
     * Área agricultável da propriedade rural em HECTARES<br/>
     * Obs: A soma da área agricultavel com a área de vegetação / preservação não pode ultrapassar a área total da propriedade!
     * @example 52.0007
    */
    @IsNotEmpty({ message: "A área agricultável da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área agricultável da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0, { message: "A área agricultável da propriedade em hectares deve ser um número positivo!" })
    arable_area: number;

    /**
     * Área de vegetação / preservação da propriedade rural em HECTARES<br/>
     * Obs: A soma da área de vegetação / preservação com a área agricultavel não pode ultrapassar a área total da propriedade!
     * @example 50.0000
    */
    @IsNotEmpty({ message: "A área de vegetação ou de reservas da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área vegetação ou de reservas da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0, { message: "A área vegetação ou de reservas da propriedade em hectares deve ser um número positivo!" })
    vegetation_area: number;

    /**
     * Id do produtor proprietário da propriedade rural
     * Obs: Deve referenciar um ID de um produtor válido!
     * @example 12
    */
    @IsNotEmpty({ message: "O id do produtor proprietário da propriedade é um campo obrigatório!" })
    @IsInt({ message: "O id do produtor proprietário da propriedade deve ser um número inteiro!" })
    @IsPositive({ message: "O id do produtor proprietário da propriedade deve ser um número inteiro positivo!" })
    @Min(1, { message: "O id do produtor deve ser maior que zero!" })
    @IsValidProductorId()
    productor_id: number;
}
