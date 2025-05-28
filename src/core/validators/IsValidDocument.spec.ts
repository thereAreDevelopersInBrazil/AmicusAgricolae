import { ValidationArguments } from 'class-validator';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { IsValidDocumentConstraint } from './IsValidDocument';

jest.mock('cpf-cnpj-validator', () => ({
    cpf: {
        isValid: jest.fn(),
    },
    cnpj: {
        isValid: jest.fn(),
    }
}));

describe('IsValidDocumentConstraint', () => {
    let constraint: IsValidDocumentConstraint;

    beforeEach(() => {
        constraint = new IsValidDocumentConstraint();
        jest.clearAllMocks();
    });

    describe('validate', () => {
        it('deve retornar falso se o documento não for uma string', () => {
            const args = {
                object: { type: 'PF' },
                value: 12345,
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(result).toBe(false);
        });

        it('deve retornar falso se o documento contém caracteres não numéricos', () => {
            const args = {
                object: { type: 'PF' },
                value: '12345abc',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(result).toBe(false);
        });

        it('deve retornar verdadeiro para CPF válido quando o tipo for PF', () => {
            (cpf.isValid as jest.Mock).mockReturnValue(true);
            const args = {
                object: { type: 'PF' },
                value: '12345678909',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(cpf.isValid).toHaveBeenCalledWith('12345678909');
            expect(result).toBe(true);
        });

        it('deve retornar falso para CPF inválido quando o tipo for PF', () => {
            (cpf.isValid as jest.Mock).mockReturnValue(false);
            const args = {
                object: { type: 'PF' },
                value: '12345678909',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(cpf.isValid).toHaveBeenCalledWith('12345678909');
            expect(result).toBe(false);
        });

        it('deve retornar verdadeiro para CNPJ válido quando o tipo for PJ', () => {
            (cnpj.isValid as jest.Mock).mockReturnValue(true);
            const args = {
                object: { type: 'PJ' },
                value: '12345678000195',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(cnpj.isValid).toHaveBeenCalledWith('12345678000195');
            expect(result).toBe(true);
        });

        it('deve retornar falso para CNPJ inválido quando o tipo for PJ', () => {
            (cnpj.isValid as jest.Mock).mockReturnValue(false);
            const args = {
                object: { type: 'PJ' },
                value: '12345678000195',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(cnpj.isValid).toHaveBeenCalledWith('12345678000195');
            expect(result).toBe(false);
        });

        it('deve retornar falso para tipo desconhecido', () => {
            const args = {
                object: { type: 'UNKNOWN' },
                value: '12345678909',
            } as ValidationArguments;

            const result = constraint.validate(args.value, args);

            expect(cpf.isValid).not.toHaveBeenCalled();
            expect(cnpj.isValid).not.toHaveBeenCalled();
            expect(result).toBe(false);
        });
    });

    describe('defaultMessage', () => {
        it('deve retornar mensagem de erro de CPF quando o tipo for PF', () => {
            const args = {
                object: { type: 'PF' },
            } as ValidationArguments;

            const message = constraint.defaultMessage(args);

            expect(message).toBe('CPF inválido');
        });

        it('deve retornar mensagem de erro de CNPJ quando o tipo for PJ', () => {
            const args = {
                object: { type: 'PJ' },
            } as ValidationArguments;

            const message = constraint.defaultMessage(args);

            expect(message).toBe('CNPJ inválido');
        });

        it('deve retornar mensagem de erro genérica para tipo desconhecido', () => {
            const args = {
                object: { type: 'UNKNOWN' },
            } as ValidationArguments;

            const message = constraint.defaultMessage(args);

            expect(message).toBe("Por favor, informe o tipo do documento válido ('PF', 'PJ') no campo 'type'!");
        });
    });
});