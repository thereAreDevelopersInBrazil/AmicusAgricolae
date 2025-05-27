import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
    ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { AProductorsRepository } from '../repositories/abstracts/aproductors.repository';

@ValidatorConstraint({ name: 'IsValidProductorId', async: true })
@Injectable()
export class IsValidProductorIdConstraint implements ValidatorConstraintInterface {
    constructor(private readonly productorRepository: AProductorsRepository) { }

    async validate(id: number): Promise<boolean> {
        try {
            const productor = await this.productorRepository.findOne(id);
            if (productor && productor.id) {
                return true;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            /**
             * é esperado que findOne dispare um not found exception se não encontrar o produtor com id informado
             * porem neste caso não há nada a fazer com o erro, apenas retornar false
            */
            return false;
        }

        return false;
    }

    defaultMessage(args: ValidationArguments) {
        return `Não foram encontrados produtores com o productor_id fornecido (#${args.value}), verifique e tente novamente!`;
    }
}

export function IsValidProductorId(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidProductorIdConstraint,
        });
    };
}