
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model productors
 * 
 */
export type productors = $Result.DefaultSelection<Prisma.$productorsPayload>
/**
 * Model rural_properties
 * 
 */
export type rural_properties = $Result.DefaultSelection<Prisma.$rural_propertiesPayload>
/**
 * Model crops
 * 
 */
export type crops = $Result.DefaultSelection<Prisma.$cropsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LegalEntityType: {
  PF: 'PF',
  PJ: 'PJ'
};

export type LegalEntityType = (typeof LegalEntityType)[keyof typeof LegalEntityType]

}

export type LegalEntityType = $Enums.LegalEntityType

export const LegalEntityType: typeof $Enums.LegalEntityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Productors
 * const productors = await prisma.productors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Productors
   * const productors = await prisma.productors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.productors`: Exposes CRUD operations for the **productors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productors
    * const productors = await prisma.productors.findMany()
    * ```
    */
  get productors(): Prisma.productorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rural_properties`: Exposes CRUD operations for the **rural_properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rural_properties
    * const rural_properties = await prisma.rural_properties.findMany()
    * ```
    */
  get rural_properties(): Prisma.rural_propertiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crops`: Exposes CRUD operations for the **crops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crops.findMany()
    * ```
    */
  get crops(): Prisma.cropsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    productors: 'productors',
    rural_properties: 'rural_properties',
    crops: 'crops'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "productors" | "rural_properties" | "crops"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      productors: {
        payload: Prisma.$productorsPayload<ExtArgs>
        fields: Prisma.productorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          findFirst: {
            args: Prisma.productorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          findMany: {
            args: Prisma.productorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>[]
          }
          create: {
            args: Prisma.productorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          createMany: {
            args: Prisma.productorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>[]
          }
          delete: {
            args: Prisma.productorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          update: {
            args: Prisma.productorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          deleteMany: {
            args: Prisma.productorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>[]
          }
          upsert: {
            args: Prisma.productorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productorsPayload>
          }
          aggregate: {
            args: Prisma.ProductorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductors>
          }
          groupBy: {
            args: Prisma.productorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productorsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductorsCountAggregateOutputType> | number
          }
        }
      }
      rural_properties: {
        payload: Prisma.$rural_propertiesPayload<ExtArgs>
        fields: Prisma.rural_propertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rural_propertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rural_propertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          findFirst: {
            args: Prisma.rural_propertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rural_propertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          findMany: {
            args: Prisma.rural_propertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>[]
          }
          create: {
            args: Prisma.rural_propertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          createMany: {
            args: Prisma.rural_propertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rural_propertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>[]
          }
          delete: {
            args: Prisma.rural_propertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          update: {
            args: Prisma.rural_propertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          deleteMany: {
            args: Prisma.rural_propertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rural_propertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rural_propertiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>[]
          }
          upsert: {
            args: Prisma.rural_propertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rural_propertiesPayload>
          }
          aggregate: {
            args: Prisma.Rural_propertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRural_properties>
          }
          groupBy: {
            args: Prisma.rural_propertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rural_propertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rural_propertiesCountArgs<ExtArgs>
            result: $Utils.Optional<Rural_propertiesCountAggregateOutputType> | number
          }
        }
      }
      crops: {
        payload: Prisma.$cropsPayload<ExtArgs>
        fields: Prisma.cropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cropsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cropsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          findFirst: {
            args: Prisma.cropsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cropsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          findMany: {
            args: Prisma.cropsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          create: {
            args: Prisma.cropsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          createMany: {
            args: Prisma.cropsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cropsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          delete: {
            args: Prisma.cropsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          update: {
            args: Prisma.cropsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          deleteMany: {
            args: Prisma.cropsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cropsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cropsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          upsert: {
            args: Prisma.cropsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          aggregate: {
            args: Prisma.CropsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrops>
          }
          groupBy: {
            args: Prisma.cropsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cropsCountArgs<ExtArgs>
            result: $Utils.Optional<CropsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    productors?: productorsOmit
    rural_properties?: rural_propertiesOmit
    crops?: cropsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductorsCountOutputType
   */

  export type ProductorsCountOutputType = {
    properties: number
  }

  export type ProductorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ProductorsCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * ProductorsCountOutputType without action
   */
  export type ProductorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductorsCountOutputType
     */
    select?: ProductorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductorsCountOutputType without action
   */
  export type ProductorsCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rural_propertiesWhereInput
  }


  /**
   * Count Type Rural_propertiesCountOutputType
   */

  export type Rural_propertiesCountOutputType = {
    crops: number
  }

  export type Rural_propertiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crops?: boolean | Rural_propertiesCountOutputTypeCountCropsArgs
  }

  // Custom InputTypes
  /**
   * Rural_propertiesCountOutputType without action
   */
  export type Rural_propertiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rural_propertiesCountOutputType
     */
    select?: Rural_propertiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rural_propertiesCountOutputType without action
   */
  export type Rural_propertiesCountOutputTypeCountCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cropsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model productors
   */

  export type AggregateProductors = {
    _count: ProductorsCountAggregateOutputType | null
    _avg: ProductorsAvgAggregateOutputType | null
    _sum: ProductorsSumAggregateOutputType | null
    _min: ProductorsMinAggregateOutputType | null
    _max: ProductorsMaxAggregateOutputType | null
  }

  export type ProductorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductorsSumAggregateOutputType = {
    id: number | null
  }

  export type ProductorsMinAggregateOutputType = {
    id: number | null
    name: string | null
    document: string | null
    type: $Enums.LegalEntityType | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type ProductorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    document: string | null
    type: $Enums.LegalEntityType | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type ProductorsCountAggregateOutputType = {
    id: number
    name: number
    document: number
    type: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type ProductorsAvgAggregateInputType = {
    id?: true
  }

  export type ProductorsSumAggregateInputType = {
    id?: true
  }

  export type ProductorsMinAggregateInputType = {
    id?: true
    name?: true
    document?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ProductorsMaxAggregateInputType = {
    id?: true
    name?: true
    document?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ProductorsCountAggregateInputType = {
    id?: true
    name?: true
    document?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type ProductorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productors to aggregate.
     */
    where?: productorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productors to fetch.
     */
    orderBy?: productorsOrderByWithRelationInput | productorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productors
    **/
    _count?: true | ProductorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductorsMaxAggregateInputType
  }

  export type GetProductorsAggregateType<T extends ProductorsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductors[P]>
      : GetScalarType<T[P], AggregateProductors[P]>
  }




  export type productorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productorsWhereInput
    orderBy?: productorsOrderByWithAggregationInput | productorsOrderByWithAggregationInput[]
    by: ProductorsScalarFieldEnum[] | ProductorsScalarFieldEnum
    having?: productorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductorsCountAggregateInputType | true
    _avg?: ProductorsAvgAggregateInputType
    _sum?: ProductorsSumAggregateInputType
    _min?: ProductorsMinAggregateInputType
    _max?: ProductorsMaxAggregateInputType
  }

  export type ProductorsGroupByOutputType = {
    id: number
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: ProductorsCountAggregateOutputType | null
    _avg: ProductorsAvgAggregateOutputType | null
    _sum: ProductorsSumAggregateOutputType | null
    _min: ProductorsMinAggregateOutputType | null
    _max: ProductorsMaxAggregateOutputType | null
  }

  type GetProductorsGroupByPayload<T extends productorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductorsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductorsGroupByOutputType[P]>
        }
      >
    >


  export type productorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    properties?: boolean | productors$propertiesArgs<ExtArgs>
    _count?: boolean | ProductorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productors"]>

  export type productorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["productors"]>

  export type productorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["productors"]>

  export type productorsSelectScalar = {
    id?: boolean
    name?: boolean
    document?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type productorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "document" | "type" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["productors"]>
  export type productorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | productors$propertiesArgs<ExtArgs>
    _count?: boolean | ProductorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productors"
    objects: {
      properties: Prisma.$rural_propertiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      document: string
      type: $Enums.LegalEntityType
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["productors"]>
    composites: {}
  }

  type productorsGetPayload<S extends boolean | null | undefined | productorsDefaultArgs> = $Result.GetResult<Prisma.$productorsPayload, S>

  type productorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductorsCountAggregateInputType | true
    }

  export interface productorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productors'], meta: { name: 'productors' } }
    /**
     * Find zero or one Productors that matches the filter.
     * @param {productorsFindUniqueArgs} args - Arguments to find a Productors
     * @example
     * // Get one Productors
     * const productors = await prisma.productors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productorsFindUniqueArgs>(args: SelectSubset<T, productorsFindUniqueArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productorsFindUniqueOrThrowArgs} args - Arguments to find a Productors
     * @example
     * // Get one Productors
     * const productors = await prisma.productors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productorsFindUniqueOrThrowArgs>(args: SelectSubset<T, productorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsFindFirstArgs} args - Arguments to find a Productors
     * @example
     * // Get one Productors
     * const productors = await prisma.productors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productorsFindFirstArgs>(args?: SelectSubset<T, productorsFindFirstArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsFindFirstOrThrowArgs} args - Arguments to find a Productors
     * @example
     * // Get one Productors
     * const productors = await prisma.productors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productorsFindFirstOrThrowArgs>(args?: SelectSubset<T, productorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productors
     * const productors = await prisma.productors.findMany()
     * 
     * // Get first 10 Productors
     * const productors = await prisma.productors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productorsWithIdOnly = await prisma.productors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productorsFindManyArgs>(args?: SelectSubset<T, productorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productors.
     * @param {productorsCreateArgs} args - Arguments to create a Productors.
     * @example
     * // Create one Productors
     * const Productors = await prisma.productors.create({
     *   data: {
     *     // ... data to create a Productors
     *   }
     * })
     * 
     */
    create<T extends productorsCreateArgs>(args: SelectSubset<T, productorsCreateArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productors.
     * @param {productorsCreateManyArgs} args - Arguments to create many Productors.
     * @example
     * // Create many Productors
     * const productors = await prisma.productors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productorsCreateManyArgs>(args?: SelectSubset<T, productorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productors and returns the data saved in the database.
     * @param {productorsCreateManyAndReturnArgs} args - Arguments to create many Productors.
     * @example
     * // Create many Productors
     * const productors = await prisma.productors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productors and only return the `id`
     * const productorsWithIdOnly = await prisma.productors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productorsCreateManyAndReturnArgs>(args?: SelectSubset<T, productorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productors.
     * @param {productorsDeleteArgs} args - Arguments to delete one Productors.
     * @example
     * // Delete one Productors
     * const Productors = await prisma.productors.delete({
     *   where: {
     *     // ... filter to delete one Productors
     *   }
     * })
     * 
     */
    delete<T extends productorsDeleteArgs>(args: SelectSubset<T, productorsDeleteArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productors.
     * @param {productorsUpdateArgs} args - Arguments to update one Productors.
     * @example
     * // Update one Productors
     * const productors = await prisma.productors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productorsUpdateArgs>(args: SelectSubset<T, productorsUpdateArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productors.
     * @param {productorsDeleteManyArgs} args - Arguments to filter Productors to delete.
     * @example
     * // Delete a few Productors
     * const { count } = await prisma.productors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productorsDeleteManyArgs>(args?: SelectSubset<T, productorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productors
     * const productors = await prisma.productors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productorsUpdateManyArgs>(args: SelectSubset<T, productorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productors and returns the data updated in the database.
     * @param {productorsUpdateManyAndReturnArgs} args - Arguments to update many Productors.
     * @example
     * // Update many Productors
     * const productors = await prisma.productors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productors and only return the `id`
     * const productorsWithIdOnly = await prisma.productors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productorsUpdateManyAndReturnArgs>(args: SelectSubset<T, productorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productors.
     * @param {productorsUpsertArgs} args - Arguments to update or create a Productors.
     * @example
     * // Update or create a Productors
     * const productors = await prisma.productors.upsert({
     *   create: {
     *     // ... data to create a Productors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productors we want to update
     *   }
     * })
     */
    upsert<T extends productorsUpsertArgs>(args: SelectSubset<T, productorsUpsertArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsCountArgs} args - Arguments to filter Productors to count.
     * @example
     * // Count the number of Productors
     * const count = await prisma.productors.count({
     *   where: {
     *     // ... the filter for the Productors we want to count
     *   }
     * })
    **/
    count<T extends productorsCountArgs>(
      args?: Subset<T, productorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductorsAggregateArgs>(args: Subset<T, ProductorsAggregateArgs>): Prisma.PrismaPromise<GetProductorsAggregateType<T>>

    /**
     * Group by Productors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productorsGroupByArgs['orderBy'] }
        : { orderBy?: productorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productors model
   */
  readonly fields: productorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends productors$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, productors$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productors model
   */
  interface productorsFieldRefs {
    readonly id: FieldRef<"productors", 'Int'>
    readonly name: FieldRef<"productors", 'String'>
    readonly document: FieldRef<"productors", 'String'>
    readonly type: FieldRef<"productors", 'LegalEntityType'>
    readonly created_at: FieldRef<"productors", 'DateTime'>
    readonly updated_at: FieldRef<"productors", 'DateTime'>
    readonly deleted_at: FieldRef<"productors", 'DateTime'>
    readonly is_deleted: FieldRef<"productors", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * productors findUnique
   */
  export type productorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter, which productors to fetch.
     */
    where: productorsWhereUniqueInput
  }

  /**
   * productors findUniqueOrThrow
   */
  export type productorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter, which productors to fetch.
     */
    where: productorsWhereUniqueInput
  }

  /**
   * productors findFirst
   */
  export type productorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter, which productors to fetch.
     */
    where?: productorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productors to fetch.
     */
    orderBy?: productorsOrderByWithRelationInput | productorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productors.
     */
    cursor?: productorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productors.
     */
    distinct?: ProductorsScalarFieldEnum | ProductorsScalarFieldEnum[]
  }

  /**
   * productors findFirstOrThrow
   */
  export type productorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter, which productors to fetch.
     */
    where?: productorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productors to fetch.
     */
    orderBy?: productorsOrderByWithRelationInput | productorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productors.
     */
    cursor?: productorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productors.
     */
    distinct?: ProductorsScalarFieldEnum | ProductorsScalarFieldEnum[]
  }

  /**
   * productors findMany
   */
  export type productorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter, which productors to fetch.
     */
    where?: productorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productors to fetch.
     */
    orderBy?: productorsOrderByWithRelationInput | productorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productors.
     */
    cursor?: productorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productors.
     */
    skip?: number
    distinct?: ProductorsScalarFieldEnum | ProductorsScalarFieldEnum[]
  }

  /**
   * productors create
   */
  export type productorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * The data needed to create a productors.
     */
    data: XOR<productorsCreateInput, productorsUncheckedCreateInput>
  }

  /**
   * productors createMany
   */
  export type productorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productors.
     */
    data: productorsCreateManyInput | productorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productors createManyAndReturn
   */
  export type productorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * The data used to create many productors.
     */
    data: productorsCreateManyInput | productorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productors update
   */
  export type productorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * The data needed to update a productors.
     */
    data: XOR<productorsUpdateInput, productorsUncheckedUpdateInput>
    /**
     * Choose, which productors to update.
     */
    where: productorsWhereUniqueInput
  }

  /**
   * productors updateMany
   */
  export type productorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productors.
     */
    data: XOR<productorsUpdateManyMutationInput, productorsUncheckedUpdateManyInput>
    /**
     * Filter which productors to update
     */
    where?: productorsWhereInput
    /**
     * Limit how many productors to update.
     */
    limit?: number
  }

  /**
   * productors updateManyAndReturn
   */
  export type productorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * The data used to update productors.
     */
    data: XOR<productorsUpdateManyMutationInput, productorsUncheckedUpdateManyInput>
    /**
     * Filter which productors to update
     */
    where?: productorsWhereInput
    /**
     * Limit how many productors to update.
     */
    limit?: number
  }

  /**
   * productors upsert
   */
  export type productorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * The filter to search for the productors to update in case it exists.
     */
    where: productorsWhereUniqueInput
    /**
     * In case the productors found by the `where` argument doesn't exist, create a new productors with this data.
     */
    create: XOR<productorsCreateInput, productorsUncheckedCreateInput>
    /**
     * In case the productors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productorsUpdateInput, productorsUncheckedUpdateInput>
  }

  /**
   * productors delete
   */
  export type productorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
    /**
     * Filter which productors to delete.
     */
    where: productorsWhereUniqueInput
  }

  /**
   * productors deleteMany
   */
  export type productorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productors to delete
     */
    where?: productorsWhereInput
    /**
     * Limit how many productors to delete.
     */
    limit?: number
  }

  /**
   * productors.properties
   */
  export type productors$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    where?: rural_propertiesWhereInput
    orderBy?: rural_propertiesOrderByWithRelationInput | rural_propertiesOrderByWithRelationInput[]
    cursor?: rural_propertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rural_propertiesScalarFieldEnum | Rural_propertiesScalarFieldEnum[]
  }

  /**
   * productors without action
   */
  export type productorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productors
     */
    select?: productorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productors
     */
    omit?: productorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productorsInclude<ExtArgs> | null
  }


  /**
   * Model rural_properties
   */

  export type AggregateRural_properties = {
    _count: Rural_propertiesCountAggregateOutputType | null
    _avg: Rural_propertiesAvgAggregateOutputType | null
    _sum: Rural_propertiesSumAggregateOutputType | null
    _min: Rural_propertiesMinAggregateOutputType | null
    _max: Rural_propertiesMaxAggregateOutputType | null
  }

  export type Rural_propertiesAvgAggregateOutputType = {
    id: number | null
    total_area: number | null
    arable_area: number | null
    vegetation_area: number | null
    productor_id: number | null
  }

  export type Rural_propertiesSumAggregateOutputType = {
    id: number | null
    total_area: number | null
    arable_area: number | null
    vegetation_area: number | null
    productor_id: number | null
  }

  export type Rural_propertiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    state: string | null
    total_area: number | null
    arable_area: number | null
    vegetation_area: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    productor_id: number | null
  }

  export type Rural_propertiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    state: string | null
    total_area: number | null
    arable_area: number | null
    vegetation_area: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    productor_id: number | null
  }

  export type Rural_propertiesCountAggregateOutputType = {
    id: number
    name: number
    city: number
    state: number
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    productor_id: number
    _all: number
  }


  export type Rural_propertiesAvgAggregateInputType = {
    id?: true
    total_area?: true
    arable_area?: true
    vegetation_area?: true
    productor_id?: true
  }

  export type Rural_propertiesSumAggregateInputType = {
    id?: true
    total_area?: true
    arable_area?: true
    vegetation_area?: true
    productor_id?: true
  }

  export type Rural_propertiesMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    total_area?: true
    arable_area?: true
    vegetation_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    productor_id?: true
  }

  export type Rural_propertiesMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    total_area?: true
    arable_area?: true
    vegetation_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    productor_id?: true
  }

  export type Rural_propertiesCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    total_area?: true
    arable_area?: true
    vegetation_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    productor_id?: true
    _all?: true
  }

  export type Rural_propertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rural_properties to aggregate.
     */
    where?: rural_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rural_properties to fetch.
     */
    orderBy?: rural_propertiesOrderByWithRelationInput | rural_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rural_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rural_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rural_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rural_properties
    **/
    _count?: true | Rural_propertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rural_propertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rural_propertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rural_propertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rural_propertiesMaxAggregateInputType
  }

  export type GetRural_propertiesAggregateType<T extends Rural_propertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateRural_properties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRural_properties[P]>
      : GetScalarType<T[P], AggregateRural_properties[P]>
  }




  export type rural_propertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rural_propertiesWhereInput
    orderBy?: rural_propertiesOrderByWithAggregationInput | rural_propertiesOrderByWithAggregationInput[]
    by: Rural_propertiesScalarFieldEnum[] | Rural_propertiesScalarFieldEnum
    having?: rural_propertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rural_propertiesCountAggregateInputType | true
    _avg?: Rural_propertiesAvgAggregateInputType
    _sum?: Rural_propertiesSumAggregateInputType
    _min?: Rural_propertiesMinAggregateInputType
    _max?: Rural_propertiesMaxAggregateInputType
  }

  export type Rural_propertiesGroupByOutputType = {
    id: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    productor_id: number
    _count: Rural_propertiesCountAggregateOutputType | null
    _avg: Rural_propertiesAvgAggregateOutputType | null
    _sum: Rural_propertiesSumAggregateOutputType | null
    _min: Rural_propertiesMinAggregateOutputType | null
    _max: Rural_propertiesMaxAggregateOutputType | null
  }

  type GetRural_propertiesGroupByPayload<T extends rural_propertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rural_propertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rural_propertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rural_propertiesGroupByOutputType[P]>
            : GetScalarType<T[P], Rural_propertiesGroupByOutputType[P]>
        }
      >
    >


  export type rural_propertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    total_area?: boolean
    arable_area?: boolean
    vegetation_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    productor_id?: boolean
    productor?: boolean | productorsDefaultArgs<ExtArgs>
    crops?: boolean | rural_properties$cropsArgs<ExtArgs>
    _count?: boolean | Rural_propertiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rural_properties"]>

  export type rural_propertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    total_area?: boolean
    arable_area?: boolean
    vegetation_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    productor_id?: boolean
    productor?: boolean | productorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rural_properties"]>

  export type rural_propertiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    total_area?: boolean
    arable_area?: boolean
    vegetation_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    productor_id?: boolean
    productor?: boolean | productorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rural_properties"]>

  export type rural_propertiesSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    total_area?: boolean
    arable_area?: boolean
    vegetation_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    productor_id?: boolean
  }

  export type rural_propertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "state" | "total_area" | "arable_area" | "vegetation_area" | "created_at" | "updated_at" | "deleted_at" | "is_deleted" | "productor_id", ExtArgs["result"]["rural_properties"]>
  export type rural_propertiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | productorsDefaultArgs<ExtArgs>
    crops?: boolean | rural_properties$cropsArgs<ExtArgs>
    _count?: boolean | Rural_propertiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rural_propertiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | productorsDefaultArgs<ExtArgs>
  }
  export type rural_propertiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | productorsDefaultArgs<ExtArgs>
  }

  export type $rural_propertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rural_properties"
    objects: {
      productor: Prisma.$productorsPayload<ExtArgs>
      crops: Prisma.$cropsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      state: string
      total_area: number
      arable_area: number
      vegetation_area: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
      productor_id: number
    }, ExtArgs["result"]["rural_properties"]>
    composites: {}
  }

  type rural_propertiesGetPayload<S extends boolean | null | undefined | rural_propertiesDefaultArgs> = $Result.GetResult<Prisma.$rural_propertiesPayload, S>

  type rural_propertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rural_propertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rural_propertiesCountAggregateInputType | true
    }

  export interface rural_propertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rural_properties'], meta: { name: 'rural_properties' } }
    /**
     * Find zero or one Rural_properties that matches the filter.
     * @param {rural_propertiesFindUniqueArgs} args - Arguments to find a Rural_properties
     * @example
     * // Get one Rural_properties
     * const rural_properties = await prisma.rural_properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rural_propertiesFindUniqueArgs>(args: SelectSubset<T, rural_propertiesFindUniqueArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rural_properties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rural_propertiesFindUniqueOrThrowArgs} args - Arguments to find a Rural_properties
     * @example
     * // Get one Rural_properties
     * const rural_properties = await prisma.rural_properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rural_propertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, rural_propertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rural_properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesFindFirstArgs} args - Arguments to find a Rural_properties
     * @example
     * // Get one Rural_properties
     * const rural_properties = await prisma.rural_properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rural_propertiesFindFirstArgs>(args?: SelectSubset<T, rural_propertiesFindFirstArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rural_properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesFindFirstOrThrowArgs} args - Arguments to find a Rural_properties
     * @example
     * // Get one Rural_properties
     * const rural_properties = await prisma.rural_properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rural_propertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, rural_propertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rural_properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rural_properties
     * const rural_properties = await prisma.rural_properties.findMany()
     * 
     * // Get first 10 Rural_properties
     * const rural_properties = await prisma.rural_properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rural_propertiesWithIdOnly = await prisma.rural_properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rural_propertiesFindManyArgs>(args?: SelectSubset<T, rural_propertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rural_properties.
     * @param {rural_propertiesCreateArgs} args - Arguments to create a Rural_properties.
     * @example
     * // Create one Rural_properties
     * const Rural_properties = await prisma.rural_properties.create({
     *   data: {
     *     // ... data to create a Rural_properties
     *   }
     * })
     * 
     */
    create<T extends rural_propertiesCreateArgs>(args: SelectSubset<T, rural_propertiesCreateArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rural_properties.
     * @param {rural_propertiesCreateManyArgs} args - Arguments to create many Rural_properties.
     * @example
     * // Create many Rural_properties
     * const rural_properties = await prisma.rural_properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rural_propertiesCreateManyArgs>(args?: SelectSubset<T, rural_propertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rural_properties and returns the data saved in the database.
     * @param {rural_propertiesCreateManyAndReturnArgs} args - Arguments to create many Rural_properties.
     * @example
     * // Create many Rural_properties
     * const rural_properties = await prisma.rural_properties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rural_properties and only return the `id`
     * const rural_propertiesWithIdOnly = await prisma.rural_properties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rural_propertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, rural_propertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rural_properties.
     * @param {rural_propertiesDeleteArgs} args - Arguments to delete one Rural_properties.
     * @example
     * // Delete one Rural_properties
     * const Rural_properties = await prisma.rural_properties.delete({
     *   where: {
     *     // ... filter to delete one Rural_properties
     *   }
     * })
     * 
     */
    delete<T extends rural_propertiesDeleteArgs>(args: SelectSubset<T, rural_propertiesDeleteArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rural_properties.
     * @param {rural_propertiesUpdateArgs} args - Arguments to update one Rural_properties.
     * @example
     * // Update one Rural_properties
     * const rural_properties = await prisma.rural_properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rural_propertiesUpdateArgs>(args: SelectSubset<T, rural_propertiesUpdateArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rural_properties.
     * @param {rural_propertiesDeleteManyArgs} args - Arguments to filter Rural_properties to delete.
     * @example
     * // Delete a few Rural_properties
     * const { count } = await prisma.rural_properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rural_propertiesDeleteManyArgs>(args?: SelectSubset<T, rural_propertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rural_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rural_properties
     * const rural_properties = await prisma.rural_properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rural_propertiesUpdateManyArgs>(args: SelectSubset<T, rural_propertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rural_properties and returns the data updated in the database.
     * @param {rural_propertiesUpdateManyAndReturnArgs} args - Arguments to update many Rural_properties.
     * @example
     * // Update many Rural_properties
     * const rural_properties = await prisma.rural_properties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rural_properties and only return the `id`
     * const rural_propertiesWithIdOnly = await prisma.rural_properties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rural_propertiesUpdateManyAndReturnArgs>(args: SelectSubset<T, rural_propertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rural_properties.
     * @param {rural_propertiesUpsertArgs} args - Arguments to update or create a Rural_properties.
     * @example
     * // Update or create a Rural_properties
     * const rural_properties = await prisma.rural_properties.upsert({
     *   create: {
     *     // ... data to create a Rural_properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rural_properties we want to update
     *   }
     * })
     */
    upsert<T extends rural_propertiesUpsertArgs>(args: SelectSubset<T, rural_propertiesUpsertArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rural_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesCountArgs} args - Arguments to filter Rural_properties to count.
     * @example
     * // Count the number of Rural_properties
     * const count = await prisma.rural_properties.count({
     *   where: {
     *     // ... the filter for the Rural_properties we want to count
     *   }
     * })
    **/
    count<T extends rural_propertiesCountArgs>(
      args?: Subset<T, rural_propertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rural_propertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rural_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rural_propertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rural_propertiesAggregateArgs>(args: Subset<T, Rural_propertiesAggregateArgs>): Prisma.PrismaPromise<GetRural_propertiesAggregateType<T>>

    /**
     * Group by Rural_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rural_propertiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rural_propertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rural_propertiesGroupByArgs['orderBy'] }
        : { orderBy?: rural_propertiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rural_propertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRural_propertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rural_properties model
   */
  readonly fields: rural_propertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rural_properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rural_propertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productor<T extends productorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productorsDefaultArgs<ExtArgs>>): Prisma__productorsClient<$Result.GetResult<Prisma.$productorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    crops<T extends rural_properties$cropsArgs<ExtArgs> = {}>(args?: Subset<T, rural_properties$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rural_properties model
   */
  interface rural_propertiesFieldRefs {
    readonly id: FieldRef<"rural_properties", 'Int'>
    readonly name: FieldRef<"rural_properties", 'String'>
    readonly city: FieldRef<"rural_properties", 'String'>
    readonly state: FieldRef<"rural_properties", 'String'>
    readonly total_area: FieldRef<"rural_properties", 'Float'>
    readonly arable_area: FieldRef<"rural_properties", 'Float'>
    readonly vegetation_area: FieldRef<"rural_properties", 'Float'>
    readonly created_at: FieldRef<"rural_properties", 'DateTime'>
    readonly updated_at: FieldRef<"rural_properties", 'DateTime'>
    readonly deleted_at: FieldRef<"rural_properties", 'DateTime'>
    readonly is_deleted: FieldRef<"rural_properties", 'Boolean'>
    readonly productor_id: FieldRef<"rural_properties", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rural_properties findUnique
   */
  export type rural_propertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter, which rural_properties to fetch.
     */
    where: rural_propertiesWhereUniqueInput
  }

  /**
   * rural_properties findUniqueOrThrow
   */
  export type rural_propertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter, which rural_properties to fetch.
     */
    where: rural_propertiesWhereUniqueInput
  }

  /**
   * rural_properties findFirst
   */
  export type rural_propertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter, which rural_properties to fetch.
     */
    where?: rural_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rural_properties to fetch.
     */
    orderBy?: rural_propertiesOrderByWithRelationInput | rural_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rural_properties.
     */
    cursor?: rural_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rural_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rural_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rural_properties.
     */
    distinct?: Rural_propertiesScalarFieldEnum | Rural_propertiesScalarFieldEnum[]
  }

  /**
   * rural_properties findFirstOrThrow
   */
  export type rural_propertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter, which rural_properties to fetch.
     */
    where?: rural_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rural_properties to fetch.
     */
    orderBy?: rural_propertiesOrderByWithRelationInput | rural_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rural_properties.
     */
    cursor?: rural_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rural_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rural_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rural_properties.
     */
    distinct?: Rural_propertiesScalarFieldEnum | Rural_propertiesScalarFieldEnum[]
  }

  /**
   * rural_properties findMany
   */
  export type rural_propertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter, which rural_properties to fetch.
     */
    where?: rural_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rural_properties to fetch.
     */
    orderBy?: rural_propertiesOrderByWithRelationInput | rural_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rural_properties.
     */
    cursor?: rural_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rural_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rural_properties.
     */
    skip?: number
    distinct?: Rural_propertiesScalarFieldEnum | Rural_propertiesScalarFieldEnum[]
  }

  /**
   * rural_properties create
   */
  export type rural_propertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * The data needed to create a rural_properties.
     */
    data: XOR<rural_propertiesCreateInput, rural_propertiesUncheckedCreateInput>
  }

  /**
   * rural_properties createMany
   */
  export type rural_propertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rural_properties.
     */
    data: rural_propertiesCreateManyInput | rural_propertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rural_properties createManyAndReturn
   */
  export type rural_propertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * The data used to create many rural_properties.
     */
    data: rural_propertiesCreateManyInput | rural_propertiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rural_properties update
   */
  export type rural_propertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * The data needed to update a rural_properties.
     */
    data: XOR<rural_propertiesUpdateInput, rural_propertiesUncheckedUpdateInput>
    /**
     * Choose, which rural_properties to update.
     */
    where: rural_propertiesWhereUniqueInput
  }

  /**
   * rural_properties updateMany
   */
  export type rural_propertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rural_properties.
     */
    data: XOR<rural_propertiesUpdateManyMutationInput, rural_propertiesUncheckedUpdateManyInput>
    /**
     * Filter which rural_properties to update
     */
    where?: rural_propertiesWhereInput
    /**
     * Limit how many rural_properties to update.
     */
    limit?: number
  }

  /**
   * rural_properties updateManyAndReturn
   */
  export type rural_propertiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * The data used to update rural_properties.
     */
    data: XOR<rural_propertiesUpdateManyMutationInput, rural_propertiesUncheckedUpdateManyInput>
    /**
     * Filter which rural_properties to update
     */
    where?: rural_propertiesWhereInput
    /**
     * Limit how many rural_properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rural_properties upsert
   */
  export type rural_propertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * The filter to search for the rural_properties to update in case it exists.
     */
    where: rural_propertiesWhereUniqueInput
    /**
     * In case the rural_properties found by the `where` argument doesn't exist, create a new rural_properties with this data.
     */
    create: XOR<rural_propertiesCreateInput, rural_propertiesUncheckedCreateInput>
    /**
     * In case the rural_properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rural_propertiesUpdateInput, rural_propertiesUncheckedUpdateInput>
  }

  /**
   * rural_properties delete
   */
  export type rural_propertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
    /**
     * Filter which rural_properties to delete.
     */
    where: rural_propertiesWhereUniqueInput
  }

  /**
   * rural_properties deleteMany
   */
  export type rural_propertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rural_properties to delete
     */
    where?: rural_propertiesWhereInput
    /**
     * Limit how many rural_properties to delete.
     */
    limit?: number
  }

  /**
   * rural_properties.crops
   */
  export type rural_properties$cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    where?: cropsWhereInput
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    cursor?: cropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * rural_properties without action
   */
  export type rural_propertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rural_properties
     */
    select?: rural_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rural_properties
     */
    omit?: rural_propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rural_propertiesInclude<ExtArgs> | null
  }


  /**
   * Model crops
   */

  export type AggregateCrops = {
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  export type CropsAvgAggregateOutputType = {
    id: number | null
    area: number | null
    rural_property_id: number | null
    harvest: number | null
  }

  export type CropsSumAggregateOutputType = {
    id: number | null
    area: number | null
    rural_property_id: number | null
    harvest: number | null
  }

  export type CropsMinAggregateOutputType = {
    id: number | null
    product: string | null
    area: number | null
    rural_property_id: number | null
    harvest: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type CropsMaxAggregateOutputType = {
    id: number | null
    product: string | null
    area: number | null
    rural_property_id: number | null
    harvest: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type CropsCountAggregateOutputType = {
    id: number
    product: number
    area: number
    rural_property_id: number
    harvest: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type CropsAvgAggregateInputType = {
    id?: true
    area?: true
    rural_property_id?: true
    harvest?: true
  }

  export type CropsSumAggregateInputType = {
    id?: true
    area?: true
    rural_property_id?: true
    harvest?: true
  }

  export type CropsMinAggregateInputType = {
    id?: true
    product?: true
    area?: true
    rural_property_id?: true
    harvest?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type CropsMaxAggregateInputType = {
    id?: true
    product?: true
    area?: true
    rural_property_id?: true
    harvest?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type CropsCountAggregateInputType = {
    id?: true
    product?: true
    area?: true
    rural_property_id?: true
    harvest?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type CropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crops to aggregate.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned crops
    **/
    _count?: true | CropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropsMaxAggregateInputType
  }

  export type GetCropsAggregateType<T extends CropsAggregateArgs> = {
        [P in keyof T & keyof AggregateCrops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrops[P]>
      : GetScalarType<T[P], AggregateCrops[P]>
  }




  export type cropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cropsWhereInput
    orderBy?: cropsOrderByWithAggregationInput | cropsOrderByWithAggregationInput[]
    by: CropsScalarFieldEnum[] | CropsScalarFieldEnum
    having?: cropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropsCountAggregateInputType | true
    _avg?: CropsAvgAggregateInputType
    _sum?: CropsSumAggregateInputType
    _min?: CropsMinAggregateInputType
    _max?: CropsMaxAggregateInputType
  }

  export type CropsGroupByOutputType = {
    id: number
    product: string
    area: number
    rural_property_id: number
    harvest: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  type GetCropsGroupByPayload<T extends cropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropsGroupByOutputType[P]>
            : GetScalarType<T[P], CropsGroupByOutputType[P]>
        }
      >
    >


  export type cropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    area?: boolean
    rural_property_id?: boolean
    harvest?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    area?: boolean
    rural_property_id?: boolean
    harvest?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    area?: boolean
    rural_property_id?: boolean
    harvest?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectScalar = {
    id?: boolean
    product?: boolean
    area?: boolean
    rural_property_id?: boolean
    harvest?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type cropsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product" | "area" | "rural_property_id" | "harvest" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["crops"]>
  export type cropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }
  export type cropsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }
  export type cropsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rural_property?: boolean | rural_propertiesDefaultArgs<ExtArgs>
  }

  export type $cropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "crops"
    objects: {
      rural_property: Prisma.$rural_propertiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product: string
      area: number
      rural_property_id: number
      harvest: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["crops"]>
    composites: {}
  }

  type cropsGetPayload<S extends boolean | null | undefined | cropsDefaultArgs> = $Result.GetResult<Prisma.$cropsPayload, S>

  type cropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cropsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropsCountAggregateInputType | true
    }

  export interface cropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['crops'], meta: { name: 'crops' } }
    /**
     * Find zero or one Crops that matches the filter.
     * @param {cropsFindUniqueArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cropsFindUniqueArgs>(args: SelectSubset<T, cropsFindUniqueArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crops that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cropsFindUniqueOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cropsFindUniqueOrThrowArgs>(args: SelectSubset<T, cropsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindFirstArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cropsFindFirstArgs>(args?: SelectSubset<T, cropsFindFirstArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindFirstOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cropsFindFirstOrThrowArgs>(args?: SelectSubset<T, cropsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crops.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crops.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropsWithIdOnly = await prisma.crops.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cropsFindManyArgs>(args?: SelectSubset<T, cropsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crops.
     * @param {cropsCreateArgs} args - Arguments to create a Crops.
     * @example
     * // Create one Crops
     * const Crops = await prisma.crops.create({
     *   data: {
     *     // ... data to create a Crops
     *   }
     * })
     * 
     */
    create<T extends cropsCreateArgs>(args: SelectSubset<T, cropsCreateArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crops.
     * @param {cropsCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cropsCreateManyArgs>(args?: SelectSubset<T, cropsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {cropsCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cropsCreateManyAndReturnArgs>(args?: SelectSubset<T, cropsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crops.
     * @param {cropsDeleteArgs} args - Arguments to delete one Crops.
     * @example
     * // Delete one Crops
     * const Crops = await prisma.crops.delete({
     *   where: {
     *     // ... filter to delete one Crops
     *   }
     * })
     * 
     */
    delete<T extends cropsDeleteArgs>(args: SelectSubset<T, cropsDeleteArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crops.
     * @param {cropsUpdateArgs} args - Arguments to update one Crops.
     * @example
     * // Update one Crops
     * const crops = await prisma.crops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cropsUpdateArgs>(args: SelectSubset<T, cropsUpdateArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crops.
     * @param {cropsDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cropsDeleteManyArgs>(args?: SelectSubset<T, cropsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cropsUpdateManyArgs>(args: SelectSubset<T, cropsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {cropsUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cropsUpdateManyAndReturnArgs>(args: SelectSubset<T, cropsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crops.
     * @param {cropsUpsertArgs} args - Arguments to update or create a Crops.
     * @example
     * // Update or create a Crops
     * const crops = await prisma.crops.upsert({
     *   create: {
     *     // ... data to create a Crops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crops we want to update
     *   }
     * })
     */
    upsert<T extends cropsUpsertArgs>(args: SelectSubset<T, cropsUpsertArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crops.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends cropsCountArgs>(
      args?: Subset<T, cropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropsAggregateArgs>(args: Subset<T, CropsAggregateArgs>): Prisma.PrismaPromise<GetCropsAggregateType<T>>

    /**
     * Group by Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cropsGroupByArgs['orderBy'] }
        : { orderBy?: cropsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the crops model
   */
  readonly fields: cropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for crops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rural_property<T extends rural_propertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rural_propertiesDefaultArgs<ExtArgs>>): Prisma__rural_propertiesClient<$Result.GetResult<Prisma.$rural_propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the crops model
   */
  interface cropsFieldRefs {
    readonly id: FieldRef<"crops", 'Int'>
    readonly product: FieldRef<"crops", 'String'>
    readonly area: FieldRef<"crops", 'Float'>
    readonly rural_property_id: FieldRef<"crops", 'Int'>
    readonly harvest: FieldRef<"crops", 'Int'>
    readonly created_at: FieldRef<"crops", 'DateTime'>
    readonly updated_at: FieldRef<"crops", 'DateTime'>
    readonly deleted_at: FieldRef<"crops", 'DateTime'>
    readonly is_deleted: FieldRef<"crops", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * crops findUnique
   */
  export type cropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops findUniqueOrThrow
   */
  export type cropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops findFirst
   */
  export type cropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops findFirstOrThrow
   */
  export type cropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops findMany
   */
  export type cropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops create
   */
  export type cropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The data needed to create a crops.
     */
    data: XOR<cropsCreateInput, cropsUncheckedCreateInput>
  }

  /**
   * crops createMany
   */
  export type cropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many crops.
     */
    data: cropsCreateManyInput | cropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crops createManyAndReturn
   */
  export type cropsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * The data used to create many crops.
     */
    data: cropsCreateManyInput | cropsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * crops update
   */
  export type cropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The data needed to update a crops.
     */
    data: XOR<cropsUpdateInput, cropsUncheckedUpdateInput>
    /**
     * Choose, which crops to update.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops updateMany
   */
  export type cropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update crops.
     */
    data: XOR<cropsUpdateManyMutationInput, cropsUncheckedUpdateManyInput>
    /**
     * Filter which crops to update
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to update.
     */
    limit?: number
  }

  /**
   * crops updateManyAndReturn
   */
  export type cropsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * The data used to update crops.
     */
    data: XOR<cropsUpdateManyMutationInput, cropsUncheckedUpdateManyInput>
    /**
     * Filter which crops to update
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * crops upsert
   */
  export type cropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The filter to search for the crops to update in case it exists.
     */
    where: cropsWhereUniqueInput
    /**
     * In case the crops found by the `where` argument doesn't exist, create a new crops with this data.
     */
    create: XOR<cropsCreateInput, cropsUncheckedCreateInput>
    /**
     * In case the crops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cropsUpdateInput, cropsUncheckedUpdateInput>
  }

  /**
   * crops delete
   */
  export type cropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter which crops to delete.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops deleteMany
   */
  export type cropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crops to delete
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to delete.
     */
    limit?: number
  }

  /**
   * crops without action
   */
  export type cropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    document: 'document',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type ProductorsScalarFieldEnum = (typeof ProductorsScalarFieldEnum)[keyof typeof ProductorsScalarFieldEnum]


  export const Rural_propertiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    state: 'state',
    total_area: 'total_area',
    arable_area: 'arable_area',
    vegetation_area: 'vegetation_area',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted',
    productor_id: 'productor_id'
  };

  export type Rural_propertiesScalarFieldEnum = (typeof Rural_propertiesScalarFieldEnum)[keyof typeof Rural_propertiesScalarFieldEnum]


  export const CropsScalarFieldEnum: {
    id: 'id',
    product: 'product',
    area: 'area',
    rural_property_id: 'rural_property_id',
    harvest: 'harvest',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type CropsScalarFieldEnum = (typeof CropsScalarFieldEnum)[keyof typeof CropsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LegalEntityType'
   */
  export type EnumLegalEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalEntityType'>
    


  /**
   * Reference to a field of type 'LegalEntityType[]'
   */
  export type ListEnumLegalEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalEntityType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type productorsWhereInput = {
    AND?: productorsWhereInput | productorsWhereInput[]
    OR?: productorsWhereInput[]
    NOT?: productorsWhereInput | productorsWhereInput[]
    id?: IntFilter<"productors"> | number
    name?: StringFilter<"productors"> | string
    document?: StringFilter<"productors"> | string
    type?: EnumLegalEntityTypeFilter<"productors"> | $Enums.LegalEntityType
    created_at?: DateTimeFilter<"productors"> | Date | string
    updated_at?: DateTimeFilter<"productors"> | Date | string
    deleted_at?: DateTimeNullableFilter<"productors"> | Date | string | null
    is_deleted?: BoolFilter<"productors"> | boolean
    properties?: Rural_propertiesListRelationFilter
  }

  export type productorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    properties?: rural_propertiesOrderByRelationAggregateInput
  }

  export type productorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    AND?: productorsWhereInput | productorsWhereInput[]
    OR?: productorsWhereInput[]
    NOT?: productorsWhereInput | productorsWhereInput[]
    name?: StringFilter<"productors"> | string
    type?: EnumLegalEntityTypeFilter<"productors"> | $Enums.LegalEntityType
    created_at?: DateTimeFilter<"productors"> | Date | string
    updated_at?: DateTimeFilter<"productors"> | Date | string
    deleted_at?: DateTimeNullableFilter<"productors"> | Date | string | null
    is_deleted?: BoolFilter<"productors"> | boolean
    properties?: Rural_propertiesListRelationFilter
  }, "id" | "document">

  export type productorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: productorsCountOrderByAggregateInput
    _avg?: productorsAvgOrderByAggregateInput
    _max?: productorsMaxOrderByAggregateInput
    _min?: productorsMinOrderByAggregateInput
    _sum?: productorsSumOrderByAggregateInput
  }

  export type productorsScalarWhereWithAggregatesInput = {
    AND?: productorsScalarWhereWithAggregatesInput | productorsScalarWhereWithAggregatesInput[]
    OR?: productorsScalarWhereWithAggregatesInput[]
    NOT?: productorsScalarWhereWithAggregatesInput | productorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productors"> | number
    name?: StringWithAggregatesFilter<"productors"> | string
    document?: StringWithAggregatesFilter<"productors"> | string
    type?: EnumLegalEntityTypeWithAggregatesFilter<"productors"> | $Enums.LegalEntityType
    created_at?: DateTimeWithAggregatesFilter<"productors"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"productors"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"productors"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"productors"> | boolean
  }

  export type rural_propertiesWhereInput = {
    AND?: rural_propertiesWhereInput | rural_propertiesWhereInput[]
    OR?: rural_propertiesWhereInput[]
    NOT?: rural_propertiesWhereInput | rural_propertiesWhereInput[]
    id?: IntFilter<"rural_properties"> | number
    name?: StringFilter<"rural_properties"> | string
    city?: StringFilter<"rural_properties"> | string
    state?: StringFilter<"rural_properties"> | string
    total_area?: FloatFilter<"rural_properties"> | number
    arable_area?: FloatFilter<"rural_properties"> | number
    vegetation_area?: FloatFilter<"rural_properties"> | number
    created_at?: DateTimeFilter<"rural_properties"> | Date | string
    updated_at?: DateTimeFilter<"rural_properties"> | Date | string
    deleted_at?: DateTimeNullableFilter<"rural_properties"> | Date | string | null
    is_deleted?: BoolFilter<"rural_properties"> | boolean
    productor_id?: IntFilter<"rural_properties"> | number
    productor?: XOR<ProductorsScalarRelationFilter, productorsWhereInput>
    crops?: CropsListRelationFilter
  }

  export type rural_propertiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    productor_id?: SortOrder
    productor?: productorsOrderByWithRelationInput
    crops?: cropsOrderByRelationAggregateInput
  }

  export type rural_propertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rural_propertiesWhereInput | rural_propertiesWhereInput[]
    OR?: rural_propertiesWhereInput[]
    NOT?: rural_propertiesWhereInput | rural_propertiesWhereInput[]
    name?: StringFilter<"rural_properties"> | string
    city?: StringFilter<"rural_properties"> | string
    state?: StringFilter<"rural_properties"> | string
    total_area?: FloatFilter<"rural_properties"> | number
    arable_area?: FloatFilter<"rural_properties"> | number
    vegetation_area?: FloatFilter<"rural_properties"> | number
    created_at?: DateTimeFilter<"rural_properties"> | Date | string
    updated_at?: DateTimeFilter<"rural_properties"> | Date | string
    deleted_at?: DateTimeNullableFilter<"rural_properties"> | Date | string | null
    is_deleted?: BoolFilter<"rural_properties"> | boolean
    productor_id?: IntFilter<"rural_properties"> | number
    productor?: XOR<ProductorsScalarRelationFilter, productorsWhereInput>
    crops?: CropsListRelationFilter
  }, "id">

  export type rural_propertiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    productor_id?: SortOrder
    _count?: rural_propertiesCountOrderByAggregateInput
    _avg?: rural_propertiesAvgOrderByAggregateInput
    _max?: rural_propertiesMaxOrderByAggregateInput
    _min?: rural_propertiesMinOrderByAggregateInput
    _sum?: rural_propertiesSumOrderByAggregateInput
  }

  export type rural_propertiesScalarWhereWithAggregatesInput = {
    AND?: rural_propertiesScalarWhereWithAggregatesInput | rural_propertiesScalarWhereWithAggregatesInput[]
    OR?: rural_propertiesScalarWhereWithAggregatesInput[]
    NOT?: rural_propertiesScalarWhereWithAggregatesInput | rural_propertiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rural_properties"> | number
    name?: StringWithAggregatesFilter<"rural_properties"> | string
    city?: StringWithAggregatesFilter<"rural_properties"> | string
    state?: StringWithAggregatesFilter<"rural_properties"> | string
    total_area?: FloatWithAggregatesFilter<"rural_properties"> | number
    arable_area?: FloatWithAggregatesFilter<"rural_properties"> | number
    vegetation_area?: FloatWithAggregatesFilter<"rural_properties"> | number
    created_at?: DateTimeWithAggregatesFilter<"rural_properties"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"rural_properties"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"rural_properties"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"rural_properties"> | boolean
    productor_id?: IntWithAggregatesFilter<"rural_properties"> | number
  }

  export type cropsWhereInput = {
    AND?: cropsWhereInput | cropsWhereInput[]
    OR?: cropsWhereInput[]
    NOT?: cropsWhereInput | cropsWhereInput[]
    id?: IntFilter<"crops"> | number
    product?: StringFilter<"crops"> | string
    area?: FloatFilter<"crops"> | number
    rural_property_id?: IntFilter<"crops"> | number
    harvest?: IntFilter<"crops"> | number
    created_at?: DateTimeFilter<"crops"> | Date | string
    updated_at?: DateTimeFilter<"crops"> | Date | string
    deleted_at?: DateTimeNullableFilter<"crops"> | Date | string | null
    is_deleted?: BoolFilter<"crops"> | boolean
    rural_property?: XOR<Rural_propertiesScalarRelationFilter, rural_propertiesWhereInput>
  }

  export type cropsOrderByWithRelationInput = {
    id?: SortOrder
    product?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    rural_property?: rural_propertiesOrderByWithRelationInput
  }

  export type cropsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cropsWhereInput | cropsWhereInput[]
    OR?: cropsWhereInput[]
    NOT?: cropsWhereInput | cropsWhereInput[]
    product?: StringFilter<"crops"> | string
    area?: FloatFilter<"crops"> | number
    rural_property_id?: IntFilter<"crops"> | number
    harvest?: IntFilter<"crops"> | number
    created_at?: DateTimeFilter<"crops"> | Date | string
    updated_at?: DateTimeFilter<"crops"> | Date | string
    deleted_at?: DateTimeNullableFilter<"crops"> | Date | string | null
    is_deleted?: BoolFilter<"crops"> | boolean
    rural_property?: XOR<Rural_propertiesScalarRelationFilter, rural_propertiesWhereInput>
  }, "id">

  export type cropsOrderByWithAggregationInput = {
    id?: SortOrder
    product?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: cropsCountOrderByAggregateInput
    _avg?: cropsAvgOrderByAggregateInput
    _max?: cropsMaxOrderByAggregateInput
    _min?: cropsMinOrderByAggregateInput
    _sum?: cropsSumOrderByAggregateInput
  }

  export type cropsScalarWhereWithAggregatesInput = {
    AND?: cropsScalarWhereWithAggregatesInput | cropsScalarWhereWithAggregatesInput[]
    OR?: cropsScalarWhereWithAggregatesInput[]
    NOT?: cropsScalarWhereWithAggregatesInput | cropsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"crops"> | number
    product?: StringWithAggregatesFilter<"crops"> | string
    area?: FloatWithAggregatesFilter<"crops"> | number
    rural_property_id?: IntWithAggregatesFilter<"crops"> | number
    harvest?: IntWithAggregatesFilter<"crops"> | number
    created_at?: DateTimeWithAggregatesFilter<"crops"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"crops"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"crops"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"crops"> | boolean
  }

  export type productorsCreateInput = {
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    properties?: rural_propertiesCreateNestedManyWithoutProductorInput
  }

  export type productorsUncheckedCreateInput = {
    id?: number
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    properties?: rural_propertiesUncheckedCreateNestedManyWithoutProductorInput
  }

  export type productorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    properties?: rural_propertiesUpdateManyWithoutProductorNestedInput
  }

  export type productorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    properties?: rural_propertiesUncheckedUpdateManyWithoutProductorNestedInput
  }

  export type productorsCreateManyInput = {
    id?: number
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type productorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rural_propertiesCreateInput = {
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    productor: productorsCreateNestedOneWithoutPropertiesInput
    crops?: cropsCreateNestedManyWithoutRural_propertyInput
  }

  export type rural_propertiesUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    productor_id: number
    crops?: cropsUncheckedCreateNestedManyWithoutRural_propertyInput
  }

  export type rural_propertiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    productor?: productorsUpdateOneRequiredWithoutPropertiesNestedInput
    crops?: cropsUpdateManyWithoutRural_propertyNestedInput
  }

  export type rural_propertiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    productor_id?: IntFieldUpdateOperationsInput | number
    crops?: cropsUncheckedUpdateManyWithoutRural_propertyNestedInput
  }

  export type rural_propertiesCreateManyInput = {
    id?: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    productor_id: number
  }

  export type rural_propertiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rural_propertiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    productor_id?: IntFieldUpdateOperationsInput | number
  }

  export type cropsCreateInput = {
    product: string
    area: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    rural_property: rural_propertiesCreateNestedOneWithoutCropsInput
  }

  export type cropsUncheckedCreateInput = {
    id?: number
    product: string
    area: number
    rural_property_id: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type cropsUpdateInput = {
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    rural_property?: rural_propertiesUpdateOneRequiredWithoutCropsNestedInput
  }

  export type cropsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    rural_property_id?: IntFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsCreateManyInput = {
    id?: number
    product: string
    area: number
    rural_property_id: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type cropsUpdateManyMutationInput = {
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    rural_property_id?: IntFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumLegalEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalEntityType | EnumLegalEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLegalEntityTypeFilter<$PrismaModel> | $Enums.LegalEntityType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Rural_propertiesListRelationFilter = {
    every?: rural_propertiesWhereInput
    some?: rural_propertiesWhereInput
    none?: rural_propertiesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rural_propertiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type productorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type productorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type productorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLegalEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalEntityType | EnumLegalEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLegalEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.LegalEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLegalEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumLegalEntityTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductorsScalarRelationFilter = {
    is?: productorsWhereInput
    isNot?: productorsWhereInput
  }

  export type CropsListRelationFilter = {
    every?: cropsWhereInput
    some?: cropsWhereInput
    none?: cropsWhereInput
  }

  export type cropsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rural_propertiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    productor_id?: SortOrder
  }

  export type rural_propertiesAvgOrderByAggregateInput = {
    id?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    productor_id?: SortOrder
  }

  export type rural_propertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    productor_id?: SortOrder
  }

  export type rural_propertiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    productor_id?: SortOrder
  }

  export type rural_propertiesSumOrderByAggregateInput = {
    id?: SortOrder
    total_area?: SortOrder
    arable_area?: SortOrder
    vegetation_area?: SortOrder
    productor_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Rural_propertiesScalarRelationFilter = {
    is?: rural_propertiesWhereInput
    isNot?: rural_propertiesWhereInput
  }

  export type cropsCountOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type cropsAvgOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
  }

  export type cropsMaxOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type cropsMinOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type cropsSumOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rural_property_id?: SortOrder
    harvest?: SortOrder
  }

  export type rural_propertiesCreateNestedManyWithoutProductorInput = {
    create?: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput> | rural_propertiesCreateWithoutProductorInput[] | rural_propertiesUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutProductorInput | rural_propertiesCreateOrConnectWithoutProductorInput[]
    createMany?: rural_propertiesCreateManyProductorInputEnvelope
    connect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
  }

  export type rural_propertiesUncheckedCreateNestedManyWithoutProductorInput = {
    create?: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput> | rural_propertiesCreateWithoutProductorInput[] | rural_propertiesUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutProductorInput | rural_propertiesCreateOrConnectWithoutProductorInput[]
    createMany?: rural_propertiesCreateManyProductorInputEnvelope
    connect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLegalEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.LegalEntityType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type rural_propertiesUpdateManyWithoutProductorNestedInput = {
    create?: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput> | rural_propertiesCreateWithoutProductorInput[] | rural_propertiesUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutProductorInput | rural_propertiesCreateOrConnectWithoutProductorInput[]
    upsert?: rural_propertiesUpsertWithWhereUniqueWithoutProductorInput | rural_propertiesUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: rural_propertiesCreateManyProductorInputEnvelope
    set?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    disconnect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    delete?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    connect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    update?: rural_propertiesUpdateWithWhereUniqueWithoutProductorInput | rural_propertiesUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: rural_propertiesUpdateManyWithWhereWithoutProductorInput | rural_propertiesUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: rural_propertiesScalarWhereInput | rural_propertiesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rural_propertiesUncheckedUpdateManyWithoutProductorNestedInput = {
    create?: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput> | rural_propertiesCreateWithoutProductorInput[] | rural_propertiesUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutProductorInput | rural_propertiesCreateOrConnectWithoutProductorInput[]
    upsert?: rural_propertiesUpsertWithWhereUniqueWithoutProductorInput | rural_propertiesUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: rural_propertiesCreateManyProductorInputEnvelope
    set?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    disconnect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    delete?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    connect?: rural_propertiesWhereUniqueInput | rural_propertiesWhereUniqueInput[]
    update?: rural_propertiesUpdateWithWhereUniqueWithoutProductorInput | rural_propertiesUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: rural_propertiesUpdateManyWithWhereWithoutProductorInput | rural_propertiesUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: rural_propertiesScalarWhereInput | rural_propertiesScalarWhereInput[]
  }

  export type productorsCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<productorsCreateWithoutPropertiesInput, productorsUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: productorsCreateOrConnectWithoutPropertiesInput
    connect?: productorsWhereUniqueInput
  }

  export type cropsCreateNestedManyWithoutRural_propertyInput = {
    create?: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput> | cropsCreateWithoutRural_propertyInput[] | cropsUncheckedCreateWithoutRural_propertyInput[]
    connectOrCreate?: cropsCreateOrConnectWithoutRural_propertyInput | cropsCreateOrConnectWithoutRural_propertyInput[]
    createMany?: cropsCreateManyRural_propertyInputEnvelope
    connect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
  }

  export type cropsUncheckedCreateNestedManyWithoutRural_propertyInput = {
    create?: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput> | cropsCreateWithoutRural_propertyInput[] | cropsUncheckedCreateWithoutRural_propertyInput[]
    connectOrCreate?: cropsCreateOrConnectWithoutRural_propertyInput | cropsCreateOrConnectWithoutRural_propertyInput[]
    createMany?: cropsCreateManyRural_propertyInputEnvelope
    connect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productorsUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<productorsCreateWithoutPropertiesInput, productorsUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: productorsCreateOrConnectWithoutPropertiesInput
    upsert?: productorsUpsertWithoutPropertiesInput
    connect?: productorsWhereUniqueInput
    update?: XOR<XOR<productorsUpdateToOneWithWhereWithoutPropertiesInput, productorsUpdateWithoutPropertiesInput>, productorsUncheckedUpdateWithoutPropertiesInput>
  }

  export type cropsUpdateManyWithoutRural_propertyNestedInput = {
    create?: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput> | cropsCreateWithoutRural_propertyInput[] | cropsUncheckedCreateWithoutRural_propertyInput[]
    connectOrCreate?: cropsCreateOrConnectWithoutRural_propertyInput | cropsCreateOrConnectWithoutRural_propertyInput[]
    upsert?: cropsUpsertWithWhereUniqueWithoutRural_propertyInput | cropsUpsertWithWhereUniqueWithoutRural_propertyInput[]
    createMany?: cropsCreateManyRural_propertyInputEnvelope
    set?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    disconnect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    delete?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    connect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    update?: cropsUpdateWithWhereUniqueWithoutRural_propertyInput | cropsUpdateWithWhereUniqueWithoutRural_propertyInput[]
    updateMany?: cropsUpdateManyWithWhereWithoutRural_propertyInput | cropsUpdateManyWithWhereWithoutRural_propertyInput[]
    deleteMany?: cropsScalarWhereInput | cropsScalarWhereInput[]
  }

  export type cropsUncheckedUpdateManyWithoutRural_propertyNestedInput = {
    create?: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput> | cropsCreateWithoutRural_propertyInput[] | cropsUncheckedCreateWithoutRural_propertyInput[]
    connectOrCreate?: cropsCreateOrConnectWithoutRural_propertyInput | cropsCreateOrConnectWithoutRural_propertyInput[]
    upsert?: cropsUpsertWithWhereUniqueWithoutRural_propertyInput | cropsUpsertWithWhereUniqueWithoutRural_propertyInput[]
    createMany?: cropsCreateManyRural_propertyInputEnvelope
    set?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    disconnect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    delete?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    connect?: cropsWhereUniqueInput | cropsWhereUniqueInput[]
    update?: cropsUpdateWithWhereUniqueWithoutRural_propertyInput | cropsUpdateWithWhereUniqueWithoutRural_propertyInput[]
    updateMany?: cropsUpdateManyWithWhereWithoutRural_propertyInput | cropsUpdateManyWithWhereWithoutRural_propertyInput[]
    deleteMany?: cropsScalarWhereInput | cropsScalarWhereInput[]
  }

  export type rural_propertiesCreateNestedOneWithoutCropsInput = {
    create?: XOR<rural_propertiesCreateWithoutCropsInput, rural_propertiesUncheckedCreateWithoutCropsInput>
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutCropsInput
    connect?: rural_propertiesWhereUniqueInput
  }

  export type rural_propertiesUpdateOneRequiredWithoutCropsNestedInput = {
    create?: XOR<rural_propertiesCreateWithoutCropsInput, rural_propertiesUncheckedCreateWithoutCropsInput>
    connectOrCreate?: rural_propertiesCreateOrConnectWithoutCropsInput
    upsert?: rural_propertiesUpsertWithoutCropsInput
    connect?: rural_propertiesWhereUniqueInput
    update?: XOR<XOR<rural_propertiesUpdateToOneWithWhereWithoutCropsInput, rural_propertiesUpdateWithoutCropsInput>, rural_propertiesUncheckedUpdateWithoutCropsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumLegalEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalEntityType | EnumLegalEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLegalEntityTypeFilter<$PrismaModel> | $Enums.LegalEntityType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumLegalEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalEntityType | EnumLegalEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LegalEntityType[] | ListEnumLegalEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLegalEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.LegalEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLegalEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumLegalEntityTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type rural_propertiesCreateWithoutProductorInput = {
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    crops?: cropsCreateNestedManyWithoutRural_propertyInput
  }

  export type rural_propertiesUncheckedCreateWithoutProductorInput = {
    id?: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    crops?: cropsUncheckedCreateNestedManyWithoutRural_propertyInput
  }

  export type rural_propertiesCreateOrConnectWithoutProductorInput = {
    where: rural_propertiesWhereUniqueInput
    create: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput>
  }

  export type rural_propertiesCreateManyProductorInputEnvelope = {
    data: rural_propertiesCreateManyProductorInput | rural_propertiesCreateManyProductorInput[]
    skipDuplicates?: boolean
  }

  export type rural_propertiesUpsertWithWhereUniqueWithoutProductorInput = {
    where: rural_propertiesWhereUniqueInput
    update: XOR<rural_propertiesUpdateWithoutProductorInput, rural_propertiesUncheckedUpdateWithoutProductorInput>
    create: XOR<rural_propertiesCreateWithoutProductorInput, rural_propertiesUncheckedCreateWithoutProductorInput>
  }

  export type rural_propertiesUpdateWithWhereUniqueWithoutProductorInput = {
    where: rural_propertiesWhereUniqueInput
    data: XOR<rural_propertiesUpdateWithoutProductorInput, rural_propertiesUncheckedUpdateWithoutProductorInput>
  }

  export type rural_propertiesUpdateManyWithWhereWithoutProductorInput = {
    where: rural_propertiesScalarWhereInput
    data: XOR<rural_propertiesUpdateManyMutationInput, rural_propertiesUncheckedUpdateManyWithoutProductorInput>
  }

  export type rural_propertiesScalarWhereInput = {
    AND?: rural_propertiesScalarWhereInput | rural_propertiesScalarWhereInput[]
    OR?: rural_propertiesScalarWhereInput[]
    NOT?: rural_propertiesScalarWhereInput | rural_propertiesScalarWhereInput[]
    id?: IntFilter<"rural_properties"> | number
    name?: StringFilter<"rural_properties"> | string
    city?: StringFilter<"rural_properties"> | string
    state?: StringFilter<"rural_properties"> | string
    total_area?: FloatFilter<"rural_properties"> | number
    arable_area?: FloatFilter<"rural_properties"> | number
    vegetation_area?: FloatFilter<"rural_properties"> | number
    created_at?: DateTimeFilter<"rural_properties"> | Date | string
    updated_at?: DateTimeFilter<"rural_properties"> | Date | string
    deleted_at?: DateTimeNullableFilter<"rural_properties"> | Date | string | null
    is_deleted?: BoolFilter<"rural_properties"> | boolean
    productor_id?: IntFilter<"rural_properties"> | number
  }

  export type productorsCreateWithoutPropertiesInput = {
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type productorsUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    document: string
    type: $Enums.LegalEntityType
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type productorsCreateOrConnectWithoutPropertiesInput = {
    where: productorsWhereUniqueInput
    create: XOR<productorsCreateWithoutPropertiesInput, productorsUncheckedCreateWithoutPropertiesInput>
  }

  export type cropsCreateWithoutRural_propertyInput = {
    product: string
    area: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type cropsUncheckedCreateWithoutRural_propertyInput = {
    id?: number
    product: string
    area: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type cropsCreateOrConnectWithoutRural_propertyInput = {
    where: cropsWhereUniqueInput
    create: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput>
  }

  export type cropsCreateManyRural_propertyInputEnvelope = {
    data: cropsCreateManyRural_propertyInput | cropsCreateManyRural_propertyInput[]
    skipDuplicates?: boolean
  }

  export type productorsUpsertWithoutPropertiesInput = {
    update: XOR<productorsUpdateWithoutPropertiesInput, productorsUncheckedUpdateWithoutPropertiesInput>
    create: XOR<productorsCreateWithoutPropertiesInput, productorsUncheckedCreateWithoutPropertiesInput>
    where?: productorsWhereInput
  }

  export type productorsUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: productorsWhereInput
    data: XOR<productorsUpdateWithoutPropertiesInput, productorsUncheckedUpdateWithoutPropertiesInput>
  }

  export type productorsUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productorsUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    type?: EnumLegalEntityTypeFieldUpdateOperationsInput | $Enums.LegalEntityType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsUpsertWithWhereUniqueWithoutRural_propertyInput = {
    where: cropsWhereUniqueInput
    update: XOR<cropsUpdateWithoutRural_propertyInput, cropsUncheckedUpdateWithoutRural_propertyInput>
    create: XOR<cropsCreateWithoutRural_propertyInput, cropsUncheckedCreateWithoutRural_propertyInput>
  }

  export type cropsUpdateWithWhereUniqueWithoutRural_propertyInput = {
    where: cropsWhereUniqueInput
    data: XOR<cropsUpdateWithoutRural_propertyInput, cropsUncheckedUpdateWithoutRural_propertyInput>
  }

  export type cropsUpdateManyWithWhereWithoutRural_propertyInput = {
    where: cropsScalarWhereInput
    data: XOR<cropsUpdateManyMutationInput, cropsUncheckedUpdateManyWithoutRural_propertyInput>
  }

  export type cropsScalarWhereInput = {
    AND?: cropsScalarWhereInput | cropsScalarWhereInput[]
    OR?: cropsScalarWhereInput[]
    NOT?: cropsScalarWhereInput | cropsScalarWhereInput[]
    id?: IntFilter<"crops"> | number
    product?: StringFilter<"crops"> | string
    area?: FloatFilter<"crops"> | number
    rural_property_id?: IntFilter<"crops"> | number
    harvest?: IntFilter<"crops"> | number
    created_at?: DateTimeFilter<"crops"> | Date | string
    updated_at?: DateTimeFilter<"crops"> | Date | string
    deleted_at?: DateTimeNullableFilter<"crops"> | Date | string | null
    is_deleted?: BoolFilter<"crops"> | boolean
  }

  export type rural_propertiesCreateWithoutCropsInput = {
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    productor: productorsCreateNestedOneWithoutPropertiesInput
  }

  export type rural_propertiesUncheckedCreateWithoutCropsInput = {
    id?: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    productor_id: number
  }

  export type rural_propertiesCreateOrConnectWithoutCropsInput = {
    where: rural_propertiesWhereUniqueInput
    create: XOR<rural_propertiesCreateWithoutCropsInput, rural_propertiesUncheckedCreateWithoutCropsInput>
  }

  export type rural_propertiesUpsertWithoutCropsInput = {
    update: XOR<rural_propertiesUpdateWithoutCropsInput, rural_propertiesUncheckedUpdateWithoutCropsInput>
    create: XOR<rural_propertiesCreateWithoutCropsInput, rural_propertiesUncheckedCreateWithoutCropsInput>
    where?: rural_propertiesWhereInput
  }

  export type rural_propertiesUpdateToOneWithWhereWithoutCropsInput = {
    where?: rural_propertiesWhereInput
    data: XOR<rural_propertiesUpdateWithoutCropsInput, rural_propertiesUncheckedUpdateWithoutCropsInput>
  }

  export type rural_propertiesUpdateWithoutCropsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    productor?: productorsUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type rural_propertiesUncheckedUpdateWithoutCropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    productor_id?: IntFieldUpdateOperationsInput | number
  }

  export type rural_propertiesCreateManyProductorInput = {
    id?: number
    name: string
    city: string
    state: string
    total_area: number
    arable_area: number
    vegetation_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type rural_propertiesUpdateWithoutProductorInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    crops?: cropsUpdateManyWithoutRural_propertyNestedInput
  }

  export type rural_propertiesUncheckedUpdateWithoutProductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    crops?: cropsUncheckedUpdateManyWithoutRural_propertyNestedInput
  }

  export type rural_propertiesUncheckedUpdateManyWithoutProductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    total_area?: FloatFieldUpdateOperationsInput | number
    arable_area?: FloatFieldUpdateOperationsInput | number
    vegetation_area?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsCreateManyRural_propertyInput = {
    id?: number
    product: string
    area: number
    harvest: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type cropsUpdateWithoutRural_propertyInput = {
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsUncheckedUpdateWithoutRural_propertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cropsUncheckedUpdateManyWithoutRural_propertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    harvest?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}