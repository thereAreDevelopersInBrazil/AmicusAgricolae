import { rural_properties } from 'generated/prisma';

export class RuralProperty {

    /**
     * Id da propriedade rural
     * @example 77
     */
    public readonly id: number;

    /**
     * Nome da propriedade rural / fazenda
     * @example "Rancho Fundo"
     */
    public readonly name: string;

    /**
     * 
     * Nome da cidade onde a propriedade rural está situada
     * @example "Goiânia"
     */
    public readonly city: string;

    /**
     * Nome do estado onde a propriedade rural está situada
     * @example "Goiás"
    */
    public readonly state: string;

    /**
     * Área total da propriedade rural em HECTARES
     * @example 102.0007
     */
    public readonly total_area: number;

    /**
     * Área agricultável da propriedade rural em HECTARES<br/>
     * @example 52.0007
    */
    public readonly arable_area: number;

    /**
     * Área de vegetação / preservação da propriedade rural em HECTARES<br/>
     * @example 50.0000
    */
    public readonly vegetation_area: number;


    /**
     * Data e hora de registro / cadastro da propriedade rural
     * @example "2025-05-27T03:52:46.889Z"
     */
    public readonly created_at: Date;

    /**
     * Data e hora da ultima atualização da propriedade rural
     * @example "2025-05-27T04:33:12.982Z"
     */
    public readonly updated_at: Date;

    /**
     * Id do produtor proprietário da propriedade rural
     * @example 12
    */
    public readonly productor_id: number;

    constructor(
        id: number,
        name: string,
        city: string,
        state: string,
        total_area: number,
        arable_area: number,
        vegetation_area: number,
        created_at: Date,
        updated_at: Date,
        productor_id: number
    ) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.state = state;
        this.total_area = total_area;
        this.arable_area = arable_area;
        this.vegetation_area = vegetation_area;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.productor_id = productor_id;
    }

    static fromRaw(raw: rural_properties): RuralProperty {
        return new RuralProperty(
            raw.id,
            raw.name,
            raw.city,
            raw.state,
            raw.total_area,
            raw.arable_area,
            raw.vegetation_area,
            raw.created_at,
            raw.updated_at,
            raw.productor_id
        );
    }

    static fromRawArray(rawArray: rural_properties[]): RuralProperty[] {
        return rawArray.map(RuralProperty.fromRaw);
    }
}