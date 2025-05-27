import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
    ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ARuralPropertiesRepository } from '../repositories/abstracts/arural_properties.repository';

@ValidatorConstraint({ name: 'IsValidRuralPropertyId', async: true })
@Injectable()
export class IsValidRuralPropertyIdConstraint implements ValidatorConstraintInterface {
    constructor(private readonly ruralPropertyRepository: ARuralPropertiesRepository) { }

    async validate(id: number): Promise<boolean> {
        try {
            const ruralProperty = await this.ruralPropertyRepository.findOne(id);
            if (ruralProperty && ruralProperty.id) {
                return true;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            /**
             * é esperado que findOne dispare um not found exception se não encontrar a propriedade rural com id informado
             * porem neste caso não há nada a fazer com o erro, apenas retornar false
            */
            return false;
        }

        return false;
    }

    defaultMessage(args: ValidationArguments) {
        return `Não foram encontradas propriedades rurais com o rural_property_id fornecido (#${args.value}), verifique e tente novamente!`;
    }
}

export function IsValidRuralPropertyId(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidRuralPropertyIdConstraint,
        });
    };
}