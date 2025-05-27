import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";
import { IsValidProductorId } from "src/core/validators/IsValidProductorId";

export class CreateRuralPropertyDto {

    @IsNotEmpty({ message: "O nome da propriedade rural é um campo obrigatório!" })
    @IsString({ message: "O nome da propriedade rural deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da propriedade rural deve conter no mínimo 3 caracteres" })
    name: string;

    @IsNotEmpty({ message: "Por favor informe o nome da cidade onde está localizada a propriedade rural!" })
    @IsString({ message: "O nome da cidade deve ser um valor textual!" })
    @MinLength(3, { message: "O nome da cidade deve conter no mínimo 3 caracteres" })
    city: string;

    @IsNotEmpty({ message: "Por favor informe o nome do estado onde está localizada a propriedade rural!" })
    @IsString({ message: "O nome do estado deve ser um valor textual!" })
    @MinLength(3, { message: "O nome do estado deve conter no mínimo 3 caracteres" })
    state: string;

    @IsNotEmpty({ message: "A área total da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área total da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @IsPositive({ message: "A área total da propriedade em hectares deve ser um número positivo!" })
    @Min(0.0005, { message: "A área total da propriedade em hectares deve ser maior que o mínimo de 50m² equivalente a 0.0005 hectares!" })
    total_area: number;

    @IsNotEmpty({ message: "A área agricultável da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área agricultável da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0, { message: "A área agricultável da propriedade em hectares deve ser um número positivo!" })
    arable_area: number;

    @IsNotEmpty({ message: "A área de vegetação ou de reservas da propriedade em hectares é um campo obrigatório!" })
    @IsNumber({ maxDecimalPlaces: 4 }, { message: "A área vegetação ou de reservas da propriedade em hectares deve ser um número de até 4 casas decimais!" })
    @Min(0, { message: "A área vegetação ou de reservas da propriedade em hectares deve ser um número positivo!" })
    vegetation_area: number;

    @IsNotEmpty({ message: "O id do produtor proprietário da propriedade é um campo obrigatório!" })
    @IsInt({ message: "O id do produtor proprietário da propriedade deve ser um número inteiro!" })
    @IsPositive({ message: "O id do produtor proprietário da propriedade deve ser um número inteiro positivo!" })
    @Min(1, { message: "O id do produtor deve ser maior que zero!" })
    @IsValidProductorId()
    productor_id: number;
}
