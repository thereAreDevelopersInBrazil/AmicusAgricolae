import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { LegalEntityType } from "generated/prisma";
import { sanitizeDocument } from "src/core/utils/string";
import { IsValidDocument } from "src/core/validators/IsValidDocument";


export class CreateProductorDto {

    @ApiProperty({
        enum: LegalEntityType,
        description: `Tipo de pessoa:<br/>
        - **PF**: Pessoa Física<br/>
        - **PJ**: Pessoa Jurídica<br/>
        Outros valores não são aceitos. Este campo define como o campo document será validado (CPF ou CNPJ).`,
        example: LegalEntityType.PF,
    })
    @IsNotEmpty({ message: "O tipo de produtor é um campo obrigatório!" })
    @Transform(({ value }) => value?.toUpperCase?.())
    @IsEnum(LegalEntityType, { message: "O campo tipo aceita apenas dois possiveis valores: 'PF' ou 'PJ'!" })
    type: LegalEntityType

    /**
     * Documento do produtor de acordo com o campo type (tipo de pessoa, "PF" ou "PJ")<br/>
     * Caso type seja "PF", informar um documento do tipo CPF<br/>
     * Caso type seja "PJ", informar um documento do tipo CNPJ<br/>
     * Os documentos podem ser enviados com ou sem suas formatações / mascaras
     * @example "38.137.646/0001-98"
     * @example "38137646000198"
     * @example "843.125.140-97"
     * @example "84312514097"
    */
    @IsString({ message: "O campo document deve ser um valor textual!" })
    @Transform(({ value }) => { return sanitizeDocument(value) })
    @IsNotEmpty({ message: "O campo document conter um nº de CPF válido caso o campo 'type' seja 'PF', ou um nº de CNPJ válido caso o campo 'type' seja 'PJ'!" })
    @IsValidDocument()
    document: string;

    /**
     * Nome do produtor
     * @example "Natan Souza"
    */
    @IsNotEmpty({ message: "O nome do produtor é um campo obrigatório!" })
    @IsString({ message: "O nome do produtor deve ser um valor textual!" })
    @MinLength(3, { message: "O nome do produtor deve conter no mínimo 3 caracteres" })
    name: string;

}
