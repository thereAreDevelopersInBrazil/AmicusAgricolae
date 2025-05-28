import { sanitizeDocument } from "./string";

describe('sanitizeDocument', () => {
    it('deve remover todos os caracteres não numéricos da string', () => {
        const input = '123.456.789-09';
        const result = sanitizeDocument(input);
        expect(result).toBe('12345678909');
    });

    it('deve retornar apenas números quando a string contém letras e números', () => {
        const input = 'abc123def456';
        const result = sanitizeDocument(input);
        expect(result).toBe('123456');
    });

    it('deve retornar string vazia quando a entrada é vazia', () => {
        const input = '';
        const result = sanitizeDocument(input);
        expect(result).toBe('');
    });

    it('deve retornar string vazia quando a entrada contém apenas caracteres não numéricos', () => {
        const input = 'abc!@#$%';
        const result = sanitizeDocument(input);
        expect(result).toBe('');
    });

    it('deve lidar com strings contendo espaços e caracteres especiais', () => {
        const input = ' 12-34.56/78 90 ';
        const result = sanitizeDocument(input);
        expect(result).toBe('1234567890');
    });

    it('deve retornar apenas números quando a entrada é um número como string', () => {
        const input = '123456';
        const result = sanitizeDocument(input);
        expect(result).toBe('123456');
    });
});