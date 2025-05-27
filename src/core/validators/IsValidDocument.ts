import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { LegalEntityType } from 'generated/prisma';

@ValidatorConstraint({ name: 'IsValidDocument', async: false })
export class IsValidDocumentConstraint implements ValidatorConstraintInterface {
    validate(document: string, args: ValidationArguments): boolean {
        const obj = args.object as { type: LegalEntityType };
        const type = obj.type;

        if (typeof document !== 'string' || !/^\d+$/.test(document)) return false;

        if (type === 'PF') {
            return cpf.isValid(document);
        }

        if (type === 'PJ') {
            return cnpj.isValid(document);
        }

        return false;
    }

    defaultMessage(args: ValidationArguments): string {
        const obj = args.object as { type: LegalEntityType };
        const type = obj.type;
        if (type === LegalEntityType.PF) return 'CPF inválido';
        if (type === LegalEntityType.PJ) return 'CNPJ inválido';
        return "Por favor, informe o tipo do documento válido ('PF', 'PJ') no campo 'type'!";
    }
}

export function IsValidDocument(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidDocumentConstraint,
        });
    };
}