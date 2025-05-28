import { crops } from 'generated/prisma';

export class Crop {

    /**
     * Id da cultura / plantação
     * @example 22
     */
    public readonly id: number;

    /**
     * Nome do produto final da colheita
     * @example "Soja"
     */
    public readonly product: string;

    /**
     * Área da plantação da cultura em HECTARES
     * @example 1.0595
     */
    public readonly area: number;

    /**
     * Ano da safra
     * @example 2022
     */
    public readonly harvest: number;

    /**
     * Id da propriedade rural à qual a cultura pertence / pertenceu / pertencerá
     * @example 17
     */
    public readonly rural_property_id: number;

    /**
     * Data de registro da cultura / plantação
     * @example "2025-05-27T04:29:52.451Z"
     */
    public readonly created_at: Date;

    /**
     * Data da ultima atualização no registro da cultura / plantação
     * @example "2025-05-27T04:33:12.982Z"
     */
    public readonly updated_at: Date;

    constructor(
        id: number,
        product: string,
        area: number,
        harvest: number,
        rural_property_id: number,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id;
        this.product = product;
        this.area = area;
        this.harvest = harvest;
        this.rural_property_id = rural_property_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static fromRaw(raw: crops): Crop {
        return new Crop(
            raw.id,
            raw.product,
            raw.area,
            raw.harvest,
            raw.rural_property_id,
            raw.created_at,
            raw.updated_at
        );
    }

    static fromRawArray(rawArray: crops[]): Crop[] {
        return rawArray.map(Crop.fromRaw);
    }
}
