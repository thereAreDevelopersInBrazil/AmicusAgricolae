import { crops } from 'generated/prisma';

export class Crop {
    constructor(
        public readonly id: number,
        public readonly product: string,
        public readonly area: number,
        public readonly harvest: number,
        public readonly rural_property_id: number,
        public readonly created_at: Date,
        public readonly updated_at: Date,
        public readonly deleted_at: Date | null,
        public readonly is_deleted: boolean,
    ) { }

    toJson() {
        return {
            id: this.id,
            product: this.product,
            area: this.area,
            harvest: this.harvest,
            rural_property_id: this.rural_property_id,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
    static fromRaw(raw: crops): Crop {
        return new Crop(
            raw.id,
            raw.product,
            raw.area,
            raw.harvest,
            raw.rural_property_id,
            raw.created_at,
            raw.updated_at,
            raw.deleted_at,
            raw.is_deleted,
        );
    }

    static fromRawArray(rawArray: crops[]): Crop[] {
        return rawArray.map(Crop.fromRaw);
    }
}
