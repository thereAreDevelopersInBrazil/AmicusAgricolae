import { rural_properties } from 'generated/prisma';

export class RuralProperty {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly city: string,
        public readonly state: string,
        public readonly total_area: number,
        public readonly arable_area: number,
        public readonly vegetation_area: number,
        public readonly created_at: Date,
        public readonly updated_at: Date,
        public readonly deleted_at: Date | null,
        public readonly is_deleted: boolean,
        public readonly productor_id: number,
    ) { }

    toJson() {
        return {
            id: this.id,
            productor_id: this.productor_id,
            name: this.name,
            city: this.city,
            state: this.state,
            total_area: this.total_area,
            arable_area: this.arable_area,
            vegetation_area: this.vegetation_area,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
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
            raw.deleted_at,
            raw.is_deleted,
            raw.productor_id,
        );
    }

    static fromRawArray(rawArray: rural_properties[]): RuralProperty[] {
        return rawArray.map(RuralProperty.fromRaw);
    }
}