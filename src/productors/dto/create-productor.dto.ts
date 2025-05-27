import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { LegalEntityType } from "generated/prisma";
import { sanitizeDocument } from "src/core/utils/string";
import { IsValidDocument } from "src/core/validators/IsValidDocument";


export class CreateProductorDto {

    @IsNotEmpty({ message: "O nome do produtor é um campo obrigatório!" })
    @IsString({ message: "O nome do produtor deve ser um valor textual!" })
    @MinLength(3, { message: "O nome do produtor deve conter no mínimo 3 caracteres" })
    name: string;

    @IsString({message: "O campo document deve ser um valor textual!"})
    @Transform(({ value }) => { return sanitizeDocument(value) })
    @IsNotEmpty({message: "O campo document conter um nº de CPF válido caso o campo 'type' seja 'PF', ou um nº de CNPJ válido caso o campo 'type' seja 'PJ'!"})
    @IsValidDocument()
    document: string;

    @IsNotEmpty({ message: "O tipo de produtor é um campo obrigatório!" })
    @Transform(({ value }) => value?.toUpperCase?.())
    @IsEnum(LegalEntityType, { message: "O campo tipo aceita apenas dois possiveis valores: 'PF' ou 'PJ'!" })
    type: LegalEntityType
}
