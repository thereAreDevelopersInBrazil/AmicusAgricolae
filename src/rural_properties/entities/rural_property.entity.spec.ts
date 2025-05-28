import { rural_properties } from 'generated/prisma';
import { RuralProperty } from './rural_property.entity';

describe('RuralProperty', () => {
    const mockRuralPropertyData: rural_properties = {
        id: 77,
        name: 'Rancho Fundo',
        city: 'Goiânia',
        state: 'Goiás',
        total_area: 102.0007,
        arable_area: 52.0007,
        vegetation_area: 50.0000,
        created_at: new Date('2025-05-27T03:52:46.889Z'),
        updated_at: new Date('2025-05-27T04:33:12.982Z'),
        productor_id: 12,
        is_deleted: false,
        deleted_at: null
    };

    describe('construtor', () => {
        it('deve inicializar corretamente todas as propriedades', () => {
            const ruralProperty = new RuralProperty(
                77,
                'Rancho Fundo',
                'Goiânia',
                'Goiás',
                102.0007,
                52.0007,
                50.0000,
                new Date('2025-05-27T03:52:46.889Z'),
                new Date('2025-05-27T04:33:12.982Z'),
                12
            );

            expect(ruralProperty.id).toBe(77);
            expect(ruralProperty.name).toBe('Rancho Fundo');
            expect(ruralProperty.city).toBe('Goiânia');
            expect(ruralProperty.state).toBe('Goiás');
            expect(ruralProperty.total_area).toBe(102.0007);
            expect(ruralProperty.arable_area).toBe(52.0007);
            expect(ruralProperty.vegetation_area).toBe(50.0000);
            expect(ruralProperty.created_at).toEqual(new Date('2025-05-27T03:52:46.889Z'));
            expect(ruralProperty.updated_at).toEqual(new Date('2025-05-27T04:33:12.982Z'));
            expect(ruralProperty.productor_id).toBe(12);
        });
    });

    describe('fromRaw', () => {
        it('deve criar uma instância de RuralProperty a partir de um objeto rural_properties', () => {
            const ruralProperty = RuralProperty.fromRaw(mockRuralPropertyData);

            expect(ruralProperty).toBeInstanceOf(RuralProperty);
            expect(ruralProperty.id).toBe(mockRuralPropertyData.id);
            expect(ruralProperty.name).toBe(mockRuralPropertyData.name);
            expect(ruralProperty.city).toBe(mockRuralPropertyData.city);
            expect(ruralProperty.state).toBe(mockRuralPropertyData.state);
            expect(ruralProperty.total_area).toBe(mockRuralPropertyData.total_area);
            expect(ruralProperty.arable_area).toBe(mockRuralPropertyData.arable_area);
            expect(ruralProperty.vegetation_area).toBe(mockRuralPropertyData.vegetation_area);
            expect(ruralProperty.created_at).toEqual(mockRuralPropertyData.created_at);
            expect(ruralProperty.updated_at).toEqual(mockRuralPropertyData.updated_at);
            expect(ruralProperty.productor_id).toBe(mockRuralPropertyData.productor_id);
        });
    });

    describe('fromRawArray', () => {
        it('deve criar um array de instâncias de RuralProperty a partir de um array de objetos rural_properties', () => {
            const mockRuralPropertyArray: rural_properties[] = [
                mockRuralPropertyData,
                {
                    id: 78,
                    name: 'Fazenda Boa Vista',
                    city: 'Anápolis',
                    state: 'Goiás',
                    total_area: 200.5000,
                    arable_area: 150.3000,
                    vegetation_area: 50.2000,
                    created_at: new Date('2025-05-28T10:00:00.000Z'),
                    updated_at: new Date('2025-05-28T10:30:00.000Z'),
                    productor_id: 13,
                    is_deleted: false,
                    deleted_at: null
                },
            ];

            const ruralProperties = RuralProperty.fromRawArray(mockRuralPropertyArray);

            expect(ruralProperties).toHaveLength(2);
            expect(ruralProperties[0]).toBeInstanceOf(RuralProperty);
            expect(ruralProperties[1]).toBeInstanceOf(RuralProperty);
            expect(ruralProperties[0].id).toBe(mockRuralPropertyArray[0].id);
            expect(ruralProperties[0].name).toBe(mockRuralPropertyArray[0].name);
            expect(ruralProperties[0].city).toBe(mockRuralPropertyArray[0].city);
            expect(ruralProperties[0].state).toBe(mockRuralPropertyArray[0].state);
            expect(ruralProperties[0].total_area).toBe(mockRuralPropertyArray[0].total_area);
            expect(ruralProperties[0].arable_area).toBe(mockRuralPropertyArray[0].arable_area);
            expect(ruralProperties[0].vegetation_area).toBe(mockRuralPropertyArray[0].vegetation_area);
            expect(ruralProperties[1].id).toBe(mockRuralPropertyArray[1].id);
            expect(ruralProperties[1].name).toBe(mockRuralPropertyArray[1].name);
            expect(ruralProperties[1].city).toBe(mockRuralPropertyArray[1].city);
            expect(ruralProperties[1].state).toBe(mockRuralPropertyArray[1].state);
            expect(ruralProperties[1].total_area).toBe(mockRuralPropertyArray[1].total_area);
            expect(ruralProperties[1].arable_area).toBe(mockRuralPropertyArray[1].arable_area);
            expect(ruralProperties[1].vegetation_area).toBe(mockRuralPropertyArray[1].vegetation_area);
        });

        it('deve retornar um array vazio se o array de entrada estiver vazio', () => {
            const ruralProperties = RuralProperty.fromRawArray([]);
            expect(ruralProperties).toEqual([]);
            expect(ruralProperties).toHaveLength(0);
        });
    });
});