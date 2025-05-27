import { productors } from 'generated/prisma';

export class Productor {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly document: string,
    public readonly type: string,
    public readonly created_at: Date,
    public readonly updated_at: Date,
    public readonly deleted_at: Date | null,
    public readonly is_deleted: boolean,
  ) { }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      document: this.document,
      type: this.type,
      created_at: this.created_at,
      updated_at: this.updated_at
    }
  }

  static fromRaw(raw: productors): Productor {
    return new Productor(
      raw.id,
      raw.name,
      raw.document,
      raw.type,
      raw.created_at,
      raw.updated_at,
      raw.deleted_at,
      raw.is_deleted,
    );
  }

  static fromRawArray(rawArray: productors[]): Productor[] {
    return rawArray.map(Productor.fromRaw);
  }
}
