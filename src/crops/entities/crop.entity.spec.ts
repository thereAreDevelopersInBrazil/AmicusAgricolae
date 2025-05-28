import { crops } from 'generated/prisma';
import { Crop } from './crop.entity';

describe('Crop', () => {
    const mockCropData: crops = {
        id: 22,
        product: 'Soja',
        area: 1.0595,
        harvest: 2022,
        rural_property_id: 17,
        created_at: new Date('2025-05-27T04:29:52.451Z'),
        updated_at: new Date('2025-05-27T04:33:12.982Z'),
        is_deleted: false,
        deleted_at: null
    };

    describe('construtor', () => {
        it('deve inicializar corretamente todas as propriedades', () => {
            const crop = new Crop(
                22,
                'Soja',
                1.0595,
                2022,
                17,
                new Date('2025-05-27T04:29:52.451Z'),
                new Date('2025-05-27T04:33:12.982Z')
            );

            expect(crop.id).toBe(22);
            expect(crop.product).toBe('Soja');
            expect(crop.area).toBe(1.0595);
            expect(crop.harvest).toBe(2022);
            expect(crop.rural_property_id).toBe(17);
            expect(crop.created_at).toEqual(new Date('2025-05-27T04:29:52.451Z'));
            expect(crop.updated_at).toEqual(new Date('2025-05-27T04:33:12.982Z'));
        });
    });

    describe('fromRaw', () => {
        it('deve criar uma instância de Crop a partir de um objeto crops', () => {
            const crop = Crop.fromRaw(mockCropData);

            expect(crop).toBeInstanceOf(Crop);
            expect(crop.id).toBe(mockCropData.id);
            expect(crop.product).toBe(mockCropData.product);
            expect(crop.area).toBe(mockCropData.area);
            expect(crop.harvest).toBe(mockCropData.harvest);
            expect(crop.rural_property_id).toBe(mockCropData.rural_property_id);
            expect(crop.created_at).toEqual(mockCropData.created_at);
            expect(crop.updated_at).toEqual(mockCropData.updated_at);
        });
    });

    describe('fromRawArray', () => {
        it('deve criar um array de instâncias de Crop a partir de um array de objetos crops', () => {
            const mockCropArray: crops[] = [
                mockCropData,
                {
                    id: 23,
                    product: 'Milho',
                    area: 2.5,
                    harvest: 2023,
                    rural_property_id: 18,
                    created_at: new Date('2025-05-28T10:00:00.000Z'),
                    updated_at: new Date('2025-05-28T10:30:00.000Z'),
                    is_deleted: false,
                    deleted_at: null
                },
            ];

            const crops = Crop.fromRawArray(mockCropArray);

            expect(crops).toHaveLength(2);
            expect(crops[0]).toBeInstanceOf(Crop);
            expect(crops[1]).toBeInstanceOf(Crop);
            expect(crops[0].id).toBe(mockCropArray[0].id);
            expect(crops[0].product).toBe(mockCropArray[0].product);
            expect(crops[1].id).toBe(mockCropArray[1].id);
            expect(crops[1].product).toBe(mockCropArray[1].product);
        });

        it('deve retornar um array vazio se o array de entrada estiver vazio', () => {
            const crops = Crop.fromRawArray([]);
            expect(crops).toEqual([]);
            expect(crops).toHaveLength(0);
        });
    });
});