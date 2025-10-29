
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
 * Model Pais
 * 
 */
export type Pais = $Result.DefaultSelection<Prisma.$PaisPayload>
/**
 * Model Estado
 * 
 */
export type Estado = $Result.DefaultSelection<Prisma.$EstadoPayload>
/**
 * Model Ciudad
 * 
 */
export type Ciudad = $Result.DefaultSelection<Prisma.$CiudadPayload>
/**
 * Model CodigoPostal
 * 
 */
export type CodigoPostal = $Result.DefaultSelection<Prisma.$CodigoPostalPayload>
/**
 * Model TipoVia
 * 
 */
export type TipoVia = $Result.DefaultSelection<Prisma.$TipoViaPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Socio
 * 
 */
export type Socio = $Result.DefaultSelection<Prisma.$SocioPayload>
/**
 * Model Asociado
 * 
 */
export type Asociado = $Result.DefaultSelection<Prisma.$AsociadoPayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pais
 * const pais = await prisma.pais.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pais
   * const pais = await prisma.pais.findMany()
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
   * `prisma.pais`: Exposes CRUD operations for the **Pais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pais
    * const pais = await prisma.pais.findMany()
    * ```
    */
  get pais(): Prisma.PaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **Estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.EstadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciudad`: Exposes CRUD operations for the **Ciudad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudads
    * const ciudads = await prisma.ciudad.findMany()
    * ```
    */
  get ciudad(): Prisma.CiudadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codigoPostal`: Exposes CRUD operations for the **CodigoPostal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodigoPostals
    * const codigoPostals = await prisma.codigoPostal.findMany()
    * ```
    */
  get codigoPostal(): Prisma.CodigoPostalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoVia`: Exposes CRUD operations for the **TipoVia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoVias
    * const tipoVias = await prisma.tipoVia.findMany()
    * ```
    */
  get tipoVia(): Prisma.TipoViaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socio`: Exposes CRUD operations for the **Socio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socios
    * const socios = await prisma.socio.findMany()
    * ```
    */
  get socio(): Prisma.SocioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asociado`: Exposes CRUD operations for the **Asociado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asociados
    * const asociados = await prisma.asociado.findMany()
    * ```
    */
  get asociado(): Prisma.AsociadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Pais: 'Pais',
    Estado: 'Estado',
    Ciudad: 'Ciudad',
    CodigoPostal: 'CodigoPostal',
    TipoVia: 'TipoVia',
    Admin: 'Admin',
    Socio: 'Socio',
    Asociado: 'Asociado',
    Direccion: 'Direccion'
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
      modelProps: "pais" | "estado" | "ciudad" | "codigoPostal" | "tipoVia" | "admin" | "socio" | "asociado" | "direccion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pais: {
        payload: Prisma.$PaisPayload<ExtArgs>
        fields: Prisma.PaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          findFirst: {
            args: Prisma.PaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          findMany: {
            args: Prisma.PaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>[]
          }
          create: {
            args: Prisma.PaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          createMany: {
            args: Prisma.PaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>[]
          }
          delete: {
            args: Prisma.PaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          update: {
            args: Prisma.PaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          deleteMany: {
            args: Prisma.PaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>[]
          }
          upsert: {
            args: Prisma.PaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaisPayload>
          }
          aggregate: {
            args: Prisma.PaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePais>
          }
          groupBy: {
            args: Prisma.PaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaisCountArgs<ExtArgs>
            result: $Utils.Optional<PaisCountAggregateOutputType> | number
          }
        }
      }
      Estado: {
        payload: Prisma.$EstadoPayload<ExtArgs>
        fields: Prisma.EstadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findFirst: {
            args: Prisma.EstadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findMany: {
            args: Prisma.EstadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          delete: {
            args: Prisma.EstadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          update: {
            args: Prisma.EstadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          upsert: {
            args: Prisma.EstadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.EstadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      Ciudad: {
        payload: Prisma.$CiudadPayload<ExtArgs>
        fields: Prisma.CiudadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CiudadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CiudadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findFirst: {
            args: Prisma.CiudadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CiudadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findMany: {
            args: Prisma.CiudadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          create: {
            args: Prisma.CiudadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          createMany: {
            args: Prisma.CiudadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CiudadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          delete: {
            args: Prisma.CiudadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          update: {
            args: Prisma.CiudadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          deleteMany: {
            args: Prisma.CiudadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CiudadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CiudadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          upsert: {
            args: Prisma.CiudadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          aggregate: {
            args: Prisma.CiudadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudad>
          }
          groupBy: {
            args: Prisma.CiudadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadGroupByOutputType>[]
          }
          count: {
            args: Prisma.CiudadCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadCountAggregateOutputType> | number
          }
        }
      }
      CodigoPostal: {
        payload: Prisma.$CodigoPostalPayload<ExtArgs>
        fields: Prisma.CodigoPostalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodigoPostalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodigoPostalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          findFirst: {
            args: Prisma.CodigoPostalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodigoPostalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          findMany: {
            args: Prisma.CodigoPostalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>[]
          }
          create: {
            args: Prisma.CodigoPostalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          createMany: {
            args: Prisma.CodigoPostalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodigoPostalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>[]
          }
          delete: {
            args: Prisma.CodigoPostalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          update: {
            args: Prisma.CodigoPostalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          deleteMany: {
            args: Prisma.CodigoPostalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodigoPostalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodigoPostalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>[]
          }
          upsert: {
            args: Prisma.CodigoPostalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoPostalPayload>
          }
          aggregate: {
            args: Prisma.CodigoPostalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodigoPostal>
          }
          groupBy: {
            args: Prisma.CodigoPostalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodigoPostalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodigoPostalCountArgs<ExtArgs>
            result: $Utils.Optional<CodigoPostalCountAggregateOutputType> | number
          }
        }
      }
      TipoVia: {
        payload: Prisma.$TipoViaPayload<ExtArgs>
        fields: Prisma.TipoViaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoViaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoViaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          findFirst: {
            args: Prisma.TipoViaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoViaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          findMany: {
            args: Prisma.TipoViaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>[]
          }
          create: {
            args: Prisma.TipoViaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          createMany: {
            args: Prisma.TipoViaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoViaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>[]
          }
          delete: {
            args: Prisma.TipoViaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          update: {
            args: Prisma.TipoViaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          deleteMany: {
            args: Prisma.TipoViaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoViaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoViaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>[]
          }
          upsert: {
            args: Prisma.TipoViaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoViaPayload>
          }
          aggregate: {
            args: Prisma.TipoViaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoVia>
          }
          groupBy: {
            args: Prisma.TipoViaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoViaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoViaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoViaCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Socio: {
        payload: Prisma.$SocioPayload<ExtArgs>
        fields: Prisma.SocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findFirst: {
            args: Prisma.SocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findMany: {
            args: Prisma.SocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          create: {
            args: Prisma.SocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          createMany: {
            args: Prisma.SocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          delete: {
            args: Prisma.SocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          update: {
            args: Prisma.SocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          deleteMany: {
            args: Prisma.SocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          upsert: {
            args: Prisma.SocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          aggregate: {
            args: Prisma.SocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocio>
          }
          groupBy: {
            args: Prisma.SocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocioCountArgs<ExtArgs>
            result: $Utils.Optional<SocioCountAggregateOutputType> | number
          }
        }
      }
      Asociado: {
        payload: Prisma.$AsociadoPayload<ExtArgs>
        fields: Prisma.AsociadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsociadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsociadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          findFirst: {
            args: Prisma.AsociadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsociadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          findMany: {
            args: Prisma.AsociadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>[]
          }
          create: {
            args: Prisma.AsociadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          createMany: {
            args: Prisma.AsociadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsociadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>[]
          }
          delete: {
            args: Prisma.AsociadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          update: {
            args: Prisma.AsociadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          deleteMany: {
            args: Prisma.AsociadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsociadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsociadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>[]
          }
          upsert: {
            args: Prisma.AsociadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsociadoPayload>
          }
          aggregate: {
            args: Prisma.AsociadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsociado>
          }
          groupBy: {
            args: Prisma.AsociadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsociadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsociadoCountArgs<ExtArgs>
            result: $Utils.Optional<AsociadoCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DireccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DireccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    pais?: PaisOmit
    estado?: EstadoOmit
    ciudad?: CiudadOmit
    codigoPostal?: CodigoPostalOmit
    tipoVia?: TipoViaOmit
    admin?: AdminOmit
    socio?: SocioOmit
    asociado?: AsociadoOmit
    direccion?: DireccionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PaisCountOutputType
   */

  export type PaisCountOutputType = {
    estados: number
    ciudades: number
    codigosPostales: number
    asociados: number
    nacionalidades: number
  }

  export type PaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados?: boolean | PaisCountOutputTypeCountEstadosArgs
    ciudades?: boolean | PaisCountOutputTypeCountCiudadesArgs
    codigosPostales?: boolean | PaisCountOutputTypeCountCodigosPostalesArgs
    asociados?: boolean | PaisCountOutputTypeCountAsociadosArgs
    nacionalidades?: boolean | PaisCountOutputTypeCountNacionalidadesArgs
  }

  // Custom InputTypes
  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaisCountOutputType
     */
    select?: PaisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountEstadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountCiudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountCodigosPostalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodigoPostalWhereInput
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountAsociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountNacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
  }


  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    ciudades: number
    asociados: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudades?: boolean | EstadoCountOutputTypeCountCiudadesArgs
    asociados?: boolean | EstadoCountOutputTypeCountAsociadosArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountCiudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountAsociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
  }


  /**
   * Count Type CiudadCountOutputType
   */

  export type CiudadCountOutputType = {
    asociados: number
  }

  export type CiudadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asociados?: boolean | CiudadCountOutputTypeCountAsociadosArgs
  }

  // Custom InputTypes
  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadCountOutputType
     */
    select?: CiudadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountAsociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
  }


  /**
   * Count Type CodigoPostalCountOutputType
   */

  export type CodigoPostalCountOutputType = {
    direcciones: number
  }

  export type CodigoPostalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | CodigoPostalCountOutputTypeCountDireccionesArgs
  }

  // Custom InputTypes
  /**
   * CodigoPostalCountOutputType without action
   */
  export type CodigoPostalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostalCountOutputType
     */
    select?: CodigoPostalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodigoPostalCountOutputType without action
   */
  export type CodigoPostalCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }


  /**
   * Count Type TipoViaCountOutputType
   */

  export type TipoViaCountOutputType = {
    direcciones: number
  }

  export type TipoViaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | TipoViaCountOutputTypeCountDireccionesArgs
  }

  // Custom InputTypes
  /**
   * TipoViaCountOutputType without action
   */
  export type TipoViaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoViaCountOutputType
     */
    select?: TipoViaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoViaCountOutputType without action
   */
  export type TipoViaCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    socios: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | AdminCountOutputTypeCountSociosArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocioWhereInput
  }


  /**
   * Count Type SocioCountOutputType
   */

  export type SocioCountOutputType = {
    asociados: number
    direcciones: number
  }

  export type SocioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asociados?: boolean | SocioCountOutputTypeCountAsociadosArgs
    direcciones?: boolean | SocioCountOutputTypeCountDireccionesArgs
  }

  // Custom InputTypes
  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocioCountOutputType
     */
    select?: SocioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeCountAsociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
  }

  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pais
   */

  export type AggregatePais = {
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  export type PaisAvgAggregateOutputType = {
    id: number | null
    pais_nro: number | null
  }

  export type PaisSumAggregateOutputType = {
    id: number | null
    pais_nro: number | null
  }

  export type PaisMinAggregateOutputType = {
    id: number | null
    pais_nro: number | null
    pais: string | null
    codigo: string | null
    iso_2: string | null
    iso_3: string | null
    moneda: string | null
    continente: string | null
  }

  export type PaisMaxAggregateOutputType = {
    id: number | null
    pais_nro: number | null
    pais: string | null
    codigo: string | null
    iso_2: string | null
    iso_3: string | null
    moneda: string | null
    continente: string | null
  }

  export type PaisCountAggregateOutputType = {
    id: number
    pais_nro: number
    pais: number
    codigo: number
    iso_2: number
    iso_3: number
    moneda: number
    continente: number
    _all: number
  }


  export type PaisAvgAggregateInputType = {
    id?: true
    pais_nro?: true
  }

  export type PaisSumAggregateInputType = {
    id?: true
    pais_nro?: true
  }

  export type PaisMinAggregateInputType = {
    id?: true
    pais_nro?: true
    pais?: true
    codigo?: true
    iso_2?: true
    iso_3?: true
    moneda?: true
    continente?: true
  }

  export type PaisMaxAggregateInputType = {
    id?: true
    pais_nro?: true
    pais?: true
    codigo?: true
    iso_2?: true
    iso_3?: true
    moneda?: true
    continente?: true
  }

  export type PaisCountAggregateInputType = {
    id?: true
    pais_nro?: true
    pais?: true
    codigo?: true
    iso_2?: true
    iso_3?: true
    moneda?: true
    continente?: true
    _all?: true
  }

  export type PaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pais to aggregate.
     */
    where?: PaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pais to fetch.
     */
    orderBy?: PaisOrderByWithRelationInput | PaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pais
    **/
    _count?: true | PaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaisMaxAggregateInputType
  }

  export type GetPaisAggregateType<T extends PaisAggregateArgs> = {
        [P in keyof T & keyof AggregatePais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePais[P]>
      : GetScalarType<T[P], AggregatePais[P]>
  }




  export type PaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaisWhereInput
    orderBy?: PaisOrderByWithAggregationInput | PaisOrderByWithAggregationInput[]
    by: PaisScalarFieldEnum[] | PaisScalarFieldEnum
    having?: PaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaisCountAggregateInputType | true
    _avg?: PaisAvgAggregateInputType
    _sum?: PaisSumAggregateInputType
    _min?: PaisMinAggregateInputType
    _max?: PaisMaxAggregateInputType
  }

  export type PaisGroupByOutputType = {
    id: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  type GetPaisGroupByPayload<T extends PaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaisGroupByOutputType[P]>
            : GetScalarType<T[P], PaisGroupByOutputType[P]>
        }
      >
    >


  export type PaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pais_nro?: boolean
    pais?: boolean
    codigo?: boolean
    iso_2?: boolean
    iso_3?: boolean
    moneda?: boolean
    continente?: boolean
    estados?: boolean | Pais$estadosArgs<ExtArgs>
    ciudades?: boolean | Pais$ciudadesArgs<ExtArgs>
    codigosPostales?: boolean | Pais$codigosPostalesArgs<ExtArgs>
    asociados?: boolean | Pais$asociadosArgs<ExtArgs>
    nacionalidades?: boolean | Pais$nacionalidadesArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pais"]>

  export type PaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pais_nro?: boolean
    pais?: boolean
    codigo?: boolean
    iso_2?: boolean
    iso_3?: boolean
    moneda?: boolean
    continente?: boolean
  }, ExtArgs["result"]["pais"]>

  export type PaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pais_nro?: boolean
    pais?: boolean
    codigo?: boolean
    iso_2?: boolean
    iso_3?: boolean
    moneda?: boolean
    continente?: boolean
  }, ExtArgs["result"]["pais"]>

  export type PaisSelectScalar = {
    id?: boolean
    pais_nro?: boolean
    pais?: boolean
    codigo?: boolean
    iso_2?: boolean
    iso_3?: boolean
    moneda?: boolean
    continente?: boolean
  }

  export type PaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pais_nro" | "pais" | "codigo" | "iso_2" | "iso_3" | "moneda" | "continente", ExtArgs["result"]["pais"]>
  export type PaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados?: boolean | Pais$estadosArgs<ExtArgs>
    ciudades?: boolean | Pais$ciudadesArgs<ExtArgs>
    codigosPostales?: boolean | Pais$codigosPostalesArgs<ExtArgs>
    asociados?: boolean | Pais$asociadosArgs<ExtArgs>
    nacionalidades?: boolean | Pais$nacionalidadesArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pais"
    objects: {
      estados: Prisma.$EstadoPayload<ExtArgs>[]
      ciudades: Prisma.$CiudadPayload<ExtArgs>[]
      codigosPostales: Prisma.$CodigoPostalPayload<ExtArgs>[]
      asociados: Prisma.$AsociadoPayload<ExtArgs>[]
      nacionalidades: Prisma.$AsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pais_nro: number
      pais: string
      codigo: string
      iso_2: string
      iso_3: string
      moneda: string
      continente: string
    }, ExtArgs["result"]["pais"]>
    composites: {}
  }

  type PaisGetPayload<S extends boolean | null | undefined | PaisDefaultArgs> = $Result.GetResult<Prisma.$PaisPayload, S>

  type PaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaisCountAggregateInputType | true
    }

  export interface PaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pais'], meta: { name: 'Pais' } }
    /**
     * Find zero or one Pais that matches the filter.
     * @param {PaisFindUniqueArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaisFindUniqueArgs>(args: SelectSubset<T, PaisFindUniqueArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaisFindUniqueOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaisFindUniqueOrThrowArgs>(args: SelectSubset<T, PaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisFindFirstArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaisFindFirstArgs>(args?: SelectSubset<T, PaisFindFirstArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisFindFirstOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaisFindFirstOrThrowArgs>(args?: SelectSubset<T, PaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pais
     * const pais = await prisma.pais.findMany()
     * 
     * // Get first 10 Pais
     * const pais = await prisma.pais.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paisWithIdOnly = await prisma.pais.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaisFindManyArgs>(args?: SelectSubset<T, PaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pais.
     * @param {PaisCreateArgs} args - Arguments to create a Pais.
     * @example
     * // Create one Pais
     * const Pais = await prisma.pais.create({
     *   data: {
     *     // ... data to create a Pais
     *   }
     * })
     * 
     */
    create<T extends PaisCreateArgs>(args: SelectSubset<T, PaisCreateArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pais.
     * @param {PaisCreateManyArgs} args - Arguments to create many Pais.
     * @example
     * // Create many Pais
     * const pais = await prisma.pais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaisCreateManyArgs>(args?: SelectSubset<T, PaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pais and returns the data saved in the database.
     * @param {PaisCreateManyAndReturnArgs} args - Arguments to create many Pais.
     * @example
     * // Create many Pais
     * const pais = await prisma.pais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pais and only return the `id`
     * const paisWithIdOnly = await prisma.pais.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaisCreateManyAndReturnArgs>(args?: SelectSubset<T, PaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pais.
     * @param {PaisDeleteArgs} args - Arguments to delete one Pais.
     * @example
     * // Delete one Pais
     * const Pais = await prisma.pais.delete({
     *   where: {
     *     // ... filter to delete one Pais
     *   }
     * })
     * 
     */
    delete<T extends PaisDeleteArgs>(args: SelectSubset<T, PaisDeleteArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pais.
     * @param {PaisUpdateArgs} args - Arguments to update one Pais.
     * @example
     * // Update one Pais
     * const pais = await prisma.pais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaisUpdateArgs>(args: SelectSubset<T, PaisUpdateArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pais.
     * @param {PaisDeleteManyArgs} args - Arguments to filter Pais to delete.
     * @example
     * // Delete a few Pais
     * const { count } = await prisma.pais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaisDeleteManyArgs>(args?: SelectSubset<T, PaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pais
     * const pais = await prisma.pais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaisUpdateManyArgs>(args: SelectSubset<T, PaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pais and returns the data updated in the database.
     * @param {PaisUpdateManyAndReturnArgs} args - Arguments to update many Pais.
     * @example
     * // Update many Pais
     * const pais = await prisma.pais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pais and only return the `id`
     * const paisWithIdOnly = await prisma.pais.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaisUpdateManyAndReturnArgs>(args: SelectSubset<T, PaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pais.
     * @param {PaisUpsertArgs} args - Arguments to update or create a Pais.
     * @example
     * // Update or create a Pais
     * const pais = await prisma.pais.upsert({
     *   create: {
     *     // ... data to create a Pais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pais we want to update
     *   }
     * })
     */
    upsert<T extends PaisUpsertArgs>(args: SelectSubset<T, PaisUpsertArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisCountArgs} args - Arguments to filter Pais to count.
     * @example
     * // Count the number of Pais
     * const count = await prisma.pais.count({
     *   where: {
     *     // ... the filter for the Pais we want to count
     *   }
     * })
    **/
    count<T extends PaisCountArgs>(
      args?: Subset<T, PaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaisAggregateArgs>(args: Subset<T, PaisAggregateArgs>): Prisma.PrismaPromise<GetPaisAggregateType<T>>

    /**
     * Group by Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisGroupByArgs} args - Group by arguments.
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
      T extends PaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaisGroupByArgs['orderBy'] }
        : { orderBy?: PaisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pais model
   */
  readonly fields: PaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estados<T extends Pais$estadosArgs<ExtArgs> = {}>(args?: Subset<T, Pais$estadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ciudades<T extends Pais$ciudadesArgs<ExtArgs> = {}>(args?: Subset<T, Pais$ciudadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    codigosPostales<T extends Pais$codigosPostalesArgs<ExtArgs> = {}>(args?: Subset<T, Pais$codigosPostalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asociados<T extends Pais$asociadosArgs<ExtArgs> = {}>(args?: Subset<T, Pais$asociadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nacionalidades<T extends Pais$nacionalidadesArgs<ExtArgs> = {}>(args?: Subset<T, Pais$nacionalidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pais model
   */
  interface PaisFieldRefs {
    readonly id: FieldRef<"Pais", 'Int'>
    readonly pais_nro: FieldRef<"Pais", 'Int'>
    readonly pais: FieldRef<"Pais", 'String'>
    readonly codigo: FieldRef<"Pais", 'String'>
    readonly iso_2: FieldRef<"Pais", 'String'>
    readonly iso_3: FieldRef<"Pais", 'String'>
    readonly moneda: FieldRef<"Pais", 'String'>
    readonly continente: FieldRef<"Pais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pais findUnique
   */
  export type PaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter, which Pais to fetch.
     */
    where: PaisWhereUniqueInput
  }

  /**
   * Pais findUniqueOrThrow
   */
  export type PaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter, which Pais to fetch.
     */
    where: PaisWhereUniqueInput
  }

  /**
   * Pais findFirst
   */
  export type PaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter, which Pais to fetch.
     */
    where?: PaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pais to fetch.
     */
    orderBy?: PaisOrderByWithRelationInput | PaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pais.
     */
    cursor?: PaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * Pais findFirstOrThrow
   */
  export type PaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter, which Pais to fetch.
     */
    where?: PaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pais to fetch.
     */
    orderBy?: PaisOrderByWithRelationInput | PaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pais.
     */
    cursor?: PaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * Pais findMany
   */
  export type PaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter, which Pais to fetch.
     */
    where?: PaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pais to fetch.
     */
    orderBy?: PaisOrderByWithRelationInput | PaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pais.
     */
    cursor?: PaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pais.
     */
    skip?: number
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * Pais create
   */
  export type PaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * The data needed to create a Pais.
     */
    data: XOR<PaisCreateInput, PaisUncheckedCreateInput>
  }

  /**
   * Pais createMany
   */
  export type PaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pais.
     */
    data: PaisCreateManyInput | PaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pais createManyAndReturn
   */
  export type PaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * The data used to create many Pais.
     */
    data: PaisCreateManyInput | PaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pais update
   */
  export type PaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * The data needed to update a Pais.
     */
    data: XOR<PaisUpdateInput, PaisUncheckedUpdateInput>
    /**
     * Choose, which Pais to update.
     */
    where: PaisWhereUniqueInput
  }

  /**
   * Pais updateMany
   */
  export type PaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pais.
     */
    data: XOR<PaisUpdateManyMutationInput, PaisUncheckedUpdateManyInput>
    /**
     * Filter which Pais to update
     */
    where?: PaisWhereInput
    /**
     * Limit how many Pais to update.
     */
    limit?: number
  }

  /**
   * Pais updateManyAndReturn
   */
  export type PaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * The data used to update Pais.
     */
    data: XOR<PaisUpdateManyMutationInput, PaisUncheckedUpdateManyInput>
    /**
     * Filter which Pais to update
     */
    where?: PaisWhereInput
    /**
     * Limit how many Pais to update.
     */
    limit?: number
  }

  /**
   * Pais upsert
   */
  export type PaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * The filter to search for the Pais to update in case it exists.
     */
    where: PaisWhereUniqueInput
    /**
     * In case the Pais found by the `where` argument doesn't exist, create a new Pais with this data.
     */
    create: XOR<PaisCreateInput, PaisUncheckedCreateInput>
    /**
     * In case the Pais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaisUpdateInput, PaisUncheckedUpdateInput>
  }

  /**
   * Pais delete
   */
  export type PaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
    /**
     * Filter which Pais to delete.
     */
    where: PaisWhereUniqueInput
  }

  /**
   * Pais deleteMany
   */
  export type PaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pais to delete
     */
    where?: PaisWhereInput
    /**
     * Limit how many Pais to delete.
     */
    limit?: number
  }

  /**
   * Pais.estados
   */
  export type Pais$estadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    cursor?: EstadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Pais.ciudades
   */
  export type Pais$ciudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    cursor?: CiudadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Pais.codigosPostales
   */
  export type Pais$codigosPostalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    where?: CodigoPostalWhereInput
    orderBy?: CodigoPostalOrderByWithRelationInput | CodigoPostalOrderByWithRelationInput[]
    cursor?: CodigoPostalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodigoPostalScalarFieldEnum | CodigoPostalScalarFieldEnum[]
  }

  /**
   * Pais.asociados
   */
  export type Pais$asociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    cursor?: AsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Pais.nacionalidades
   */
  export type Pais$nacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    cursor?: AsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Pais without action
   */
  export type PaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pais
     */
    select?: PaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pais
     */
    omit?: PaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaisInclude<ExtArgs> | null
  }


  /**
   * Model Estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado_cid: string | null
    estado: string | null
    capital: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado_cid: string | null
    estado: string | null
    capital: string | null
  }

  export type EstadoCountAggregateOutputType = {
    id: number
    id_pais: number
    id_estado_cid: number
    estado: number
    capital: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type EstadoSumAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type EstadoMinAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado_cid?: true
    estado?: true
    capital?: true
  }

  export type EstadoMaxAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado_cid?: true
    estado?: true
    capital?: true
  }

  export type EstadoCountAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado_cid?: true
    estado?: true
    capital?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado to aggregate.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type EstadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithAggregationInput | EstadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: EstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id: number
    id_pais: number
    id_estado_cid: string
    estado: string
    capital: string
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends EstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado_cid?: boolean
    estado?: boolean
    capital?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    ciudades?: boolean | Estado$ciudadesArgs<ExtArgs>
    asociados?: boolean | Estado$asociadosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado_cid?: boolean
    estado?: boolean
    capital?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado_cid?: boolean
    estado?: boolean
    capital?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectScalar = {
    id?: boolean
    id_pais?: boolean
    id_estado_cid?: boolean
    estado?: boolean
    capital?: boolean
  }

  export type EstadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_pais" | "id_estado_cid" | "estado" | "capital", ExtArgs["result"]["estado"]>
  export type EstadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    ciudades?: boolean | Estado$ciudadesArgs<ExtArgs>
    asociados?: boolean | Estado$asociadosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }
  export type EstadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }

  export type $EstadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado"
    objects: {
      pais: Prisma.$PaisPayload<ExtArgs>
      ciudades: Prisma.$CiudadPayload<ExtArgs>[]
      asociados: Prisma.$AsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_pais: number
      id_estado_cid: string
      estado: string
      capital: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type EstadoGetPayload<S extends boolean | null | undefined | EstadoDefaultArgs> = $Result.GetResult<Prisma.$EstadoPayload, S>

  type EstadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface EstadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado'], meta: { name: 'Estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {EstadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoFindUniqueArgs>(args: SelectSubset<T, EstadoFindUniqueArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoFindFirstArgs>(args?: SelectSubset<T, EstadoFindFirstArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoWithIdOnly = await prisma.estado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoFindManyArgs>(args?: SelectSubset<T, EstadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {EstadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends EstadoCreateArgs>(args: SelectSubset<T, EstadoCreateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {EstadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoCreateManyArgs>(args?: SelectSubset<T, EstadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {EstadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {EstadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends EstadoDeleteArgs>(args: SelectSubset<T, EstadoDeleteArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {EstadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoUpdateArgs>(args: SelectSubset<T, EstadoUpdateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {EstadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoDeleteManyArgs>(args?: SelectSubset<T, EstadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoUpdateManyArgs>(args: SelectSubset<T, EstadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {EstadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {EstadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends EstadoUpsertArgs>(args: SelectSubset<T, EstadoUpsertArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadoCountArgs>(
      args?: Subset<T, EstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoGroupByArgs} args - Group by arguments.
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
      T extends EstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado model
   */
  readonly fields: EstadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends PaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaisDefaultArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciudades<T extends Estado$ciudadesArgs<ExtArgs> = {}>(args?: Subset<T, Estado$ciudadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asociados<T extends Estado$asociadosArgs<ExtArgs> = {}>(args?: Subset<T, Estado$asociadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estado model
   */
  interface EstadoFieldRefs {
    readonly id: FieldRef<"Estado", 'Int'>
    readonly id_pais: FieldRef<"Estado", 'Int'>
    readonly id_estado_cid: FieldRef<"Estado", 'String'>
    readonly estado: FieldRef<"Estado", 'String'>
    readonly capital: FieldRef<"Estado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estado findUnique
   */
  export type EstadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findUniqueOrThrow
   */
  export type EstadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findFirst
   */
  export type EstadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findFirstOrThrow
   */
  export type EstadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findMany
   */
  export type EstadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado create
   */
  export type EstadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado.
     */
    data: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
  }

  /**
   * Estado createMany
   */
  export type EstadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado createManyAndReturn
   */
  export type EstadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estado update
   */
  export type EstadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado.
     */
    data: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
    /**
     * Choose, which Estado to update.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado updateMany
   */
  export type EstadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estado updateManyAndReturn
   */
  export type EstadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estado upsert
   */
  export type EstadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado to update in case it exists.
     */
    where: EstadoWhereUniqueInput
    /**
     * In case the Estado found by the `where` argument doesn't exist, create a new Estado with this data.
     */
    create: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
    /**
     * In case the Estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
  }

  /**
   * Estado delete
   */
  export type EstadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter which Estado to delete.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado deleteMany
   */
  export type EstadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to delete.
     */
    limit?: number
  }

  /**
   * Estado.ciudades
   */
  export type Estado$ciudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    cursor?: CiudadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Estado.asociados
   */
  export type Estado$asociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    cursor?: AsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Estado without action
   */
  export type EstadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
  }


  /**
   * Model Ciudad
   */

  export type AggregateCiudad = {
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  export type CiudadAvgAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado: number | null
    id_ciudad: number | null
  }

  export type CiudadSumAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado: number | null
    id_ciudad: number | null
  }

  export type CiudadMinAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado: number | null
    id_ciudad: number | null
    ciudad: string | null
  }

  export type CiudadMaxAggregateOutputType = {
    id: number | null
    id_pais: number | null
    id_estado: number | null
    id_ciudad: number | null
    ciudad: string | null
  }

  export type CiudadCountAggregateOutputType = {
    id: number
    id_pais: number
    id_estado: number
    id_ciudad: number
    ciudad: number
    _all: number
  }


  export type CiudadAvgAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado?: true
    id_ciudad?: true
  }

  export type CiudadSumAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado?: true
    id_ciudad?: true
  }

  export type CiudadMinAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado?: true
    id_ciudad?: true
    ciudad?: true
  }

  export type CiudadMaxAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado?: true
    id_ciudad?: true
    ciudad?: true
  }

  export type CiudadCountAggregateInputType = {
    id?: true
    id_pais?: true
    id_estado?: true
    id_ciudad?: true
    ciudad?: true
    _all?: true
  }

  export type CiudadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudad to aggregate.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciudads
    **/
    _count?: true | CiudadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiudadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiudadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadMaxAggregateInputType
  }

  export type GetCiudadAggregateType<T extends CiudadAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudad[P]>
      : GetScalarType<T[P], AggregateCiudad[P]>
  }




  export type CiudadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithAggregationInput | CiudadOrderByWithAggregationInput[]
    by: CiudadScalarFieldEnum[] | CiudadScalarFieldEnum
    having?: CiudadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadCountAggregateInputType | true
    _avg?: CiudadAvgAggregateInputType
    _sum?: CiudadSumAggregateInputType
    _min?: CiudadMinAggregateInputType
    _max?: CiudadMaxAggregateInputType
  }

  export type CiudadGroupByOutputType = {
    id: number
    id_pais: number
    id_estado: number | null
    id_ciudad: number
    ciudad: string
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  type GetCiudadGroupByPayload<T extends CiudadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadGroupByOutputType[P]>
        }
      >
    >


  export type CiudadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado?: boolean
    id_ciudad?: boolean
    ciudad?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
    asociados?: boolean | Ciudad$asociadosArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado?: boolean
    id_ciudad?: boolean
    ciudad?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pais?: boolean
    id_estado?: boolean
    id_ciudad?: boolean
    ciudad?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectScalar = {
    id?: boolean
    id_pais?: boolean
    id_estado?: boolean
    id_ciudad?: boolean
    ciudad?: boolean
  }

  export type CiudadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_pais" | "id_estado" | "id_ciudad" | "ciudad", ExtArgs["result"]["ciudad"]>
  export type CiudadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
    asociados?: boolean | Ciudad$asociadosArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CiudadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
  }
  export type CiudadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    estado?: boolean | Ciudad$estadoArgs<ExtArgs>
  }

  export type $CiudadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciudad"
    objects: {
      pais: Prisma.$PaisPayload<ExtArgs>
      estado: Prisma.$EstadoPayload<ExtArgs> | null
      asociados: Prisma.$AsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_pais: number
      id_estado: number | null
      id_ciudad: number
      ciudad: string
    }, ExtArgs["result"]["ciudad"]>
    composites: {}
  }

  type CiudadGetPayload<S extends boolean | null | undefined | CiudadDefaultArgs> = $Result.GetResult<Prisma.$CiudadPayload, S>

  type CiudadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CiudadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadCountAggregateInputType | true
    }

  export interface CiudadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciudad'], meta: { name: 'Ciudad' } }
    /**
     * Find zero or one Ciudad that matches the filter.
     * @param {CiudadFindUniqueArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CiudadFindUniqueArgs>(args: SelectSubset<T, CiudadFindUniqueArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CiudadFindUniqueOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CiudadFindUniqueOrThrowArgs>(args: SelectSubset<T, CiudadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CiudadFindFirstArgs>(args?: SelectSubset<T, CiudadFindFirstArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CiudadFindFirstOrThrowArgs>(args?: SelectSubset<T, CiudadFindFirstOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudads
     * const ciudads = await prisma.ciudad.findMany()
     * 
     * // Get first 10 Ciudads
     * const ciudads = await prisma.ciudad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CiudadFindManyArgs>(args?: SelectSubset<T, CiudadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudad.
     * @param {CiudadCreateArgs} args - Arguments to create a Ciudad.
     * @example
     * // Create one Ciudad
     * const Ciudad = await prisma.ciudad.create({
     *   data: {
     *     // ... data to create a Ciudad
     *   }
     * })
     * 
     */
    create<T extends CiudadCreateArgs>(args: SelectSubset<T, CiudadCreateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudads.
     * @param {CiudadCreateManyArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CiudadCreateManyArgs>(args?: SelectSubset<T, CiudadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciudads and returns the data saved in the database.
     * @param {CiudadCreateManyAndReturnArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CiudadCreateManyAndReturnArgs>(args?: SelectSubset<T, CiudadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciudad.
     * @param {CiudadDeleteArgs} args - Arguments to delete one Ciudad.
     * @example
     * // Delete one Ciudad
     * const Ciudad = await prisma.ciudad.delete({
     *   where: {
     *     // ... filter to delete one Ciudad
     *   }
     * })
     * 
     */
    delete<T extends CiudadDeleteArgs>(args: SelectSubset<T, CiudadDeleteArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudad.
     * @param {CiudadUpdateArgs} args - Arguments to update one Ciudad.
     * @example
     * // Update one Ciudad
     * const ciudad = await prisma.ciudad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CiudadUpdateArgs>(args: SelectSubset<T, CiudadUpdateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudads.
     * @param {CiudadDeleteManyArgs} args - Arguments to filter Ciudads to delete.
     * @example
     * // Delete a few Ciudads
     * const { count } = await prisma.ciudad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CiudadDeleteManyArgs>(args?: SelectSubset<T, CiudadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CiudadUpdateManyArgs>(args: SelectSubset<T, CiudadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads and returns the data updated in the database.
     * @param {CiudadUpdateManyAndReturnArgs} args - Arguments to update many Ciudads.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.updateManyAndReturn({
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
    updateManyAndReturn<T extends CiudadUpdateManyAndReturnArgs>(args: SelectSubset<T, CiudadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciudad.
     * @param {CiudadUpsertArgs} args - Arguments to update or create a Ciudad.
     * @example
     * // Update or create a Ciudad
     * const ciudad = await prisma.ciudad.upsert({
     *   create: {
     *     // ... data to create a Ciudad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudad we want to update
     *   }
     * })
     */
    upsert<T extends CiudadUpsertArgs>(args: SelectSubset<T, CiudadUpsertArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadCountArgs} args - Arguments to filter Ciudads to count.
     * @example
     * // Count the number of Ciudads
     * const count = await prisma.ciudad.count({
     *   where: {
     *     // ... the filter for the Ciudads we want to count
     *   }
     * })
    **/
    count<T extends CiudadCountArgs>(
      args?: Subset<T, CiudadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CiudadAggregateArgs>(args: Subset<T, CiudadAggregateArgs>): Prisma.PrismaPromise<GetCiudadAggregateType<T>>

    /**
     * Group by Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadGroupByArgs} args - Group by arguments.
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
      T extends CiudadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CiudadGroupByArgs['orderBy'] }
        : { orderBy?: CiudadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CiudadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciudad model
   */
  readonly fields: CiudadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciudad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CiudadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends PaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaisDefaultArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado<T extends Ciudad$estadoArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$estadoArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    asociados<T extends Ciudad$asociadosArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$asociadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ciudad model
   */
  interface CiudadFieldRefs {
    readonly id: FieldRef<"Ciudad", 'Int'>
    readonly id_pais: FieldRef<"Ciudad", 'Int'>
    readonly id_estado: FieldRef<"Ciudad", 'Int'>
    readonly id_ciudad: FieldRef<"Ciudad", 'Int'>
    readonly ciudad: FieldRef<"Ciudad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciudad findUnique
   */
  export type CiudadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findUniqueOrThrow
   */
  export type CiudadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findFirst
   */
  export type CiudadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findFirstOrThrow
   */
  export type CiudadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findMany
   */
  export type CiudadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudads to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad create
   */
  export type CiudadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciudad.
     */
    data: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
  }

  /**
   * Ciudad createMany
   */
  export type CiudadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciudad createManyAndReturn
   */
  export type CiudadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciudad update
   */
  export type CiudadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciudad.
     */
    data: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
    /**
     * Choose, which Ciudad to update.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad updateMany
   */
  export type CiudadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad updateManyAndReturn
   */
  export type CiudadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciudad upsert
   */
  export type CiudadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciudad to update in case it exists.
     */
    where: CiudadWhereUniqueInput
    /**
     * In case the Ciudad found by the `where` argument doesn't exist, create a new Ciudad with this data.
     */
    create: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
    /**
     * In case the Ciudad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
  }

  /**
   * Ciudad delete
   */
  export type CiudadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter which Ciudad to delete.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad deleteMany
   */
  export type CiudadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudads to delete
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to delete.
     */
    limit?: number
  }

  /**
   * Ciudad.estado
   */
  export type Ciudad$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    where?: EstadoWhereInput
  }

  /**
   * Ciudad.asociados
   */
  export type Ciudad$asociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    cursor?: AsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Ciudad without action
   */
  export type CiudadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
  }


  /**
   * Model CodigoPostal
   */

  export type AggregateCodigoPostal = {
    _count: CodigoPostalCountAggregateOutputType | null
    _avg: CodigoPostalAvgAggregateOutputType | null
    _sum: CodigoPostalSumAggregateOutputType | null
    _min: CodigoPostalMinAggregateOutputType | null
    _max: CodigoPostalMaxAggregateOutputType | null
  }

  export type CodigoPostalAvgAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type CodigoPostalSumAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type CodigoPostalMinAggregateOutputType = {
    id: number | null
    provincia: string | null
    ciudad: string | null
    cp: string | null
    id_pais: number | null
  }

  export type CodigoPostalMaxAggregateOutputType = {
    id: number | null
    provincia: string | null
    ciudad: string | null
    cp: string | null
    id_pais: number | null
  }

  export type CodigoPostalCountAggregateOutputType = {
    id: number
    provincia: number
    ciudad: number
    cp: number
    id_pais: number
    _all: number
  }


  export type CodigoPostalAvgAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type CodigoPostalSumAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type CodigoPostalMinAggregateInputType = {
    id?: true
    provincia?: true
    ciudad?: true
    cp?: true
    id_pais?: true
  }

  export type CodigoPostalMaxAggregateInputType = {
    id?: true
    provincia?: true
    ciudad?: true
    cp?: true
    id_pais?: true
  }

  export type CodigoPostalCountAggregateInputType = {
    id?: true
    provincia?: true
    ciudad?: true
    cp?: true
    id_pais?: true
    _all?: true
  }

  export type CodigoPostalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodigoPostal to aggregate.
     */
    where?: CodigoPostalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoPostals to fetch.
     */
    orderBy?: CodigoPostalOrderByWithRelationInput | CodigoPostalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodigoPostalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoPostals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoPostals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodigoPostals
    **/
    _count?: true | CodigoPostalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodigoPostalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodigoPostalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodigoPostalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodigoPostalMaxAggregateInputType
  }

  export type GetCodigoPostalAggregateType<T extends CodigoPostalAggregateArgs> = {
        [P in keyof T & keyof AggregateCodigoPostal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodigoPostal[P]>
      : GetScalarType<T[P], AggregateCodigoPostal[P]>
  }




  export type CodigoPostalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodigoPostalWhereInput
    orderBy?: CodigoPostalOrderByWithAggregationInput | CodigoPostalOrderByWithAggregationInput[]
    by: CodigoPostalScalarFieldEnum[] | CodigoPostalScalarFieldEnum
    having?: CodigoPostalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodigoPostalCountAggregateInputType | true
    _avg?: CodigoPostalAvgAggregateInputType
    _sum?: CodigoPostalSumAggregateInputType
    _min?: CodigoPostalMinAggregateInputType
    _max?: CodigoPostalMaxAggregateInputType
  }

  export type CodigoPostalGroupByOutputType = {
    id: number
    provincia: string
    ciudad: string
    cp: string
    id_pais: number
    _count: CodigoPostalCountAggregateOutputType | null
    _avg: CodigoPostalAvgAggregateOutputType | null
    _sum: CodigoPostalSumAggregateOutputType | null
    _min: CodigoPostalMinAggregateOutputType | null
    _max: CodigoPostalMaxAggregateOutputType | null
  }

  type GetCodigoPostalGroupByPayload<T extends CodigoPostalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodigoPostalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodigoPostalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodigoPostalGroupByOutputType[P]>
            : GetScalarType<T[P], CodigoPostalGroupByOutputType[P]>
        }
      >
    >


  export type CodigoPostalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provincia?: boolean
    ciudad?: boolean
    cp?: boolean
    id_pais?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    direcciones?: boolean | CodigoPostal$direccionesArgs<ExtArgs>
    _count?: boolean | CodigoPostalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codigoPostal"]>

  export type CodigoPostalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provincia?: boolean
    ciudad?: boolean
    cp?: boolean
    id_pais?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codigoPostal"]>

  export type CodigoPostalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provincia?: boolean
    ciudad?: boolean
    cp?: boolean
    id_pais?: boolean
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codigoPostal"]>

  export type CodigoPostalSelectScalar = {
    id?: boolean
    provincia?: boolean
    ciudad?: boolean
    cp?: boolean
    id_pais?: boolean
  }

  export type CodigoPostalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provincia" | "ciudad" | "cp" | "id_pais", ExtArgs["result"]["codigoPostal"]>
  export type CodigoPostalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
    direcciones?: boolean | CodigoPostal$direccionesArgs<ExtArgs>
    _count?: boolean | CodigoPostalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodigoPostalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }
  export type CodigoPostalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PaisDefaultArgs<ExtArgs>
  }

  export type $CodigoPostalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodigoPostal"
    objects: {
      pais: Prisma.$PaisPayload<ExtArgs>
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provincia: string
      ciudad: string
      cp: string
      id_pais: number
    }, ExtArgs["result"]["codigoPostal"]>
    composites: {}
  }

  type CodigoPostalGetPayload<S extends boolean | null | undefined | CodigoPostalDefaultArgs> = $Result.GetResult<Prisma.$CodigoPostalPayload, S>

  type CodigoPostalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodigoPostalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodigoPostalCountAggregateInputType | true
    }

  export interface CodigoPostalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodigoPostal'], meta: { name: 'CodigoPostal' } }
    /**
     * Find zero or one CodigoPostal that matches the filter.
     * @param {CodigoPostalFindUniqueArgs} args - Arguments to find a CodigoPostal
     * @example
     * // Get one CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodigoPostalFindUniqueArgs>(args: SelectSubset<T, CodigoPostalFindUniqueArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodigoPostal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodigoPostalFindUniqueOrThrowArgs} args - Arguments to find a CodigoPostal
     * @example
     * // Get one CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodigoPostalFindUniqueOrThrowArgs>(args: SelectSubset<T, CodigoPostalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodigoPostal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalFindFirstArgs} args - Arguments to find a CodigoPostal
     * @example
     * // Get one CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodigoPostalFindFirstArgs>(args?: SelectSubset<T, CodigoPostalFindFirstArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodigoPostal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalFindFirstOrThrowArgs} args - Arguments to find a CodigoPostal
     * @example
     * // Get one CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodigoPostalFindFirstOrThrowArgs>(args?: SelectSubset<T, CodigoPostalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodigoPostals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodigoPostals
     * const codigoPostals = await prisma.codigoPostal.findMany()
     * 
     * // Get first 10 CodigoPostals
     * const codigoPostals = await prisma.codigoPostal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codigoPostalWithIdOnly = await prisma.codigoPostal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodigoPostalFindManyArgs>(args?: SelectSubset<T, CodigoPostalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodigoPostal.
     * @param {CodigoPostalCreateArgs} args - Arguments to create a CodigoPostal.
     * @example
     * // Create one CodigoPostal
     * const CodigoPostal = await prisma.codigoPostal.create({
     *   data: {
     *     // ... data to create a CodigoPostal
     *   }
     * })
     * 
     */
    create<T extends CodigoPostalCreateArgs>(args: SelectSubset<T, CodigoPostalCreateArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodigoPostals.
     * @param {CodigoPostalCreateManyArgs} args - Arguments to create many CodigoPostals.
     * @example
     * // Create many CodigoPostals
     * const codigoPostal = await prisma.codigoPostal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodigoPostalCreateManyArgs>(args?: SelectSubset<T, CodigoPostalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodigoPostals and returns the data saved in the database.
     * @param {CodigoPostalCreateManyAndReturnArgs} args - Arguments to create many CodigoPostals.
     * @example
     * // Create many CodigoPostals
     * const codigoPostal = await prisma.codigoPostal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodigoPostals and only return the `id`
     * const codigoPostalWithIdOnly = await prisma.codigoPostal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodigoPostalCreateManyAndReturnArgs>(args?: SelectSubset<T, CodigoPostalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodigoPostal.
     * @param {CodigoPostalDeleteArgs} args - Arguments to delete one CodigoPostal.
     * @example
     * // Delete one CodigoPostal
     * const CodigoPostal = await prisma.codigoPostal.delete({
     *   where: {
     *     // ... filter to delete one CodigoPostal
     *   }
     * })
     * 
     */
    delete<T extends CodigoPostalDeleteArgs>(args: SelectSubset<T, CodigoPostalDeleteArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodigoPostal.
     * @param {CodigoPostalUpdateArgs} args - Arguments to update one CodigoPostal.
     * @example
     * // Update one CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodigoPostalUpdateArgs>(args: SelectSubset<T, CodigoPostalUpdateArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodigoPostals.
     * @param {CodigoPostalDeleteManyArgs} args - Arguments to filter CodigoPostals to delete.
     * @example
     * // Delete a few CodigoPostals
     * const { count } = await prisma.codigoPostal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodigoPostalDeleteManyArgs>(args?: SelectSubset<T, CodigoPostalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodigoPostals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodigoPostals
     * const codigoPostal = await prisma.codigoPostal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodigoPostalUpdateManyArgs>(args: SelectSubset<T, CodigoPostalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodigoPostals and returns the data updated in the database.
     * @param {CodigoPostalUpdateManyAndReturnArgs} args - Arguments to update many CodigoPostals.
     * @example
     * // Update many CodigoPostals
     * const codigoPostal = await prisma.codigoPostal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodigoPostals and only return the `id`
     * const codigoPostalWithIdOnly = await prisma.codigoPostal.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodigoPostalUpdateManyAndReturnArgs>(args: SelectSubset<T, CodigoPostalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodigoPostal.
     * @param {CodigoPostalUpsertArgs} args - Arguments to update or create a CodigoPostal.
     * @example
     * // Update or create a CodigoPostal
     * const codigoPostal = await prisma.codigoPostal.upsert({
     *   create: {
     *     // ... data to create a CodigoPostal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodigoPostal we want to update
     *   }
     * })
     */
    upsert<T extends CodigoPostalUpsertArgs>(args: SelectSubset<T, CodigoPostalUpsertArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodigoPostals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalCountArgs} args - Arguments to filter CodigoPostals to count.
     * @example
     * // Count the number of CodigoPostals
     * const count = await prisma.codigoPostal.count({
     *   where: {
     *     // ... the filter for the CodigoPostals we want to count
     *   }
     * })
    **/
    count<T extends CodigoPostalCountArgs>(
      args?: Subset<T, CodigoPostalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodigoPostalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodigoPostal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodigoPostalAggregateArgs>(args: Subset<T, CodigoPostalAggregateArgs>): Prisma.PrismaPromise<GetCodigoPostalAggregateType<T>>

    /**
     * Group by CodigoPostal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoPostalGroupByArgs} args - Group by arguments.
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
      T extends CodigoPostalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodigoPostalGroupByArgs['orderBy'] }
        : { orderBy?: CodigoPostalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodigoPostalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodigoPostalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodigoPostal model
   */
  readonly fields: CodigoPostalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodigoPostal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodigoPostalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends PaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaisDefaultArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direcciones<T extends CodigoPostal$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, CodigoPostal$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CodigoPostal model
   */
  interface CodigoPostalFieldRefs {
    readonly id: FieldRef<"CodigoPostal", 'Int'>
    readonly provincia: FieldRef<"CodigoPostal", 'String'>
    readonly ciudad: FieldRef<"CodigoPostal", 'String'>
    readonly cp: FieldRef<"CodigoPostal", 'String'>
    readonly id_pais: FieldRef<"CodigoPostal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CodigoPostal findUnique
   */
  export type CodigoPostalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter, which CodigoPostal to fetch.
     */
    where: CodigoPostalWhereUniqueInput
  }

  /**
   * CodigoPostal findUniqueOrThrow
   */
  export type CodigoPostalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter, which CodigoPostal to fetch.
     */
    where: CodigoPostalWhereUniqueInput
  }

  /**
   * CodigoPostal findFirst
   */
  export type CodigoPostalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter, which CodigoPostal to fetch.
     */
    where?: CodigoPostalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoPostals to fetch.
     */
    orderBy?: CodigoPostalOrderByWithRelationInput | CodigoPostalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodigoPostals.
     */
    cursor?: CodigoPostalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoPostals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoPostals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodigoPostals.
     */
    distinct?: CodigoPostalScalarFieldEnum | CodigoPostalScalarFieldEnum[]
  }

  /**
   * CodigoPostal findFirstOrThrow
   */
  export type CodigoPostalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter, which CodigoPostal to fetch.
     */
    where?: CodigoPostalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoPostals to fetch.
     */
    orderBy?: CodigoPostalOrderByWithRelationInput | CodigoPostalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodigoPostals.
     */
    cursor?: CodigoPostalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoPostals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoPostals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodigoPostals.
     */
    distinct?: CodigoPostalScalarFieldEnum | CodigoPostalScalarFieldEnum[]
  }

  /**
   * CodigoPostal findMany
   */
  export type CodigoPostalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter, which CodigoPostals to fetch.
     */
    where?: CodigoPostalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoPostals to fetch.
     */
    orderBy?: CodigoPostalOrderByWithRelationInput | CodigoPostalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodigoPostals.
     */
    cursor?: CodigoPostalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoPostals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoPostals.
     */
    skip?: number
    distinct?: CodigoPostalScalarFieldEnum | CodigoPostalScalarFieldEnum[]
  }

  /**
   * CodigoPostal create
   */
  export type CodigoPostalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * The data needed to create a CodigoPostal.
     */
    data: XOR<CodigoPostalCreateInput, CodigoPostalUncheckedCreateInput>
  }

  /**
   * CodigoPostal createMany
   */
  export type CodigoPostalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodigoPostals.
     */
    data: CodigoPostalCreateManyInput | CodigoPostalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodigoPostal createManyAndReturn
   */
  export type CodigoPostalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * The data used to create many CodigoPostals.
     */
    data: CodigoPostalCreateManyInput | CodigoPostalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodigoPostal update
   */
  export type CodigoPostalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * The data needed to update a CodigoPostal.
     */
    data: XOR<CodigoPostalUpdateInput, CodigoPostalUncheckedUpdateInput>
    /**
     * Choose, which CodigoPostal to update.
     */
    where: CodigoPostalWhereUniqueInput
  }

  /**
   * CodigoPostal updateMany
   */
  export type CodigoPostalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodigoPostals.
     */
    data: XOR<CodigoPostalUpdateManyMutationInput, CodigoPostalUncheckedUpdateManyInput>
    /**
     * Filter which CodigoPostals to update
     */
    where?: CodigoPostalWhereInput
    /**
     * Limit how many CodigoPostals to update.
     */
    limit?: number
  }

  /**
   * CodigoPostal updateManyAndReturn
   */
  export type CodigoPostalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * The data used to update CodigoPostals.
     */
    data: XOR<CodigoPostalUpdateManyMutationInput, CodigoPostalUncheckedUpdateManyInput>
    /**
     * Filter which CodigoPostals to update
     */
    where?: CodigoPostalWhereInput
    /**
     * Limit how many CodigoPostals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodigoPostal upsert
   */
  export type CodigoPostalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * The filter to search for the CodigoPostal to update in case it exists.
     */
    where: CodigoPostalWhereUniqueInput
    /**
     * In case the CodigoPostal found by the `where` argument doesn't exist, create a new CodigoPostal with this data.
     */
    create: XOR<CodigoPostalCreateInput, CodigoPostalUncheckedCreateInput>
    /**
     * In case the CodigoPostal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodigoPostalUpdateInput, CodigoPostalUncheckedUpdateInput>
  }

  /**
   * CodigoPostal delete
   */
  export type CodigoPostalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
    /**
     * Filter which CodigoPostal to delete.
     */
    where: CodigoPostalWhereUniqueInput
  }

  /**
   * CodigoPostal deleteMany
   */
  export type CodigoPostalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodigoPostals to delete
     */
    where?: CodigoPostalWhereInput
    /**
     * Limit how many CodigoPostals to delete.
     */
    limit?: number
  }

  /**
   * CodigoPostal.direcciones
   */
  export type CodigoPostal$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * CodigoPostal without action
   */
  export type CodigoPostalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoPostal
     */
    select?: CodigoPostalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoPostal
     */
    omit?: CodigoPostalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoPostalInclude<ExtArgs> | null
  }


  /**
   * Model TipoVia
   */

  export type AggregateTipoVia = {
    _count: TipoViaCountAggregateOutputType | null
    _avg: TipoViaAvgAggregateOutputType | null
    _sum: TipoViaSumAggregateOutputType | null
    _min: TipoViaMinAggregateOutputType | null
    _max: TipoViaMaxAggregateOutputType | null
  }

  export type TipoViaAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoViaSumAggregateOutputType = {
    id: number | null
  }

  export type TipoViaMinAggregateOutputType = {
    id: number | null
    tipo_via: string | null
  }

  export type TipoViaMaxAggregateOutputType = {
    id: number | null
    tipo_via: string | null
  }

  export type TipoViaCountAggregateOutputType = {
    id: number
    tipo_via: number
    _all: number
  }


  export type TipoViaAvgAggregateInputType = {
    id?: true
  }

  export type TipoViaSumAggregateInputType = {
    id?: true
  }

  export type TipoViaMinAggregateInputType = {
    id?: true
    tipo_via?: true
  }

  export type TipoViaMaxAggregateInputType = {
    id?: true
    tipo_via?: true
  }

  export type TipoViaCountAggregateInputType = {
    id?: true
    tipo_via?: true
    _all?: true
  }

  export type TipoViaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVia to aggregate.
     */
    where?: TipoViaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVias to fetch.
     */
    orderBy?: TipoViaOrderByWithRelationInput | TipoViaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoViaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoVias
    **/
    _count?: true | TipoViaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoViaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoViaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoViaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoViaMaxAggregateInputType
  }

  export type GetTipoViaAggregateType<T extends TipoViaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoVia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoVia[P]>
      : GetScalarType<T[P], AggregateTipoVia[P]>
  }




  export type TipoViaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoViaWhereInput
    orderBy?: TipoViaOrderByWithAggregationInput | TipoViaOrderByWithAggregationInput[]
    by: TipoViaScalarFieldEnum[] | TipoViaScalarFieldEnum
    having?: TipoViaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoViaCountAggregateInputType | true
    _avg?: TipoViaAvgAggregateInputType
    _sum?: TipoViaSumAggregateInputType
    _min?: TipoViaMinAggregateInputType
    _max?: TipoViaMaxAggregateInputType
  }

  export type TipoViaGroupByOutputType = {
    id: number
    tipo_via: string
    _count: TipoViaCountAggregateOutputType | null
    _avg: TipoViaAvgAggregateOutputType | null
    _sum: TipoViaSumAggregateOutputType | null
    _min: TipoViaMinAggregateOutputType | null
    _max: TipoViaMaxAggregateOutputType | null
  }

  type GetTipoViaGroupByPayload<T extends TipoViaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoViaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoViaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoViaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoViaGroupByOutputType[P]>
        }
      >
    >


  export type TipoViaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_via?: boolean
    direcciones?: boolean | TipoVia$direccionesArgs<ExtArgs>
    _count?: boolean | TipoViaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoVia"]>

  export type TipoViaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_via?: boolean
  }, ExtArgs["result"]["tipoVia"]>

  export type TipoViaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_via?: boolean
  }, ExtArgs["result"]["tipoVia"]>

  export type TipoViaSelectScalar = {
    id?: boolean
    tipo_via?: boolean
  }

  export type TipoViaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_via", ExtArgs["result"]["tipoVia"]>
  export type TipoViaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | TipoVia$direccionesArgs<ExtArgs>
    _count?: boolean | TipoViaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoViaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoViaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoViaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoVia"
    objects: {
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_via: string
    }, ExtArgs["result"]["tipoVia"]>
    composites: {}
  }

  type TipoViaGetPayload<S extends boolean | null | undefined | TipoViaDefaultArgs> = $Result.GetResult<Prisma.$TipoViaPayload, S>

  type TipoViaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoViaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoViaCountAggregateInputType | true
    }

  export interface TipoViaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoVia'], meta: { name: 'TipoVia' } }
    /**
     * Find zero or one TipoVia that matches the filter.
     * @param {TipoViaFindUniqueArgs} args - Arguments to find a TipoVia
     * @example
     * // Get one TipoVia
     * const tipoVia = await prisma.tipoVia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoViaFindUniqueArgs>(args: SelectSubset<T, TipoViaFindUniqueArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoVia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoViaFindUniqueOrThrowArgs} args - Arguments to find a TipoVia
     * @example
     * // Get one TipoVia
     * const tipoVia = await prisma.tipoVia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoViaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoViaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaFindFirstArgs} args - Arguments to find a TipoVia
     * @example
     * // Get one TipoVia
     * const tipoVia = await prisma.tipoVia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoViaFindFirstArgs>(args?: SelectSubset<T, TipoViaFindFirstArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaFindFirstOrThrowArgs} args - Arguments to find a TipoVia
     * @example
     * // Get one TipoVia
     * const tipoVia = await prisma.tipoVia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoViaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoViaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoVias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoVias
     * const tipoVias = await prisma.tipoVia.findMany()
     * 
     * // Get first 10 TipoVias
     * const tipoVias = await prisma.tipoVia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoViaWithIdOnly = await prisma.tipoVia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoViaFindManyArgs>(args?: SelectSubset<T, TipoViaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoVia.
     * @param {TipoViaCreateArgs} args - Arguments to create a TipoVia.
     * @example
     * // Create one TipoVia
     * const TipoVia = await prisma.tipoVia.create({
     *   data: {
     *     // ... data to create a TipoVia
     *   }
     * })
     * 
     */
    create<T extends TipoViaCreateArgs>(args: SelectSubset<T, TipoViaCreateArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoVias.
     * @param {TipoViaCreateManyArgs} args - Arguments to create many TipoVias.
     * @example
     * // Create many TipoVias
     * const tipoVia = await prisma.tipoVia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoViaCreateManyArgs>(args?: SelectSubset<T, TipoViaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoVias and returns the data saved in the database.
     * @param {TipoViaCreateManyAndReturnArgs} args - Arguments to create many TipoVias.
     * @example
     * // Create many TipoVias
     * const tipoVia = await prisma.tipoVia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoVias and only return the `id`
     * const tipoViaWithIdOnly = await prisma.tipoVia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoViaCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoViaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoVia.
     * @param {TipoViaDeleteArgs} args - Arguments to delete one TipoVia.
     * @example
     * // Delete one TipoVia
     * const TipoVia = await prisma.tipoVia.delete({
     *   where: {
     *     // ... filter to delete one TipoVia
     *   }
     * })
     * 
     */
    delete<T extends TipoViaDeleteArgs>(args: SelectSubset<T, TipoViaDeleteArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoVia.
     * @param {TipoViaUpdateArgs} args - Arguments to update one TipoVia.
     * @example
     * // Update one TipoVia
     * const tipoVia = await prisma.tipoVia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoViaUpdateArgs>(args: SelectSubset<T, TipoViaUpdateArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoVias.
     * @param {TipoViaDeleteManyArgs} args - Arguments to filter TipoVias to delete.
     * @example
     * // Delete a few TipoVias
     * const { count } = await prisma.tipoVia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoViaDeleteManyArgs>(args?: SelectSubset<T, TipoViaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoVias
     * const tipoVia = await prisma.tipoVia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoViaUpdateManyArgs>(args: SelectSubset<T, TipoViaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVias and returns the data updated in the database.
     * @param {TipoViaUpdateManyAndReturnArgs} args - Arguments to update many TipoVias.
     * @example
     * // Update many TipoVias
     * const tipoVia = await prisma.tipoVia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoVias and only return the `id`
     * const tipoViaWithIdOnly = await prisma.tipoVia.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoViaUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoViaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoVia.
     * @param {TipoViaUpsertArgs} args - Arguments to update or create a TipoVia.
     * @example
     * // Update or create a TipoVia
     * const tipoVia = await prisma.tipoVia.upsert({
     *   create: {
     *     // ... data to create a TipoVia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoVia we want to update
     *   }
     * })
     */
    upsert<T extends TipoViaUpsertArgs>(args: SelectSubset<T, TipoViaUpsertArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoVias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaCountArgs} args - Arguments to filter TipoVias to count.
     * @example
     * // Count the number of TipoVias
     * const count = await prisma.tipoVia.count({
     *   where: {
     *     // ... the filter for the TipoVias we want to count
     *   }
     * })
    **/
    count<T extends TipoViaCountArgs>(
      args?: Subset<T, TipoViaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoViaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoVia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoViaAggregateArgs>(args: Subset<T, TipoViaAggregateArgs>): Prisma.PrismaPromise<GetTipoViaAggregateType<T>>

    /**
     * Group by TipoVia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoViaGroupByArgs} args - Group by arguments.
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
      T extends TipoViaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoViaGroupByArgs['orderBy'] }
        : { orderBy?: TipoViaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoViaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoViaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoVia model
   */
  readonly fields: TipoViaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoVia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoViaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direcciones<T extends TipoVia$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, TipoVia$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoVia model
   */
  interface TipoViaFieldRefs {
    readonly id: FieldRef<"TipoVia", 'Int'>
    readonly tipo_via: FieldRef<"TipoVia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoVia findUnique
   */
  export type TipoViaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter, which TipoVia to fetch.
     */
    where: TipoViaWhereUniqueInput
  }

  /**
   * TipoVia findUniqueOrThrow
   */
  export type TipoViaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter, which TipoVia to fetch.
     */
    where: TipoViaWhereUniqueInput
  }

  /**
   * TipoVia findFirst
   */
  export type TipoViaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter, which TipoVia to fetch.
     */
    where?: TipoViaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVias to fetch.
     */
    orderBy?: TipoViaOrderByWithRelationInput | TipoViaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVias.
     */
    cursor?: TipoViaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVias.
     */
    distinct?: TipoViaScalarFieldEnum | TipoViaScalarFieldEnum[]
  }

  /**
   * TipoVia findFirstOrThrow
   */
  export type TipoViaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter, which TipoVia to fetch.
     */
    where?: TipoViaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVias to fetch.
     */
    orderBy?: TipoViaOrderByWithRelationInput | TipoViaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVias.
     */
    cursor?: TipoViaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVias.
     */
    distinct?: TipoViaScalarFieldEnum | TipoViaScalarFieldEnum[]
  }

  /**
   * TipoVia findMany
   */
  export type TipoViaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter, which TipoVias to fetch.
     */
    where?: TipoViaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVias to fetch.
     */
    orderBy?: TipoViaOrderByWithRelationInput | TipoViaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoVias.
     */
    cursor?: TipoViaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVias.
     */
    skip?: number
    distinct?: TipoViaScalarFieldEnum | TipoViaScalarFieldEnum[]
  }

  /**
   * TipoVia create
   */
  export type TipoViaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoVia.
     */
    data: XOR<TipoViaCreateInput, TipoViaUncheckedCreateInput>
  }

  /**
   * TipoVia createMany
   */
  export type TipoViaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoVias.
     */
    data: TipoViaCreateManyInput | TipoViaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoVia createManyAndReturn
   */
  export type TipoViaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * The data used to create many TipoVias.
     */
    data: TipoViaCreateManyInput | TipoViaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoVia update
   */
  export type TipoViaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoVia.
     */
    data: XOR<TipoViaUpdateInput, TipoViaUncheckedUpdateInput>
    /**
     * Choose, which TipoVia to update.
     */
    where: TipoViaWhereUniqueInput
  }

  /**
   * TipoVia updateMany
   */
  export type TipoViaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoVias.
     */
    data: XOR<TipoViaUpdateManyMutationInput, TipoViaUncheckedUpdateManyInput>
    /**
     * Filter which TipoVias to update
     */
    where?: TipoViaWhereInput
    /**
     * Limit how many TipoVias to update.
     */
    limit?: number
  }

  /**
   * TipoVia updateManyAndReturn
   */
  export type TipoViaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * The data used to update TipoVias.
     */
    data: XOR<TipoViaUpdateManyMutationInput, TipoViaUncheckedUpdateManyInput>
    /**
     * Filter which TipoVias to update
     */
    where?: TipoViaWhereInput
    /**
     * Limit how many TipoVias to update.
     */
    limit?: number
  }

  /**
   * TipoVia upsert
   */
  export type TipoViaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoVia to update in case it exists.
     */
    where: TipoViaWhereUniqueInput
    /**
     * In case the TipoVia found by the `where` argument doesn't exist, create a new TipoVia with this data.
     */
    create: XOR<TipoViaCreateInput, TipoViaUncheckedCreateInput>
    /**
     * In case the TipoVia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoViaUpdateInput, TipoViaUncheckedUpdateInput>
  }

  /**
   * TipoVia delete
   */
  export type TipoViaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
    /**
     * Filter which TipoVia to delete.
     */
    where: TipoViaWhereUniqueInput
  }

  /**
   * TipoVia deleteMany
   */
  export type TipoViaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVias to delete
     */
    where?: TipoViaWhereInput
    /**
     * Limit how many TipoVias to delete.
     */
    limit?: number
  }

  /**
   * TipoVia.direcciones
   */
  export type TipoVia$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * TipoVia without action
   */
  export type TipoViaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVia
     */
    select?: TipoViaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVia
     */
    omit?: TipoViaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoViaInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    activo: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    activo: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    password: string | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    rol: string | null
    activo: number | null
    fecha_creacion: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    password: string | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    rol: string | null
    activo: number | null
    fecha_creacion: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    usuario: number
    password: number
    nombres: number
    apellido1re: number
    apellido2do: number
    rol: number
    activo: number
    fecha_creacion: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    activo?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    activo?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    usuario?: true
    password?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    rol?: true
    activo?: true
    fecha_creacion?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    usuario?: true
    password?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    rol?: true
    activo?: true
    fecha_creacion?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    usuario?: true
    password?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    rol?: true
    activo?: true
    fecha_creacion?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol: string
    activo: number
    fecha_creacion: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    password?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    rol?: boolean
    activo?: boolean
    fecha_creacion?: boolean
    socios?: boolean | Admin$sociosArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    password?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    rol?: boolean
    activo?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    password?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    rol?: boolean
    activo?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    usuario?: boolean
    password?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    rol?: boolean
    activo?: boolean
    fecha_creacion?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "password" | "nombres" | "apellido1re" | "apellido2do" | "rol" | "activo" | "fecha_creacion", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | Admin$sociosArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      socios: Prisma.$SocioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      password: string
      nombres: string
      apellido1re: string
      apellido2do: string
      rol: string
      activo: number
      fecha_creacion: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socios<T extends Admin$sociosArgs<ExtArgs> = {}>(args?: Subset<T, Admin$sociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly usuario: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly nombres: FieldRef<"Admin", 'String'>
    readonly apellido1re: FieldRef<"Admin", 'String'>
    readonly apellido2do: FieldRef<"Admin", 'String'>
    readonly rol: FieldRef<"Admin", 'String'>
    readonly activo: FieldRef<"Admin", 'Int'>
    readonly fecha_creacion: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.socios
   */
  export type Admin$sociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    where?: SocioWhereInput
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    cursor?: SocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Socio
   */

  export type AggregateSocio = {
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  export type SocioAvgAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_admin: number | null
    miembroprincipal: number | null
  }

  export type SocioSumAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_admin: number | null
    miembroprincipal: number | null
  }

  export type SocioMinAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_admin: number | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    miembroprincipal: number | null
  }

  export type SocioMaxAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_admin: number | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    miembroprincipal: number | null
  }

  export type SocioCountAggregateOutputType = {
    id: number
    id_socio: number
    id_admin: number
    nombres: number
    apellido1re: number
    apellido2do: number
    miembroprincipal: number
    _all: number
  }


  export type SocioAvgAggregateInputType = {
    id?: true
    id_socio?: true
    id_admin?: true
    miembroprincipal?: true
  }

  export type SocioSumAggregateInputType = {
    id?: true
    id_socio?: true
    id_admin?: true
    miembroprincipal?: true
  }

  export type SocioMinAggregateInputType = {
    id?: true
    id_socio?: true
    id_admin?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    miembroprincipal?: true
  }

  export type SocioMaxAggregateInputType = {
    id?: true
    id_socio?: true
    id_admin?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    miembroprincipal?: true
  }

  export type SocioCountAggregateInputType = {
    id?: true
    id_socio?: true
    id_admin?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    miembroprincipal?: true
    _all?: true
  }

  export type SocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socio to aggregate.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socios
    **/
    _count?: true | SocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocioMaxAggregateInputType
  }

  export type GetSocioAggregateType<T extends SocioAggregateArgs> = {
        [P in keyof T & keyof AggregateSocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocio[P]>
      : GetScalarType<T[P], AggregateSocio[P]>
  }




  export type SocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocioWhereInput
    orderBy?: SocioOrderByWithAggregationInput | SocioOrderByWithAggregationInput[]
    by: SocioScalarFieldEnum[] | SocioScalarFieldEnum
    having?: SocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocioCountAggregateInputType | true
    _avg?: SocioAvgAggregateInputType
    _sum?: SocioSumAggregateInputType
    _min?: SocioMinAggregateInputType
    _max?: SocioMaxAggregateInputType
  }

  export type SocioGroupByOutputType = {
    id: number
    id_socio: number
    id_admin: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal: number
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  type GetSocioGroupByPayload<T extends SocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocioGroupByOutputType[P]>
            : GetScalarType<T[P], SocioGroupByOutputType[P]>
        }
      >
    >


  export type SocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_admin?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    miembroprincipal?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    asociados?: boolean | Socio$asociadosArgs<ExtArgs>
    direcciones?: boolean | Socio$direccionesArgs<ExtArgs>
    _count?: boolean | SocioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_admin?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    miembroprincipal?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_admin?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    miembroprincipal?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectScalar = {
    id?: boolean
    id_socio?: boolean
    id_admin?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    miembroprincipal?: boolean
  }

  export type SocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_socio" | "id_admin" | "nombres" | "apellido1re" | "apellido2do" | "miembroprincipal", ExtArgs["result"]["socio"]>
  export type SocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    asociados?: boolean | Socio$asociadosArgs<ExtArgs>
    direcciones?: boolean | Socio$direccionesArgs<ExtArgs>
    _count?: boolean | SocioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type SocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $SocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socio"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      asociados: Prisma.$AsociadoPayload<ExtArgs>[]
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_socio: number
      id_admin: number
      nombres: string
      apellido1re: string
      apellido2do: string
      miembroprincipal: number
    }, ExtArgs["result"]["socio"]>
    composites: {}
  }

  type SocioGetPayload<S extends boolean | null | undefined | SocioDefaultArgs> = $Result.GetResult<Prisma.$SocioPayload, S>

  type SocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocioCountAggregateInputType | true
    }

  export interface SocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socio'], meta: { name: 'Socio' } }
    /**
     * Find zero or one Socio that matches the filter.
     * @param {SocioFindUniqueArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocioFindUniqueArgs>(args: SelectSubset<T, SocioFindUniqueArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocioFindUniqueOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocioFindUniqueOrThrowArgs>(args: SelectSubset<T, SocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocioFindFirstArgs>(args?: SelectSubset<T, SocioFindFirstArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocioFindFirstOrThrowArgs>(args?: SelectSubset<T, SocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socios
     * const socios = await prisma.socio.findMany()
     * 
     * // Get first 10 Socios
     * const socios = await prisma.socio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socioWithIdOnly = await prisma.socio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocioFindManyArgs>(args?: SelectSubset<T, SocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socio.
     * @param {SocioCreateArgs} args - Arguments to create a Socio.
     * @example
     * // Create one Socio
     * const Socio = await prisma.socio.create({
     *   data: {
     *     // ... data to create a Socio
     *   }
     * })
     * 
     */
    create<T extends SocioCreateArgs>(args: SelectSubset<T, SocioCreateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socios.
     * @param {SocioCreateManyArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocioCreateManyArgs>(args?: SelectSubset<T, SocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socios and returns the data saved in the database.
     * @param {SocioCreateManyAndReturnArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocioCreateManyAndReturnArgs>(args?: SelectSubset<T, SocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Socio.
     * @param {SocioDeleteArgs} args - Arguments to delete one Socio.
     * @example
     * // Delete one Socio
     * const Socio = await prisma.socio.delete({
     *   where: {
     *     // ... filter to delete one Socio
     *   }
     * })
     * 
     */
    delete<T extends SocioDeleteArgs>(args: SelectSubset<T, SocioDeleteArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socio.
     * @param {SocioUpdateArgs} args - Arguments to update one Socio.
     * @example
     * // Update one Socio
     * const socio = await prisma.socio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocioUpdateArgs>(args: SelectSubset<T, SocioUpdateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socios.
     * @param {SocioDeleteManyArgs} args - Arguments to filter Socios to delete.
     * @example
     * // Delete a few Socios
     * const { count } = await prisma.socio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocioDeleteManyArgs>(args?: SelectSubset<T, SocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocioUpdateManyArgs>(args: SelectSubset<T, SocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios and returns the data updated in the database.
     * @param {SocioUpdateManyAndReturnArgs} args - Arguments to update many Socios.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocioUpdateManyAndReturnArgs>(args: SelectSubset<T, SocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Socio.
     * @param {SocioUpsertArgs} args - Arguments to update or create a Socio.
     * @example
     * // Update or create a Socio
     * const socio = await prisma.socio.upsert({
     *   create: {
     *     // ... data to create a Socio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socio we want to update
     *   }
     * })
     */
    upsert<T extends SocioUpsertArgs>(args: SelectSubset<T, SocioUpsertArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioCountArgs} args - Arguments to filter Socios to count.
     * @example
     * // Count the number of Socios
     * const count = await prisma.socio.count({
     *   where: {
     *     // ... the filter for the Socios we want to count
     *   }
     * })
    **/
    count<T extends SocioCountArgs>(
      args?: Subset<T, SocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocioAggregateArgs>(args: Subset<T, SocioAggregateArgs>): Prisma.PrismaPromise<GetSocioAggregateType<T>>

    /**
     * Group by Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioGroupByArgs} args - Group by arguments.
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
      T extends SocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocioGroupByArgs['orderBy'] }
        : { orderBy?: SocioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socio model
   */
  readonly fields: SocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asociados<T extends Socio$asociadosArgs<ExtArgs> = {}>(args?: Subset<T, Socio$asociadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    direcciones<T extends Socio$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Socio$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Socio model
   */
  interface SocioFieldRefs {
    readonly id: FieldRef<"Socio", 'Int'>
    readonly id_socio: FieldRef<"Socio", 'Int'>
    readonly id_admin: FieldRef<"Socio", 'Int'>
    readonly nombres: FieldRef<"Socio", 'String'>
    readonly apellido1re: FieldRef<"Socio", 'String'>
    readonly apellido2do: FieldRef<"Socio", 'String'>
    readonly miembroprincipal: FieldRef<"Socio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Socio findUnique
   */
  export type SocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findUniqueOrThrow
   */
  export type SocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findFirst
   */
  export type SocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findFirstOrThrow
   */
  export type SocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findMany
   */
  export type SocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socios to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio create
   */
  export type SocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to create a Socio.
     */
    data: XOR<SocioCreateInput, SocioUncheckedCreateInput>
  }

  /**
   * Socio createMany
   */
  export type SocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socio createManyAndReturn
   */
  export type SocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio update
   */
  export type SocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to update a Socio.
     */
    data: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
    /**
     * Choose, which Socio to update.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio updateMany
   */
  export type SocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
  }

  /**
   * Socio updateManyAndReturn
   */
  export type SocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio upsert
   */
  export type SocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The filter to search for the Socio to update in case it exists.
     */
    where: SocioWhereUniqueInput
    /**
     * In case the Socio found by the `where` argument doesn't exist, create a new Socio with this data.
     */
    create: XOR<SocioCreateInput, SocioUncheckedCreateInput>
    /**
     * In case the Socio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
  }

  /**
   * Socio delete
   */
  export type SocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter which Socio to delete.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio deleteMany
   */
  export type SocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socios to delete
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to delete.
     */
    limit?: number
  }

  /**
   * Socio.asociados
   */
  export type Socio$asociadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    cursor?: AsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Socio.direcciones
   */
  export type Socio$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Socio without action
   */
  export type SocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
  }


  /**
   * Model Asociado
   */

  export type AggregateAsociado = {
    _count: AsociadoCountAggregateOutputType | null
    _avg: AsociadoAvgAggregateOutputType | null
    _sum: AsociadoSumAggregateOutputType | null
    _min: AsociadoMinAggregateOutputType | null
    _max: AsociadoMaxAggregateOutputType | null
  }

  export type AsociadoAvgAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_asociado: number | null
    nacionalidad: number | null
    pais_nacimiento: number | null
    estado_nacimiento: number | null
    ciudad_nacimiento: number | null
    miembroPrincipal: number | null
    alimentacion1: number | null
  }

  export type AsociadoSumAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_asociado: number | null
    nacionalidad: number | null
    pais_nacimiento: number | null
    estado_nacimiento: number | null
    ciudad_nacimiento: number | null
    miembroPrincipal: number | null
    alimentacion1: number | null
  }

  export type AsociadoMinAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_asociado: number | null
    tipo_documento: string | null
    numero_documento: string | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    fecha_nacimiento: Date | null
    genero: string | null
    nacionalidad: number | null
    pais_nacimiento: number | null
    estado_nacimiento: number | null
    ciudad_nacimiento: number | null
    numero_telefonico: string | null
    ocupacion: string | null
    profesion: string | null
    miembroPrincipal: number | null
    alimentacion1: number | null
  }

  export type AsociadoMaxAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_asociado: number | null
    tipo_documento: string | null
    numero_documento: string | null
    nombres: string | null
    apellido1re: string | null
    apellido2do: string | null
    fecha_nacimiento: Date | null
    genero: string | null
    nacionalidad: number | null
    pais_nacimiento: number | null
    estado_nacimiento: number | null
    ciudad_nacimiento: number | null
    numero_telefonico: string | null
    ocupacion: string | null
    profesion: string | null
    miembroPrincipal: number | null
    alimentacion1: number | null
  }

  export type AsociadoCountAggregateOutputType = {
    id: number
    id_socio: number
    id_asociado: number
    tipo_documento: number
    numero_documento: number
    nombres: number
    apellido1re: number
    apellido2do: number
    fecha_nacimiento: number
    genero: number
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento: number
    ciudad_nacimiento: number
    numero_telefonico: number
    ocupacion: number
    profesion: number
    miembroPrincipal: number
    alimentacion1: number
    _all: number
  }


  export type AsociadoAvgAggregateInputType = {
    id?: true
    id_socio?: true
    id_asociado?: true
    nacionalidad?: true
    pais_nacimiento?: true
    estado_nacimiento?: true
    ciudad_nacimiento?: true
    miembroPrincipal?: true
    alimentacion1?: true
  }

  export type AsociadoSumAggregateInputType = {
    id?: true
    id_socio?: true
    id_asociado?: true
    nacionalidad?: true
    pais_nacimiento?: true
    estado_nacimiento?: true
    ciudad_nacimiento?: true
    miembroPrincipal?: true
    alimentacion1?: true
  }

  export type AsociadoMinAggregateInputType = {
    id?: true
    id_socio?: true
    id_asociado?: true
    tipo_documento?: true
    numero_documento?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    fecha_nacimiento?: true
    genero?: true
    nacionalidad?: true
    pais_nacimiento?: true
    estado_nacimiento?: true
    ciudad_nacimiento?: true
    numero_telefonico?: true
    ocupacion?: true
    profesion?: true
    miembroPrincipal?: true
    alimentacion1?: true
  }

  export type AsociadoMaxAggregateInputType = {
    id?: true
    id_socio?: true
    id_asociado?: true
    tipo_documento?: true
    numero_documento?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    fecha_nacimiento?: true
    genero?: true
    nacionalidad?: true
    pais_nacimiento?: true
    estado_nacimiento?: true
    ciudad_nacimiento?: true
    numero_telefonico?: true
    ocupacion?: true
    profesion?: true
    miembroPrincipal?: true
    alimentacion1?: true
  }

  export type AsociadoCountAggregateInputType = {
    id?: true
    id_socio?: true
    id_asociado?: true
    tipo_documento?: true
    numero_documento?: true
    nombres?: true
    apellido1re?: true
    apellido2do?: true
    fecha_nacimiento?: true
    genero?: true
    nacionalidad?: true
    pais_nacimiento?: true
    estado_nacimiento?: true
    ciudad_nacimiento?: true
    numero_telefonico?: true
    ocupacion?: true
    profesion?: true
    miembroPrincipal?: true
    alimentacion1?: true
    _all?: true
  }

  export type AsociadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asociado to aggregate.
     */
    where?: AsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asociados to fetch.
     */
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asociados
    **/
    _count?: true | AsociadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsociadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsociadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsociadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsociadoMaxAggregateInputType
  }

  export type GetAsociadoAggregateType<T extends AsociadoAggregateArgs> = {
        [P in keyof T & keyof AggregateAsociado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsociado[P]>
      : GetScalarType<T[P], AggregateAsociado[P]>
  }




  export type AsociadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsociadoWhereInput
    orderBy?: AsociadoOrderByWithAggregationInput | AsociadoOrderByWithAggregationInput[]
    by: AsociadoScalarFieldEnum[] | AsociadoScalarFieldEnum
    having?: AsociadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsociadoCountAggregateInputType | true
    _avg?: AsociadoAvgAggregateInputType
    _sum?: AsociadoSumAggregateInputType
    _min?: AsociadoMinAggregateInputType
    _max?: AsociadoMaxAggregateInputType
  }

  export type AsociadoGroupByOutputType = {
    id: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento: number | null
    ciudad_nacimiento: number | null
    numero_telefonico: string | null
    ocupacion: string | null
    profesion: string | null
    miembroPrincipal: number
    alimentacion1: number
    _count: AsociadoCountAggregateOutputType | null
    _avg: AsociadoAvgAggregateOutputType | null
    _sum: AsociadoSumAggregateOutputType | null
    _min: AsociadoMinAggregateOutputType | null
    _max: AsociadoMaxAggregateOutputType | null
  }

  type GetAsociadoGroupByPayload<T extends AsociadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsociadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsociadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsociadoGroupByOutputType[P]>
            : GetScalarType<T[P], AsociadoGroupByOutputType[P]>
        }
      >
    >


  export type AsociadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_asociado?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    nacionalidad?: boolean
    pais_nacimiento?: boolean
    estado_nacimiento?: boolean
    ciudad_nacimiento?: boolean
    numero_telefonico?: boolean
    ocupacion?: boolean
    profesion?: boolean
    miembroPrincipal?: boolean
    alimentacion1?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }, ExtArgs["result"]["asociado"]>

  export type AsociadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_asociado?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    nacionalidad?: boolean
    pais_nacimiento?: boolean
    estado_nacimiento?: boolean
    ciudad_nacimiento?: boolean
    numero_telefonico?: boolean
    ocupacion?: boolean
    profesion?: boolean
    miembroPrincipal?: boolean
    alimentacion1?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }, ExtArgs["result"]["asociado"]>

  export type AsociadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_asociado?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    nacionalidad?: boolean
    pais_nacimiento?: boolean
    estado_nacimiento?: boolean
    ciudad_nacimiento?: boolean
    numero_telefonico?: boolean
    ocupacion?: boolean
    profesion?: boolean
    miembroPrincipal?: boolean
    alimentacion1?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }, ExtArgs["result"]["asociado"]>

  export type AsociadoSelectScalar = {
    id?: boolean
    id_socio?: boolean
    id_asociado?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombres?: boolean
    apellido1re?: boolean
    apellido2do?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    nacionalidad?: boolean
    pais_nacimiento?: boolean
    estado_nacimiento?: boolean
    ciudad_nacimiento?: boolean
    numero_telefonico?: boolean
    ocupacion?: boolean
    profesion?: boolean
    miembroPrincipal?: boolean
    alimentacion1?: boolean
  }

  export type AsociadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_socio" | "id_asociado" | "tipo_documento" | "numero_documento" | "nombres" | "apellido1re" | "apellido2do" | "fecha_nacimiento" | "genero" | "nacionalidad" | "pais_nacimiento" | "estado_nacimiento" | "ciudad_nacimiento" | "numero_telefonico" | "ocupacion" | "profesion" | "miembroPrincipal" | "alimentacion1", ExtArgs["result"]["asociado"]>
  export type AsociadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }
  export type AsociadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }
  export type AsociadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    paisNacionalidad?: boolean | PaisDefaultArgs<ExtArgs>
    paisNacimiento?: boolean | PaisDefaultArgs<ExtArgs>
    estadoNacimiento?: boolean | Asociado$estadoNacimientoArgs<ExtArgs>
    ciudadNacimiento?: boolean | Asociado$ciudadNacimientoArgs<ExtArgs>
  }

  export type $AsociadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asociado"
    objects: {
      socio: Prisma.$SocioPayload<ExtArgs>
      paisNacionalidad: Prisma.$PaisPayload<ExtArgs>
      paisNacimiento: Prisma.$PaisPayload<ExtArgs>
      estadoNacimiento: Prisma.$EstadoPayload<ExtArgs> | null
      ciudadNacimiento: Prisma.$CiudadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_socio: number
      id_asociado: number
      tipo_documento: string
      numero_documento: string
      nombres: string
      apellido1re: string
      apellido2do: string
      fecha_nacimiento: Date
      genero: string
      nacionalidad: number
      pais_nacimiento: number
      estado_nacimiento: number | null
      ciudad_nacimiento: number | null
      numero_telefonico: string | null
      ocupacion: string | null
      profesion: string | null
      miembroPrincipal: number
      alimentacion1: number
    }, ExtArgs["result"]["asociado"]>
    composites: {}
  }

  type AsociadoGetPayload<S extends boolean | null | undefined | AsociadoDefaultArgs> = $Result.GetResult<Prisma.$AsociadoPayload, S>

  type AsociadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsociadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsociadoCountAggregateInputType | true
    }

  export interface AsociadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asociado'], meta: { name: 'Asociado' } }
    /**
     * Find zero or one Asociado that matches the filter.
     * @param {AsociadoFindUniqueArgs} args - Arguments to find a Asociado
     * @example
     * // Get one Asociado
     * const asociado = await prisma.asociado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsociadoFindUniqueArgs>(args: SelectSubset<T, AsociadoFindUniqueArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asociado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsociadoFindUniqueOrThrowArgs} args - Arguments to find a Asociado
     * @example
     * // Get one Asociado
     * const asociado = await prisma.asociado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsociadoFindUniqueOrThrowArgs>(args: SelectSubset<T, AsociadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asociado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoFindFirstArgs} args - Arguments to find a Asociado
     * @example
     * // Get one Asociado
     * const asociado = await prisma.asociado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsociadoFindFirstArgs>(args?: SelectSubset<T, AsociadoFindFirstArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asociado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoFindFirstOrThrowArgs} args - Arguments to find a Asociado
     * @example
     * // Get one Asociado
     * const asociado = await prisma.asociado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsociadoFindFirstOrThrowArgs>(args?: SelectSubset<T, AsociadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asociados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asociados
     * const asociados = await prisma.asociado.findMany()
     * 
     * // Get first 10 Asociados
     * const asociados = await prisma.asociado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asociadoWithIdOnly = await prisma.asociado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsociadoFindManyArgs>(args?: SelectSubset<T, AsociadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asociado.
     * @param {AsociadoCreateArgs} args - Arguments to create a Asociado.
     * @example
     * // Create one Asociado
     * const Asociado = await prisma.asociado.create({
     *   data: {
     *     // ... data to create a Asociado
     *   }
     * })
     * 
     */
    create<T extends AsociadoCreateArgs>(args: SelectSubset<T, AsociadoCreateArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asociados.
     * @param {AsociadoCreateManyArgs} args - Arguments to create many Asociados.
     * @example
     * // Create many Asociados
     * const asociado = await prisma.asociado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsociadoCreateManyArgs>(args?: SelectSubset<T, AsociadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asociados and returns the data saved in the database.
     * @param {AsociadoCreateManyAndReturnArgs} args - Arguments to create many Asociados.
     * @example
     * // Create many Asociados
     * const asociado = await prisma.asociado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asociados and only return the `id`
     * const asociadoWithIdOnly = await prisma.asociado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsociadoCreateManyAndReturnArgs>(args?: SelectSubset<T, AsociadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asociado.
     * @param {AsociadoDeleteArgs} args - Arguments to delete one Asociado.
     * @example
     * // Delete one Asociado
     * const Asociado = await prisma.asociado.delete({
     *   where: {
     *     // ... filter to delete one Asociado
     *   }
     * })
     * 
     */
    delete<T extends AsociadoDeleteArgs>(args: SelectSubset<T, AsociadoDeleteArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asociado.
     * @param {AsociadoUpdateArgs} args - Arguments to update one Asociado.
     * @example
     * // Update one Asociado
     * const asociado = await prisma.asociado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsociadoUpdateArgs>(args: SelectSubset<T, AsociadoUpdateArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asociados.
     * @param {AsociadoDeleteManyArgs} args - Arguments to filter Asociados to delete.
     * @example
     * // Delete a few Asociados
     * const { count } = await prisma.asociado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsociadoDeleteManyArgs>(args?: SelectSubset<T, AsociadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asociados
     * const asociado = await prisma.asociado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsociadoUpdateManyArgs>(args: SelectSubset<T, AsociadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asociados and returns the data updated in the database.
     * @param {AsociadoUpdateManyAndReturnArgs} args - Arguments to update many Asociados.
     * @example
     * // Update many Asociados
     * const asociado = await prisma.asociado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asociados and only return the `id`
     * const asociadoWithIdOnly = await prisma.asociado.updateManyAndReturn({
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
    updateManyAndReturn<T extends AsociadoUpdateManyAndReturnArgs>(args: SelectSubset<T, AsociadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asociado.
     * @param {AsociadoUpsertArgs} args - Arguments to update or create a Asociado.
     * @example
     * // Update or create a Asociado
     * const asociado = await prisma.asociado.upsert({
     *   create: {
     *     // ... data to create a Asociado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asociado we want to update
     *   }
     * })
     */
    upsert<T extends AsociadoUpsertArgs>(args: SelectSubset<T, AsociadoUpsertArgs<ExtArgs>>): Prisma__AsociadoClient<$Result.GetResult<Prisma.$AsociadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoCountArgs} args - Arguments to filter Asociados to count.
     * @example
     * // Count the number of Asociados
     * const count = await prisma.asociado.count({
     *   where: {
     *     // ... the filter for the Asociados we want to count
     *   }
     * })
    **/
    count<T extends AsociadoCountArgs>(
      args?: Subset<T, AsociadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsociadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsociadoAggregateArgs>(args: Subset<T, AsociadoAggregateArgs>): Prisma.PrismaPromise<GetAsociadoAggregateType<T>>

    /**
     * Group by Asociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsociadoGroupByArgs} args - Group by arguments.
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
      T extends AsociadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsociadoGroupByArgs['orderBy'] }
        : { orderBy?: AsociadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsociadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsociadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asociado model
   */
  readonly fields: AsociadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asociado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsociadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socio<T extends SocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocioDefaultArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paisNacionalidad<T extends PaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaisDefaultArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paisNacimiento<T extends PaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaisDefaultArgs<ExtArgs>>): Prisma__PaisClient<$Result.GetResult<Prisma.$PaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estadoNacimiento<T extends Asociado$estadoNacimientoArgs<ExtArgs> = {}>(args?: Subset<T, Asociado$estadoNacimientoArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ciudadNacimiento<T extends Asociado$ciudadNacimientoArgs<ExtArgs> = {}>(args?: Subset<T, Asociado$ciudadNacimientoArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asociado model
   */
  interface AsociadoFieldRefs {
    readonly id: FieldRef<"Asociado", 'Int'>
    readonly id_socio: FieldRef<"Asociado", 'Int'>
    readonly id_asociado: FieldRef<"Asociado", 'Int'>
    readonly tipo_documento: FieldRef<"Asociado", 'String'>
    readonly numero_documento: FieldRef<"Asociado", 'String'>
    readonly nombres: FieldRef<"Asociado", 'String'>
    readonly apellido1re: FieldRef<"Asociado", 'String'>
    readonly apellido2do: FieldRef<"Asociado", 'String'>
    readonly fecha_nacimiento: FieldRef<"Asociado", 'DateTime'>
    readonly genero: FieldRef<"Asociado", 'String'>
    readonly nacionalidad: FieldRef<"Asociado", 'Int'>
    readonly pais_nacimiento: FieldRef<"Asociado", 'Int'>
    readonly estado_nacimiento: FieldRef<"Asociado", 'Int'>
    readonly ciudad_nacimiento: FieldRef<"Asociado", 'Int'>
    readonly numero_telefonico: FieldRef<"Asociado", 'String'>
    readonly ocupacion: FieldRef<"Asociado", 'String'>
    readonly profesion: FieldRef<"Asociado", 'String'>
    readonly miembroPrincipal: FieldRef<"Asociado", 'Int'>
    readonly alimentacion1: FieldRef<"Asociado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Asociado findUnique
   */
  export type AsociadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter, which Asociado to fetch.
     */
    where: AsociadoWhereUniqueInput
  }

  /**
   * Asociado findUniqueOrThrow
   */
  export type AsociadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter, which Asociado to fetch.
     */
    where: AsociadoWhereUniqueInput
  }

  /**
   * Asociado findFirst
   */
  export type AsociadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter, which Asociado to fetch.
     */
    where?: AsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asociados to fetch.
     */
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asociados.
     */
    cursor?: AsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asociados.
     */
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Asociado findFirstOrThrow
   */
  export type AsociadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter, which Asociado to fetch.
     */
    where?: AsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asociados to fetch.
     */
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asociados.
     */
    cursor?: AsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asociados.
     */
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Asociado findMany
   */
  export type AsociadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter, which Asociados to fetch.
     */
    where?: AsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asociados to fetch.
     */
    orderBy?: AsociadoOrderByWithRelationInput | AsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asociados.
     */
    cursor?: AsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asociados.
     */
    skip?: number
    distinct?: AsociadoScalarFieldEnum | AsociadoScalarFieldEnum[]
  }

  /**
   * Asociado create
   */
  export type AsociadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Asociado.
     */
    data: XOR<AsociadoCreateInput, AsociadoUncheckedCreateInput>
  }

  /**
   * Asociado createMany
   */
  export type AsociadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asociados.
     */
    data: AsociadoCreateManyInput | AsociadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asociado createManyAndReturn
   */
  export type AsociadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * The data used to create many Asociados.
     */
    data: AsociadoCreateManyInput | AsociadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asociado update
   */
  export type AsociadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Asociado.
     */
    data: XOR<AsociadoUpdateInput, AsociadoUncheckedUpdateInput>
    /**
     * Choose, which Asociado to update.
     */
    where: AsociadoWhereUniqueInput
  }

  /**
   * Asociado updateMany
   */
  export type AsociadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asociados.
     */
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyInput>
    /**
     * Filter which Asociados to update
     */
    where?: AsociadoWhereInput
    /**
     * Limit how many Asociados to update.
     */
    limit?: number
  }

  /**
   * Asociado updateManyAndReturn
   */
  export type AsociadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * The data used to update Asociados.
     */
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyInput>
    /**
     * Filter which Asociados to update
     */
    where?: AsociadoWhereInput
    /**
     * Limit how many Asociados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asociado upsert
   */
  export type AsociadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Asociado to update in case it exists.
     */
    where: AsociadoWhereUniqueInput
    /**
     * In case the Asociado found by the `where` argument doesn't exist, create a new Asociado with this data.
     */
    create: XOR<AsociadoCreateInput, AsociadoUncheckedCreateInput>
    /**
     * In case the Asociado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsociadoUpdateInput, AsociadoUncheckedUpdateInput>
  }

  /**
   * Asociado delete
   */
  export type AsociadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
    /**
     * Filter which Asociado to delete.
     */
    where: AsociadoWhereUniqueInput
  }

  /**
   * Asociado deleteMany
   */
  export type AsociadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asociados to delete
     */
    where?: AsociadoWhereInput
    /**
     * Limit how many Asociados to delete.
     */
    limit?: number
  }

  /**
   * Asociado.estadoNacimiento
   */
  export type Asociado$estadoNacimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    where?: EstadoWhereInput
  }

  /**
   * Asociado.ciudadNacimiento
   */
  export type Asociado$ciudadNacimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    where?: CiudadWhereInput
  }

  /**
   * Asociado without action
   */
  export type AsociadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asociado
     */
    select?: AsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asociado
     */
    omit?: AsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsociadoInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_tipo_via: number | null
    activa: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_tipo_via: number | null
    activa: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_tipo_via: number | null
    nombre_via: string | null
    numero: string | null
    portal: string | null
    piso: string | null
    apartamento: string | null
    pueblo: string | null
    nombre_pueblo: string | null
    codigo_postal: string | null
    activa: number | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_tipo_via: number | null
    nombre_via: string | null
    numero: string | null
    portal: string | null
    piso: string | null
    apartamento: string | null
    pueblo: string | null
    nombre_pueblo: string | null
    codigo_postal: string | null
    activa: number | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    id_socio: number
    id_tipo_via: number
    nombre_via: number
    numero: number
    portal: number
    piso: number
    apartamento: number
    pueblo: number
    nombre_pueblo: number
    codigo_postal: number
    activa: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
    id_socio?: true
    id_tipo_via?: true
    activa?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
    id_socio?: true
    id_tipo_via?: true
    activa?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    id_socio?: true
    id_tipo_via?: true
    nombre_via?: true
    numero?: true
    portal?: true
    piso?: true
    apartamento?: true
    pueblo?: true
    nombre_pueblo?: true
    codigo_postal?: true
    activa?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    id_socio?: true
    id_tipo_via?: true
    nombre_via?: true
    numero?: true
    portal?: true
    piso?: true
    apartamento?: true
    pueblo?: true
    nombre_pueblo?: true
    codigo_postal?: true
    activa?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    id_socio?: true
    id_tipo_via?: true
    nombre_via?: true
    numero?: true
    portal?: true
    piso?: true
    apartamento?: true
    pueblo?: true
    nombre_pueblo?: true
    codigo_postal?: true
    activa?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    id_socio: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa: number
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_tipo_via?: boolean
    nombre_via?: boolean
    numero?: boolean
    portal?: boolean
    piso?: boolean
    apartamento?: boolean
    pueblo?: boolean
    nombre_pueblo?: boolean
    codigo_postal?: boolean
    activa?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_tipo_via?: boolean
    nombre_via?: boolean
    numero?: boolean
    portal?: boolean
    piso?: boolean
    apartamento?: boolean
    pueblo?: boolean
    nombre_pueblo?: boolean
    codigo_postal?: boolean
    activa?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_tipo_via?: boolean
    nombre_via?: boolean
    numero?: boolean
    portal?: boolean
    piso?: boolean
    apartamento?: boolean
    pueblo?: boolean
    nombre_pueblo?: boolean
    codigo_postal?: boolean
    activa?: boolean
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectScalar = {
    id?: boolean
    id_socio?: boolean
    id_tipo_via?: boolean
    nombre_via?: boolean
    numero?: boolean
    portal?: boolean
    piso?: boolean
    apartamento?: boolean
    pueblo?: boolean
    nombre_pueblo?: boolean
    codigo_postal?: boolean
    activa?: boolean
  }

  export type DireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_socio" | "id_tipo_via" | "nombre_via" | "numero" | "portal" | "piso" | "apartamento" | "pueblo" | "nombre_pueblo" | "codigo_postal" | "activa", ExtArgs["result"]["direccion"]>
  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }
  export type DireccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }
  export type DireccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | SocioDefaultArgs<ExtArgs>
    tipoVia?: boolean | TipoViaDefaultArgs<ExtArgs>
    codigoPostal?: boolean | CodigoPostalDefaultArgs<ExtArgs>
  }

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      socio: Prisma.$SocioPayload<ExtArgs>
      tipoVia: Prisma.$TipoViaPayload<ExtArgs>
      codigoPostal: Prisma.$CodigoPostalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_socio: number
      id_tipo_via: number
      nombre_via: string
      numero: string
      portal: string
      piso: string
      apartamento: string
      pueblo: string
      nombre_pueblo: string
      codigo_postal: string
      activa: number
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Direccions and returns the data saved in the database.
     * @param {DireccionCreateManyAndReturnArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DireccionCreateManyAndReturnArgs>(args?: SelectSubset<T, DireccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions and returns the data updated in the database.
     * @param {DireccionUpdateManyAndReturnArgs} args - Arguments to update many Direccions.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.updateManyAndReturn({
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
    updateManyAndReturn<T extends DireccionUpdateManyAndReturnArgs>(args: SelectSubset<T, DireccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
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
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socio<T extends SocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocioDefaultArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoVia<T extends TipoViaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoViaDefaultArgs<ExtArgs>>): Prisma__TipoViaClient<$Result.GetResult<Prisma.$TipoViaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    codigoPostal<T extends CodigoPostalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodigoPostalDefaultArgs<ExtArgs>>): Prisma__CodigoPostalClient<$Result.GetResult<Prisma.$CodigoPostalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Direccion model
   */
  interface DireccionFieldRefs {
    readonly id: FieldRef<"Direccion", 'Int'>
    readonly id_socio: FieldRef<"Direccion", 'Int'>
    readonly id_tipo_via: FieldRef<"Direccion", 'Int'>
    readonly nombre_via: FieldRef<"Direccion", 'String'>
    readonly numero: FieldRef<"Direccion", 'String'>
    readonly portal: FieldRef<"Direccion", 'String'>
    readonly piso: FieldRef<"Direccion", 'String'>
    readonly apartamento: FieldRef<"Direccion", 'String'>
    readonly pueblo: FieldRef<"Direccion", 'String'>
    readonly nombre_pueblo: FieldRef<"Direccion", 'String'>
    readonly codigo_postal: FieldRef<"Direccion", 'String'>
    readonly activa: FieldRef<"Direccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion createManyAndReturn
   */
  export type DireccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion updateManyAndReturn
   */
  export type DireccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to delete.
     */
    limit?: number
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
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


  export const PaisScalarFieldEnum: {
    id: 'id',
    pais_nro: 'pais_nro',
    pais: 'pais',
    codigo: 'codigo',
    iso_2: 'iso_2',
    iso_3: 'iso_3',
    moneda: 'moneda',
    continente: 'continente'
  };

  export type PaisScalarFieldEnum = (typeof PaisScalarFieldEnum)[keyof typeof PaisScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    id: 'id',
    id_pais: 'id_pais',
    id_estado_cid: 'id_estado_cid',
    estado: 'estado',
    capital: 'capital'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const CiudadScalarFieldEnum: {
    id: 'id',
    id_pais: 'id_pais',
    id_estado: 'id_estado',
    id_ciudad: 'id_ciudad',
    ciudad: 'ciudad'
  };

  export type CiudadScalarFieldEnum = (typeof CiudadScalarFieldEnum)[keyof typeof CiudadScalarFieldEnum]


  export const CodigoPostalScalarFieldEnum: {
    id: 'id',
    provincia: 'provincia',
    ciudad: 'ciudad',
    cp: 'cp',
    id_pais: 'id_pais'
  };

  export type CodigoPostalScalarFieldEnum = (typeof CodigoPostalScalarFieldEnum)[keyof typeof CodigoPostalScalarFieldEnum]


  export const TipoViaScalarFieldEnum: {
    id: 'id',
    tipo_via: 'tipo_via'
  };

  export type TipoViaScalarFieldEnum = (typeof TipoViaScalarFieldEnum)[keyof typeof TipoViaScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    password: 'password',
    nombres: 'nombres',
    apellido1re: 'apellido1re',
    apellido2do: 'apellido2do',
    rol: 'rol',
    activo: 'activo',
    fecha_creacion: 'fecha_creacion'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SocioScalarFieldEnum: {
    id: 'id',
    id_socio: 'id_socio',
    id_admin: 'id_admin',
    nombres: 'nombres',
    apellido1re: 'apellido1re',
    apellido2do: 'apellido2do',
    miembroprincipal: 'miembroprincipal'
  };

  export type SocioScalarFieldEnum = (typeof SocioScalarFieldEnum)[keyof typeof SocioScalarFieldEnum]


  export const AsociadoScalarFieldEnum: {
    id: 'id',
    id_socio: 'id_socio',
    id_asociado: 'id_asociado',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    nombres: 'nombres',
    apellido1re: 'apellido1re',
    apellido2do: 'apellido2do',
    fecha_nacimiento: 'fecha_nacimiento',
    genero: 'genero',
    nacionalidad: 'nacionalidad',
    pais_nacimiento: 'pais_nacimiento',
    estado_nacimiento: 'estado_nacimiento',
    ciudad_nacimiento: 'ciudad_nacimiento',
    numero_telefonico: 'numero_telefonico',
    ocupacion: 'ocupacion',
    profesion: 'profesion',
    miembroPrincipal: 'miembroPrincipal',
    alimentacion1: 'alimentacion1'
  };

  export type AsociadoScalarFieldEnum = (typeof AsociadoScalarFieldEnum)[keyof typeof AsociadoScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    id_socio: 'id_socio',
    id_tipo_via: 'id_tipo_via',
    nombre_via: 'nombre_via',
    numero: 'numero',
    portal: 'portal',
    piso: 'piso',
    apartamento: 'apartamento',
    pueblo: 'pueblo',
    nombre_pueblo: 'nombre_pueblo',
    codigo_postal: 'codigo_postal',
    activa: 'activa'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PaisWhereInput = {
    AND?: PaisWhereInput | PaisWhereInput[]
    OR?: PaisWhereInput[]
    NOT?: PaisWhereInput | PaisWhereInput[]
    id?: IntFilter<"Pais"> | number
    pais_nro?: IntFilter<"Pais"> | number
    pais?: StringFilter<"Pais"> | string
    codigo?: StringFilter<"Pais"> | string
    iso_2?: StringFilter<"Pais"> | string
    iso_3?: StringFilter<"Pais"> | string
    moneda?: StringFilter<"Pais"> | string
    continente?: StringFilter<"Pais"> | string
    estados?: EstadoListRelationFilter
    ciudades?: CiudadListRelationFilter
    codigosPostales?: CodigoPostalListRelationFilter
    asociados?: AsociadoListRelationFilter
    nacionalidades?: AsociadoListRelationFilter
  }

  export type PaisOrderByWithRelationInput = {
    id?: SortOrder
    pais_nro?: SortOrder
    pais?: SortOrder
    codigo?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    moneda?: SortOrder
    continente?: SortOrder
    estados?: EstadoOrderByRelationAggregateInput
    ciudades?: CiudadOrderByRelationAggregateInput
    codigosPostales?: CodigoPostalOrderByRelationAggregateInput
    asociados?: AsociadoOrderByRelationAggregateInput
    nacionalidades?: AsociadoOrderByRelationAggregateInput
  }

  export type PaisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pais_nro?: number
    AND?: PaisWhereInput | PaisWhereInput[]
    OR?: PaisWhereInput[]
    NOT?: PaisWhereInput | PaisWhereInput[]
    pais?: StringFilter<"Pais"> | string
    codigo?: StringFilter<"Pais"> | string
    iso_2?: StringFilter<"Pais"> | string
    iso_3?: StringFilter<"Pais"> | string
    moneda?: StringFilter<"Pais"> | string
    continente?: StringFilter<"Pais"> | string
    estados?: EstadoListRelationFilter
    ciudades?: CiudadListRelationFilter
    codigosPostales?: CodigoPostalListRelationFilter
    asociados?: AsociadoListRelationFilter
    nacionalidades?: AsociadoListRelationFilter
  }, "id" | "pais_nro">

  export type PaisOrderByWithAggregationInput = {
    id?: SortOrder
    pais_nro?: SortOrder
    pais?: SortOrder
    codigo?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    moneda?: SortOrder
    continente?: SortOrder
    _count?: PaisCountOrderByAggregateInput
    _avg?: PaisAvgOrderByAggregateInput
    _max?: PaisMaxOrderByAggregateInput
    _min?: PaisMinOrderByAggregateInput
    _sum?: PaisSumOrderByAggregateInput
  }

  export type PaisScalarWhereWithAggregatesInput = {
    AND?: PaisScalarWhereWithAggregatesInput | PaisScalarWhereWithAggregatesInput[]
    OR?: PaisScalarWhereWithAggregatesInput[]
    NOT?: PaisScalarWhereWithAggregatesInput | PaisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pais"> | number
    pais_nro?: IntWithAggregatesFilter<"Pais"> | number
    pais?: StringWithAggregatesFilter<"Pais"> | string
    codigo?: StringWithAggregatesFilter<"Pais"> | string
    iso_2?: StringWithAggregatesFilter<"Pais"> | string
    iso_3?: StringWithAggregatesFilter<"Pais"> | string
    moneda?: StringWithAggregatesFilter<"Pais"> | string
    continente?: StringWithAggregatesFilter<"Pais"> | string
  }

  export type EstadoWhereInput = {
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id?: IntFilter<"Estado"> | number
    id_pais?: IntFilter<"Estado"> | number
    id_estado_cid?: StringFilter<"Estado"> | string
    estado?: StringFilter<"Estado"> | string
    capital?: StringFilter<"Estado"> | string
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    ciudades?: CiudadListRelationFilter
    asociados?: AsociadoListRelationFilter
  }

  export type EstadoOrderByWithRelationInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado_cid?: SortOrder
    estado?: SortOrder
    capital?: SortOrder
    pais?: PaisOrderByWithRelationInput
    ciudades?: CiudadOrderByRelationAggregateInput
    asociados?: AsociadoOrderByRelationAggregateInput
  }

  export type EstadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id_pais?: IntFilter<"Estado"> | number
    id_estado_cid?: StringFilter<"Estado"> | string
    estado?: StringFilter<"Estado"> | string
    capital?: StringFilter<"Estado"> | string
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    ciudades?: CiudadListRelationFilter
    asociados?: AsociadoListRelationFilter
  }, "id">

  export type EstadoOrderByWithAggregationInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado_cid?: SortOrder
    estado?: SortOrder
    capital?: SortOrder
    _count?: EstadoCountOrderByAggregateInput
    _avg?: EstadoAvgOrderByAggregateInput
    _max?: EstadoMaxOrderByAggregateInput
    _min?: EstadoMinOrderByAggregateInput
    _sum?: EstadoSumOrderByAggregateInput
  }

  export type EstadoScalarWhereWithAggregatesInput = {
    AND?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    OR?: EstadoScalarWhereWithAggregatesInput[]
    NOT?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estado"> | number
    id_pais?: IntWithAggregatesFilter<"Estado"> | number
    id_estado_cid?: StringWithAggregatesFilter<"Estado"> | string
    estado?: StringWithAggregatesFilter<"Estado"> | string
    capital?: StringWithAggregatesFilter<"Estado"> | string
  }

  export type CiudadWhereInput = {
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    id?: IntFilter<"Ciudad"> | number
    id_pais?: IntFilter<"Ciudad"> | number
    id_estado?: IntNullableFilter<"Ciudad"> | number | null
    id_ciudad?: IntFilter<"Ciudad"> | number
    ciudad?: StringFilter<"Ciudad"> | string
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    estado?: XOR<EstadoNullableScalarRelationFilter, EstadoWhereInput> | null
    asociados?: AsociadoListRelationFilter
  }

  export type CiudadOrderByWithRelationInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrderInput | SortOrder
    id_ciudad?: SortOrder
    ciudad?: SortOrder
    pais?: PaisOrderByWithRelationInput
    estado?: EstadoOrderByWithRelationInput
    asociados?: AsociadoOrderByRelationAggregateInput
  }

  export type CiudadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_ciudad?: number
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    id_pais?: IntFilter<"Ciudad"> | number
    id_estado?: IntNullableFilter<"Ciudad"> | number | null
    ciudad?: StringFilter<"Ciudad"> | string
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    estado?: XOR<EstadoNullableScalarRelationFilter, EstadoWhereInput> | null
    asociados?: AsociadoListRelationFilter
  }, "id" | "id_ciudad">

  export type CiudadOrderByWithAggregationInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrderInput | SortOrder
    id_ciudad?: SortOrder
    ciudad?: SortOrder
    _count?: CiudadCountOrderByAggregateInput
    _avg?: CiudadAvgOrderByAggregateInput
    _max?: CiudadMaxOrderByAggregateInput
    _min?: CiudadMinOrderByAggregateInput
    _sum?: CiudadSumOrderByAggregateInput
  }

  export type CiudadScalarWhereWithAggregatesInput = {
    AND?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    OR?: CiudadScalarWhereWithAggregatesInput[]
    NOT?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ciudad"> | number
    id_pais?: IntWithAggregatesFilter<"Ciudad"> | number
    id_estado?: IntNullableWithAggregatesFilter<"Ciudad"> | number | null
    id_ciudad?: IntWithAggregatesFilter<"Ciudad"> | number
    ciudad?: StringWithAggregatesFilter<"Ciudad"> | string
  }

  export type CodigoPostalWhereInput = {
    AND?: CodigoPostalWhereInput | CodigoPostalWhereInput[]
    OR?: CodigoPostalWhereInput[]
    NOT?: CodigoPostalWhereInput | CodigoPostalWhereInput[]
    id?: IntFilter<"CodigoPostal"> | number
    provincia?: StringFilter<"CodigoPostal"> | string
    ciudad?: StringFilter<"CodigoPostal"> | string
    cp?: StringFilter<"CodigoPostal"> | string
    id_pais?: IntFilter<"CodigoPostal"> | number
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    direcciones?: DireccionListRelationFilter
  }

  export type CodigoPostalOrderByWithRelationInput = {
    id?: SortOrder
    provincia?: SortOrder
    ciudad?: SortOrder
    cp?: SortOrder
    id_pais?: SortOrder
    pais?: PaisOrderByWithRelationInput
    direcciones?: DireccionOrderByRelationAggregateInput
  }

  export type CodigoPostalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cp?: string
    AND?: CodigoPostalWhereInput | CodigoPostalWhereInput[]
    OR?: CodigoPostalWhereInput[]
    NOT?: CodigoPostalWhereInput | CodigoPostalWhereInput[]
    provincia?: StringFilter<"CodigoPostal"> | string
    ciudad?: StringFilter<"CodigoPostal"> | string
    id_pais?: IntFilter<"CodigoPostal"> | number
    pais?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    direcciones?: DireccionListRelationFilter
  }, "id" | "cp">

  export type CodigoPostalOrderByWithAggregationInput = {
    id?: SortOrder
    provincia?: SortOrder
    ciudad?: SortOrder
    cp?: SortOrder
    id_pais?: SortOrder
    _count?: CodigoPostalCountOrderByAggregateInput
    _avg?: CodigoPostalAvgOrderByAggregateInput
    _max?: CodigoPostalMaxOrderByAggregateInput
    _min?: CodigoPostalMinOrderByAggregateInput
    _sum?: CodigoPostalSumOrderByAggregateInput
  }

  export type CodigoPostalScalarWhereWithAggregatesInput = {
    AND?: CodigoPostalScalarWhereWithAggregatesInput | CodigoPostalScalarWhereWithAggregatesInput[]
    OR?: CodigoPostalScalarWhereWithAggregatesInput[]
    NOT?: CodigoPostalScalarWhereWithAggregatesInput | CodigoPostalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CodigoPostal"> | number
    provincia?: StringWithAggregatesFilter<"CodigoPostal"> | string
    ciudad?: StringWithAggregatesFilter<"CodigoPostal"> | string
    cp?: StringWithAggregatesFilter<"CodigoPostal"> | string
    id_pais?: IntWithAggregatesFilter<"CodigoPostal"> | number
  }

  export type TipoViaWhereInput = {
    AND?: TipoViaWhereInput | TipoViaWhereInput[]
    OR?: TipoViaWhereInput[]
    NOT?: TipoViaWhereInput | TipoViaWhereInput[]
    id?: IntFilter<"TipoVia"> | number
    tipo_via?: StringFilter<"TipoVia"> | string
    direcciones?: DireccionListRelationFilter
  }

  export type TipoViaOrderByWithRelationInput = {
    id?: SortOrder
    tipo_via?: SortOrder
    direcciones?: DireccionOrderByRelationAggregateInput
  }

  export type TipoViaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tipo_via?: string
    AND?: TipoViaWhereInput | TipoViaWhereInput[]
    OR?: TipoViaWhereInput[]
    NOT?: TipoViaWhereInput | TipoViaWhereInput[]
    direcciones?: DireccionListRelationFilter
  }, "id" | "tipo_via">

  export type TipoViaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_via?: SortOrder
    _count?: TipoViaCountOrderByAggregateInput
    _avg?: TipoViaAvgOrderByAggregateInput
    _max?: TipoViaMaxOrderByAggregateInput
    _min?: TipoViaMinOrderByAggregateInput
    _sum?: TipoViaSumOrderByAggregateInput
  }

  export type TipoViaScalarWhereWithAggregatesInput = {
    AND?: TipoViaScalarWhereWithAggregatesInput | TipoViaScalarWhereWithAggregatesInput[]
    OR?: TipoViaScalarWhereWithAggregatesInput[]
    NOT?: TipoViaScalarWhereWithAggregatesInput | TipoViaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoVia"> | number
    tipo_via?: StringWithAggregatesFilter<"TipoVia"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    usuario?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    nombres?: StringFilter<"Admin"> | string
    apellido1re?: StringFilter<"Admin"> | string
    apellido2do?: StringFilter<"Admin"> | string
    rol?: StringFilter<"Admin"> | string
    activo?: IntFilter<"Admin"> | number
    fecha_creacion?: DateTimeFilter<"Admin"> | Date | string
    socios?: SocioListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    fecha_creacion?: SortOrder
    socios?: SocioOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    nombres?: StringFilter<"Admin"> | string
    apellido1re?: StringFilter<"Admin"> | string
    apellido2do?: StringFilter<"Admin"> | string
    rol?: StringFilter<"Admin"> | string
    activo?: IntFilter<"Admin"> | number
    fecha_creacion?: DateTimeFilter<"Admin"> | Date | string
    socios?: SocioListRelationFilter
  }, "id" | "usuario">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    fecha_creacion?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    usuario?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    nombres?: StringWithAggregatesFilter<"Admin"> | string
    apellido1re?: StringWithAggregatesFilter<"Admin"> | string
    apellido2do?: StringWithAggregatesFilter<"Admin"> | string
    rol?: StringWithAggregatesFilter<"Admin"> | string
    activo?: IntWithAggregatesFilter<"Admin"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SocioWhereInput = {
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    id?: IntFilter<"Socio"> | number
    id_socio?: IntFilter<"Socio"> | number
    id_admin?: IntFilter<"Socio"> | number
    nombres?: StringFilter<"Socio"> | string
    apellido1re?: StringFilter<"Socio"> | string
    apellido2do?: StringFilter<"Socio"> | string
    miembroprincipal?: IntFilter<"Socio"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    asociados?: AsociadoListRelationFilter
    direcciones?: DireccionListRelationFilter
  }

  export type SocioOrderByWithRelationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    miembroprincipal?: SortOrder
    admin?: AdminOrderByWithRelationInput
    asociados?: AsociadoOrderByRelationAggregateInput
    direcciones?: DireccionOrderByRelationAggregateInput
  }

  export type SocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_socio?: number
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    id_admin?: IntFilter<"Socio"> | number
    nombres?: StringFilter<"Socio"> | string
    apellido1re?: StringFilter<"Socio"> | string
    apellido2do?: StringFilter<"Socio"> | string
    miembroprincipal?: IntFilter<"Socio"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    asociados?: AsociadoListRelationFilter
    direcciones?: DireccionListRelationFilter
  }, "id" | "id_socio">

  export type SocioOrderByWithAggregationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    miembroprincipal?: SortOrder
    _count?: SocioCountOrderByAggregateInput
    _avg?: SocioAvgOrderByAggregateInput
    _max?: SocioMaxOrderByAggregateInput
    _min?: SocioMinOrderByAggregateInput
    _sum?: SocioSumOrderByAggregateInput
  }

  export type SocioScalarWhereWithAggregatesInput = {
    AND?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    OR?: SocioScalarWhereWithAggregatesInput[]
    NOT?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Socio"> | number
    id_socio?: IntWithAggregatesFilter<"Socio"> | number
    id_admin?: IntWithAggregatesFilter<"Socio"> | number
    nombres?: StringWithAggregatesFilter<"Socio"> | string
    apellido1re?: StringWithAggregatesFilter<"Socio"> | string
    apellido2do?: StringWithAggregatesFilter<"Socio"> | string
    miembroprincipal?: IntWithAggregatesFilter<"Socio"> | number
  }

  export type AsociadoWhereInput = {
    AND?: AsociadoWhereInput | AsociadoWhereInput[]
    OR?: AsociadoWhereInput[]
    NOT?: AsociadoWhereInput | AsociadoWhereInput[]
    id?: IntFilter<"Asociado"> | number
    id_socio?: IntFilter<"Asociado"> | number
    id_asociado?: IntFilter<"Asociado"> | number
    tipo_documento?: StringFilter<"Asociado"> | string
    numero_documento?: StringFilter<"Asociado"> | string
    nombres?: StringFilter<"Asociado"> | string
    apellido1re?: StringFilter<"Asociado"> | string
    apellido2do?: StringFilter<"Asociado"> | string
    fecha_nacimiento?: DateTimeFilter<"Asociado"> | Date | string
    genero?: StringFilter<"Asociado"> | string
    nacionalidad?: IntFilter<"Asociado"> | number
    pais_nacimiento?: IntFilter<"Asociado"> | number
    estado_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    ciudad_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    numero_telefonico?: StringNullableFilter<"Asociado"> | string | null
    ocupacion?: StringNullableFilter<"Asociado"> | string | null
    profesion?: StringNullableFilter<"Asociado"> | string | null
    miembroPrincipal?: IntFilter<"Asociado"> | number
    alimentacion1?: IntFilter<"Asociado"> | number
    socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
    paisNacionalidad?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    paisNacimiento?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    estadoNacimiento?: XOR<EstadoNullableScalarRelationFilter, EstadoWhereInput> | null
    ciudadNacimiento?: XOR<CiudadNullableScalarRelationFilter, CiudadWhereInput> | null
  }

  export type AsociadoOrderByWithRelationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrderInput | SortOrder
    ciudad_nacimiento?: SortOrderInput | SortOrder
    numero_telefonico?: SortOrderInput | SortOrder
    ocupacion?: SortOrderInput | SortOrder
    profesion?: SortOrderInput | SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
    socio?: SocioOrderByWithRelationInput
    paisNacionalidad?: PaisOrderByWithRelationInput
    paisNacimiento?: PaisOrderByWithRelationInput
    estadoNacimiento?: EstadoOrderByWithRelationInput
    ciudadNacimiento?: CiudadOrderByWithRelationInput
  }

  export type AsociadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero_documento?: string
    id_socio_id_asociado?: AsociadoId_socioId_asociadoCompoundUniqueInput
    AND?: AsociadoWhereInput | AsociadoWhereInput[]
    OR?: AsociadoWhereInput[]
    NOT?: AsociadoWhereInput | AsociadoWhereInput[]
    id_socio?: IntFilter<"Asociado"> | number
    id_asociado?: IntFilter<"Asociado"> | number
    tipo_documento?: StringFilter<"Asociado"> | string
    nombres?: StringFilter<"Asociado"> | string
    apellido1re?: StringFilter<"Asociado"> | string
    apellido2do?: StringFilter<"Asociado"> | string
    fecha_nacimiento?: DateTimeFilter<"Asociado"> | Date | string
    genero?: StringFilter<"Asociado"> | string
    nacionalidad?: IntFilter<"Asociado"> | number
    pais_nacimiento?: IntFilter<"Asociado"> | number
    estado_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    ciudad_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    numero_telefonico?: StringNullableFilter<"Asociado"> | string | null
    ocupacion?: StringNullableFilter<"Asociado"> | string | null
    profesion?: StringNullableFilter<"Asociado"> | string | null
    miembroPrincipal?: IntFilter<"Asociado"> | number
    alimentacion1?: IntFilter<"Asociado"> | number
    socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
    paisNacionalidad?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    paisNacimiento?: XOR<PaisScalarRelationFilter, PaisWhereInput>
    estadoNacimiento?: XOR<EstadoNullableScalarRelationFilter, EstadoWhereInput> | null
    ciudadNacimiento?: XOR<CiudadNullableScalarRelationFilter, CiudadWhereInput> | null
  }, "id" | "numero_documento" | "id_socio_id_asociado">

  export type AsociadoOrderByWithAggregationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrderInput | SortOrder
    ciudad_nacimiento?: SortOrderInput | SortOrder
    numero_telefonico?: SortOrderInput | SortOrder
    ocupacion?: SortOrderInput | SortOrder
    profesion?: SortOrderInput | SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
    _count?: AsociadoCountOrderByAggregateInput
    _avg?: AsociadoAvgOrderByAggregateInput
    _max?: AsociadoMaxOrderByAggregateInput
    _min?: AsociadoMinOrderByAggregateInput
    _sum?: AsociadoSumOrderByAggregateInput
  }

  export type AsociadoScalarWhereWithAggregatesInput = {
    AND?: AsociadoScalarWhereWithAggregatesInput | AsociadoScalarWhereWithAggregatesInput[]
    OR?: AsociadoScalarWhereWithAggregatesInput[]
    NOT?: AsociadoScalarWhereWithAggregatesInput | AsociadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asociado"> | number
    id_socio?: IntWithAggregatesFilter<"Asociado"> | number
    id_asociado?: IntWithAggregatesFilter<"Asociado"> | number
    tipo_documento?: StringWithAggregatesFilter<"Asociado"> | string
    numero_documento?: StringWithAggregatesFilter<"Asociado"> | string
    nombres?: StringWithAggregatesFilter<"Asociado"> | string
    apellido1re?: StringWithAggregatesFilter<"Asociado"> | string
    apellido2do?: StringWithAggregatesFilter<"Asociado"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"Asociado"> | Date | string
    genero?: StringWithAggregatesFilter<"Asociado"> | string
    nacionalidad?: IntWithAggregatesFilter<"Asociado"> | number
    pais_nacimiento?: IntWithAggregatesFilter<"Asociado"> | number
    estado_nacimiento?: IntNullableWithAggregatesFilter<"Asociado"> | number | null
    ciudad_nacimiento?: IntNullableWithAggregatesFilter<"Asociado"> | number | null
    numero_telefonico?: StringNullableWithAggregatesFilter<"Asociado"> | string | null
    ocupacion?: StringNullableWithAggregatesFilter<"Asociado"> | string | null
    profesion?: StringNullableWithAggregatesFilter<"Asociado"> | string | null
    miembroPrincipal?: IntWithAggregatesFilter<"Asociado"> | number
    alimentacion1?: IntWithAggregatesFilter<"Asociado"> | number
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id?: IntFilter<"Direccion"> | number
    id_socio?: IntFilter<"Direccion"> | number
    id_tipo_via?: IntFilter<"Direccion"> | number
    nombre_via?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    portal?: StringFilter<"Direccion"> | string
    piso?: StringFilter<"Direccion"> | string
    apartamento?: StringFilter<"Direccion"> | string
    pueblo?: StringFilter<"Direccion"> | string
    nombre_pueblo?: StringFilter<"Direccion"> | string
    codigo_postal?: StringFilter<"Direccion"> | string
    activa?: IntFilter<"Direccion"> | number
    socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
    tipoVia?: XOR<TipoViaScalarRelationFilter, TipoViaWhereInput>
    codigoPostal?: XOR<CodigoPostalScalarRelationFilter, CodigoPostalWhereInput>
  }

  export type DireccionOrderByWithRelationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    nombre_via?: SortOrder
    numero?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    apartamento?: SortOrder
    pueblo?: SortOrder
    nombre_pueblo?: SortOrder
    codigo_postal?: SortOrder
    activa?: SortOrder
    socio?: SocioOrderByWithRelationInput
    tipoVia?: TipoViaOrderByWithRelationInput
    codigoPostal?: CodigoPostalOrderByWithRelationInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id_socio?: IntFilter<"Direccion"> | number
    id_tipo_via?: IntFilter<"Direccion"> | number
    nombre_via?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    portal?: StringFilter<"Direccion"> | string
    piso?: StringFilter<"Direccion"> | string
    apartamento?: StringFilter<"Direccion"> | string
    pueblo?: StringFilter<"Direccion"> | string
    nombre_pueblo?: StringFilter<"Direccion"> | string
    codigo_postal?: StringFilter<"Direccion"> | string
    activa?: IntFilter<"Direccion"> | number
    socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
    tipoVia?: XOR<TipoViaScalarRelationFilter, TipoViaWhereInput>
    codigoPostal?: XOR<CodigoPostalScalarRelationFilter, CodigoPostalWhereInput>
  }, "id">

  export type DireccionOrderByWithAggregationInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    nombre_via?: SortOrder
    numero?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    apartamento?: SortOrder
    pueblo?: SortOrder
    nombre_pueblo?: SortOrder
    codigo_postal?: SortOrder
    activa?: SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direccion"> | number
    id_socio?: IntWithAggregatesFilter<"Direccion"> | number
    id_tipo_via?: IntWithAggregatesFilter<"Direccion"> | number
    nombre_via?: StringWithAggregatesFilter<"Direccion"> | string
    numero?: StringWithAggregatesFilter<"Direccion"> | string
    portal?: StringWithAggregatesFilter<"Direccion"> | string
    piso?: StringWithAggregatesFilter<"Direccion"> | string
    apartamento?: StringWithAggregatesFilter<"Direccion"> | string
    pueblo?: StringWithAggregatesFilter<"Direccion"> | string
    nombre_pueblo?: StringWithAggregatesFilter<"Direccion"> | string
    codigo_postal?: StringWithAggregatesFilter<"Direccion"> | string
    activa?: IntWithAggregatesFilter<"Direccion"> | number
  }

  export type PaisCreateInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoCreateNestedManyWithoutPaisInput
    ciudades?: CiudadCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalCreateNestedManyWithoutPaisInput
    asociados?: AsociadoCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUncheckedCreateInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoUncheckedCreateNestedManyWithoutPaisInput
    ciudades?: CiudadUncheckedCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalUncheckedCreateNestedManyWithoutPaisInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUpdateInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUncheckedUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUncheckedUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisCreateManyInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
  }

  export type PaisUpdateManyMutationInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
  }

  export type PaisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateInput = {
    id_estado_cid: string
    estado: string
    capital: string
    pais: PaisCreateNestedOneWithoutEstadosInput
    ciudades?: CiudadCreateNestedManyWithoutEstadoInput
    asociados?: AsociadoCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoUncheckedCreateInput = {
    id?: number
    id_pais: number
    id_estado_cid: string
    estado: string
    capital: string
    ciudades?: CiudadUncheckedCreateNestedManyWithoutEstadoInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoUpdateInput = {
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutEstadosNestedInput
    ciudades?: CiudadUpdateManyWithoutEstadoNestedInput
    asociados?: AsociadoUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type EstadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUncheckedUpdateManyWithoutEstadoNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type EstadoCreateManyInput = {
    id?: number
    id_pais: number
    id_estado_cid: string
    estado: string
    capital: string
  }

  export type EstadoUpdateManyMutationInput = {
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadCreateInput = {
    id_ciudad: number
    ciudad: string
    pais: PaisCreateNestedOneWithoutCiudadesInput
    estado?: EstadoCreateNestedOneWithoutCiudadesInput
    asociados?: AsociadoCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadUncheckedCreateInput = {
    id?: number
    id_pais: number
    id_estado?: number | null
    id_ciudad: number
    ciudad: string
    asociados?: AsociadoUncheckedCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadUpdateInput = {
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutCiudadesNestedInput
    estado?: EstadoUpdateOneWithoutCiudadesNestedInput
    asociados?: AsociadoUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    asociados?: AsociadoUncheckedUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadCreateManyInput = {
    id?: number
    id_pais: number
    id_estado?: number | null
    id_ciudad: number
    ciudad: string
  }

  export type CiudadUpdateManyMutationInput = {
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoPostalCreateInput = {
    provincia: string
    ciudad: string
    cp: string
    pais: PaisCreateNestedOneWithoutCodigosPostalesInput
    direcciones?: DireccionCreateNestedManyWithoutCodigoPostalInput
  }

  export type CodigoPostalUncheckedCreateInput = {
    id?: number
    provincia: string
    ciudad: string
    cp: string
    id_pais: number
    direcciones?: DireccionUncheckedCreateNestedManyWithoutCodigoPostalInput
  }

  export type CodigoPostalUpdateInput = {
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutCodigosPostalesNestedInput
    direcciones?: DireccionUpdateManyWithoutCodigoPostalNestedInput
  }

  export type CodigoPostalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
    direcciones?: DireccionUncheckedUpdateManyWithoutCodigoPostalNestedInput
  }

  export type CodigoPostalCreateManyInput = {
    id?: number
    provincia: string
    ciudad: string
    cp: string
    id_pais: number
  }

  export type CodigoPostalUpdateManyMutationInput = {
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoPostalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
  }

  export type TipoViaCreateInput = {
    tipo_via: string
    direcciones?: DireccionCreateNestedManyWithoutTipoViaInput
  }

  export type TipoViaUncheckedCreateInput = {
    id?: number
    tipo_via: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutTipoViaInput
  }

  export type TipoViaUpdateInput = {
    tipo_via?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutTipoViaNestedInput
  }

  export type TipoViaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_via?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutTipoViaNestedInput
  }

  export type TipoViaCreateManyInput = {
    id?: number
    tipo_via: string
  }

  export type TipoViaUpdateManyMutationInput = {
    tipo_via?: StringFieldUpdateOperationsInput | string
  }

  export type TipoViaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_via?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol?: string
    activo?: number
    fecha_creacion?: Date | string
    socios?: SocioCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol?: string
    activo?: number
    fecha_creacion?: Date | string
    socios?: SocioUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol?: string
    activo?: number
    fecha_creacion?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocioCreateInput = {
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    admin: AdminCreateNestedOneWithoutSociosInput
    asociados?: AsociadoCreateNestedManyWithoutSocioInput
    direcciones?: DireccionCreateNestedManyWithoutSocioInput
  }

  export type SocioUncheckedCreateInput = {
    id?: number
    id_socio: number
    id_admin: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    asociados?: AsociadoUncheckedCreateNestedManyWithoutSocioInput
    direcciones?: DireccionUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioUpdateInput = {
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    admin?: AdminUpdateOneRequiredWithoutSociosNestedInput
    asociados?: AsociadoUpdateManyWithoutSocioNestedInput
    direcciones?: DireccionUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    asociados?: AsociadoUncheckedUpdateManyWithoutSocioNestedInput
    direcciones?: DireccionUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type SocioCreateManyInput = {
    id?: number
    id_socio: number
    id_admin: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
  }

  export type SocioUpdateManyMutationInput = {
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
  }

  export type SocioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoCreateInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    socio: SocioCreateNestedOneWithoutAsociadosInput
    paisNacionalidad: PaisCreateNestedOneWithoutNacionalidadesInput
    paisNacimiento: PaisCreateNestedOneWithoutAsociadosInput
    estadoNacimiento?: EstadoCreateNestedOneWithoutAsociadosInput
    ciudadNacimiento?: CiudadCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoUpdateInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutAsociadosNestedInput
    paisNacionalidad?: PaisUpdateOneRequiredWithoutNacionalidadesNestedInput
    paisNacimiento?: PaisUpdateOneRequiredWithoutAsociadosNestedInput
    estadoNacimiento?: EstadoUpdateOneWithoutAsociadosNestedInput
    ciudadNacimiento?: CiudadUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoCreateManyInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoUpdateManyMutationInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateInput = {
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
    socio: SocioCreateNestedOneWithoutDireccionesInput
    tipoVia: TipoViaCreateNestedOneWithoutDireccionesInput
    codigoPostal: CodigoPostalCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateInput = {
    id?: number
    id_socio: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type DireccionUpdateInput = {
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutDireccionesNestedInput
    tipoVia?: TipoViaUpdateOneRequiredWithoutDireccionesNestedInput
    codigoPostal?: CodigoPostalUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateManyInput = {
    id?: number
    id_socio: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type DireccionUpdateManyMutationInput = {
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
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

  export type EstadoListRelationFilter = {
    every?: EstadoWhereInput
    some?: EstadoWhereInput
    none?: EstadoWhereInput
  }

  export type CiudadListRelationFilter = {
    every?: CiudadWhereInput
    some?: CiudadWhereInput
    none?: CiudadWhereInput
  }

  export type CodigoPostalListRelationFilter = {
    every?: CodigoPostalWhereInput
    some?: CodigoPostalWhereInput
    none?: CodigoPostalWhereInput
  }

  export type AsociadoListRelationFilter = {
    every?: AsociadoWhereInput
    some?: AsociadoWhereInput
    none?: AsociadoWhereInput
  }

  export type EstadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CiudadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodigoPostalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsociadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaisCountOrderByAggregateInput = {
    id?: SortOrder
    pais_nro?: SortOrder
    pais?: SortOrder
    codigo?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    moneda?: SortOrder
    continente?: SortOrder
  }

  export type PaisAvgOrderByAggregateInput = {
    id?: SortOrder
    pais_nro?: SortOrder
  }

  export type PaisMaxOrderByAggregateInput = {
    id?: SortOrder
    pais_nro?: SortOrder
    pais?: SortOrder
    codigo?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    moneda?: SortOrder
    continente?: SortOrder
  }

  export type PaisMinOrderByAggregateInput = {
    id?: SortOrder
    pais_nro?: SortOrder
    pais?: SortOrder
    codigo?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    moneda?: SortOrder
    continente?: SortOrder
  }

  export type PaisSumOrderByAggregateInput = {
    id?: SortOrder
    pais_nro?: SortOrder
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

  export type PaisScalarRelationFilter = {
    is?: PaisWhereInput
    isNot?: PaisWhereInput
  }

  export type EstadoCountOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado_cid?: SortOrder
    estado?: SortOrder
    capital?: SortOrder
  }

  export type EstadoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type EstadoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado_cid?: SortOrder
    estado?: SortOrder
    capital?: SortOrder
  }

  export type EstadoMinOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado_cid?: SortOrder
    estado?: SortOrder
    capital?: SortOrder
  }

  export type EstadoSumOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EstadoNullableScalarRelationFilter = {
    is?: EstadoWhereInput | null
    isNot?: EstadoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CiudadCountOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrder
    id_ciudad?: SortOrder
    ciudad?: SortOrder
  }

  export type CiudadAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrder
    id_ciudad?: SortOrder
  }

  export type CiudadMaxOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrder
    id_ciudad?: SortOrder
    ciudad?: SortOrder
  }

  export type CiudadMinOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrder
    id_ciudad?: SortOrder
    ciudad?: SortOrder
  }

  export type CiudadSumOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
    id_estado?: SortOrder
    id_ciudad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DireccionListRelationFilter = {
    every?: DireccionWhereInput
    some?: DireccionWhereInput
    none?: DireccionWhereInput
  }

  export type DireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodigoPostalCountOrderByAggregateInput = {
    id?: SortOrder
    provincia?: SortOrder
    ciudad?: SortOrder
    cp?: SortOrder
    id_pais?: SortOrder
  }

  export type CodigoPostalAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type CodigoPostalMaxOrderByAggregateInput = {
    id?: SortOrder
    provincia?: SortOrder
    ciudad?: SortOrder
    cp?: SortOrder
    id_pais?: SortOrder
  }

  export type CodigoPostalMinOrderByAggregateInput = {
    id?: SortOrder
    provincia?: SortOrder
    ciudad?: SortOrder
    cp?: SortOrder
    id_pais?: SortOrder
  }

  export type CodigoPostalSumOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type TipoViaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_via?: SortOrder
  }

  export type TipoViaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoViaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_via?: SortOrder
  }

  export type TipoViaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_via?: SortOrder
  }

  export type TipoViaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SocioListRelationFilter = {
    every?: SocioWhereInput
    some?: SocioWhereInput
    none?: SocioWhereInput
  }

  export type SocioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    activo?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    activo?: SortOrder
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

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type SocioCountOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    miembroprincipal?: SortOrder
  }

  export type SocioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    miembroprincipal?: SortOrder
  }

  export type SocioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    miembroprincipal?: SortOrder
  }

  export type SocioMinOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    miembroprincipal?: SortOrder
  }

  export type SocioSumOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_admin?: SortOrder
    miembroprincipal?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SocioScalarRelationFilter = {
    is?: SocioWhereInput
    isNot?: SocioWhereInput
  }

  export type CiudadNullableScalarRelationFilter = {
    is?: CiudadWhereInput | null
    isNot?: CiudadWhereInput | null
  }

  export type AsociadoId_socioId_asociadoCompoundUniqueInput = {
    id_socio: number
    id_asociado: number
  }

  export type AsociadoCountOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrder
    ciudad_nacimiento?: SortOrder
    numero_telefonico?: SortOrder
    ocupacion?: SortOrder
    profesion?: SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
  }

  export type AsociadoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrder
    ciudad_nacimiento?: SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
  }

  export type AsociadoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrder
    ciudad_nacimiento?: SortOrder
    numero_telefonico?: SortOrder
    ocupacion?: SortOrder
    profesion?: SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
  }

  export type AsociadoMinOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombres?: SortOrder
    apellido1re?: SortOrder
    apellido2do?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrder
    ciudad_nacimiento?: SortOrder
    numero_telefonico?: SortOrder
    ocupacion?: SortOrder
    profesion?: SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
  }

  export type AsociadoSumOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_asociado?: SortOrder
    nacionalidad?: SortOrder
    pais_nacimiento?: SortOrder
    estado_nacimiento?: SortOrder
    ciudad_nacimiento?: SortOrder
    miembroPrincipal?: SortOrder
    alimentacion1?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TipoViaScalarRelationFilter = {
    is?: TipoViaWhereInput
    isNot?: TipoViaWhereInput
  }

  export type CodigoPostalScalarRelationFilter = {
    is?: CodigoPostalWhereInput
    isNot?: CodigoPostalWhereInput
  }

  export type DireccionCountOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    nombre_via?: SortOrder
    numero?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    apartamento?: SortOrder
    pueblo?: SortOrder
    nombre_pueblo?: SortOrder
    codigo_postal?: SortOrder
    activa?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    activa?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    nombre_via?: SortOrder
    numero?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    apartamento?: SortOrder
    pueblo?: SortOrder
    nombre_pueblo?: SortOrder
    codigo_postal?: SortOrder
    activa?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    nombre_via?: SortOrder
    numero?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    apartamento?: SortOrder
    pueblo?: SortOrder
    nombre_pueblo?: SortOrder
    codigo_postal?: SortOrder
    activa?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_tipo_via?: SortOrder
    activa?: SortOrder
  }

  export type EstadoCreateNestedManyWithoutPaisInput = {
    create?: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput> | EstadoCreateWithoutPaisInput[] | EstadoUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutPaisInput | EstadoCreateOrConnectWithoutPaisInput[]
    createMany?: EstadoCreateManyPaisInputEnvelope
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
  }

  export type CiudadCreateNestedManyWithoutPaisInput = {
    create?: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput> | CiudadCreateWithoutPaisInput[] | CiudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutPaisInput | CiudadCreateOrConnectWithoutPaisInput[]
    createMany?: CiudadCreateManyPaisInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type CodigoPostalCreateNestedManyWithoutPaisInput = {
    create?: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput> | CodigoPostalCreateWithoutPaisInput[] | CodigoPostalUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutPaisInput | CodigoPostalCreateOrConnectWithoutPaisInput[]
    createMany?: CodigoPostalCreateManyPaisInputEnvelope
    connect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
  }

  export type AsociadoCreateNestedManyWithoutPaisNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput> | AsociadoCreateWithoutPaisNacimientoInput[] | AsociadoUncheckedCreateWithoutPaisNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacimientoInput | AsociadoCreateOrConnectWithoutPaisNacimientoInput[]
    createMany?: AsociadoCreateManyPaisNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type AsociadoCreateNestedManyWithoutPaisNacionalidadInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput> | AsociadoCreateWithoutPaisNacionalidadInput[] | AsociadoUncheckedCreateWithoutPaisNacionalidadInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacionalidadInput | AsociadoCreateOrConnectWithoutPaisNacionalidadInput[]
    createMany?: AsociadoCreateManyPaisNacionalidadInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type EstadoUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput> | EstadoCreateWithoutPaisInput[] | EstadoUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutPaisInput | EstadoCreateOrConnectWithoutPaisInput[]
    createMany?: EstadoCreateManyPaisInputEnvelope
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
  }

  export type CiudadUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput> | CiudadCreateWithoutPaisInput[] | CiudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutPaisInput | CiudadCreateOrConnectWithoutPaisInput[]
    createMany?: CiudadCreateManyPaisInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type CodigoPostalUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput> | CodigoPostalCreateWithoutPaisInput[] | CodigoPostalUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutPaisInput | CodigoPostalCreateOrConnectWithoutPaisInput[]
    createMany?: CodigoPostalCreateManyPaisInputEnvelope
    connect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
  }

  export type AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput> | AsociadoCreateWithoutPaisNacimientoInput[] | AsociadoUncheckedCreateWithoutPaisNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacimientoInput | AsociadoCreateOrConnectWithoutPaisNacimientoInput[]
    createMany?: AsociadoCreateManyPaisNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput> | AsociadoCreateWithoutPaisNacionalidadInput[] | AsociadoUncheckedCreateWithoutPaisNacionalidadInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacionalidadInput | AsociadoCreateOrConnectWithoutPaisNacionalidadInput[]
    createMany?: AsociadoCreateManyPaisNacionalidadInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstadoUpdateManyWithoutPaisNestedInput = {
    create?: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput> | EstadoCreateWithoutPaisInput[] | EstadoUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutPaisInput | EstadoCreateOrConnectWithoutPaisInput[]
    upsert?: EstadoUpsertWithWhereUniqueWithoutPaisInput | EstadoUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: EstadoCreateManyPaisInputEnvelope
    set?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    disconnect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    delete?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    update?: EstadoUpdateWithWhereUniqueWithoutPaisInput | EstadoUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: EstadoUpdateManyWithWhereWithoutPaisInput | EstadoUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
  }

  export type CiudadUpdateManyWithoutPaisNestedInput = {
    create?: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput> | CiudadCreateWithoutPaisInput[] | CiudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutPaisInput | CiudadCreateOrConnectWithoutPaisInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutPaisInput | CiudadUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: CiudadCreateManyPaisInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutPaisInput | CiudadUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutPaisInput | CiudadUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type CodigoPostalUpdateManyWithoutPaisNestedInput = {
    create?: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput> | CodigoPostalCreateWithoutPaisInput[] | CodigoPostalUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutPaisInput | CodigoPostalCreateOrConnectWithoutPaisInput[]
    upsert?: CodigoPostalUpsertWithWhereUniqueWithoutPaisInput | CodigoPostalUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: CodigoPostalCreateManyPaisInputEnvelope
    set?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    disconnect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    delete?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    connect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    update?: CodigoPostalUpdateWithWhereUniqueWithoutPaisInput | CodigoPostalUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: CodigoPostalUpdateManyWithWhereWithoutPaisInput | CodigoPostalUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: CodigoPostalScalarWhereInput | CodigoPostalScalarWhereInput[]
  }

  export type AsociadoUpdateManyWithoutPaisNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput> | AsociadoCreateWithoutPaisNacimientoInput[] | AsociadoUncheckedCreateWithoutPaisNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacimientoInput | AsociadoCreateOrConnectWithoutPaisNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutPaisNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutPaisNacimientoInput[]
    createMany?: AsociadoCreateManyPaisNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutPaisNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutPaisNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutPaisNacimientoInput | AsociadoUpdateManyWithWhereWithoutPaisNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type AsociadoUpdateManyWithoutPaisNacionalidadNestedInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput> | AsociadoCreateWithoutPaisNacionalidadInput[] | AsociadoUncheckedCreateWithoutPaisNacionalidadInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacionalidadInput | AsociadoCreateOrConnectWithoutPaisNacionalidadInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutPaisNacionalidadInput | AsociadoUpsertWithWhereUniqueWithoutPaisNacionalidadInput[]
    createMany?: AsociadoCreateManyPaisNacionalidadInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutPaisNacionalidadInput | AsociadoUpdateWithWhereUniqueWithoutPaisNacionalidadInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutPaisNacionalidadInput | AsociadoUpdateManyWithWhereWithoutPaisNacionalidadInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type EstadoUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput> | EstadoCreateWithoutPaisInput[] | EstadoUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutPaisInput | EstadoCreateOrConnectWithoutPaisInput[]
    upsert?: EstadoUpsertWithWhereUniqueWithoutPaisInput | EstadoUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: EstadoCreateManyPaisInputEnvelope
    set?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    disconnect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    delete?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    update?: EstadoUpdateWithWhereUniqueWithoutPaisInput | EstadoUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: EstadoUpdateManyWithWhereWithoutPaisInput | EstadoUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
  }

  export type CiudadUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput> | CiudadCreateWithoutPaisInput[] | CiudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutPaisInput | CiudadCreateOrConnectWithoutPaisInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutPaisInput | CiudadUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: CiudadCreateManyPaisInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutPaisInput | CiudadUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutPaisInput | CiudadUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput> | CodigoPostalCreateWithoutPaisInput[] | CodigoPostalUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutPaisInput | CodigoPostalCreateOrConnectWithoutPaisInput[]
    upsert?: CodigoPostalUpsertWithWhereUniqueWithoutPaisInput | CodigoPostalUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: CodigoPostalCreateManyPaisInputEnvelope
    set?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    disconnect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    delete?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    connect?: CodigoPostalWhereUniqueInput | CodigoPostalWhereUniqueInput[]
    update?: CodigoPostalUpdateWithWhereUniqueWithoutPaisInput | CodigoPostalUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: CodigoPostalUpdateManyWithWhereWithoutPaisInput | CodigoPostalUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: CodigoPostalScalarWhereInput | CodigoPostalScalarWhereInput[]
  }

  export type AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput> | AsociadoCreateWithoutPaisNacimientoInput[] | AsociadoUncheckedCreateWithoutPaisNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacimientoInput | AsociadoCreateOrConnectWithoutPaisNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutPaisNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutPaisNacimientoInput[]
    createMany?: AsociadoCreateManyPaisNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutPaisNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutPaisNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutPaisNacimientoInput | AsociadoUpdateManyWithWhereWithoutPaisNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput = {
    create?: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput> | AsociadoCreateWithoutPaisNacionalidadInput[] | AsociadoUncheckedCreateWithoutPaisNacionalidadInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutPaisNacionalidadInput | AsociadoCreateOrConnectWithoutPaisNacionalidadInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutPaisNacionalidadInput | AsociadoUpsertWithWhereUniqueWithoutPaisNacionalidadInput[]
    createMany?: AsociadoCreateManyPaisNacionalidadInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutPaisNacionalidadInput | AsociadoUpdateWithWhereUniqueWithoutPaisNacionalidadInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutPaisNacionalidadInput | AsociadoUpdateManyWithWhereWithoutPaisNacionalidadInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type PaisCreateNestedOneWithoutEstadosInput = {
    create?: XOR<PaisCreateWithoutEstadosInput, PaisUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: PaisCreateOrConnectWithoutEstadosInput
    connect?: PaisWhereUniqueInput
  }

  export type CiudadCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput> | CiudadCreateWithoutEstadoInput[] | CiudadUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutEstadoInput | CiudadCreateOrConnectWithoutEstadoInput[]
    createMany?: CiudadCreateManyEstadoInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type AsociadoCreateNestedManyWithoutEstadoNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput> | AsociadoCreateWithoutEstadoNacimientoInput[] | AsociadoUncheckedCreateWithoutEstadoNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutEstadoNacimientoInput | AsociadoCreateOrConnectWithoutEstadoNacimientoInput[]
    createMany?: AsociadoCreateManyEstadoNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type CiudadUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput> | CiudadCreateWithoutEstadoInput[] | CiudadUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutEstadoInput | CiudadCreateOrConnectWithoutEstadoInput[]
    createMany?: CiudadCreateManyEstadoInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type AsociadoUncheckedCreateNestedManyWithoutEstadoNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput> | AsociadoCreateWithoutEstadoNacimientoInput[] | AsociadoUncheckedCreateWithoutEstadoNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutEstadoNacimientoInput | AsociadoCreateOrConnectWithoutEstadoNacimientoInput[]
    createMany?: AsociadoCreateManyEstadoNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type PaisUpdateOneRequiredWithoutEstadosNestedInput = {
    create?: XOR<PaisCreateWithoutEstadosInput, PaisUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: PaisCreateOrConnectWithoutEstadosInput
    upsert?: PaisUpsertWithoutEstadosInput
    connect?: PaisWhereUniqueInput
    update?: XOR<XOR<PaisUpdateToOneWithWhereWithoutEstadosInput, PaisUpdateWithoutEstadosInput>, PaisUncheckedUpdateWithoutEstadosInput>
  }

  export type CiudadUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput> | CiudadCreateWithoutEstadoInput[] | CiudadUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutEstadoInput | CiudadCreateOrConnectWithoutEstadoInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutEstadoInput | CiudadUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CiudadCreateManyEstadoInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutEstadoInput | CiudadUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutEstadoInput | CiudadUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type AsociadoUpdateManyWithoutEstadoNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput> | AsociadoCreateWithoutEstadoNacimientoInput[] | AsociadoUncheckedCreateWithoutEstadoNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutEstadoNacimientoInput | AsociadoCreateOrConnectWithoutEstadoNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutEstadoNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutEstadoNacimientoInput[]
    createMany?: AsociadoCreateManyEstadoNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutEstadoNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutEstadoNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutEstadoNacimientoInput | AsociadoUpdateManyWithWhereWithoutEstadoNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type CiudadUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput> | CiudadCreateWithoutEstadoInput[] | CiudadUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutEstadoInput | CiudadCreateOrConnectWithoutEstadoInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutEstadoInput | CiudadUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CiudadCreateManyEstadoInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutEstadoInput | CiudadUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutEstadoInput | CiudadUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type AsociadoUncheckedUpdateManyWithoutEstadoNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput> | AsociadoCreateWithoutEstadoNacimientoInput[] | AsociadoUncheckedCreateWithoutEstadoNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutEstadoNacimientoInput | AsociadoCreateOrConnectWithoutEstadoNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutEstadoNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutEstadoNacimientoInput[]
    createMany?: AsociadoCreateManyEstadoNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutEstadoNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutEstadoNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutEstadoNacimientoInput | AsociadoUpdateManyWithWhereWithoutEstadoNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type PaisCreateNestedOneWithoutCiudadesInput = {
    create?: XOR<PaisCreateWithoutCiudadesInput, PaisUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutCiudadesInput
    connect?: PaisWhereUniqueInput
  }

  export type EstadoCreateNestedOneWithoutCiudadesInput = {
    create?: XOR<EstadoCreateWithoutCiudadesInput, EstadoUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCiudadesInput
    connect?: EstadoWhereUniqueInput
  }

  export type AsociadoCreateNestedManyWithoutCiudadNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput> | AsociadoCreateWithoutCiudadNacimientoInput[] | AsociadoUncheckedCreateWithoutCiudadNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutCiudadNacimientoInput | AsociadoCreateOrConnectWithoutCiudadNacimientoInput[]
    createMany?: AsociadoCreateManyCiudadNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type AsociadoUncheckedCreateNestedManyWithoutCiudadNacimientoInput = {
    create?: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput> | AsociadoCreateWithoutCiudadNacimientoInput[] | AsociadoUncheckedCreateWithoutCiudadNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutCiudadNacimientoInput | AsociadoCreateOrConnectWithoutCiudadNacimientoInput[]
    createMany?: AsociadoCreateManyCiudadNacimientoInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type PaisUpdateOneRequiredWithoutCiudadesNestedInput = {
    create?: XOR<PaisCreateWithoutCiudadesInput, PaisUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutCiudadesInput
    upsert?: PaisUpsertWithoutCiudadesInput
    connect?: PaisWhereUniqueInput
    update?: XOR<XOR<PaisUpdateToOneWithWhereWithoutCiudadesInput, PaisUpdateWithoutCiudadesInput>, PaisUncheckedUpdateWithoutCiudadesInput>
  }

  export type EstadoUpdateOneWithoutCiudadesNestedInput = {
    create?: XOR<EstadoCreateWithoutCiudadesInput, EstadoUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCiudadesInput
    upsert?: EstadoUpsertWithoutCiudadesInput
    disconnect?: EstadoWhereInput | boolean
    delete?: EstadoWhereInput | boolean
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutCiudadesInput, EstadoUpdateWithoutCiudadesInput>, EstadoUncheckedUpdateWithoutCiudadesInput>
  }

  export type AsociadoUpdateManyWithoutCiudadNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput> | AsociadoCreateWithoutCiudadNacimientoInput[] | AsociadoUncheckedCreateWithoutCiudadNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutCiudadNacimientoInput | AsociadoCreateOrConnectWithoutCiudadNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutCiudadNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutCiudadNacimientoInput[]
    createMany?: AsociadoCreateManyCiudadNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutCiudadNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutCiudadNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutCiudadNacimientoInput | AsociadoUpdateManyWithWhereWithoutCiudadNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsociadoUncheckedUpdateManyWithoutCiudadNacimientoNestedInput = {
    create?: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput> | AsociadoCreateWithoutCiudadNacimientoInput[] | AsociadoUncheckedCreateWithoutCiudadNacimientoInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutCiudadNacimientoInput | AsociadoCreateOrConnectWithoutCiudadNacimientoInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutCiudadNacimientoInput | AsociadoUpsertWithWhereUniqueWithoutCiudadNacimientoInput[]
    createMany?: AsociadoCreateManyCiudadNacimientoInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutCiudadNacimientoInput | AsociadoUpdateWithWhereUniqueWithoutCiudadNacimientoInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutCiudadNacimientoInput | AsociadoUpdateManyWithWhereWithoutCiudadNacimientoInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type PaisCreateNestedOneWithoutCodigosPostalesInput = {
    create?: XOR<PaisCreateWithoutCodigosPostalesInput, PaisUncheckedCreateWithoutCodigosPostalesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutCodigosPostalesInput
    connect?: PaisWhereUniqueInput
  }

  export type DireccionCreateNestedManyWithoutCodigoPostalInput = {
    create?: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput> | DireccionCreateWithoutCodigoPostalInput[] | DireccionUncheckedCreateWithoutCodigoPostalInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCodigoPostalInput | DireccionCreateOrConnectWithoutCodigoPostalInput[]
    createMany?: DireccionCreateManyCodigoPostalInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutCodigoPostalInput = {
    create?: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput> | DireccionCreateWithoutCodigoPostalInput[] | DireccionUncheckedCreateWithoutCodigoPostalInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCodigoPostalInput | DireccionCreateOrConnectWithoutCodigoPostalInput[]
    createMany?: DireccionCreateManyCodigoPostalInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type PaisUpdateOneRequiredWithoutCodigosPostalesNestedInput = {
    create?: XOR<PaisCreateWithoutCodigosPostalesInput, PaisUncheckedCreateWithoutCodigosPostalesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutCodigosPostalesInput
    upsert?: PaisUpsertWithoutCodigosPostalesInput
    connect?: PaisWhereUniqueInput
    update?: XOR<XOR<PaisUpdateToOneWithWhereWithoutCodigosPostalesInput, PaisUpdateWithoutCodigosPostalesInput>, PaisUncheckedUpdateWithoutCodigosPostalesInput>
  }

  export type DireccionUpdateManyWithoutCodigoPostalNestedInput = {
    create?: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput> | DireccionCreateWithoutCodigoPostalInput[] | DireccionUncheckedCreateWithoutCodigoPostalInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCodigoPostalInput | DireccionCreateOrConnectWithoutCodigoPostalInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutCodigoPostalInput | DireccionUpsertWithWhereUniqueWithoutCodigoPostalInput[]
    createMany?: DireccionCreateManyCodigoPostalInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutCodigoPostalInput | DireccionUpdateWithWhereUniqueWithoutCodigoPostalInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutCodigoPostalInput | DireccionUpdateManyWithWhereWithoutCodigoPostalInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type DireccionUncheckedUpdateManyWithoutCodigoPostalNestedInput = {
    create?: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput> | DireccionCreateWithoutCodigoPostalInput[] | DireccionUncheckedCreateWithoutCodigoPostalInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCodigoPostalInput | DireccionCreateOrConnectWithoutCodigoPostalInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutCodigoPostalInput | DireccionUpsertWithWhereUniqueWithoutCodigoPostalInput[]
    createMany?: DireccionCreateManyCodigoPostalInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutCodigoPostalInput | DireccionUpdateWithWhereUniqueWithoutCodigoPostalInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutCodigoPostalInput | DireccionUpdateManyWithWhereWithoutCodigoPostalInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type DireccionCreateNestedManyWithoutTipoViaInput = {
    create?: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput> | DireccionCreateWithoutTipoViaInput[] | DireccionUncheckedCreateWithoutTipoViaInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutTipoViaInput | DireccionCreateOrConnectWithoutTipoViaInput[]
    createMany?: DireccionCreateManyTipoViaInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutTipoViaInput = {
    create?: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput> | DireccionCreateWithoutTipoViaInput[] | DireccionUncheckedCreateWithoutTipoViaInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutTipoViaInput | DireccionCreateOrConnectWithoutTipoViaInput[]
    createMany?: DireccionCreateManyTipoViaInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type DireccionUpdateManyWithoutTipoViaNestedInput = {
    create?: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput> | DireccionCreateWithoutTipoViaInput[] | DireccionUncheckedCreateWithoutTipoViaInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutTipoViaInput | DireccionCreateOrConnectWithoutTipoViaInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutTipoViaInput | DireccionUpsertWithWhereUniqueWithoutTipoViaInput[]
    createMany?: DireccionCreateManyTipoViaInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutTipoViaInput | DireccionUpdateWithWhereUniqueWithoutTipoViaInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutTipoViaInput | DireccionUpdateManyWithWhereWithoutTipoViaInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type DireccionUncheckedUpdateManyWithoutTipoViaNestedInput = {
    create?: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput> | DireccionCreateWithoutTipoViaInput[] | DireccionUncheckedCreateWithoutTipoViaInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutTipoViaInput | DireccionCreateOrConnectWithoutTipoViaInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutTipoViaInput | DireccionUpsertWithWhereUniqueWithoutTipoViaInput[]
    createMany?: DireccionCreateManyTipoViaInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutTipoViaInput | DireccionUpdateWithWhereUniqueWithoutTipoViaInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutTipoViaInput | DireccionUpdateManyWithWhereWithoutTipoViaInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type SocioCreateNestedManyWithoutAdminInput = {
    create?: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput> | SocioCreateWithoutAdminInput[] | SocioUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutAdminInput | SocioCreateOrConnectWithoutAdminInput[]
    createMany?: SocioCreateManyAdminInputEnvelope
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
  }

  export type SocioUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput> | SocioCreateWithoutAdminInput[] | SocioUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutAdminInput | SocioCreateOrConnectWithoutAdminInput[]
    createMany?: SocioCreateManyAdminInputEnvelope
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocioUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput> | SocioCreateWithoutAdminInput[] | SocioUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutAdminInput | SocioCreateOrConnectWithoutAdminInput[]
    upsert?: SocioUpsertWithWhereUniqueWithoutAdminInput | SocioUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SocioCreateManyAdminInputEnvelope
    set?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    disconnect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    delete?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    update?: SocioUpdateWithWhereUniqueWithoutAdminInput | SocioUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SocioUpdateManyWithWhereWithoutAdminInput | SocioUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SocioScalarWhereInput | SocioScalarWhereInput[]
  }

  export type SocioUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput> | SocioCreateWithoutAdminInput[] | SocioUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutAdminInput | SocioCreateOrConnectWithoutAdminInput[]
    upsert?: SocioUpsertWithWhereUniqueWithoutAdminInput | SocioUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SocioCreateManyAdminInputEnvelope
    set?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    disconnect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    delete?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    update?: SocioUpdateWithWhereUniqueWithoutAdminInput | SocioUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SocioUpdateManyWithWhereWithoutAdminInput | SocioUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SocioScalarWhereInput | SocioScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutSociosInput = {
    create?: XOR<AdminCreateWithoutSociosInput, AdminUncheckedCreateWithoutSociosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSociosInput
    connect?: AdminWhereUniqueInput
  }

  export type AsociadoCreateNestedManyWithoutSocioInput = {
    create?: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput> | AsociadoCreateWithoutSocioInput[] | AsociadoUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutSocioInput | AsociadoCreateOrConnectWithoutSocioInput[]
    createMany?: AsociadoCreateManySocioInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type DireccionCreateNestedManyWithoutSocioInput = {
    create?: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput> | DireccionCreateWithoutSocioInput[] | DireccionUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutSocioInput | DireccionCreateOrConnectWithoutSocioInput[]
    createMany?: DireccionCreateManySocioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type AsociadoUncheckedCreateNestedManyWithoutSocioInput = {
    create?: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput> | AsociadoCreateWithoutSocioInput[] | AsociadoUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutSocioInput | AsociadoCreateOrConnectWithoutSocioInput[]
    createMany?: AsociadoCreateManySocioInputEnvelope
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutSocioInput = {
    create?: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput> | DireccionCreateWithoutSocioInput[] | DireccionUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutSocioInput | DireccionCreateOrConnectWithoutSocioInput[]
    createMany?: DireccionCreateManySocioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutSociosNestedInput = {
    create?: XOR<AdminCreateWithoutSociosInput, AdminUncheckedCreateWithoutSociosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSociosInput
    upsert?: AdminUpsertWithoutSociosInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSociosInput, AdminUpdateWithoutSociosInput>, AdminUncheckedUpdateWithoutSociosInput>
  }

  export type AsociadoUpdateManyWithoutSocioNestedInput = {
    create?: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput> | AsociadoCreateWithoutSocioInput[] | AsociadoUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutSocioInput | AsociadoCreateOrConnectWithoutSocioInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutSocioInput | AsociadoUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: AsociadoCreateManySocioInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutSocioInput | AsociadoUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutSocioInput | AsociadoUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type DireccionUpdateManyWithoutSocioNestedInput = {
    create?: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput> | DireccionCreateWithoutSocioInput[] | DireccionUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutSocioInput | DireccionCreateOrConnectWithoutSocioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutSocioInput | DireccionUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: DireccionCreateManySocioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutSocioInput | DireccionUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutSocioInput | DireccionUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type AsociadoUncheckedUpdateManyWithoutSocioNestedInput = {
    create?: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput> | AsociadoCreateWithoutSocioInput[] | AsociadoUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: AsociadoCreateOrConnectWithoutSocioInput | AsociadoCreateOrConnectWithoutSocioInput[]
    upsert?: AsociadoUpsertWithWhereUniqueWithoutSocioInput | AsociadoUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: AsociadoCreateManySocioInputEnvelope
    set?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    disconnect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    delete?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    connect?: AsociadoWhereUniqueInput | AsociadoWhereUniqueInput[]
    update?: AsociadoUpdateWithWhereUniqueWithoutSocioInput | AsociadoUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: AsociadoUpdateManyWithWhereWithoutSocioInput | AsociadoUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
  }

  export type DireccionUncheckedUpdateManyWithoutSocioNestedInput = {
    create?: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput> | DireccionCreateWithoutSocioInput[] | DireccionUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutSocioInput | DireccionCreateOrConnectWithoutSocioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutSocioInput | DireccionUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: DireccionCreateManySocioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutSocioInput | DireccionUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutSocioInput | DireccionUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type SocioCreateNestedOneWithoutAsociadosInput = {
    create?: XOR<SocioCreateWithoutAsociadosInput, SocioUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: SocioCreateOrConnectWithoutAsociadosInput
    connect?: SocioWhereUniqueInput
  }

  export type PaisCreateNestedOneWithoutNacionalidadesInput = {
    create?: XOR<PaisCreateWithoutNacionalidadesInput, PaisUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutNacionalidadesInput
    connect?: PaisWhereUniqueInput
  }

  export type PaisCreateNestedOneWithoutAsociadosInput = {
    create?: XOR<PaisCreateWithoutAsociadosInput, PaisUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: PaisCreateOrConnectWithoutAsociadosInput
    connect?: PaisWhereUniqueInput
  }

  export type EstadoCreateNestedOneWithoutAsociadosInput = {
    create?: XOR<EstadoCreateWithoutAsociadosInput, EstadoUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutAsociadosInput
    connect?: EstadoWhereUniqueInput
  }

  export type CiudadCreateNestedOneWithoutAsociadosInput = {
    create?: XOR<CiudadCreateWithoutAsociadosInput, CiudadUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutAsociadosInput
    connect?: CiudadWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SocioUpdateOneRequiredWithoutAsociadosNestedInput = {
    create?: XOR<SocioCreateWithoutAsociadosInput, SocioUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: SocioCreateOrConnectWithoutAsociadosInput
    upsert?: SocioUpsertWithoutAsociadosInput
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutAsociadosInput, SocioUpdateWithoutAsociadosInput>, SocioUncheckedUpdateWithoutAsociadosInput>
  }

  export type PaisUpdateOneRequiredWithoutNacionalidadesNestedInput = {
    create?: XOR<PaisCreateWithoutNacionalidadesInput, PaisUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: PaisCreateOrConnectWithoutNacionalidadesInput
    upsert?: PaisUpsertWithoutNacionalidadesInput
    connect?: PaisWhereUniqueInput
    update?: XOR<XOR<PaisUpdateToOneWithWhereWithoutNacionalidadesInput, PaisUpdateWithoutNacionalidadesInput>, PaisUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type PaisUpdateOneRequiredWithoutAsociadosNestedInput = {
    create?: XOR<PaisCreateWithoutAsociadosInput, PaisUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: PaisCreateOrConnectWithoutAsociadosInput
    upsert?: PaisUpsertWithoutAsociadosInput
    connect?: PaisWhereUniqueInput
    update?: XOR<XOR<PaisUpdateToOneWithWhereWithoutAsociadosInput, PaisUpdateWithoutAsociadosInput>, PaisUncheckedUpdateWithoutAsociadosInput>
  }

  export type EstadoUpdateOneWithoutAsociadosNestedInput = {
    create?: XOR<EstadoCreateWithoutAsociadosInput, EstadoUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutAsociadosInput
    upsert?: EstadoUpsertWithoutAsociadosInput
    disconnect?: EstadoWhereInput | boolean
    delete?: EstadoWhereInput | boolean
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutAsociadosInput, EstadoUpdateWithoutAsociadosInput>, EstadoUncheckedUpdateWithoutAsociadosInput>
  }

  export type CiudadUpdateOneWithoutAsociadosNestedInput = {
    create?: XOR<CiudadCreateWithoutAsociadosInput, CiudadUncheckedCreateWithoutAsociadosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutAsociadosInput
    upsert?: CiudadUpsertWithoutAsociadosInput
    disconnect?: CiudadWhereInput | boolean
    delete?: CiudadWhereInput | boolean
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutAsociadosInput, CiudadUpdateWithoutAsociadosInput>, CiudadUncheckedUpdateWithoutAsociadosInput>
  }

  export type SocioCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<SocioCreateWithoutDireccionesInput, SocioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: SocioCreateOrConnectWithoutDireccionesInput
    connect?: SocioWhereUniqueInput
  }

  export type TipoViaCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<TipoViaCreateWithoutDireccionesInput, TipoViaUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: TipoViaCreateOrConnectWithoutDireccionesInput
    connect?: TipoViaWhereUniqueInput
  }

  export type CodigoPostalCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<CodigoPostalCreateWithoutDireccionesInput, CodigoPostalUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutDireccionesInput
    connect?: CodigoPostalWhereUniqueInput
  }

  export type SocioUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<SocioCreateWithoutDireccionesInput, SocioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: SocioCreateOrConnectWithoutDireccionesInput
    upsert?: SocioUpsertWithoutDireccionesInput
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutDireccionesInput, SocioUpdateWithoutDireccionesInput>, SocioUncheckedUpdateWithoutDireccionesInput>
  }

  export type TipoViaUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<TipoViaCreateWithoutDireccionesInput, TipoViaUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: TipoViaCreateOrConnectWithoutDireccionesInput
    upsert?: TipoViaUpsertWithoutDireccionesInput
    connect?: TipoViaWhereUniqueInput
    update?: XOR<XOR<TipoViaUpdateToOneWithWhereWithoutDireccionesInput, TipoViaUpdateWithoutDireccionesInput>, TipoViaUncheckedUpdateWithoutDireccionesInput>
  }

  export type CodigoPostalUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<CodigoPostalCreateWithoutDireccionesInput, CodigoPostalUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: CodigoPostalCreateOrConnectWithoutDireccionesInput
    upsert?: CodigoPostalUpsertWithoutDireccionesInput
    connect?: CodigoPostalWhereUniqueInput
    update?: XOR<XOR<CodigoPostalUpdateToOneWithWhereWithoutDireccionesInput, CodigoPostalUpdateWithoutDireccionesInput>, CodigoPostalUncheckedUpdateWithoutDireccionesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EstadoCreateWithoutPaisInput = {
    id_estado_cid: string
    estado: string
    capital: string
    ciudades?: CiudadCreateNestedManyWithoutEstadoInput
    asociados?: AsociadoCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoUncheckedCreateWithoutPaisInput = {
    id?: number
    id_estado_cid: string
    estado: string
    capital: string
    ciudades?: CiudadUncheckedCreateNestedManyWithoutEstadoInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoCreateOrConnectWithoutPaisInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput>
  }

  export type EstadoCreateManyPaisInputEnvelope = {
    data: EstadoCreateManyPaisInput | EstadoCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type CiudadCreateWithoutPaisInput = {
    id_ciudad: number
    ciudad: string
    estado?: EstadoCreateNestedOneWithoutCiudadesInput
    asociados?: AsociadoCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadUncheckedCreateWithoutPaisInput = {
    id?: number
    id_estado?: number | null
    id_ciudad: number
    ciudad: string
    asociados?: AsociadoUncheckedCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadCreateOrConnectWithoutPaisInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput>
  }

  export type CiudadCreateManyPaisInputEnvelope = {
    data: CiudadCreateManyPaisInput | CiudadCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type CodigoPostalCreateWithoutPaisInput = {
    provincia: string
    ciudad: string
    cp: string
    direcciones?: DireccionCreateNestedManyWithoutCodigoPostalInput
  }

  export type CodigoPostalUncheckedCreateWithoutPaisInput = {
    id?: number
    provincia: string
    ciudad: string
    cp: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutCodigoPostalInput
  }

  export type CodigoPostalCreateOrConnectWithoutPaisInput = {
    where: CodigoPostalWhereUniqueInput
    create: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput>
  }

  export type CodigoPostalCreateManyPaisInputEnvelope = {
    data: CodigoPostalCreateManyPaisInput | CodigoPostalCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type AsociadoCreateWithoutPaisNacimientoInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    socio: SocioCreateNestedOneWithoutAsociadosInput
    paisNacionalidad: PaisCreateNestedOneWithoutNacionalidadesInput
    estadoNacimiento?: EstadoCreateNestedOneWithoutAsociadosInput
    ciudadNacimiento?: CiudadCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateWithoutPaisNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateOrConnectWithoutPaisNacimientoInput = {
    where: AsociadoWhereUniqueInput
    create: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput>
  }

  export type AsociadoCreateManyPaisNacimientoInputEnvelope = {
    data: AsociadoCreateManyPaisNacimientoInput | AsociadoCreateManyPaisNacimientoInput[]
    skipDuplicates?: boolean
  }

  export type AsociadoCreateWithoutPaisNacionalidadInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    socio: SocioCreateNestedOneWithoutAsociadosInput
    paisNacimiento: PaisCreateNestedOneWithoutAsociadosInput
    estadoNacimiento?: EstadoCreateNestedOneWithoutAsociadosInput
    ciudadNacimiento?: CiudadCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateWithoutPaisNacionalidadInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateOrConnectWithoutPaisNacionalidadInput = {
    where: AsociadoWhereUniqueInput
    create: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput>
  }

  export type AsociadoCreateManyPaisNacionalidadInputEnvelope = {
    data: AsociadoCreateManyPaisNacionalidadInput | AsociadoCreateManyPaisNacionalidadInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithWhereUniqueWithoutPaisInput = {
    where: EstadoWhereUniqueInput
    update: XOR<EstadoUpdateWithoutPaisInput, EstadoUncheckedUpdateWithoutPaisInput>
    create: XOR<EstadoCreateWithoutPaisInput, EstadoUncheckedCreateWithoutPaisInput>
  }

  export type EstadoUpdateWithWhereUniqueWithoutPaisInput = {
    where: EstadoWhereUniqueInput
    data: XOR<EstadoUpdateWithoutPaisInput, EstadoUncheckedUpdateWithoutPaisInput>
  }

  export type EstadoUpdateManyWithWhereWithoutPaisInput = {
    where: EstadoScalarWhereInput
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyWithoutPaisInput>
  }

  export type EstadoScalarWhereInput = {
    AND?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
    OR?: EstadoScalarWhereInput[]
    NOT?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
    id?: IntFilter<"Estado"> | number
    id_pais?: IntFilter<"Estado"> | number
    id_estado_cid?: StringFilter<"Estado"> | string
    estado?: StringFilter<"Estado"> | string
    capital?: StringFilter<"Estado"> | string
  }

  export type CiudadUpsertWithWhereUniqueWithoutPaisInput = {
    where: CiudadWhereUniqueInput
    update: XOR<CiudadUpdateWithoutPaisInput, CiudadUncheckedUpdateWithoutPaisInput>
    create: XOR<CiudadCreateWithoutPaisInput, CiudadUncheckedCreateWithoutPaisInput>
  }

  export type CiudadUpdateWithWhereUniqueWithoutPaisInput = {
    where: CiudadWhereUniqueInput
    data: XOR<CiudadUpdateWithoutPaisInput, CiudadUncheckedUpdateWithoutPaisInput>
  }

  export type CiudadUpdateManyWithWhereWithoutPaisInput = {
    where: CiudadScalarWhereInput
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyWithoutPaisInput>
  }

  export type CiudadScalarWhereInput = {
    AND?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
    OR?: CiudadScalarWhereInput[]
    NOT?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
    id?: IntFilter<"Ciudad"> | number
    id_pais?: IntFilter<"Ciudad"> | number
    id_estado?: IntNullableFilter<"Ciudad"> | number | null
    id_ciudad?: IntFilter<"Ciudad"> | number
    ciudad?: StringFilter<"Ciudad"> | string
  }

  export type CodigoPostalUpsertWithWhereUniqueWithoutPaisInput = {
    where: CodigoPostalWhereUniqueInput
    update: XOR<CodigoPostalUpdateWithoutPaisInput, CodigoPostalUncheckedUpdateWithoutPaisInput>
    create: XOR<CodigoPostalCreateWithoutPaisInput, CodigoPostalUncheckedCreateWithoutPaisInput>
  }

  export type CodigoPostalUpdateWithWhereUniqueWithoutPaisInput = {
    where: CodigoPostalWhereUniqueInput
    data: XOR<CodigoPostalUpdateWithoutPaisInput, CodigoPostalUncheckedUpdateWithoutPaisInput>
  }

  export type CodigoPostalUpdateManyWithWhereWithoutPaisInput = {
    where: CodigoPostalScalarWhereInput
    data: XOR<CodigoPostalUpdateManyMutationInput, CodigoPostalUncheckedUpdateManyWithoutPaisInput>
  }

  export type CodigoPostalScalarWhereInput = {
    AND?: CodigoPostalScalarWhereInput | CodigoPostalScalarWhereInput[]
    OR?: CodigoPostalScalarWhereInput[]
    NOT?: CodigoPostalScalarWhereInput | CodigoPostalScalarWhereInput[]
    id?: IntFilter<"CodigoPostal"> | number
    provincia?: StringFilter<"CodigoPostal"> | string
    ciudad?: StringFilter<"CodigoPostal"> | string
    cp?: StringFilter<"CodigoPostal"> | string
    id_pais?: IntFilter<"CodigoPostal"> | number
  }

  export type AsociadoUpsertWithWhereUniqueWithoutPaisNacimientoInput = {
    where: AsociadoWhereUniqueInput
    update: XOR<AsociadoUpdateWithoutPaisNacimientoInput, AsociadoUncheckedUpdateWithoutPaisNacimientoInput>
    create: XOR<AsociadoCreateWithoutPaisNacimientoInput, AsociadoUncheckedCreateWithoutPaisNacimientoInput>
  }

  export type AsociadoUpdateWithWhereUniqueWithoutPaisNacimientoInput = {
    where: AsociadoWhereUniqueInput
    data: XOR<AsociadoUpdateWithoutPaisNacimientoInput, AsociadoUncheckedUpdateWithoutPaisNacimientoInput>
  }

  export type AsociadoUpdateManyWithWhereWithoutPaisNacimientoInput = {
    where: AsociadoScalarWhereInput
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyWithoutPaisNacimientoInput>
  }

  export type AsociadoScalarWhereInput = {
    AND?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
    OR?: AsociadoScalarWhereInput[]
    NOT?: AsociadoScalarWhereInput | AsociadoScalarWhereInput[]
    id?: IntFilter<"Asociado"> | number
    id_socio?: IntFilter<"Asociado"> | number
    id_asociado?: IntFilter<"Asociado"> | number
    tipo_documento?: StringFilter<"Asociado"> | string
    numero_documento?: StringFilter<"Asociado"> | string
    nombres?: StringFilter<"Asociado"> | string
    apellido1re?: StringFilter<"Asociado"> | string
    apellido2do?: StringFilter<"Asociado"> | string
    fecha_nacimiento?: DateTimeFilter<"Asociado"> | Date | string
    genero?: StringFilter<"Asociado"> | string
    nacionalidad?: IntFilter<"Asociado"> | number
    pais_nacimiento?: IntFilter<"Asociado"> | number
    estado_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    ciudad_nacimiento?: IntNullableFilter<"Asociado"> | number | null
    numero_telefonico?: StringNullableFilter<"Asociado"> | string | null
    ocupacion?: StringNullableFilter<"Asociado"> | string | null
    profesion?: StringNullableFilter<"Asociado"> | string | null
    miembroPrincipal?: IntFilter<"Asociado"> | number
    alimentacion1?: IntFilter<"Asociado"> | number
  }

  export type AsociadoUpsertWithWhereUniqueWithoutPaisNacionalidadInput = {
    where: AsociadoWhereUniqueInput
    update: XOR<AsociadoUpdateWithoutPaisNacionalidadInput, AsociadoUncheckedUpdateWithoutPaisNacionalidadInput>
    create: XOR<AsociadoCreateWithoutPaisNacionalidadInput, AsociadoUncheckedCreateWithoutPaisNacionalidadInput>
  }

  export type AsociadoUpdateWithWhereUniqueWithoutPaisNacionalidadInput = {
    where: AsociadoWhereUniqueInput
    data: XOR<AsociadoUpdateWithoutPaisNacionalidadInput, AsociadoUncheckedUpdateWithoutPaisNacionalidadInput>
  }

  export type AsociadoUpdateManyWithWhereWithoutPaisNacionalidadInput = {
    where: AsociadoScalarWhereInput
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyWithoutPaisNacionalidadInput>
  }

  export type PaisCreateWithoutEstadosInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    ciudades?: CiudadCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalCreateNestedManyWithoutPaisInput
    asociados?: AsociadoCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUncheckedCreateWithoutEstadosInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    ciudades?: CiudadUncheckedCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalUncheckedCreateNestedManyWithoutPaisInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisCreateOrConnectWithoutEstadosInput = {
    where: PaisWhereUniqueInput
    create: XOR<PaisCreateWithoutEstadosInput, PaisUncheckedCreateWithoutEstadosInput>
  }

  export type CiudadCreateWithoutEstadoInput = {
    id_ciudad: number
    ciudad: string
    pais: PaisCreateNestedOneWithoutCiudadesInput
    asociados?: AsociadoCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadUncheckedCreateWithoutEstadoInput = {
    id?: number
    id_pais: number
    id_ciudad: number
    ciudad: string
    asociados?: AsociadoUncheckedCreateNestedManyWithoutCiudadNacimientoInput
  }

  export type CiudadCreateOrConnectWithoutEstadoInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput>
  }

  export type CiudadCreateManyEstadoInputEnvelope = {
    data: CiudadCreateManyEstadoInput | CiudadCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type AsociadoCreateWithoutEstadoNacimientoInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    socio: SocioCreateNestedOneWithoutAsociadosInput
    paisNacionalidad: PaisCreateNestedOneWithoutNacionalidadesInput
    paisNacimiento: PaisCreateNestedOneWithoutAsociadosInput
    ciudadNacimiento?: CiudadCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateWithoutEstadoNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateOrConnectWithoutEstadoNacimientoInput = {
    where: AsociadoWhereUniqueInput
    create: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput>
  }

  export type AsociadoCreateManyEstadoNacimientoInputEnvelope = {
    data: AsociadoCreateManyEstadoNacimientoInput | AsociadoCreateManyEstadoNacimientoInput[]
    skipDuplicates?: boolean
  }

  export type PaisUpsertWithoutEstadosInput = {
    update: XOR<PaisUpdateWithoutEstadosInput, PaisUncheckedUpdateWithoutEstadosInput>
    create: XOR<PaisCreateWithoutEstadosInput, PaisUncheckedCreateWithoutEstadosInput>
    where?: PaisWhereInput
  }

  export type PaisUpdateToOneWithWhereWithoutEstadosInput = {
    where?: PaisWhereInput
    data: XOR<PaisUpdateWithoutEstadosInput, PaisUncheckedUpdateWithoutEstadosInput>
  }

  export type PaisUpdateWithoutEstadosInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisUncheckedUpdateWithoutEstadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUncheckedUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type CiudadUpsertWithWhereUniqueWithoutEstadoInput = {
    where: CiudadWhereUniqueInput
    update: XOR<CiudadUpdateWithoutEstadoInput, CiudadUncheckedUpdateWithoutEstadoInput>
    create: XOR<CiudadCreateWithoutEstadoInput, CiudadUncheckedCreateWithoutEstadoInput>
  }

  export type CiudadUpdateWithWhereUniqueWithoutEstadoInput = {
    where: CiudadWhereUniqueInput
    data: XOR<CiudadUpdateWithoutEstadoInput, CiudadUncheckedUpdateWithoutEstadoInput>
  }

  export type CiudadUpdateManyWithWhereWithoutEstadoInput = {
    where: CiudadScalarWhereInput
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyWithoutEstadoInput>
  }

  export type AsociadoUpsertWithWhereUniqueWithoutEstadoNacimientoInput = {
    where: AsociadoWhereUniqueInput
    update: XOR<AsociadoUpdateWithoutEstadoNacimientoInput, AsociadoUncheckedUpdateWithoutEstadoNacimientoInput>
    create: XOR<AsociadoCreateWithoutEstadoNacimientoInput, AsociadoUncheckedCreateWithoutEstadoNacimientoInput>
  }

  export type AsociadoUpdateWithWhereUniqueWithoutEstadoNacimientoInput = {
    where: AsociadoWhereUniqueInput
    data: XOR<AsociadoUpdateWithoutEstadoNacimientoInput, AsociadoUncheckedUpdateWithoutEstadoNacimientoInput>
  }

  export type AsociadoUpdateManyWithWhereWithoutEstadoNacimientoInput = {
    where: AsociadoScalarWhereInput
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyWithoutEstadoNacimientoInput>
  }

  export type PaisCreateWithoutCiudadesInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalCreateNestedManyWithoutPaisInput
    asociados?: AsociadoCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUncheckedCreateWithoutCiudadesInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoUncheckedCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalUncheckedCreateNestedManyWithoutPaisInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisCreateOrConnectWithoutCiudadesInput = {
    where: PaisWhereUniqueInput
    create: XOR<PaisCreateWithoutCiudadesInput, PaisUncheckedCreateWithoutCiudadesInput>
  }

  export type EstadoCreateWithoutCiudadesInput = {
    id_estado_cid: string
    estado: string
    capital: string
    pais: PaisCreateNestedOneWithoutEstadosInput
    asociados?: AsociadoCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoUncheckedCreateWithoutCiudadesInput = {
    id?: number
    id_pais: number
    id_estado_cid: string
    estado: string
    capital: string
    asociados?: AsociadoUncheckedCreateNestedManyWithoutEstadoNacimientoInput
  }

  export type EstadoCreateOrConnectWithoutCiudadesInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutCiudadesInput, EstadoUncheckedCreateWithoutCiudadesInput>
  }

  export type AsociadoCreateWithoutCiudadNacimientoInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    socio: SocioCreateNestedOneWithoutAsociadosInput
    paisNacionalidad: PaisCreateNestedOneWithoutNacionalidadesInput
    paisNacimiento: PaisCreateNestedOneWithoutAsociadosInput
    estadoNacimiento?: EstadoCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateWithoutCiudadNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateOrConnectWithoutCiudadNacimientoInput = {
    where: AsociadoWhereUniqueInput
    create: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput>
  }

  export type AsociadoCreateManyCiudadNacimientoInputEnvelope = {
    data: AsociadoCreateManyCiudadNacimientoInput | AsociadoCreateManyCiudadNacimientoInput[]
    skipDuplicates?: boolean
  }

  export type PaisUpsertWithoutCiudadesInput = {
    update: XOR<PaisUpdateWithoutCiudadesInput, PaisUncheckedUpdateWithoutCiudadesInput>
    create: XOR<PaisCreateWithoutCiudadesInput, PaisUncheckedCreateWithoutCiudadesInput>
    where?: PaisWhereInput
  }

  export type PaisUpdateToOneWithWhereWithoutCiudadesInput = {
    where?: PaisWhereInput
    data: XOR<PaisUpdateWithoutCiudadesInput, PaisUncheckedUpdateWithoutCiudadesInput>
  }

  export type PaisUpdateWithoutCiudadesInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisUncheckedUpdateWithoutCiudadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUncheckedUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type EstadoUpsertWithoutCiudadesInput = {
    update: XOR<EstadoUpdateWithoutCiudadesInput, EstadoUncheckedUpdateWithoutCiudadesInput>
    create: XOR<EstadoCreateWithoutCiudadesInput, EstadoUncheckedCreateWithoutCiudadesInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutCiudadesInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutCiudadesInput, EstadoUncheckedUpdateWithoutCiudadesInput>
  }

  export type EstadoUpdateWithoutCiudadesInput = {
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutEstadosNestedInput
    asociados?: AsociadoUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type EstadoUncheckedUpdateWithoutCiudadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    asociados?: AsociadoUncheckedUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type AsociadoUpsertWithWhereUniqueWithoutCiudadNacimientoInput = {
    where: AsociadoWhereUniqueInput
    update: XOR<AsociadoUpdateWithoutCiudadNacimientoInput, AsociadoUncheckedUpdateWithoutCiudadNacimientoInput>
    create: XOR<AsociadoCreateWithoutCiudadNacimientoInput, AsociadoUncheckedCreateWithoutCiudadNacimientoInput>
  }

  export type AsociadoUpdateWithWhereUniqueWithoutCiudadNacimientoInput = {
    where: AsociadoWhereUniqueInput
    data: XOR<AsociadoUpdateWithoutCiudadNacimientoInput, AsociadoUncheckedUpdateWithoutCiudadNacimientoInput>
  }

  export type AsociadoUpdateManyWithWhereWithoutCiudadNacimientoInput = {
    where: AsociadoScalarWhereInput
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyWithoutCiudadNacimientoInput>
  }

  export type PaisCreateWithoutCodigosPostalesInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoCreateNestedManyWithoutPaisInput
    ciudades?: CiudadCreateNestedManyWithoutPaisInput
    asociados?: AsociadoCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUncheckedCreateWithoutCodigosPostalesInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoUncheckedCreateNestedManyWithoutPaisInput
    ciudades?: CiudadUncheckedCreateNestedManyWithoutPaisInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput
    nacionalidades?: AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisCreateOrConnectWithoutCodigosPostalesInput = {
    where: PaisWhereUniqueInput
    create: XOR<PaisCreateWithoutCodigosPostalesInput, PaisUncheckedCreateWithoutCodigosPostalesInput>
  }

  export type DireccionCreateWithoutCodigoPostalInput = {
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
    socio: SocioCreateNestedOneWithoutDireccionesInput
    tipoVia: TipoViaCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateWithoutCodigoPostalInput = {
    id?: number
    id_socio: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
  }

  export type DireccionCreateOrConnectWithoutCodigoPostalInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput>
  }

  export type DireccionCreateManyCodigoPostalInputEnvelope = {
    data: DireccionCreateManyCodigoPostalInput | DireccionCreateManyCodigoPostalInput[]
    skipDuplicates?: boolean
  }

  export type PaisUpsertWithoutCodigosPostalesInput = {
    update: XOR<PaisUpdateWithoutCodigosPostalesInput, PaisUncheckedUpdateWithoutCodigosPostalesInput>
    create: XOR<PaisCreateWithoutCodigosPostalesInput, PaisUncheckedCreateWithoutCodigosPostalesInput>
    where?: PaisWhereInput
  }

  export type PaisUpdateToOneWithWhereWithoutCodigosPostalesInput = {
    where?: PaisWhereInput
    data: XOR<PaisUpdateWithoutCodigosPostalesInput, PaisUncheckedUpdateWithoutCodigosPostalesInput>
  }

  export type PaisUpdateWithoutCodigosPostalesInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisUncheckedUpdateWithoutCodigosPostalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUncheckedUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUncheckedUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput
    nacionalidades?: AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type DireccionUpsertWithWhereUniqueWithoutCodigoPostalInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutCodigoPostalInput, DireccionUncheckedUpdateWithoutCodigoPostalInput>
    create: XOR<DireccionCreateWithoutCodigoPostalInput, DireccionUncheckedCreateWithoutCodigoPostalInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutCodigoPostalInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutCodigoPostalInput, DireccionUncheckedUpdateWithoutCodigoPostalInput>
  }

  export type DireccionUpdateManyWithWhereWithoutCodigoPostalInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutCodigoPostalInput>
  }

  export type DireccionScalarWhereInput = {
    AND?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    OR?: DireccionScalarWhereInput[]
    NOT?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    id?: IntFilter<"Direccion"> | number
    id_socio?: IntFilter<"Direccion"> | number
    id_tipo_via?: IntFilter<"Direccion"> | number
    nombre_via?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    portal?: StringFilter<"Direccion"> | string
    piso?: StringFilter<"Direccion"> | string
    apartamento?: StringFilter<"Direccion"> | string
    pueblo?: StringFilter<"Direccion"> | string
    nombre_pueblo?: StringFilter<"Direccion"> | string
    codigo_postal?: StringFilter<"Direccion"> | string
    activa?: IntFilter<"Direccion"> | number
  }

  export type DireccionCreateWithoutTipoViaInput = {
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
    socio: SocioCreateNestedOneWithoutDireccionesInput
    codigoPostal: CodigoPostalCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateWithoutTipoViaInput = {
    id?: number
    id_socio: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type DireccionCreateOrConnectWithoutTipoViaInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput>
  }

  export type DireccionCreateManyTipoViaInputEnvelope = {
    data: DireccionCreateManyTipoViaInput | DireccionCreateManyTipoViaInput[]
    skipDuplicates?: boolean
  }

  export type DireccionUpsertWithWhereUniqueWithoutTipoViaInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutTipoViaInput, DireccionUncheckedUpdateWithoutTipoViaInput>
    create: XOR<DireccionCreateWithoutTipoViaInput, DireccionUncheckedCreateWithoutTipoViaInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutTipoViaInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutTipoViaInput, DireccionUncheckedUpdateWithoutTipoViaInput>
  }

  export type DireccionUpdateManyWithWhereWithoutTipoViaInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutTipoViaInput>
  }

  export type SocioCreateWithoutAdminInput = {
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    asociados?: AsociadoCreateNestedManyWithoutSocioInput
    direcciones?: DireccionCreateNestedManyWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutAdminInput = {
    id?: number
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    asociados?: AsociadoUncheckedCreateNestedManyWithoutSocioInput
    direcciones?: DireccionUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutAdminInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput>
  }

  export type SocioCreateManyAdminInputEnvelope = {
    data: SocioCreateManyAdminInput | SocioCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SocioUpsertWithWhereUniqueWithoutAdminInput = {
    where: SocioWhereUniqueInput
    update: XOR<SocioUpdateWithoutAdminInput, SocioUncheckedUpdateWithoutAdminInput>
    create: XOR<SocioCreateWithoutAdminInput, SocioUncheckedCreateWithoutAdminInput>
  }

  export type SocioUpdateWithWhereUniqueWithoutAdminInput = {
    where: SocioWhereUniqueInput
    data: XOR<SocioUpdateWithoutAdminInput, SocioUncheckedUpdateWithoutAdminInput>
  }

  export type SocioUpdateManyWithWhereWithoutAdminInput = {
    where: SocioScalarWhereInput
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyWithoutAdminInput>
  }

  export type SocioScalarWhereInput = {
    AND?: SocioScalarWhereInput | SocioScalarWhereInput[]
    OR?: SocioScalarWhereInput[]
    NOT?: SocioScalarWhereInput | SocioScalarWhereInput[]
    id?: IntFilter<"Socio"> | number
    id_socio?: IntFilter<"Socio"> | number
    id_admin?: IntFilter<"Socio"> | number
    nombres?: StringFilter<"Socio"> | string
    apellido1re?: StringFilter<"Socio"> | string
    apellido2do?: StringFilter<"Socio"> | string
    miembroprincipal?: IntFilter<"Socio"> | number
  }

  export type AdminCreateWithoutSociosInput = {
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol?: string
    activo?: number
    fecha_creacion?: Date | string
  }

  export type AdminUncheckedCreateWithoutSociosInput = {
    id?: number
    usuario: string
    password: string
    nombres: string
    apellido1re: string
    apellido2do: string
    rol?: string
    activo?: number
    fecha_creacion?: Date | string
  }

  export type AdminCreateOrConnectWithoutSociosInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSociosInput, AdminUncheckedCreateWithoutSociosInput>
  }

  export type AsociadoCreateWithoutSocioInput = {
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
    paisNacionalidad: PaisCreateNestedOneWithoutNacionalidadesInput
    paisNacimiento: PaisCreateNestedOneWithoutAsociadosInput
    estadoNacimiento?: EstadoCreateNestedOneWithoutAsociadosInput
    ciudadNacimiento?: CiudadCreateNestedOneWithoutAsociadosInput
  }

  export type AsociadoUncheckedCreateWithoutSocioInput = {
    id?: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateOrConnectWithoutSocioInput = {
    where: AsociadoWhereUniqueInput
    create: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput>
  }

  export type AsociadoCreateManySocioInputEnvelope = {
    data: AsociadoCreateManySocioInput | AsociadoCreateManySocioInput[]
    skipDuplicates?: boolean
  }

  export type DireccionCreateWithoutSocioInput = {
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
    tipoVia: TipoViaCreateNestedOneWithoutDireccionesInput
    codigoPostal: CodigoPostalCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateWithoutSocioInput = {
    id?: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type DireccionCreateOrConnectWithoutSocioInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput>
  }

  export type DireccionCreateManySocioInputEnvelope = {
    data: DireccionCreateManySocioInput | DireccionCreateManySocioInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutSociosInput = {
    update: XOR<AdminUpdateWithoutSociosInput, AdminUncheckedUpdateWithoutSociosInput>
    create: XOR<AdminCreateWithoutSociosInput, AdminUncheckedCreateWithoutSociosInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSociosInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSociosInput, AdminUncheckedUpdateWithoutSociosInput>
  }

  export type AdminUpdateWithoutSociosInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsociadoUpsertWithWhereUniqueWithoutSocioInput = {
    where: AsociadoWhereUniqueInput
    update: XOR<AsociadoUpdateWithoutSocioInput, AsociadoUncheckedUpdateWithoutSocioInput>
    create: XOR<AsociadoCreateWithoutSocioInput, AsociadoUncheckedCreateWithoutSocioInput>
  }

  export type AsociadoUpdateWithWhereUniqueWithoutSocioInput = {
    where: AsociadoWhereUniqueInput
    data: XOR<AsociadoUpdateWithoutSocioInput, AsociadoUncheckedUpdateWithoutSocioInput>
  }

  export type AsociadoUpdateManyWithWhereWithoutSocioInput = {
    where: AsociadoScalarWhereInput
    data: XOR<AsociadoUpdateManyMutationInput, AsociadoUncheckedUpdateManyWithoutSocioInput>
  }

  export type DireccionUpsertWithWhereUniqueWithoutSocioInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutSocioInput, DireccionUncheckedUpdateWithoutSocioInput>
    create: XOR<DireccionCreateWithoutSocioInput, DireccionUncheckedCreateWithoutSocioInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutSocioInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutSocioInput, DireccionUncheckedUpdateWithoutSocioInput>
  }

  export type DireccionUpdateManyWithWhereWithoutSocioInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutSocioInput>
  }

  export type SocioCreateWithoutAsociadosInput = {
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    admin: AdminCreateNestedOneWithoutSociosInput
    direcciones?: DireccionCreateNestedManyWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutAsociadosInput = {
    id?: number
    id_socio: number
    id_admin: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    direcciones?: DireccionUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutAsociadosInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutAsociadosInput, SocioUncheckedCreateWithoutAsociadosInput>
  }

  export type PaisCreateWithoutNacionalidadesInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoCreateNestedManyWithoutPaisInput
    ciudades?: CiudadCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalCreateNestedManyWithoutPaisInput
    asociados?: AsociadoCreateNestedManyWithoutPaisNacimientoInput
  }

  export type PaisUncheckedCreateWithoutNacionalidadesInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoUncheckedCreateNestedManyWithoutPaisInput
    ciudades?: CiudadUncheckedCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalUncheckedCreateNestedManyWithoutPaisInput
    asociados?: AsociadoUncheckedCreateNestedManyWithoutPaisNacimientoInput
  }

  export type PaisCreateOrConnectWithoutNacionalidadesInput = {
    where: PaisWhereUniqueInput
    create: XOR<PaisCreateWithoutNacionalidadesInput, PaisUncheckedCreateWithoutNacionalidadesInput>
  }

  export type PaisCreateWithoutAsociadosInput = {
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoCreateNestedManyWithoutPaisInput
    ciudades?: CiudadCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalCreateNestedManyWithoutPaisInput
    nacionalidades?: AsociadoCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisUncheckedCreateWithoutAsociadosInput = {
    id?: number
    pais_nro: number
    pais: string
    codigo: string
    iso_2: string
    iso_3: string
    moneda: string
    continente: string
    estados?: EstadoUncheckedCreateNestedManyWithoutPaisInput
    ciudades?: CiudadUncheckedCreateNestedManyWithoutPaisInput
    codigosPostales?: CodigoPostalUncheckedCreateNestedManyWithoutPaisInput
    nacionalidades?: AsociadoUncheckedCreateNestedManyWithoutPaisNacionalidadInput
  }

  export type PaisCreateOrConnectWithoutAsociadosInput = {
    where: PaisWhereUniqueInput
    create: XOR<PaisCreateWithoutAsociadosInput, PaisUncheckedCreateWithoutAsociadosInput>
  }

  export type EstadoCreateWithoutAsociadosInput = {
    id_estado_cid: string
    estado: string
    capital: string
    pais: PaisCreateNestedOneWithoutEstadosInput
    ciudades?: CiudadCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUncheckedCreateWithoutAsociadosInput = {
    id?: number
    id_pais: number
    id_estado_cid: string
    estado: string
    capital: string
    ciudades?: CiudadUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoCreateOrConnectWithoutAsociadosInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutAsociadosInput, EstadoUncheckedCreateWithoutAsociadosInput>
  }

  export type CiudadCreateWithoutAsociadosInput = {
    id_ciudad: number
    ciudad: string
    pais: PaisCreateNestedOneWithoutCiudadesInput
    estado?: EstadoCreateNestedOneWithoutCiudadesInput
  }

  export type CiudadUncheckedCreateWithoutAsociadosInput = {
    id?: number
    id_pais: number
    id_estado?: number | null
    id_ciudad: number
    ciudad: string
  }

  export type CiudadCreateOrConnectWithoutAsociadosInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutAsociadosInput, CiudadUncheckedCreateWithoutAsociadosInput>
  }

  export type SocioUpsertWithoutAsociadosInput = {
    update: XOR<SocioUpdateWithoutAsociadosInput, SocioUncheckedUpdateWithoutAsociadosInput>
    create: XOR<SocioCreateWithoutAsociadosInput, SocioUncheckedCreateWithoutAsociadosInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutAsociadosInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutAsociadosInput, SocioUncheckedUpdateWithoutAsociadosInput>
  }

  export type SocioUpdateWithoutAsociadosInput = {
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    admin?: AdminUpdateOneRequiredWithoutSociosNestedInput
    direcciones?: DireccionUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutAsociadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    direcciones?: DireccionUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type PaisUpsertWithoutNacionalidadesInput = {
    update: XOR<PaisUpdateWithoutNacionalidadesInput, PaisUncheckedUpdateWithoutNacionalidadesInput>
    create: XOR<PaisCreateWithoutNacionalidadesInput, PaisUncheckedCreateWithoutNacionalidadesInput>
    where?: PaisWhereInput
  }

  export type PaisUpdateToOneWithWhereWithoutNacionalidadesInput = {
    where?: PaisWhereInput
    data: XOR<PaisUpdateWithoutNacionalidadesInput, PaisUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type PaisUpdateWithoutNacionalidadesInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUpdateManyWithoutPaisNacimientoNestedInput
  }

  export type PaisUncheckedUpdateWithoutNacionalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUncheckedUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUncheckedUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutPaisNacimientoNestedInput
  }

  export type PaisUpsertWithoutAsociadosInput = {
    update: XOR<PaisUpdateWithoutAsociadosInput, PaisUncheckedUpdateWithoutAsociadosInput>
    create: XOR<PaisCreateWithoutAsociadosInput, PaisUncheckedCreateWithoutAsociadosInput>
    where?: PaisWhereInput
  }

  export type PaisUpdateToOneWithWhereWithoutAsociadosInput = {
    where?: PaisWhereInput
    data: XOR<PaisUpdateWithoutAsociadosInput, PaisUncheckedUpdateWithoutAsociadosInput>
  }

  export type PaisUpdateWithoutAsociadosInput = {
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUpdateManyWithoutPaisNestedInput
    nacionalidades?: AsociadoUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type PaisUncheckedUpdateWithoutAsociadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pais_nro?: IntFieldUpdateOperationsInput | number
    pais?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    iso_2?: StringFieldUpdateOperationsInput | string
    iso_3?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    continente?: StringFieldUpdateOperationsInput | string
    estados?: EstadoUncheckedUpdateManyWithoutPaisNestedInput
    ciudades?: CiudadUncheckedUpdateManyWithoutPaisNestedInput
    codigosPostales?: CodigoPostalUncheckedUpdateManyWithoutPaisNestedInput
    nacionalidades?: AsociadoUncheckedUpdateManyWithoutPaisNacionalidadNestedInput
  }

  export type EstadoUpsertWithoutAsociadosInput = {
    update: XOR<EstadoUpdateWithoutAsociadosInput, EstadoUncheckedUpdateWithoutAsociadosInput>
    create: XOR<EstadoCreateWithoutAsociadosInput, EstadoUncheckedCreateWithoutAsociadosInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutAsociadosInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutAsociadosInput, EstadoUncheckedUpdateWithoutAsociadosInput>
  }

  export type EstadoUpdateWithoutAsociadosInput = {
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutEstadosNestedInput
    ciudades?: CiudadUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateWithoutAsociadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type CiudadUpsertWithoutAsociadosInput = {
    update: XOR<CiudadUpdateWithoutAsociadosInput, CiudadUncheckedUpdateWithoutAsociadosInput>
    create: XOR<CiudadCreateWithoutAsociadosInput, CiudadUncheckedCreateWithoutAsociadosInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutAsociadosInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutAsociadosInput, CiudadUncheckedUpdateWithoutAsociadosInput>
  }

  export type CiudadUpdateWithoutAsociadosInput = {
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutCiudadesNestedInput
    estado?: EstadoUpdateOneWithoutCiudadesNestedInput
  }

  export type CiudadUncheckedUpdateWithoutAsociadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
  }

  export type SocioCreateWithoutDireccionesInput = {
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    admin: AdminCreateNestedOneWithoutSociosInput
    asociados?: AsociadoCreateNestedManyWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutDireccionesInput = {
    id?: number
    id_socio: number
    id_admin: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
    asociados?: AsociadoUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutDireccionesInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutDireccionesInput, SocioUncheckedCreateWithoutDireccionesInput>
  }

  export type TipoViaCreateWithoutDireccionesInput = {
    tipo_via: string
  }

  export type TipoViaUncheckedCreateWithoutDireccionesInput = {
    id?: number
    tipo_via: string
  }

  export type TipoViaCreateOrConnectWithoutDireccionesInput = {
    where: TipoViaWhereUniqueInput
    create: XOR<TipoViaCreateWithoutDireccionesInput, TipoViaUncheckedCreateWithoutDireccionesInput>
  }

  export type CodigoPostalCreateWithoutDireccionesInput = {
    provincia: string
    ciudad: string
    cp: string
    pais: PaisCreateNestedOneWithoutCodigosPostalesInput
  }

  export type CodigoPostalUncheckedCreateWithoutDireccionesInput = {
    id?: number
    provincia: string
    ciudad: string
    cp: string
    id_pais: number
  }

  export type CodigoPostalCreateOrConnectWithoutDireccionesInput = {
    where: CodigoPostalWhereUniqueInput
    create: XOR<CodigoPostalCreateWithoutDireccionesInput, CodigoPostalUncheckedCreateWithoutDireccionesInput>
  }

  export type SocioUpsertWithoutDireccionesInput = {
    update: XOR<SocioUpdateWithoutDireccionesInput, SocioUncheckedUpdateWithoutDireccionesInput>
    create: XOR<SocioCreateWithoutDireccionesInput, SocioUncheckedCreateWithoutDireccionesInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutDireccionesInput, SocioUncheckedUpdateWithoutDireccionesInput>
  }

  export type SocioUpdateWithoutDireccionesInput = {
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    admin?: AdminUpdateOneRequiredWithoutSociosNestedInput
    asociados?: AsociadoUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    asociados?: AsociadoUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type TipoViaUpsertWithoutDireccionesInput = {
    update: XOR<TipoViaUpdateWithoutDireccionesInput, TipoViaUncheckedUpdateWithoutDireccionesInput>
    create: XOR<TipoViaCreateWithoutDireccionesInput, TipoViaUncheckedCreateWithoutDireccionesInput>
    where?: TipoViaWhereInput
  }

  export type TipoViaUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: TipoViaWhereInput
    data: XOR<TipoViaUpdateWithoutDireccionesInput, TipoViaUncheckedUpdateWithoutDireccionesInput>
  }

  export type TipoViaUpdateWithoutDireccionesInput = {
    tipo_via?: StringFieldUpdateOperationsInput | string
  }

  export type TipoViaUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_via?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoPostalUpsertWithoutDireccionesInput = {
    update: XOR<CodigoPostalUpdateWithoutDireccionesInput, CodigoPostalUncheckedUpdateWithoutDireccionesInput>
    create: XOR<CodigoPostalCreateWithoutDireccionesInput, CodigoPostalUncheckedCreateWithoutDireccionesInput>
    where?: CodigoPostalWhereInput
  }

  export type CodigoPostalUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: CodigoPostalWhereInput
    data: XOR<CodigoPostalUpdateWithoutDireccionesInput, CodigoPostalUncheckedUpdateWithoutDireccionesInput>
  }

  export type CodigoPostalUpdateWithoutDireccionesInput = {
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutCodigosPostalesNestedInput
  }

  export type CodigoPostalUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
  }

  export type EstadoCreateManyPaisInput = {
    id?: number
    id_estado_cid: string
    estado: string
    capital: string
  }

  export type CiudadCreateManyPaisInput = {
    id?: number
    id_estado?: number | null
    id_ciudad: number
    ciudad: string
  }

  export type CodigoPostalCreateManyPaisInput = {
    id?: number
    provincia: string
    ciudad: string
    cp: string
  }

  export type AsociadoCreateManyPaisNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoCreateManyPaisNacionalidadInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type EstadoUpdateWithoutPaisInput = {
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUpdateManyWithoutEstadoNestedInput
    asociados?: AsociadoUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type EstadoUncheckedUpdateWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUncheckedUpdateManyWithoutEstadoNestedInput
    asociados?: AsociadoUncheckedUpdateManyWithoutEstadoNacimientoNestedInput
  }

  export type EstadoUncheckedUpdateManyWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado_cid?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    capital?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadUpdateWithoutPaisInput = {
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: EstadoUpdateOneWithoutCiudadesNestedInput
    asociados?: AsociadoUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadUncheckedUpdateWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    asociados?: AsociadoUncheckedUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadUncheckedUpdateManyWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoPostalUpdateWithoutPaisInput = {
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutCodigoPostalNestedInput
  }

  export type CodigoPostalUncheckedUpdateWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutCodigoPostalNestedInput
  }

  export type CodigoPostalUncheckedUpdateManyWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
  }

  export type AsociadoUpdateWithoutPaisNacimientoInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutAsociadosNestedInput
    paisNacionalidad?: PaisUpdateOneRequiredWithoutNacionalidadesNestedInput
    estadoNacimiento?: EstadoUpdateOneWithoutAsociadosNestedInput
    ciudadNacimiento?: CiudadUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateWithoutPaisNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyWithoutPaisNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUpdateWithoutPaisNacionalidadInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutAsociadosNestedInput
    paisNacimiento?: PaisUpdateOneRequiredWithoutAsociadosNestedInput
    estadoNacimiento?: EstadoUpdateOneWithoutAsociadosNestedInput
    ciudadNacimiento?: CiudadUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateWithoutPaisNacionalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyWithoutPaisNacionalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type CiudadCreateManyEstadoInput = {
    id?: number
    id_pais: number
    id_ciudad: number
    ciudad: string
  }

  export type AsociadoCreateManyEstadoNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type CiudadUpdateWithoutEstadoInput = {
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    pais?: PaisUpdateOneRequiredWithoutCiudadesNestedInput
    asociados?: AsociadoUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    asociados?: AsociadoUncheckedUpdateManyWithoutCiudadNacimientoNestedInput
  }

  export type CiudadUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_ciudad?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
  }

  export type AsociadoUpdateWithoutEstadoNacimientoInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutAsociadosNestedInput
    paisNacionalidad?: PaisUpdateOneRequiredWithoutNacionalidadesNestedInput
    paisNacimiento?: PaisUpdateOneRequiredWithoutAsociadosNestedInput
    ciudadNacimiento?: CiudadUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateWithoutEstadoNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyWithoutEstadoNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoCreateManyCiudadNacimientoInput = {
    id?: number
    id_socio: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type AsociadoUpdateWithoutCiudadNacimientoInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutAsociadosNestedInput
    paisNacionalidad?: PaisUpdateOneRequiredWithoutNacionalidadesNestedInput
    paisNacimiento?: PaisUpdateOneRequiredWithoutAsociadosNestedInput
    estadoNacimiento?: EstadoUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateWithoutCiudadNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyWithoutCiudadNacimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateManyCodigoPostalInput = {
    id?: number
    id_socio: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    activa?: number
  }

  export type DireccionUpdateWithoutCodigoPostalInput = {
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutDireccionesNestedInput
    tipoVia?: TipoViaUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateWithoutCodigoPostalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionUncheckedUpdateManyWithoutCodigoPostalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateManyTipoViaInput = {
    id?: number
    id_socio: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type DireccionUpdateWithoutTipoViaInput = {
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
    socio?: SocioUpdateOneRequiredWithoutDireccionesNestedInput
    codigoPostal?: CodigoPostalUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateWithoutTipoViaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionUncheckedUpdateManyWithoutTipoViaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type SocioCreateManyAdminInput = {
    id?: number
    id_socio: number
    nombres: string
    apellido1re: string
    apellido2do: string
    miembroprincipal?: number
  }

  export type SocioUpdateWithoutAdminInput = {
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    asociados?: AsociadoUpdateManyWithoutSocioNestedInput
    direcciones?: DireccionUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
    asociados?: AsociadoUncheckedUpdateManyWithoutSocioNestedInput
    direcciones?: DireccionUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    miembroprincipal?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoCreateManySocioInput = {
    id?: number
    id_asociado: number
    tipo_documento: string
    numero_documento: string
    nombres: string
    apellido1re: string
    apellido2do: string
    fecha_nacimiento: Date | string
    genero: string
    nacionalidad: number
    pais_nacimiento: number
    estado_nacimiento?: number | null
    ciudad_nacimiento?: number | null
    numero_telefonico?: string | null
    ocupacion?: string | null
    profesion?: string | null
    miembroPrincipal?: number
    alimentacion1?: number
  }

  export type DireccionCreateManySocioInput = {
    id?: number
    id_tipo_via: number
    nombre_via: string
    numero: string
    portal: string
    piso: string
    apartamento: string
    pueblo: string
    nombre_pueblo: string
    codigo_postal: string
    activa?: number
  }

  export type AsociadoUpdateWithoutSocioInput = {
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
    paisNacionalidad?: PaisUpdateOneRequiredWithoutNacionalidadesNestedInput
    paisNacimiento?: PaisUpdateOneRequiredWithoutAsociadosNestedInput
    estadoNacimiento?: EstadoUpdateOneWithoutAsociadosNestedInput
    ciudadNacimiento?: CiudadUpdateOneWithoutAsociadosNestedInput
  }

  export type AsociadoUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type AsociadoUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_asociado?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido1re?: StringFieldUpdateOperationsInput | string
    apellido2do?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    nacionalidad?: IntFieldUpdateOperationsInput | number
    pais_nacimiento?: IntFieldUpdateOperationsInput | number
    estado_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    ciudad_nacimiento?: NullableIntFieldUpdateOperationsInput | number | null
    numero_telefonico?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    profesion?: NullableStringFieldUpdateOperationsInput | string | null
    miembroPrincipal?: IntFieldUpdateOperationsInput | number
    alimentacion1?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionUpdateWithoutSocioInput = {
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
    tipoVia?: TipoViaUpdateOneRequiredWithoutDireccionesNestedInput
    codigoPostal?: CodigoPostalUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_via?: IntFieldUpdateOperationsInput | number
    nombre_via?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    portal?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    apartamento?: StringFieldUpdateOperationsInput | string
    pueblo?: StringFieldUpdateOperationsInput | string
    nombre_pueblo?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    activa?: IntFieldUpdateOperationsInput | number
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