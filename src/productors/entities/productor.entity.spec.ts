import { productors } from 'generated/prisma';
import { Productor } from './productor.entity';

describe('Productor', () => {
    const mockProductorData: productors = {
        id: 7,
        name: 'Natan Souza',
        document: '84312514097',
        type: 'PF',
        created_at: new Date('2025-05-27T03:52:46.889Z'),
        updated_at: new Date('2025-05-27T04:33:12.982Z'),
        is_deleted: false,
        deleted_at: null
    };

    describe('construtor', () => {
        it('deve inicializar corretamente todas as propriedades', () => {
            const productor = new Productor(
                7,
                'Natan Souza',
                '84312514097',
                'PF',
                new Date('2025-05-27T03:52:46.889Z'),
                new Date('2025-05-27T04:33:12.982Z')
            );

            expect(productor.id).toBe(7);
            expect(productor.name).toBe('Natan Souza');
            expect(productor.document).toBe('84312514097');
            expect(productor.type).toBe('PF');
            expect(productor.created_at).toEqual(new Date('2025-05-27T03:52:46.889Z'));
            expect(productor.updated_at).toEqual(new Date('2025-05-27T04:33:12.982Z'));
        });
    });

    describe('fromRaw', () => {
        it('deve criar uma instância de Productor a partir de um objeto productors', () => {
            const productor = Productor.fromRaw(mockProductorData);

            expect(productor).toBeInstanceOf(Productor);
            expect(productor.id).toBe(mockProductorData.id);
            expect(productor.name).toBe(mockProductorData.name);
            expect(productor.document).toBe(mockProductorData.document);
            expect(productor.type).toBe(mockProductorData.type);
            expect(productor.created_at).toEqual(mockProductorData.created_at);
            expect(productor.updated_at).toEqual(mockProductorData.updated_at);
        });
    });

    describe('fromRawArray', () => {
        it('deve criar um array de instâncias de Productor a partir de um array de objetos productors', () => {
            const mockProductorArray: productors[] = [
                mockProductorData,
                {
                    id: 8,
                    name: 'Agro Ltda',
                    document: '38137646000198',
                    type: 'PJ',
                    created_at: new Date('2025-05-28T10:00:00.000Z'),
                    updated_at: new Date('2025-05-28T10:30:00.000Z'),
                    is_deleted: false,
                    deleted_at: null
                },
            ];

            const productors = Productor.fromRawArray(mockProductorArray);

            expect(productors).toHaveLength(2);
            expect(productors[0]).toBeInstanceOf(Productor);
            expect(productors[1]).toBeInstanceOf(Productor);
            expect(productors[0].id).toBe(mockProductorArray[0].id);
            expect(productors[0].name).toBe(mockProductorArray[0].name);
            expect(productors[0].document).toBe(mockProductorArray[0].document);
            expect(productors[0].type).toBe(mockProductorArray[0].type);
            expect(productors[1].id).toBe(mockProductorArray[1].id);
            expect(productors[1].name).toBe(mockProductorArray[1].name);
            expect(productors[1].document).toBe(mockProductorArray[1].document);
            expect(productors[1].type).toBe(mockProductorArray[1].type);
        });

        it('deve retornar um array vazio se o array de entrada estiver vazio', () => {
            const productors = Productor.fromRawArray([]);
            expect(productors).toEqual([]);
            expect(productors).toHaveLength(0);
        });
    });
});