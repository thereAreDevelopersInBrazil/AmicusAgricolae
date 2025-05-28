import { productors } from 'generated/prisma';

export class Productor {

  /**
   * Id do produtor
   * @example 7
   */
  public readonly id: number;

  /**
   * Nome do produtor
   * @example "Natan Souza"
   */
  public readonly name: string;

  /**
   * Documento do produtor de acordo com o campo "type"<br/>
   * Caso "type" seja "PF", será um CPF
   * Caso "type" seja "PJ", será um CNPJ
   * @example "84312514097"
   * @example "38137646000198"
   */
  public readonly document: string;

  /**
   * Tipo de pessoa<br/>
   * "PF" deve ser interpretado como "Pessoa Física"<br/>
   * "PJ" deve ser interpretado como "Pessoa Jurídica"<br/>
   * @example "PF"
   * @example "PJ"
   */
  public readonly type: string;

  /**
   * Data e hora de registro / cadastro do produtor
   * @example "2025-05-27T03:52:46.889Z"
   */
  public readonly created_at: Date;

  /**
   * Data e hora da ultima atualização dos dados do produtor
   * @example "2025-05-27T04:33:12.982Z"
   */
  public readonly updated_at: Date;

  constructor(
    id: number,
    name: string,
    document: string,
    type: string,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id
    this.name = name;
    this.document = document;
    this.type = type;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static fromRaw(raw: productors): Productor {
    return new Productor(
      raw.id,
      raw.name,
      raw.document,
      raw.type,
      raw.created_at,
      raw.updated_at
    );
  }

  static fromRawArray(rawArray: productors[]): Productor[] {
    return rawArray.map(Productor.fromRaw);
  }
}
