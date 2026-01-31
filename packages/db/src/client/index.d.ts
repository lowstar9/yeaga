
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model ReportPeriod
 * 
 */
export type ReportPeriod = $Result.DefaultSelection<Prisma.$ReportPeriodPayload>
/**
 * Model FinancialItem
 * 
 */
export type FinancialItem = $Result.DefaultSelection<Prisma.$FinancialItemPayload>
/**
 * Model Financial
 * 
 */
export type Financial = $Result.DefaultSelection<Prisma.$FinancialPayload>
/**
 * Model CompanyIngestStatus
 * 
 */
export type CompanyIngestStatus = $Result.DefaultSelection<Prisma.$CompanyIngestStatusPayload>
/**
 * Model IngestJob
 * 
 */
export type IngestJob = $Result.DefaultSelection<Prisma.$IngestJobPayload>
/**
 * Model IngestControl
 * 
 */
export type IngestControl = $Result.DefaultSelection<Prisma.$IngestControlPayload>
/**
 * Model IngestLog
 * 
 */
export type IngestLog = $Result.DefaultSelection<Prisma.$IngestLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.reportPeriod`: Exposes CRUD operations for the **ReportPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportPeriods
    * const reportPeriods = await prisma.reportPeriod.findMany()
    * ```
    */
  get reportPeriod(): Prisma.ReportPeriodDelegate<ExtArgs>;

  /**
   * `prisma.financialItem`: Exposes CRUD operations for the **FinancialItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialItems
    * const financialItems = await prisma.financialItem.findMany()
    * ```
    */
  get financialItem(): Prisma.FinancialItemDelegate<ExtArgs>;

  /**
   * `prisma.financial`: Exposes CRUD operations for the **Financial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Financials
    * const financials = await prisma.financial.findMany()
    * ```
    */
  get financial(): Prisma.FinancialDelegate<ExtArgs>;

  /**
   * `prisma.companyIngestStatus`: Exposes CRUD operations for the **CompanyIngestStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyIngestStatuses
    * const companyIngestStatuses = await prisma.companyIngestStatus.findMany()
    * ```
    */
  get companyIngestStatus(): Prisma.CompanyIngestStatusDelegate<ExtArgs>;

  /**
   * `prisma.ingestJob`: Exposes CRUD operations for the **IngestJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestJobs
    * const ingestJobs = await prisma.ingestJob.findMany()
    * ```
    */
  get ingestJob(): Prisma.IngestJobDelegate<ExtArgs>;

  /**
   * `prisma.ingestControl`: Exposes CRUD operations for the **IngestControl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestControls
    * const ingestControls = await prisma.ingestControl.findMany()
    * ```
    */
  get ingestControl(): Prisma.IngestControlDelegate<ExtArgs>;

  /**
   * `prisma.ingestLog`: Exposes CRUD operations for the **IngestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestLogs
    * const ingestLogs = await prisma.ingestLog.findMany()
    * ```
    */
  get ingestLog(): Prisma.IngestLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Company: 'Company',
    ReportPeriod: 'ReportPeriod',
    FinancialItem: 'FinancialItem',
    Financial: 'Financial',
    CompanyIngestStatus: 'CompanyIngestStatus',
    IngestJob: 'IngestJob',
    IngestControl: 'IngestControl',
    IngestLog: 'IngestLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "company" | "reportPeriod" | "financialItem" | "financial" | "companyIngestStatus" | "ingestJob" | "ingestControl" | "ingestLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      ReportPeriod: {
        payload: Prisma.$ReportPeriodPayload<ExtArgs>
        fields: Prisma.ReportPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          findFirst: {
            args: Prisma.ReportPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          findMany: {
            args: Prisma.ReportPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>[]
          }
          create: {
            args: Prisma.ReportPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          createMany: {
            args: Prisma.ReportPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>[]
          }
          delete: {
            args: Prisma.ReportPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          update: {
            args: Prisma.ReportPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          deleteMany: {
            args: Prisma.ReportPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPeriodPayload>
          }
          aggregate: {
            args: Prisma.ReportPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportPeriod>
          }
          groupBy: {
            args: Prisma.ReportPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<ReportPeriodCountAggregateOutputType> | number
          }
        }
      }
      FinancialItem: {
        payload: Prisma.$FinancialItemPayload<ExtArgs>
        fields: Prisma.FinancialItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          findFirst: {
            args: Prisma.FinancialItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          findMany: {
            args: Prisma.FinancialItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>[]
          }
          create: {
            args: Prisma.FinancialItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          createMany: {
            args: Prisma.FinancialItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>[]
          }
          delete: {
            args: Prisma.FinancialItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          update: {
            args: Prisma.FinancialItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          deleteMany: {
            args: Prisma.FinancialItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinancialItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialItemPayload>
          }
          aggregate: {
            args: Prisma.FinancialItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialItem>
          }
          groupBy: {
            args: Prisma.FinancialItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialItemCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialItemCountAggregateOutputType> | number
          }
        }
      }
      Financial: {
        payload: Prisma.$FinancialPayload<ExtArgs>
        fields: Prisma.FinancialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          findFirst: {
            args: Prisma.FinancialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          findMany: {
            args: Prisma.FinancialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>[]
          }
          create: {
            args: Prisma.FinancialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          createMany: {
            args: Prisma.FinancialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>[]
          }
          delete: {
            args: Prisma.FinancialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          update: {
            args: Prisma.FinancialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          deleteMany: {
            args: Prisma.FinancialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinancialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          aggregate: {
            args: Prisma.FinancialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancial>
          }
          groupBy: {
            args: Prisma.FinancialGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialCountAggregateOutputType> | number
          }
        }
      }
      CompanyIngestStatus: {
        payload: Prisma.$CompanyIngestStatusPayload<ExtArgs>
        fields: Prisma.CompanyIngestStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyIngestStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyIngestStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          findFirst: {
            args: Prisma.CompanyIngestStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyIngestStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          findMany: {
            args: Prisma.CompanyIngestStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>[]
          }
          create: {
            args: Prisma.CompanyIngestStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          createMany: {
            args: Prisma.CompanyIngestStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyIngestStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>[]
          }
          delete: {
            args: Prisma.CompanyIngestStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          update: {
            args: Prisma.CompanyIngestStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          deleteMany: {
            args: Prisma.CompanyIngestStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyIngestStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyIngestStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIngestStatusPayload>
          }
          aggregate: {
            args: Prisma.CompanyIngestStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyIngestStatus>
          }
          groupBy: {
            args: Prisma.CompanyIngestStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyIngestStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyIngestStatusCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyIngestStatusCountAggregateOutputType> | number
          }
        }
      }
      IngestJob: {
        payload: Prisma.$IngestJobPayload<ExtArgs>
        fields: Prisma.IngestJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          findFirst: {
            args: Prisma.IngestJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          findMany: {
            args: Prisma.IngestJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>[]
          }
          create: {
            args: Prisma.IngestJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          createMany: {
            args: Prisma.IngestJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>[]
          }
          delete: {
            args: Prisma.IngestJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          update: {
            args: Prisma.IngestJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          deleteMany: {
            args: Prisma.IngestJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngestJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestJobPayload>
          }
          aggregate: {
            args: Prisma.IngestJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestJob>
          }
          groupBy: {
            args: Prisma.IngestJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestJobCountArgs<ExtArgs>
            result: $Utils.Optional<IngestJobCountAggregateOutputType> | number
          }
        }
      }
      IngestControl: {
        payload: Prisma.$IngestControlPayload<ExtArgs>
        fields: Prisma.IngestControlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestControlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestControlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          findFirst: {
            args: Prisma.IngestControlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestControlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          findMany: {
            args: Prisma.IngestControlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>[]
          }
          create: {
            args: Prisma.IngestControlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          createMany: {
            args: Prisma.IngestControlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestControlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>[]
          }
          delete: {
            args: Prisma.IngestControlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          update: {
            args: Prisma.IngestControlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          deleteMany: {
            args: Prisma.IngestControlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestControlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngestControlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestControlPayload>
          }
          aggregate: {
            args: Prisma.IngestControlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestControl>
          }
          groupBy: {
            args: Prisma.IngestControlGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestControlGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestControlCountArgs<ExtArgs>
            result: $Utils.Optional<IngestControlCountAggregateOutputType> | number
          }
        }
      }
      IngestLog: {
        payload: Prisma.$IngestLogPayload<ExtArgs>
        fields: Prisma.IngestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          findFirst: {
            args: Prisma.IngestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          findMany: {
            args: Prisma.IngestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>[]
          }
          create: {
            args: Prisma.IngestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          createMany: {
            args: Prisma.IngestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>[]
          }
          delete: {
            args: Prisma.IngestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          update: {
            args: Prisma.IngestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          deleteMany: {
            args: Prisma.IngestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          aggregate: {
            args: Prisma.IngestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestLog>
          }
          groupBy: {
            args: Prisma.IngestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestLogCountArgs<ExtArgs>
            result: $Utils.Optional<IngestLogCountAggregateOutputType> | number
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    financials: number
    ingestJobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | CompanyCountOutputTypeCountFinancialsArgs
    ingestJobs?: boolean | CompanyCountOutputTypeCountIngestJobsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFinancialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountIngestJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestJobWhereInput
  }


  /**
   * Count Type ReportPeriodCountOutputType
   */

  export type ReportPeriodCountOutputType = {
    financials: number
  }

  export type ReportPeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | ReportPeriodCountOutputTypeCountFinancialsArgs
  }

  // Custom InputTypes
  /**
   * ReportPeriodCountOutputType without action
   */
  export type ReportPeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriodCountOutputType
     */
    select?: ReportPeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportPeriodCountOutputType without action
   */
  export type ReportPeriodCountOutputTypeCountFinancialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialWhereInput
  }


  /**
   * Count Type FinancialItemCountOutputType
   */

  export type FinancialItemCountOutputType = {
    financials: number
  }

  export type FinancialItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | FinancialItemCountOutputTypeCountFinancialsArgs
  }

  // Custom InputTypes
  /**
   * FinancialItemCountOutputType without action
   */
  export type FinancialItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItemCountOutputType
     */
    select?: FinancialItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialItemCountOutputType without action
   */
  export type FinancialItemCountOutputTypeCountFinancialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialWhereInput
  }


  /**
   * Count Type IngestJobCountOutputType
   */

  export type IngestJobCountOutputType = {
    logs: number
  }

  export type IngestJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | IngestJobCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * IngestJobCountOutputType without action
   */
  export type IngestJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJobCountOutputType
     */
    select?: IngestJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngestJobCountOutputType without action
   */
  export type IngestJobCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    marketCap: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: bigint | null
    marketCap: bigint | null
  }

  export type CompanyMinAggregateOutputType = {
    id: bigint | null
    ticker: string | null
    name: string | null
    market: string | null
    sector: string | null
    listedAt: Date | null
    marketCap: bigint | null
    marketCapAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: bigint | null
    ticker: string | null
    name: string | null
    market: string | null
    sector: string | null
    listedAt: Date | null
    marketCap: bigint | null
    marketCapAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    ticker: number
    name: number
    market: number
    sector: number
    listedAt: number
    marketCap: number
    marketCapAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    marketCap?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    marketCap?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    market?: true
    sector?: true
    listedAt?: true
    marketCap?: true
    marketCapAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    market?: true
    sector?: true
    listedAt?: true
    marketCap?: true
    marketCapAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    market?: true
    sector?: true
    listedAt?: true
    marketCap?: true
    marketCapAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: bigint
    ticker: string
    name: string
    market: string
    sector: string | null
    listedAt: Date | null
    marketCap: bigint | null
    marketCapAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    name?: boolean
    market?: boolean
    sector?: boolean
    listedAt?: boolean
    marketCap?: boolean
    marketCapAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financials?: boolean | Company$financialsArgs<ExtArgs>
    ingestStatus?: boolean | Company$ingestStatusArgs<ExtArgs>
    ingestJobs?: boolean | Company$ingestJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    name?: boolean
    market?: boolean
    sector?: boolean
    listedAt?: boolean
    marketCap?: boolean
    marketCapAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    ticker?: boolean
    name?: boolean
    market?: boolean
    sector?: boolean
    listedAt?: boolean
    marketCap?: boolean
    marketCapAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | Company$financialsArgs<ExtArgs>
    ingestStatus?: boolean | Company$ingestStatusArgs<ExtArgs>
    ingestJobs?: boolean | Company$ingestJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      financials: Prisma.$FinancialPayload<ExtArgs>[]
      ingestStatus: Prisma.$CompanyIngestStatusPayload<ExtArgs> | null
      ingestJobs: Prisma.$IngestJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      ticker: string
      name: string
      market: string
      sector: string | null
      listedAt: Date | null
      marketCap: bigint | null
      marketCapAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financials<T extends Company$financialsArgs<ExtArgs> = {}>(args?: Subset<T, Company$financialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findMany"> | Null>
    ingestStatus<T extends Company$ingestStatusArgs<ExtArgs> = {}>(args?: Subset<T, Company$ingestStatusArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ingestJobs<T extends Company$ingestJobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$ingestJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'BigInt'>
    readonly ticker: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly market: FieldRef<"Company", 'String'>
    readonly sector: FieldRef<"Company", 'String'>
    readonly listedAt: FieldRef<"Company", 'DateTime'>
    readonly marketCap: FieldRef<"Company", 'BigInt'>
    readonly marketCapAt: FieldRef<"Company", 'DateTime'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.financials
   */
  export type Company$financialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    where?: FinancialWhereInput
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    cursor?: FinancialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Company.ingestStatus
   */
  export type Company$ingestStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    where?: CompanyIngestStatusWhereInput
  }

  /**
   * Company.ingestJobs
   */
  export type Company$ingestJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    where?: IngestJobWhereInput
    orderBy?: IngestJobOrderByWithRelationInput | IngestJobOrderByWithRelationInput[]
    cursor?: IngestJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngestJobScalarFieldEnum | IngestJobScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model ReportPeriod
   */

  export type AggregateReportPeriod = {
    _count: ReportPeriodCountAggregateOutputType | null
    _avg: ReportPeriodAvgAggregateOutputType | null
    _sum: ReportPeriodSumAggregateOutputType | null
    _min: ReportPeriodMinAggregateOutputType | null
    _max: ReportPeriodMaxAggregateOutputType | null
  }

  export type ReportPeriodAvgAggregateOutputType = {
    id: number | null
    fiscalYear: number | null
    fiscalQuarter: number | null
  }

  export type ReportPeriodSumAggregateOutputType = {
    id: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
  }

  export type ReportPeriodMinAggregateOutputType = {
    id: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    periodType: string | null
    reportName: string | null
    reportDate: Date | null
  }

  export type ReportPeriodMaxAggregateOutputType = {
    id: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    periodType: string | null
    reportName: string | null
    reportDate: Date | null
  }

  export type ReportPeriodCountAggregateOutputType = {
    id: number
    fiscalYear: number
    fiscalQuarter: number
    periodType: number
    reportName: number
    reportDate: number
    _all: number
  }


  export type ReportPeriodAvgAggregateInputType = {
    id?: true
    fiscalYear?: true
    fiscalQuarter?: true
  }

  export type ReportPeriodSumAggregateInputType = {
    id?: true
    fiscalYear?: true
    fiscalQuarter?: true
  }

  export type ReportPeriodMinAggregateInputType = {
    id?: true
    fiscalYear?: true
    fiscalQuarter?: true
    periodType?: true
    reportName?: true
    reportDate?: true
  }

  export type ReportPeriodMaxAggregateInputType = {
    id?: true
    fiscalYear?: true
    fiscalQuarter?: true
    periodType?: true
    reportName?: true
    reportDate?: true
  }

  export type ReportPeriodCountAggregateInputType = {
    id?: true
    fiscalYear?: true
    fiscalQuarter?: true
    periodType?: true
    reportName?: true
    reportDate?: true
    _all?: true
  }

  export type ReportPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportPeriod to aggregate.
     */
    where?: ReportPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportPeriods to fetch.
     */
    orderBy?: ReportPeriodOrderByWithRelationInput | ReportPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportPeriods
    **/
    _count?: true | ReportPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportPeriodMaxAggregateInputType
  }

  export type GetReportPeriodAggregateType<T extends ReportPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateReportPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportPeriod[P]>
      : GetScalarType<T[P], AggregateReportPeriod[P]>
  }




  export type ReportPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportPeriodWhereInput
    orderBy?: ReportPeriodOrderByWithAggregationInput | ReportPeriodOrderByWithAggregationInput[]
    by: ReportPeriodScalarFieldEnum[] | ReportPeriodScalarFieldEnum
    having?: ReportPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportPeriodCountAggregateInputType | true
    _avg?: ReportPeriodAvgAggregateInputType
    _sum?: ReportPeriodSumAggregateInputType
    _min?: ReportPeriodMinAggregateInputType
    _max?: ReportPeriodMaxAggregateInputType
  }

  export type ReportPeriodGroupByOutputType = {
    id: bigint
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName: string | null
    reportDate: Date | null
    _count: ReportPeriodCountAggregateOutputType | null
    _avg: ReportPeriodAvgAggregateOutputType | null
    _sum: ReportPeriodSumAggregateOutputType | null
    _min: ReportPeriodMinAggregateOutputType | null
    _max: ReportPeriodMaxAggregateOutputType | null
  }

  type GetReportPeriodGroupByPayload<T extends ReportPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], ReportPeriodGroupByOutputType[P]>
        }
      >
    >


  export type ReportPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    periodType?: boolean
    reportName?: boolean
    reportDate?: boolean
    financials?: boolean | ReportPeriod$financialsArgs<ExtArgs>
    _count?: boolean | ReportPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportPeriod"]>

  export type ReportPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    periodType?: boolean
    reportName?: boolean
    reportDate?: boolean
  }, ExtArgs["result"]["reportPeriod"]>

  export type ReportPeriodSelectScalar = {
    id?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    periodType?: boolean
    reportName?: boolean
    reportDate?: boolean
  }

  export type ReportPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | ReportPeriod$financialsArgs<ExtArgs>
    _count?: boolean | ReportPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportPeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReportPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportPeriod"
    objects: {
      financials: Prisma.$FinancialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      fiscalYear: number
      fiscalQuarter: number
      periodType: string
      reportName: string | null
      reportDate: Date | null
    }, ExtArgs["result"]["reportPeriod"]>
    composites: {}
  }

  type ReportPeriodGetPayload<S extends boolean | null | undefined | ReportPeriodDefaultArgs> = $Result.GetResult<Prisma.$ReportPeriodPayload, S>

  type ReportPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportPeriodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportPeriodCountAggregateInputType | true
    }

  export interface ReportPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportPeriod'], meta: { name: 'ReportPeriod' } }
    /**
     * Find zero or one ReportPeriod that matches the filter.
     * @param {ReportPeriodFindUniqueArgs} args - Arguments to find a ReportPeriod
     * @example
     * // Get one ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportPeriodFindUniqueArgs>(args: SelectSubset<T, ReportPeriodFindUniqueArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReportPeriod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportPeriodFindUniqueOrThrowArgs} args - Arguments to find a ReportPeriod
     * @example
     * // Get one ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReportPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodFindFirstArgs} args - Arguments to find a ReportPeriod
     * @example
     * // Get one ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportPeriodFindFirstArgs>(args?: SelectSubset<T, ReportPeriodFindFirstArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReportPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodFindFirstOrThrowArgs} args - Arguments to find a ReportPeriod
     * @example
     * // Get one ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReportPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportPeriods
     * const reportPeriods = await prisma.reportPeriod.findMany()
     * 
     * // Get first 10 ReportPeriods
     * const reportPeriods = await prisma.reportPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportPeriodWithIdOnly = await prisma.reportPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportPeriodFindManyArgs>(args?: SelectSubset<T, ReportPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReportPeriod.
     * @param {ReportPeriodCreateArgs} args - Arguments to create a ReportPeriod.
     * @example
     * // Create one ReportPeriod
     * const ReportPeriod = await prisma.reportPeriod.create({
     *   data: {
     *     // ... data to create a ReportPeriod
     *   }
     * })
     * 
     */
    create<T extends ReportPeriodCreateArgs>(args: SelectSubset<T, ReportPeriodCreateArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReportPeriods.
     * @param {ReportPeriodCreateManyArgs} args - Arguments to create many ReportPeriods.
     * @example
     * // Create many ReportPeriods
     * const reportPeriod = await prisma.reportPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportPeriodCreateManyArgs>(args?: SelectSubset<T, ReportPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportPeriods and returns the data saved in the database.
     * @param {ReportPeriodCreateManyAndReturnArgs} args - Arguments to create many ReportPeriods.
     * @example
     * // Create many ReportPeriods
     * const reportPeriod = await prisma.reportPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportPeriods and only return the `id`
     * const reportPeriodWithIdOnly = await prisma.reportPeriod.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReportPeriod.
     * @param {ReportPeriodDeleteArgs} args - Arguments to delete one ReportPeriod.
     * @example
     * // Delete one ReportPeriod
     * const ReportPeriod = await prisma.reportPeriod.delete({
     *   where: {
     *     // ... filter to delete one ReportPeriod
     *   }
     * })
     * 
     */
    delete<T extends ReportPeriodDeleteArgs>(args: SelectSubset<T, ReportPeriodDeleteArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReportPeriod.
     * @param {ReportPeriodUpdateArgs} args - Arguments to update one ReportPeriod.
     * @example
     * // Update one ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportPeriodUpdateArgs>(args: SelectSubset<T, ReportPeriodUpdateArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReportPeriods.
     * @param {ReportPeriodDeleteManyArgs} args - Arguments to filter ReportPeriods to delete.
     * @example
     * // Delete a few ReportPeriods
     * const { count } = await prisma.reportPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportPeriodDeleteManyArgs>(args?: SelectSubset<T, ReportPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportPeriods
     * const reportPeriod = await prisma.reportPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportPeriodUpdateManyArgs>(args: SelectSubset<T, ReportPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReportPeriod.
     * @param {ReportPeriodUpsertArgs} args - Arguments to update or create a ReportPeriod.
     * @example
     * // Update or create a ReportPeriod
     * const reportPeriod = await prisma.reportPeriod.upsert({
     *   create: {
     *     // ... data to create a ReportPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportPeriod we want to update
     *   }
     * })
     */
    upsert<T extends ReportPeriodUpsertArgs>(args: SelectSubset<T, ReportPeriodUpsertArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReportPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodCountArgs} args - Arguments to filter ReportPeriods to count.
     * @example
     * // Count the number of ReportPeriods
     * const count = await prisma.reportPeriod.count({
     *   where: {
     *     // ... the filter for the ReportPeriods we want to count
     *   }
     * })
    **/
    count<T extends ReportPeriodCountArgs>(
      args?: Subset<T, ReportPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportPeriodAggregateArgs>(args: Subset<T, ReportPeriodAggregateArgs>): Prisma.PrismaPromise<GetReportPeriodAggregateType<T>>

    /**
     * Group by ReportPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportPeriodGroupByArgs} args - Group by arguments.
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
      T extends ReportPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportPeriodGroupByArgs['orderBy'] }
        : { orderBy?: ReportPeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportPeriod model
   */
  readonly fields: ReportPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financials<T extends ReportPeriod$financialsArgs<ExtArgs> = {}>(args?: Subset<T, ReportPeriod$financialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ReportPeriod model
   */ 
  interface ReportPeriodFieldRefs {
    readonly id: FieldRef<"ReportPeriod", 'BigInt'>
    readonly fiscalYear: FieldRef<"ReportPeriod", 'Int'>
    readonly fiscalQuarter: FieldRef<"ReportPeriod", 'Int'>
    readonly periodType: FieldRef<"ReportPeriod", 'String'>
    readonly reportName: FieldRef<"ReportPeriod", 'String'>
    readonly reportDate: FieldRef<"ReportPeriod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportPeriod findUnique
   */
  export type ReportPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter, which ReportPeriod to fetch.
     */
    where: ReportPeriodWhereUniqueInput
  }

  /**
   * ReportPeriod findUniqueOrThrow
   */
  export type ReportPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter, which ReportPeriod to fetch.
     */
    where: ReportPeriodWhereUniqueInput
  }

  /**
   * ReportPeriod findFirst
   */
  export type ReportPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter, which ReportPeriod to fetch.
     */
    where?: ReportPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportPeriods to fetch.
     */
    orderBy?: ReportPeriodOrderByWithRelationInput | ReportPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportPeriods.
     */
    cursor?: ReportPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportPeriods.
     */
    distinct?: ReportPeriodScalarFieldEnum | ReportPeriodScalarFieldEnum[]
  }

  /**
   * ReportPeriod findFirstOrThrow
   */
  export type ReportPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter, which ReportPeriod to fetch.
     */
    where?: ReportPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportPeriods to fetch.
     */
    orderBy?: ReportPeriodOrderByWithRelationInput | ReportPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportPeriods.
     */
    cursor?: ReportPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportPeriods.
     */
    distinct?: ReportPeriodScalarFieldEnum | ReportPeriodScalarFieldEnum[]
  }

  /**
   * ReportPeriod findMany
   */
  export type ReportPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter, which ReportPeriods to fetch.
     */
    where?: ReportPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportPeriods to fetch.
     */
    orderBy?: ReportPeriodOrderByWithRelationInput | ReportPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportPeriods.
     */
    cursor?: ReportPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportPeriods.
     */
    skip?: number
    distinct?: ReportPeriodScalarFieldEnum | ReportPeriodScalarFieldEnum[]
  }

  /**
   * ReportPeriod create
   */
  export type ReportPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportPeriod.
     */
    data: XOR<ReportPeriodCreateInput, ReportPeriodUncheckedCreateInput>
  }

  /**
   * ReportPeriod createMany
   */
  export type ReportPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportPeriods.
     */
    data: ReportPeriodCreateManyInput | ReportPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportPeriod createManyAndReturn
   */
  export type ReportPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReportPeriods.
     */
    data: ReportPeriodCreateManyInput | ReportPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportPeriod update
   */
  export type ReportPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportPeriod.
     */
    data: XOR<ReportPeriodUpdateInput, ReportPeriodUncheckedUpdateInput>
    /**
     * Choose, which ReportPeriod to update.
     */
    where: ReportPeriodWhereUniqueInput
  }

  /**
   * ReportPeriod updateMany
   */
  export type ReportPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportPeriods.
     */
    data: XOR<ReportPeriodUpdateManyMutationInput, ReportPeriodUncheckedUpdateManyInput>
    /**
     * Filter which ReportPeriods to update
     */
    where?: ReportPeriodWhereInput
  }

  /**
   * ReportPeriod upsert
   */
  export type ReportPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportPeriod to update in case it exists.
     */
    where: ReportPeriodWhereUniqueInput
    /**
     * In case the ReportPeriod found by the `where` argument doesn't exist, create a new ReportPeriod with this data.
     */
    create: XOR<ReportPeriodCreateInput, ReportPeriodUncheckedCreateInput>
    /**
     * In case the ReportPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportPeriodUpdateInput, ReportPeriodUncheckedUpdateInput>
  }

  /**
   * ReportPeriod delete
   */
  export type ReportPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
    /**
     * Filter which ReportPeriod to delete.
     */
    where: ReportPeriodWhereUniqueInput
  }

  /**
   * ReportPeriod deleteMany
   */
  export type ReportPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportPeriods to delete
     */
    where?: ReportPeriodWhereInput
  }

  /**
   * ReportPeriod.financials
   */
  export type ReportPeriod$financialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    where?: FinancialWhereInput
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    cursor?: FinancialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * ReportPeriod without action
   */
  export type ReportPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportPeriod
     */
    select?: ReportPeriodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportPeriodInclude<ExtArgs> | null
  }


  /**
   * Model FinancialItem
   */

  export type AggregateFinancialItem = {
    _count: FinancialItemCountAggregateOutputType | null
    _avg: FinancialItemAvgAggregateOutputType | null
    _sum: FinancialItemSumAggregateOutputType | null
    _min: FinancialItemMinAggregateOutputType | null
    _max: FinancialItemMaxAggregateOutputType | null
  }

  export type FinancialItemAvgAggregateOutputType = {
    id: number | null
  }

  export type FinancialItemSumAggregateOutputType = {
    id: bigint | null
  }

  export type FinancialItemMinAggregateOutputType = {
    id: bigint | null
    itemCode: string | null
    itemName: string | null
    statementType: string | null
    unit: string | null
  }

  export type FinancialItemMaxAggregateOutputType = {
    id: bigint | null
    itemCode: string | null
    itemName: string | null
    statementType: string | null
    unit: string | null
  }

  export type FinancialItemCountAggregateOutputType = {
    id: number
    itemCode: number
    itemName: number
    statementType: number
    unit: number
    _all: number
  }


  export type FinancialItemAvgAggregateInputType = {
    id?: true
  }

  export type FinancialItemSumAggregateInputType = {
    id?: true
  }

  export type FinancialItemMinAggregateInputType = {
    id?: true
    itemCode?: true
    itemName?: true
    statementType?: true
    unit?: true
  }

  export type FinancialItemMaxAggregateInputType = {
    id?: true
    itemCode?: true
    itemName?: true
    statementType?: true
    unit?: true
  }

  export type FinancialItemCountAggregateInputType = {
    id?: true
    itemCode?: true
    itemName?: true
    statementType?: true
    unit?: true
    _all?: true
  }

  export type FinancialItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialItem to aggregate.
     */
    where?: FinancialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialItems to fetch.
     */
    orderBy?: FinancialItemOrderByWithRelationInput | FinancialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialItems
    **/
    _count?: true | FinancialItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialItemMaxAggregateInputType
  }

  export type GetFinancialItemAggregateType<T extends FinancialItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialItem[P]>
      : GetScalarType<T[P], AggregateFinancialItem[P]>
  }




  export type FinancialItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialItemWhereInput
    orderBy?: FinancialItemOrderByWithAggregationInput | FinancialItemOrderByWithAggregationInput[]
    by: FinancialItemScalarFieldEnum[] | FinancialItemScalarFieldEnum
    having?: FinancialItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialItemCountAggregateInputType | true
    _avg?: FinancialItemAvgAggregateInputType
    _sum?: FinancialItemSumAggregateInputType
    _min?: FinancialItemMinAggregateInputType
    _max?: FinancialItemMaxAggregateInputType
  }

  export type FinancialItemGroupByOutputType = {
    id: bigint
    itemCode: string
    itemName: string
    statementType: string
    unit: string | null
    _count: FinancialItemCountAggregateOutputType | null
    _avg: FinancialItemAvgAggregateOutputType | null
    _sum: FinancialItemSumAggregateOutputType | null
    _min: FinancialItemMinAggregateOutputType | null
    _max: FinancialItemMaxAggregateOutputType | null
  }

  type GetFinancialItemGroupByPayload<T extends FinancialItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialItemGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialItemGroupByOutputType[P]>
        }
      >
    >


  export type FinancialItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    itemName?: boolean
    statementType?: boolean
    unit?: boolean
    financials?: boolean | FinancialItem$financialsArgs<ExtArgs>
    _count?: boolean | FinancialItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialItem"]>

  export type FinancialItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    itemName?: boolean
    statementType?: boolean
    unit?: boolean
  }, ExtArgs["result"]["financialItem"]>

  export type FinancialItemSelectScalar = {
    id?: boolean
    itemCode?: boolean
    itemName?: boolean
    statementType?: boolean
    unit?: boolean
  }

  export type FinancialItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | FinancialItem$financialsArgs<ExtArgs>
    _count?: boolean | FinancialItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinancialItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FinancialItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialItem"
    objects: {
      financials: Prisma.$FinancialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      itemCode: string
      itemName: string
      statementType: string
      unit: string | null
    }, ExtArgs["result"]["financialItem"]>
    composites: {}
  }

  type FinancialItemGetPayload<S extends boolean | null | undefined | FinancialItemDefaultArgs> = $Result.GetResult<Prisma.$FinancialItemPayload, S>

  type FinancialItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinancialItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinancialItemCountAggregateInputType | true
    }

  export interface FinancialItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialItem'], meta: { name: 'FinancialItem' } }
    /**
     * Find zero or one FinancialItem that matches the filter.
     * @param {FinancialItemFindUniqueArgs} args - Arguments to find a FinancialItem
     * @example
     * // Get one FinancialItem
     * const financialItem = await prisma.financialItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialItemFindUniqueArgs>(args: SelectSubset<T, FinancialItemFindUniqueArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FinancialItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinancialItemFindUniqueOrThrowArgs} args - Arguments to find a FinancialItem
     * @example
     * // Get one FinancialItem
     * const financialItem = await prisma.financialItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FinancialItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemFindFirstArgs} args - Arguments to find a FinancialItem
     * @example
     * // Get one FinancialItem
     * const financialItem = await prisma.financialItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialItemFindFirstArgs>(args?: SelectSubset<T, FinancialItemFindFirstArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FinancialItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemFindFirstOrThrowArgs} args - Arguments to find a FinancialItem
     * @example
     * // Get one FinancialItem
     * const financialItem = await prisma.financialItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FinancialItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialItems
     * const financialItems = await prisma.financialItem.findMany()
     * 
     * // Get first 10 FinancialItems
     * const financialItems = await prisma.financialItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialItemWithIdOnly = await prisma.financialItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialItemFindManyArgs>(args?: SelectSubset<T, FinancialItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FinancialItem.
     * @param {FinancialItemCreateArgs} args - Arguments to create a FinancialItem.
     * @example
     * // Create one FinancialItem
     * const FinancialItem = await prisma.financialItem.create({
     *   data: {
     *     // ... data to create a FinancialItem
     *   }
     * })
     * 
     */
    create<T extends FinancialItemCreateArgs>(args: SelectSubset<T, FinancialItemCreateArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FinancialItems.
     * @param {FinancialItemCreateManyArgs} args - Arguments to create many FinancialItems.
     * @example
     * // Create many FinancialItems
     * const financialItem = await prisma.financialItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialItemCreateManyArgs>(args?: SelectSubset<T, FinancialItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialItems and returns the data saved in the database.
     * @param {FinancialItemCreateManyAndReturnArgs} args - Arguments to create many FinancialItems.
     * @example
     * // Create many FinancialItems
     * const financialItem = await prisma.financialItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialItems and only return the `id`
     * const financialItemWithIdOnly = await prisma.financialItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FinancialItem.
     * @param {FinancialItemDeleteArgs} args - Arguments to delete one FinancialItem.
     * @example
     * // Delete one FinancialItem
     * const FinancialItem = await prisma.financialItem.delete({
     *   where: {
     *     // ... filter to delete one FinancialItem
     *   }
     * })
     * 
     */
    delete<T extends FinancialItemDeleteArgs>(args: SelectSubset<T, FinancialItemDeleteArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FinancialItem.
     * @param {FinancialItemUpdateArgs} args - Arguments to update one FinancialItem.
     * @example
     * // Update one FinancialItem
     * const financialItem = await prisma.financialItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialItemUpdateArgs>(args: SelectSubset<T, FinancialItemUpdateArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FinancialItems.
     * @param {FinancialItemDeleteManyArgs} args - Arguments to filter FinancialItems to delete.
     * @example
     * // Delete a few FinancialItems
     * const { count } = await prisma.financialItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialItemDeleteManyArgs>(args?: SelectSubset<T, FinancialItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialItems
     * const financialItem = await prisma.financialItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialItemUpdateManyArgs>(args: SelectSubset<T, FinancialItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinancialItem.
     * @param {FinancialItemUpsertArgs} args - Arguments to update or create a FinancialItem.
     * @example
     * // Update or create a FinancialItem
     * const financialItem = await prisma.financialItem.upsert({
     *   create: {
     *     // ... data to create a FinancialItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialItem we want to update
     *   }
     * })
     */
    upsert<T extends FinancialItemUpsertArgs>(args: SelectSubset<T, FinancialItemUpsertArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FinancialItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemCountArgs} args - Arguments to filter FinancialItems to count.
     * @example
     * // Count the number of FinancialItems
     * const count = await prisma.financialItem.count({
     *   where: {
     *     // ... the filter for the FinancialItems we want to count
     *   }
     * })
    **/
    count<T extends FinancialItemCountArgs>(
      args?: Subset<T, FinancialItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialItemAggregateArgs>(args: Subset<T, FinancialItemAggregateArgs>): Prisma.PrismaPromise<GetFinancialItemAggregateType<T>>

    /**
     * Group by FinancialItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialItemGroupByArgs} args - Group by arguments.
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
      T extends FinancialItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialItemGroupByArgs['orderBy'] }
        : { orderBy?: FinancialItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialItem model
   */
  readonly fields: FinancialItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financials<T extends FinancialItem$financialsArgs<ExtArgs> = {}>(args?: Subset<T, FinancialItem$financialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the FinancialItem model
   */ 
  interface FinancialItemFieldRefs {
    readonly id: FieldRef<"FinancialItem", 'BigInt'>
    readonly itemCode: FieldRef<"FinancialItem", 'String'>
    readonly itemName: FieldRef<"FinancialItem", 'String'>
    readonly statementType: FieldRef<"FinancialItem", 'String'>
    readonly unit: FieldRef<"FinancialItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FinancialItem findUnique
   */
  export type FinancialItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter, which FinancialItem to fetch.
     */
    where: FinancialItemWhereUniqueInput
  }

  /**
   * FinancialItem findUniqueOrThrow
   */
  export type FinancialItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter, which FinancialItem to fetch.
     */
    where: FinancialItemWhereUniqueInput
  }

  /**
   * FinancialItem findFirst
   */
  export type FinancialItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter, which FinancialItem to fetch.
     */
    where?: FinancialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialItems to fetch.
     */
    orderBy?: FinancialItemOrderByWithRelationInput | FinancialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialItems.
     */
    cursor?: FinancialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialItems.
     */
    distinct?: FinancialItemScalarFieldEnum | FinancialItemScalarFieldEnum[]
  }

  /**
   * FinancialItem findFirstOrThrow
   */
  export type FinancialItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter, which FinancialItem to fetch.
     */
    where?: FinancialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialItems to fetch.
     */
    orderBy?: FinancialItemOrderByWithRelationInput | FinancialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialItems.
     */
    cursor?: FinancialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialItems.
     */
    distinct?: FinancialItemScalarFieldEnum | FinancialItemScalarFieldEnum[]
  }

  /**
   * FinancialItem findMany
   */
  export type FinancialItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter, which FinancialItems to fetch.
     */
    where?: FinancialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialItems to fetch.
     */
    orderBy?: FinancialItemOrderByWithRelationInput | FinancialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialItems.
     */
    cursor?: FinancialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialItems.
     */
    skip?: number
    distinct?: FinancialItemScalarFieldEnum | FinancialItemScalarFieldEnum[]
  }

  /**
   * FinancialItem create
   */
  export type FinancialItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialItem.
     */
    data: XOR<FinancialItemCreateInput, FinancialItemUncheckedCreateInput>
  }

  /**
   * FinancialItem createMany
   */
  export type FinancialItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialItems.
     */
    data: FinancialItemCreateManyInput | FinancialItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialItem createManyAndReturn
   */
  export type FinancialItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FinancialItems.
     */
    data: FinancialItemCreateManyInput | FinancialItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialItem update
   */
  export type FinancialItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialItem.
     */
    data: XOR<FinancialItemUpdateInput, FinancialItemUncheckedUpdateInput>
    /**
     * Choose, which FinancialItem to update.
     */
    where: FinancialItemWhereUniqueInput
  }

  /**
   * FinancialItem updateMany
   */
  export type FinancialItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialItems.
     */
    data: XOR<FinancialItemUpdateManyMutationInput, FinancialItemUncheckedUpdateManyInput>
    /**
     * Filter which FinancialItems to update
     */
    where?: FinancialItemWhereInput
  }

  /**
   * FinancialItem upsert
   */
  export type FinancialItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialItem to update in case it exists.
     */
    where: FinancialItemWhereUniqueInput
    /**
     * In case the FinancialItem found by the `where` argument doesn't exist, create a new FinancialItem with this data.
     */
    create: XOR<FinancialItemCreateInput, FinancialItemUncheckedCreateInput>
    /**
     * In case the FinancialItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialItemUpdateInput, FinancialItemUncheckedUpdateInput>
  }

  /**
   * FinancialItem delete
   */
  export type FinancialItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
    /**
     * Filter which FinancialItem to delete.
     */
    where: FinancialItemWhereUniqueInput
  }

  /**
   * FinancialItem deleteMany
   */
  export type FinancialItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialItems to delete
     */
    where?: FinancialItemWhereInput
  }

  /**
   * FinancialItem.financials
   */
  export type FinancialItem$financialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    where?: FinancialWhereInput
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    cursor?: FinancialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * FinancialItem without action
   */
  export type FinancialItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialItem
     */
    select?: FinancialItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialItemInclude<ExtArgs> | null
  }


  /**
   * Model Financial
   */

  export type AggregateFinancial = {
    _count: FinancialCountAggregateOutputType | null
    _avg: FinancialAvgAggregateOutputType | null
    _sum: FinancialSumAggregateOutputType | null
    _min: FinancialMinAggregateOutputType | null
    _max: FinancialMaxAggregateOutputType | null
  }

  export type FinancialAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    periodId: number | null
    itemId: number | null
    value: Decimal | null
  }

  export type FinancialSumAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    periodId: bigint | null
    itemId: bigint | null
    value: Decimal | null
  }

  export type FinancialMinAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    periodId: bigint | null
    itemId: bigint | null
    value: Decimal | null
    currency: string | null
    source: string | null
    createdAt: Date | null
  }

  export type FinancialMaxAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    periodId: bigint | null
    itemId: bigint | null
    value: Decimal | null
    currency: string | null
    source: string | null
    createdAt: Date | null
  }

  export type FinancialCountAggregateOutputType = {
    id: number
    companyId: number
    periodId: number
    itemId: number
    value: number
    currency: number
    source: number
    createdAt: number
    _all: number
  }


  export type FinancialAvgAggregateInputType = {
    id?: true
    companyId?: true
    periodId?: true
    itemId?: true
    value?: true
  }

  export type FinancialSumAggregateInputType = {
    id?: true
    companyId?: true
    periodId?: true
    itemId?: true
    value?: true
  }

  export type FinancialMinAggregateInputType = {
    id?: true
    companyId?: true
    periodId?: true
    itemId?: true
    value?: true
    currency?: true
    source?: true
    createdAt?: true
  }

  export type FinancialMaxAggregateInputType = {
    id?: true
    companyId?: true
    periodId?: true
    itemId?: true
    value?: true
    currency?: true
    source?: true
    createdAt?: true
  }

  export type FinancialCountAggregateInputType = {
    id?: true
    companyId?: true
    periodId?: true
    itemId?: true
    value?: true
    currency?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type FinancialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financial to aggregate.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Financials
    **/
    _count?: true | FinancialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialMaxAggregateInputType
  }

  export type GetFinancialAggregateType<T extends FinancialAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancial[P]>
      : GetScalarType<T[P], AggregateFinancial[P]>
  }




  export type FinancialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialWhereInput
    orderBy?: FinancialOrderByWithAggregationInput | FinancialOrderByWithAggregationInput[]
    by: FinancialScalarFieldEnum[] | FinancialScalarFieldEnum
    having?: FinancialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialCountAggregateInputType | true
    _avg?: FinancialAvgAggregateInputType
    _sum?: FinancialSumAggregateInputType
    _min?: FinancialMinAggregateInputType
    _max?: FinancialMaxAggregateInputType
  }

  export type FinancialGroupByOutputType = {
    id: bigint
    companyId: bigint
    periodId: bigint
    itemId: bigint
    value: Decimal
    currency: string
    source: string
    createdAt: Date
    _count: FinancialCountAggregateOutputType | null
    _avg: FinancialAvgAggregateOutputType | null
    _sum: FinancialSumAggregateOutputType | null
    _min: FinancialMinAggregateOutputType | null
    _max: FinancialMaxAggregateOutputType | null
  }

  type GetFinancialGroupByPayload<T extends FinancialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialGroupByOutputType[P]>
        }
      >
    >


  export type FinancialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    periodId?: boolean
    itemId?: boolean
    value?: boolean
    currency?: boolean
    source?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    period?: boolean | ReportPeriodDefaultArgs<ExtArgs>
    item?: boolean | FinancialItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financial"]>

  export type FinancialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    periodId?: boolean
    itemId?: boolean
    value?: boolean
    currency?: boolean
    source?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    period?: boolean | ReportPeriodDefaultArgs<ExtArgs>
    item?: boolean | FinancialItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financial"]>

  export type FinancialSelectScalar = {
    id?: boolean
    companyId?: boolean
    periodId?: boolean
    itemId?: boolean
    value?: boolean
    currency?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type FinancialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    period?: boolean | ReportPeriodDefaultArgs<ExtArgs>
    item?: boolean | FinancialItemDefaultArgs<ExtArgs>
  }
  export type FinancialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    period?: boolean | ReportPeriodDefaultArgs<ExtArgs>
    item?: boolean | FinancialItemDefaultArgs<ExtArgs>
  }

  export type $FinancialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Financial"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      period: Prisma.$ReportPeriodPayload<ExtArgs>
      item: Prisma.$FinancialItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      companyId: bigint
      periodId: bigint
      itemId: bigint
      value: Prisma.Decimal
      currency: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["financial"]>
    composites: {}
  }

  type FinancialGetPayload<S extends boolean | null | undefined | FinancialDefaultArgs> = $Result.GetResult<Prisma.$FinancialPayload, S>

  type FinancialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinancialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinancialCountAggregateInputType | true
    }

  export interface FinancialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Financial'], meta: { name: 'Financial' } }
    /**
     * Find zero or one Financial that matches the filter.
     * @param {FinancialFindUniqueArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialFindUniqueArgs>(args: SelectSubset<T, FinancialFindUniqueArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Financial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinancialFindUniqueOrThrowArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Financial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindFirstArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialFindFirstArgs>(args?: SelectSubset<T, FinancialFindFirstArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Financial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindFirstOrThrowArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Financials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financials
     * const financials = await prisma.financial.findMany()
     * 
     * // Get first 10 Financials
     * const financials = await prisma.financial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialWithIdOnly = await prisma.financial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialFindManyArgs>(args?: SelectSubset<T, FinancialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Financial.
     * @param {FinancialCreateArgs} args - Arguments to create a Financial.
     * @example
     * // Create one Financial
     * const Financial = await prisma.financial.create({
     *   data: {
     *     // ... data to create a Financial
     *   }
     * })
     * 
     */
    create<T extends FinancialCreateArgs>(args: SelectSubset<T, FinancialCreateArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Financials.
     * @param {FinancialCreateManyArgs} args - Arguments to create many Financials.
     * @example
     * // Create many Financials
     * const financial = await prisma.financial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialCreateManyArgs>(args?: SelectSubset<T, FinancialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Financials and returns the data saved in the database.
     * @param {FinancialCreateManyAndReturnArgs} args - Arguments to create many Financials.
     * @example
     * // Create many Financials
     * const financial = await prisma.financial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Financials and only return the `id`
     * const financialWithIdOnly = await prisma.financial.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Financial.
     * @param {FinancialDeleteArgs} args - Arguments to delete one Financial.
     * @example
     * // Delete one Financial
     * const Financial = await prisma.financial.delete({
     *   where: {
     *     // ... filter to delete one Financial
     *   }
     * })
     * 
     */
    delete<T extends FinancialDeleteArgs>(args: SelectSubset<T, FinancialDeleteArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Financial.
     * @param {FinancialUpdateArgs} args - Arguments to update one Financial.
     * @example
     * // Update one Financial
     * const financial = await prisma.financial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialUpdateArgs>(args: SelectSubset<T, FinancialUpdateArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Financials.
     * @param {FinancialDeleteManyArgs} args - Arguments to filter Financials to delete.
     * @example
     * // Delete a few Financials
     * const { count } = await prisma.financial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialDeleteManyArgs>(args?: SelectSubset<T, FinancialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financials
     * const financial = await prisma.financial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialUpdateManyArgs>(args: SelectSubset<T, FinancialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Financial.
     * @param {FinancialUpsertArgs} args - Arguments to update or create a Financial.
     * @example
     * // Update or create a Financial
     * const financial = await prisma.financial.upsert({
     *   create: {
     *     // ... data to create a Financial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financial we want to update
     *   }
     * })
     */
    upsert<T extends FinancialUpsertArgs>(args: SelectSubset<T, FinancialUpsertArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Financials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialCountArgs} args - Arguments to filter Financials to count.
     * @example
     * // Count the number of Financials
     * const count = await prisma.financial.count({
     *   where: {
     *     // ... the filter for the Financials we want to count
     *   }
     * })
    **/
    count<T extends FinancialCountArgs>(
      args?: Subset<T, FinancialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Financial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialAggregateArgs>(args: Subset<T, FinancialAggregateArgs>): Prisma.PrismaPromise<GetFinancialAggregateType<T>>

    /**
     * Group by Financial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialGroupByArgs} args - Group by arguments.
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
      T extends FinancialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialGroupByArgs['orderBy'] }
        : { orderBy?: FinancialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Financial model
   */
  readonly fields: FinancialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Financial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    period<T extends ReportPeriodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportPeriodDefaultArgs<ExtArgs>>): Prisma__ReportPeriodClient<$Result.GetResult<Prisma.$ReportPeriodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    item<T extends FinancialItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialItemDefaultArgs<ExtArgs>>): Prisma__FinancialItemClient<$Result.GetResult<Prisma.$FinancialItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Financial model
   */ 
  interface FinancialFieldRefs {
    readonly id: FieldRef<"Financial", 'BigInt'>
    readonly companyId: FieldRef<"Financial", 'BigInt'>
    readonly periodId: FieldRef<"Financial", 'BigInt'>
    readonly itemId: FieldRef<"Financial", 'BigInt'>
    readonly value: FieldRef<"Financial", 'Decimal'>
    readonly currency: FieldRef<"Financial", 'String'>
    readonly source: FieldRef<"Financial", 'String'>
    readonly createdAt: FieldRef<"Financial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Financial findUnique
   */
  export type FinancialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial findUniqueOrThrow
   */
  export type FinancialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial findFirst
   */
  export type FinancialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financials.
     */
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial findFirstOrThrow
   */
  export type FinancialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financials.
     */
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial findMany
   */
  export type FinancialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financials to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial create
   */
  export type FinancialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The data needed to create a Financial.
     */
    data: XOR<FinancialCreateInput, FinancialUncheckedCreateInput>
  }

  /**
   * Financial createMany
   */
  export type FinancialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Financials.
     */
    data: FinancialCreateManyInput | FinancialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Financial createManyAndReturn
   */
  export type FinancialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Financials.
     */
    data: FinancialCreateManyInput | FinancialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Financial update
   */
  export type FinancialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The data needed to update a Financial.
     */
    data: XOR<FinancialUpdateInput, FinancialUncheckedUpdateInput>
    /**
     * Choose, which Financial to update.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial updateMany
   */
  export type FinancialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Financials.
     */
    data: XOR<FinancialUpdateManyMutationInput, FinancialUncheckedUpdateManyInput>
    /**
     * Filter which Financials to update
     */
    where?: FinancialWhereInput
  }

  /**
   * Financial upsert
   */
  export type FinancialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The filter to search for the Financial to update in case it exists.
     */
    where: FinancialWhereUniqueInput
    /**
     * In case the Financial found by the `where` argument doesn't exist, create a new Financial with this data.
     */
    create: XOR<FinancialCreateInput, FinancialUncheckedCreateInput>
    /**
     * In case the Financial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialUpdateInput, FinancialUncheckedUpdateInput>
  }

  /**
   * Financial delete
   */
  export type FinancialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter which Financial to delete.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial deleteMany
   */
  export type FinancialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financials to delete
     */
    where?: FinancialWhereInput
  }

  /**
   * Financial without action
   */
  export type FinancialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
  }


  /**
   * Model CompanyIngestStatus
   */

  export type AggregateCompanyIngestStatus = {
    _count: CompanyIngestStatusCountAggregateOutputType | null
    _avg: CompanyIngestStatusAvgAggregateOutputType | null
    _sum: CompanyIngestStatusSumAggregateOutputType | null
    _min: CompanyIngestStatusMinAggregateOutputType | null
    _max: CompanyIngestStatusMaxAggregateOutputType | null
  }

  export type CompanyIngestStatusAvgAggregateOutputType = {
    companyId: number | null
    progressYear: number | null
    progressQuarter: number | null
  }

  export type CompanyIngestStatusSumAggregateOutputType = {
    companyId: bigint | null
    progressYear: number | null
    progressQuarter: number | null
  }

  export type CompanyIngestStatusMinAggregateOutputType = {
    companyId: bigint | null
    lastSuccessAt: Date | null
    lastErrorAt: Date | null
    lastErrorMsg: string | null
    progressYear: number | null
    progressQuarter: number | null
    status: string | null
  }

  export type CompanyIngestStatusMaxAggregateOutputType = {
    companyId: bigint | null
    lastSuccessAt: Date | null
    lastErrorAt: Date | null
    lastErrorMsg: string | null
    progressYear: number | null
    progressQuarter: number | null
    status: string | null
  }

  export type CompanyIngestStatusCountAggregateOutputType = {
    companyId: number
    lastSuccessAt: number
    lastErrorAt: number
    lastErrorMsg: number
    progressYear: number
    progressQuarter: number
    status: number
    _all: number
  }


  export type CompanyIngestStatusAvgAggregateInputType = {
    companyId?: true
    progressYear?: true
    progressQuarter?: true
  }

  export type CompanyIngestStatusSumAggregateInputType = {
    companyId?: true
    progressYear?: true
    progressQuarter?: true
  }

  export type CompanyIngestStatusMinAggregateInputType = {
    companyId?: true
    lastSuccessAt?: true
    lastErrorAt?: true
    lastErrorMsg?: true
    progressYear?: true
    progressQuarter?: true
    status?: true
  }

  export type CompanyIngestStatusMaxAggregateInputType = {
    companyId?: true
    lastSuccessAt?: true
    lastErrorAt?: true
    lastErrorMsg?: true
    progressYear?: true
    progressQuarter?: true
    status?: true
  }

  export type CompanyIngestStatusCountAggregateInputType = {
    companyId?: true
    lastSuccessAt?: true
    lastErrorAt?: true
    lastErrorMsg?: true
    progressYear?: true
    progressQuarter?: true
    status?: true
    _all?: true
  }

  export type CompanyIngestStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyIngestStatus to aggregate.
     */
    where?: CompanyIngestStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIngestStatuses to fetch.
     */
    orderBy?: CompanyIngestStatusOrderByWithRelationInput | CompanyIngestStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyIngestStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIngestStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIngestStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyIngestStatuses
    **/
    _count?: true | CompanyIngestStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyIngestStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyIngestStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyIngestStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyIngestStatusMaxAggregateInputType
  }

  export type GetCompanyIngestStatusAggregateType<T extends CompanyIngestStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyIngestStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyIngestStatus[P]>
      : GetScalarType<T[P], AggregateCompanyIngestStatus[P]>
  }




  export type CompanyIngestStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyIngestStatusWhereInput
    orderBy?: CompanyIngestStatusOrderByWithAggregationInput | CompanyIngestStatusOrderByWithAggregationInput[]
    by: CompanyIngestStatusScalarFieldEnum[] | CompanyIngestStatusScalarFieldEnum
    having?: CompanyIngestStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyIngestStatusCountAggregateInputType | true
    _avg?: CompanyIngestStatusAvgAggregateInputType
    _sum?: CompanyIngestStatusSumAggregateInputType
    _min?: CompanyIngestStatusMinAggregateInputType
    _max?: CompanyIngestStatusMaxAggregateInputType
  }

  export type CompanyIngestStatusGroupByOutputType = {
    companyId: bigint
    lastSuccessAt: Date | null
    lastErrorAt: Date | null
    lastErrorMsg: string | null
    progressYear: number | null
    progressQuarter: number | null
    status: string
    _count: CompanyIngestStatusCountAggregateOutputType | null
    _avg: CompanyIngestStatusAvgAggregateOutputType | null
    _sum: CompanyIngestStatusSumAggregateOutputType | null
    _min: CompanyIngestStatusMinAggregateOutputType | null
    _max: CompanyIngestStatusMaxAggregateOutputType | null
  }

  type GetCompanyIngestStatusGroupByPayload<T extends CompanyIngestStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyIngestStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyIngestStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyIngestStatusGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyIngestStatusGroupByOutputType[P]>
        }
      >
    >


  export type CompanyIngestStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    companyId?: boolean
    lastSuccessAt?: boolean
    lastErrorAt?: boolean
    lastErrorMsg?: boolean
    progressYear?: boolean
    progressQuarter?: boolean
    status?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyIngestStatus"]>

  export type CompanyIngestStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    companyId?: boolean
    lastSuccessAt?: boolean
    lastErrorAt?: boolean
    lastErrorMsg?: boolean
    progressYear?: boolean
    progressQuarter?: boolean
    status?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyIngestStatus"]>

  export type CompanyIngestStatusSelectScalar = {
    companyId?: boolean
    lastSuccessAt?: boolean
    lastErrorAt?: boolean
    lastErrorMsg?: boolean
    progressYear?: boolean
    progressQuarter?: boolean
    status?: boolean
  }

  export type CompanyIngestStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyIngestStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyIngestStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyIngestStatus"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      companyId: bigint
      lastSuccessAt: Date | null
      lastErrorAt: Date | null
      lastErrorMsg: string | null
      progressYear: number | null
      progressQuarter: number | null
      status: string
    }, ExtArgs["result"]["companyIngestStatus"]>
    composites: {}
  }

  type CompanyIngestStatusGetPayload<S extends boolean | null | undefined | CompanyIngestStatusDefaultArgs> = $Result.GetResult<Prisma.$CompanyIngestStatusPayload, S>

  type CompanyIngestStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyIngestStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyIngestStatusCountAggregateInputType | true
    }

  export interface CompanyIngestStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyIngestStatus'], meta: { name: 'CompanyIngestStatus' } }
    /**
     * Find zero or one CompanyIngestStatus that matches the filter.
     * @param {CompanyIngestStatusFindUniqueArgs} args - Arguments to find a CompanyIngestStatus
     * @example
     * // Get one CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyIngestStatusFindUniqueArgs>(args: SelectSubset<T, CompanyIngestStatusFindUniqueArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompanyIngestStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyIngestStatusFindUniqueOrThrowArgs} args - Arguments to find a CompanyIngestStatus
     * @example
     * // Get one CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyIngestStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyIngestStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompanyIngestStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusFindFirstArgs} args - Arguments to find a CompanyIngestStatus
     * @example
     * // Get one CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyIngestStatusFindFirstArgs>(args?: SelectSubset<T, CompanyIngestStatusFindFirstArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompanyIngestStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusFindFirstOrThrowArgs} args - Arguments to find a CompanyIngestStatus
     * @example
     * // Get one CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyIngestStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyIngestStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompanyIngestStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyIngestStatuses
     * const companyIngestStatuses = await prisma.companyIngestStatus.findMany()
     * 
     * // Get first 10 CompanyIngestStatuses
     * const companyIngestStatuses = await prisma.companyIngestStatus.findMany({ take: 10 })
     * 
     * // Only select the `companyId`
     * const companyIngestStatusWithCompanyIdOnly = await prisma.companyIngestStatus.findMany({ select: { companyId: true } })
     * 
     */
    findMany<T extends CompanyIngestStatusFindManyArgs>(args?: SelectSubset<T, CompanyIngestStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompanyIngestStatus.
     * @param {CompanyIngestStatusCreateArgs} args - Arguments to create a CompanyIngestStatus.
     * @example
     * // Create one CompanyIngestStatus
     * const CompanyIngestStatus = await prisma.companyIngestStatus.create({
     *   data: {
     *     // ... data to create a CompanyIngestStatus
     *   }
     * })
     * 
     */
    create<T extends CompanyIngestStatusCreateArgs>(args: SelectSubset<T, CompanyIngestStatusCreateArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompanyIngestStatuses.
     * @param {CompanyIngestStatusCreateManyArgs} args - Arguments to create many CompanyIngestStatuses.
     * @example
     * // Create many CompanyIngestStatuses
     * const companyIngestStatus = await prisma.companyIngestStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyIngestStatusCreateManyArgs>(args?: SelectSubset<T, CompanyIngestStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyIngestStatuses and returns the data saved in the database.
     * @param {CompanyIngestStatusCreateManyAndReturnArgs} args - Arguments to create many CompanyIngestStatuses.
     * @example
     * // Create many CompanyIngestStatuses
     * const companyIngestStatus = await prisma.companyIngestStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyIngestStatuses and only return the `companyId`
     * const companyIngestStatusWithCompanyIdOnly = await prisma.companyIngestStatus.createManyAndReturn({ 
     *   select: { companyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyIngestStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyIngestStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompanyIngestStatus.
     * @param {CompanyIngestStatusDeleteArgs} args - Arguments to delete one CompanyIngestStatus.
     * @example
     * // Delete one CompanyIngestStatus
     * const CompanyIngestStatus = await prisma.companyIngestStatus.delete({
     *   where: {
     *     // ... filter to delete one CompanyIngestStatus
     *   }
     * })
     * 
     */
    delete<T extends CompanyIngestStatusDeleteArgs>(args: SelectSubset<T, CompanyIngestStatusDeleteArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompanyIngestStatus.
     * @param {CompanyIngestStatusUpdateArgs} args - Arguments to update one CompanyIngestStatus.
     * @example
     * // Update one CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyIngestStatusUpdateArgs>(args: SelectSubset<T, CompanyIngestStatusUpdateArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompanyIngestStatuses.
     * @param {CompanyIngestStatusDeleteManyArgs} args - Arguments to filter CompanyIngestStatuses to delete.
     * @example
     * // Delete a few CompanyIngestStatuses
     * const { count } = await prisma.companyIngestStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyIngestStatusDeleteManyArgs>(args?: SelectSubset<T, CompanyIngestStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyIngestStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyIngestStatuses
     * const companyIngestStatus = await prisma.companyIngestStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyIngestStatusUpdateManyArgs>(args: SelectSubset<T, CompanyIngestStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyIngestStatus.
     * @param {CompanyIngestStatusUpsertArgs} args - Arguments to update or create a CompanyIngestStatus.
     * @example
     * // Update or create a CompanyIngestStatus
     * const companyIngestStatus = await prisma.companyIngestStatus.upsert({
     *   create: {
     *     // ... data to create a CompanyIngestStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyIngestStatus we want to update
     *   }
     * })
     */
    upsert<T extends CompanyIngestStatusUpsertArgs>(args: SelectSubset<T, CompanyIngestStatusUpsertArgs<ExtArgs>>): Prisma__CompanyIngestStatusClient<$Result.GetResult<Prisma.$CompanyIngestStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompanyIngestStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusCountArgs} args - Arguments to filter CompanyIngestStatuses to count.
     * @example
     * // Count the number of CompanyIngestStatuses
     * const count = await prisma.companyIngestStatus.count({
     *   where: {
     *     // ... the filter for the CompanyIngestStatuses we want to count
     *   }
     * })
    **/
    count<T extends CompanyIngestStatusCountArgs>(
      args?: Subset<T, CompanyIngestStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyIngestStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyIngestStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyIngestStatusAggregateArgs>(args: Subset<T, CompanyIngestStatusAggregateArgs>): Prisma.PrismaPromise<GetCompanyIngestStatusAggregateType<T>>

    /**
     * Group by CompanyIngestStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIngestStatusGroupByArgs} args - Group by arguments.
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
      T extends CompanyIngestStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyIngestStatusGroupByArgs['orderBy'] }
        : { orderBy?: CompanyIngestStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyIngestStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyIngestStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyIngestStatus model
   */
  readonly fields: CompanyIngestStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyIngestStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyIngestStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CompanyIngestStatus model
   */ 
  interface CompanyIngestStatusFieldRefs {
    readonly companyId: FieldRef<"CompanyIngestStatus", 'BigInt'>
    readonly lastSuccessAt: FieldRef<"CompanyIngestStatus", 'DateTime'>
    readonly lastErrorAt: FieldRef<"CompanyIngestStatus", 'DateTime'>
    readonly lastErrorMsg: FieldRef<"CompanyIngestStatus", 'String'>
    readonly progressYear: FieldRef<"CompanyIngestStatus", 'Int'>
    readonly progressQuarter: FieldRef<"CompanyIngestStatus", 'Int'>
    readonly status: FieldRef<"CompanyIngestStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyIngestStatus findUnique
   */
  export type CompanyIngestStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIngestStatus to fetch.
     */
    where: CompanyIngestStatusWhereUniqueInput
  }

  /**
   * CompanyIngestStatus findUniqueOrThrow
   */
  export type CompanyIngestStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIngestStatus to fetch.
     */
    where: CompanyIngestStatusWhereUniqueInput
  }

  /**
   * CompanyIngestStatus findFirst
   */
  export type CompanyIngestStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIngestStatus to fetch.
     */
    where?: CompanyIngestStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIngestStatuses to fetch.
     */
    orderBy?: CompanyIngestStatusOrderByWithRelationInput | CompanyIngestStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyIngestStatuses.
     */
    cursor?: CompanyIngestStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIngestStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIngestStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyIngestStatuses.
     */
    distinct?: CompanyIngestStatusScalarFieldEnum | CompanyIngestStatusScalarFieldEnum[]
  }

  /**
   * CompanyIngestStatus findFirstOrThrow
   */
  export type CompanyIngestStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIngestStatus to fetch.
     */
    where?: CompanyIngestStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIngestStatuses to fetch.
     */
    orderBy?: CompanyIngestStatusOrderByWithRelationInput | CompanyIngestStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyIngestStatuses.
     */
    cursor?: CompanyIngestStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIngestStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIngestStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyIngestStatuses.
     */
    distinct?: CompanyIngestStatusScalarFieldEnum | CompanyIngestStatusScalarFieldEnum[]
  }

  /**
   * CompanyIngestStatus findMany
   */
  export type CompanyIngestStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIngestStatuses to fetch.
     */
    where?: CompanyIngestStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIngestStatuses to fetch.
     */
    orderBy?: CompanyIngestStatusOrderByWithRelationInput | CompanyIngestStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyIngestStatuses.
     */
    cursor?: CompanyIngestStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIngestStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIngestStatuses.
     */
    skip?: number
    distinct?: CompanyIngestStatusScalarFieldEnum | CompanyIngestStatusScalarFieldEnum[]
  }

  /**
   * CompanyIngestStatus create
   */
  export type CompanyIngestStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyIngestStatus.
     */
    data: XOR<CompanyIngestStatusCreateInput, CompanyIngestStatusUncheckedCreateInput>
  }

  /**
   * CompanyIngestStatus createMany
   */
  export type CompanyIngestStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyIngestStatuses.
     */
    data: CompanyIngestStatusCreateManyInput | CompanyIngestStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyIngestStatus createManyAndReturn
   */
  export type CompanyIngestStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompanyIngestStatuses.
     */
    data: CompanyIngestStatusCreateManyInput | CompanyIngestStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyIngestStatus update
   */
  export type CompanyIngestStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyIngestStatus.
     */
    data: XOR<CompanyIngestStatusUpdateInput, CompanyIngestStatusUncheckedUpdateInput>
    /**
     * Choose, which CompanyIngestStatus to update.
     */
    where: CompanyIngestStatusWhereUniqueInput
  }

  /**
   * CompanyIngestStatus updateMany
   */
  export type CompanyIngestStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyIngestStatuses.
     */
    data: XOR<CompanyIngestStatusUpdateManyMutationInput, CompanyIngestStatusUncheckedUpdateManyInput>
    /**
     * Filter which CompanyIngestStatuses to update
     */
    where?: CompanyIngestStatusWhereInput
  }

  /**
   * CompanyIngestStatus upsert
   */
  export type CompanyIngestStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyIngestStatus to update in case it exists.
     */
    where: CompanyIngestStatusWhereUniqueInput
    /**
     * In case the CompanyIngestStatus found by the `where` argument doesn't exist, create a new CompanyIngestStatus with this data.
     */
    create: XOR<CompanyIngestStatusCreateInput, CompanyIngestStatusUncheckedCreateInput>
    /**
     * In case the CompanyIngestStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyIngestStatusUpdateInput, CompanyIngestStatusUncheckedUpdateInput>
  }

  /**
   * CompanyIngestStatus delete
   */
  export type CompanyIngestStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
    /**
     * Filter which CompanyIngestStatus to delete.
     */
    where: CompanyIngestStatusWhereUniqueInput
  }

  /**
   * CompanyIngestStatus deleteMany
   */
  export type CompanyIngestStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyIngestStatuses to delete
     */
    where?: CompanyIngestStatusWhereInput
  }

  /**
   * CompanyIngestStatus without action
   */
  export type CompanyIngestStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIngestStatus
     */
    select?: CompanyIngestStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIngestStatusInclude<ExtArgs> | null
  }


  /**
   * Model IngestJob
   */

  export type AggregateIngestJob = {
    _count: IngestJobCountAggregateOutputType | null
    _avg: IngestJobAvgAggregateOutputType | null
    _sum: IngestJobSumAggregateOutputType | null
    _min: IngestJobMinAggregateOutputType | null
    _max: IngestJobMaxAggregateOutputType | null
  }

  export type IngestJobAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    priority: number | null
    retries: number | null
  }

  export type IngestJobSumAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    priority: number | null
    retries: number | null
  }

  export type IngestJobMinAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    priority: number | null
    status: string | null
    retries: number | null
    lastErrorMsg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngestJobMaxAggregateOutputType = {
    id: bigint | null
    companyId: bigint | null
    fiscalYear: number | null
    fiscalQuarter: number | null
    priority: number | null
    status: string | null
    retries: number | null
    lastErrorMsg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngestJobCountAggregateOutputType = {
    id: number
    companyId: number
    fiscalYear: number
    fiscalQuarter: number
    priority: number
    status: number
    retries: number
    lastErrorMsg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngestJobAvgAggregateInputType = {
    id?: true
    companyId?: true
    fiscalYear?: true
    fiscalQuarter?: true
    priority?: true
    retries?: true
  }

  export type IngestJobSumAggregateInputType = {
    id?: true
    companyId?: true
    fiscalYear?: true
    fiscalQuarter?: true
    priority?: true
    retries?: true
  }

  export type IngestJobMinAggregateInputType = {
    id?: true
    companyId?: true
    fiscalYear?: true
    fiscalQuarter?: true
    priority?: true
    status?: true
    retries?: true
    lastErrorMsg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngestJobMaxAggregateInputType = {
    id?: true
    companyId?: true
    fiscalYear?: true
    fiscalQuarter?: true
    priority?: true
    status?: true
    retries?: true
    lastErrorMsg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngestJobCountAggregateInputType = {
    id?: true
    companyId?: true
    fiscalYear?: true
    fiscalQuarter?: true
    priority?: true
    status?: true
    retries?: true
    lastErrorMsg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngestJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestJob to aggregate.
     */
    where?: IngestJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestJobs to fetch.
     */
    orderBy?: IngestJobOrderByWithRelationInput | IngestJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestJobs
    **/
    _count?: true | IngestJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestJobMaxAggregateInputType
  }

  export type GetIngestJobAggregateType<T extends IngestJobAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestJob[P]>
      : GetScalarType<T[P], AggregateIngestJob[P]>
  }




  export type IngestJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestJobWhereInput
    orderBy?: IngestJobOrderByWithAggregationInput | IngestJobOrderByWithAggregationInput[]
    by: IngestJobScalarFieldEnum[] | IngestJobScalarFieldEnum
    having?: IngestJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestJobCountAggregateInputType | true
    _avg?: IngestJobAvgAggregateInputType
    _sum?: IngestJobSumAggregateInputType
    _min?: IngestJobMinAggregateInputType
    _max?: IngestJobMaxAggregateInputType
  }

  export type IngestJobGroupByOutputType = {
    id: bigint
    companyId: bigint
    fiscalYear: number
    fiscalQuarter: number
    priority: number
    status: string
    retries: number
    lastErrorMsg: string | null
    createdAt: Date
    updatedAt: Date
    _count: IngestJobCountAggregateOutputType | null
    _avg: IngestJobAvgAggregateOutputType | null
    _sum: IngestJobSumAggregateOutputType | null
    _min: IngestJobMinAggregateOutputType | null
    _max: IngestJobMaxAggregateOutputType | null
  }

  type GetIngestJobGroupByPayload<T extends IngestJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestJobGroupByOutputType[P]>
            : GetScalarType<T[P], IngestJobGroupByOutputType[P]>
        }
      >
    >


  export type IngestJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    priority?: boolean
    status?: boolean
    retries?: boolean
    lastErrorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    logs?: boolean | IngestJob$logsArgs<ExtArgs>
    _count?: boolean | IngestJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestJob"]>

  export type IngestJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    priority?: boolean
    status?: boolean
    retries?: boolean
    lastErrorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestJob"]>

  export type IngestJobSelectScalar = {
    id?: boolean
    companyId?: boolean
    fiscalYear?: boolean
    fiscalQuarter?: boolean
    priority?: boolean
    status?: boolean
    retries?: boolean
    lastErrorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngestJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    logs?: boolean | IngestJob$logsArgs<ExtArgs>
    _count?: boolean | IngestJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngestJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $IngestJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestJob"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      logs: Prisma.$IngestLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      companyId: bigint
      fiscalYear: number
      fiscalQuarter: number
      priority: number
      status: string
      retries: number
      lastErrorMsg: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingestJob"]>
    composites: {}
  }

  type IngestJobGetPayload<S extends boolean | null | undefined | IngestJobDefaultArgs> = $Result.GetResult<Prisma.$IngestJobPayload, S>

  type IngestJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngestJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngestJobCountAggregateInputType | true
    }

  export interface IngestJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestJob'], meta: { name: 'IngestJob' } }
    /**
     * Find zero or one IngestJob that matches the filter.
     * @param {IngestJobFindUniqueArgs} args - Arguments to find a IngestJob
     * @example
     * // Get one IngestJob
     * const ingestJob = await prisma.ingestJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestJobFindUniqueArgs>(args: SelectSubset<T, IngestJobFindUniqueArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IngestJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngestJobFindUniqueOrThrowArgs} args - Arguments to find a IngestJob
     * @example
     * // Get one IngestJob
     * const ingestJob = await prisma.ingestJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestJobFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IngestJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobFindFirstArgs} args - Arguments to find a IngestJob
     * @example
     * // Get one IngestJob
     * const ingestJob = await prisma.ingestJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestJobFindFirstArgs>(args?: SelectSubset<T, IngestJobFindFirstArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IngestJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobFindFirstOrThrowArgs} args - Arguments to find a IngestJob
     * @example
     * // Get one IngestJob
     * const ingestJob = await prisma.ingestJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestJobFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IngestJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestJobs
     * const ingestJobs = await prisma.ingestJob.findMany()
     * 
     * // Get first 10 IngestJobs
     * const ingestJobs = await prisma.ingestJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestJobWithIdOnly = await prisma.ingestJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestJobFindManyArgs>(args?: SelectSubset<T, IngestJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IngestJob.
     * @param {IngestJobCreateArgs} args - Arguments to create a IngestJob.
     * @example
     * // Create one IngestJob
     * const IngestJob = await prisma.ingestJob.create({
     *   data: {
     *     // ... data to create a IngestJob
     *   }
     * })
     * 
     */
    create<T extends IngestJobCreateArgs>(args: SelectSubset<T, IngestJobCreateArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IngestJobs.
     * @param {IngestJobCreateManyArgs} args - Arguments to create many IngestJobs.
     * @example
     * // Create many IngestJobs
     * const ingestJob = await prisma.ingestJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestJobCreateManyArgs>(args?: SelectSubset<T, IngestJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestJobs and returns the data saved in the database.
     * @param {IngestJobCreateManyAndReturnArgs} args - Arguments to create many IngestJobs.
     * @example
     * // Create many IngestJobs
     * const ingestJob = await prisma.ingestJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestJobs and only return the `id`
     * const ingestJobWithIdOnly = await prisma.ingestJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestJobCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IngestJob.
     * @param {IngestJobDeleteArgs} args - Arguments to delete one IngestJob.
     * @example
     * // Delete one IngestJob
     * const IngestJob = await prisma.ingestJob.delete({
     *   where: {
     *     // ... filter to delete one IngestJob
     *   }
     * })
     * 
     */
    delete<T extends IngestJobDeleteArgs>(args: SelectSubset<T, IngestJobDeleteArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IngestJob.
     * @param {IngestJobUpdateArgs} args - Arguments to update one IngestJob.
     * @example
     * // Update one IngestJob
     * const ingestJob = await prisma.ingestJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestJobUpdateArgs>(args: SelectSubset<T, IngestJobUpdateArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IngestJobs.
     * @param {IngestJobDeleteManyArgs} args - Arguments to filter IngestJobs to delete.
     * @example
     * // Delete a few IngestJobs
     * const { count } = await prisma.ingestJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestJobDeleteManyArgs>(args?: SelectSubset<T, IngestJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestJobs
     * const ingestJob = await prisma.ingestJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestJobUpdateManyArgs>(args: SelectSubset<T, IngestJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngestJob.
     * @param {IngestJobUpsertArgs} args - Arguments to update or create a IngestJob.
     * @example
     * // Update or create a IngestJob
     * const ingestJob = await prisma.ingestJob.upsert({
     *   create: {
     *     // ... data to create a IngestJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestJob we want to update
     *   }
     * })
     */
    upsert<T extends IngestJobUpsertArgs>(args: SelectSubset<T, IngestJobUpsertArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IngestJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobCountArgs} args - Arguments to filter IngestJobs to count.
     * @example
     * // Count the number of IngestJobs
     * const count = await prisma.ingestJob.count({
     *   where: {
     *     // ... the filter for the IngestJobs we want to count
     *   }
     * })
    **/
    count<T extends IngestJobCountArgs>(
      args?: Subset<T, IngestJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestJobAggregateArgs>(args: Subset<T, IngestJobAggregateArgs>): Prisma.PrismaPromise<GetIngestJobAggregateType<T>>

    /**
     * Group by IngestJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestJobGroupByArgs} args - Group by arguments.
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
      T extends IngestJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestJobGroupByArgs['orderBy'] }
        : { orderBy?: IngestJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestJob model
   */
  readonly fields: IngestJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    logs<T extends IngestJob$logsArgs<ExtArgs> = {}>(args?: Subset<T, IngestJob$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the IngestJob model
   */ 
  interface IngestJobFieldRefs {
    readonly id: FieldRef<"IngestJob", 'BigInt'>
    readonly companyId: FieldRef<"IngestJob", 'BigInt'>
    readonly fiscalYear: FieldRef<"IngestJob", 'Int'>
    readonly fiscalQuarter: FieldRef<"IngestJob", 'Int'>
    readonly priority: FieldRef<"IngestJob", 'Int'>
    readonly status: FieldRef<"IngestJob", 'String'>
    readonly retries: FieldRef<"IngestJob", 'Int'>
    readonly lastErrorMsg: FieldRef<"IngestJob", 'String'>
    readonly createdAt: FieldRef<"IngestJob", 'DateTime'>
    readonly updatedAt: FieldRef<"IngestJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestJob findUnique
   */
  export type IngestJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter, which IngestJob to fetch.
     */
    where: IngestJobWhereUniqueInput
  }

  /**
   * IngestJob findUniqueOrThrow
   */
  export type IngestJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter, which IngestJob to fetch.
     */
    where: IngestJobWhereUniqueInput
  }

  /**
   * IngestJob findFirst
   */
  export type IngestJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter, which IngestJob to fetch.
     */
    where?: IngestJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestJobs to fetch.
     */
    orderBy?: IngestJobOrderByWithRelationInput | IngestJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestJobs.
     */
    cursor?: IngestJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestJobs.
     */
    distinct?: IngestJobScalarFieldEnum | IngestJobScalarFieldEnum[]
  }

  /**
   * IngestJob findFirstOrThrow
   */
  export type IngestJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter, which IngestJob to fetch.
     */
    where?: IngestJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestJobs to fetch.
     */
    orderBy?: IngestJobOrderByWithRelationInput | IngestJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestJobs.
     */
    cursor?: IngestJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestJobs.
     */
    distinct?: IngestJobScalarFieldEnum | IngestJobScalarFieldEnum[]
  }

  /**
   * IngestJob findMany
   */
  export type IngestJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter, which IngestJobs to fetch.
     */
    where?: IngestJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestJobs to fetch.
     */
    orderBy?: IngestJobOrderByWithRelationInput | IngestJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestJobs.
     */
    cursor?: IngestJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestJobs.
     */
    skip?: number
    distinct?: IngestJobScalarFieldEnum | IngestJobScalarFieldEnum[]
  }

  /**
   * IngestJob create
   */
  export type IngestJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * The data needed to create a IngestJob.
     */
    data: XOR<IngestJobCreateInput, IngestJobUncheckedCreateInput>
  }

  /**
   * IngestJob createMany
   */
  export type IngestJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestJobs.
     */
    data: IngestJobCreateManyInput | IngestJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestJob createManyAndReturn
   */
  export type IngestJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IngestJobs.
     */
    data: IngestJobCreateManyInput | IngestJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestJob update
   */
  export type IngestJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * The data needed to update a IngestJob.
     */
    data: XOR<IngestJobUpdateInput, IngestJobUncheckedUpdateInput>
    /**
     * Choose, which IngestJob to update.
     */
    where: IngestJobWhereUniqueInput
  }

  /**
   * IngestJob updateMany
   */
  export type IngestJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestJobs.
     */
    data: XOR<IngestJobUpdateManyMutationInput, IngestJobUncheckedUpdateManyInput>
    /**
     * Filter which IngestJobs to update
     */
    where?: IngestJobWhereInput
  }

  /**
   * IngestJob upsert
   */
  export type IngestJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * The filter to search for the IngestJob to update in case it exists.
     */
    where: IngestJobWhereUniqueInput
    /**
     * In case the IngestJob found by the `where` argument doesn't exist, create a new IngestJob with this data.
     */
    create: XOR<IngestJobCreateInput, IngestJobUncheckedCreateInput>
    /**
     * In case the IngestJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestJobUpdateInput, IngestJobUncheckedUpdateInput>
  }

  /**
   * IngestJob delete
   */
  export type IngestJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    /**
     * Filter which IngestJob to delete.
     */
    where: IngestJobWhereUniqueInput
  }

  /**
   * IngestJob deleteMany
   */
  export type IngestJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestJobs to delete
     */
    where?: IngestJobWhereInput
  }

  /**
   * IngestJob.logs
   */
  export type IngestJob$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    where?: IngestLogWhereInput
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    cursor?: IngestLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestJob without action
   */
  export type IngestJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
  }


  /**
   * Model IngestControl
   */

  export type AggregateIngestControl = {
    _count: IngestControlCountAggregateOutputType | null
    _avg: IngestControlAvgAggregateOutputType | null
    _sum: IngestControlSumAggregateOutputType | null
    _min: IngestControlMinAggregateOutputType | null
    _max: IngestControlMaxAggregateOutputType | null
  }

  export type IngestControlAvgAggregateOutputType = {
    id: number | null
  }

  export type IngestControlSumAggregateOutputType = {
    id: number | null
  }

  export type IngestControlMinAggregateOutputType = {
    id: number | null
    runState: string | null
    updatedAt: Date | null
  }

  export type IngestControlMaxAggregateOutputType = {
    id: number | null
    runState: string | null
    updatedAt: Date | null
  }

  export type IngestControlCountAggregateOutputType = {
    id: number
    runState: number
    updatedAt: number
    _all: number
  }


  export type IngestControlAvgAggregateInputType = {
    id?: true
  }

  export type IngestControlSumAggregateInputType = {
    id?: true
  }

  export type IngestControlMinAggregateInputType = {
    id?: true
    runState?: true
    updatedAt?: true
  }

  export type IngestControlMaxAggregateInputType = {
    id?: true
    runState?: true
    updatedAt?: true
  }

  export type IngestControlCountAggregateInputType = {
    id?: true
    runState?: true
    updatedAt?: true
    _all?: true
  }

  export type IngestControlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestControl to aggregate.
     */
    where?: IngestControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestControls to fetch.
     */
    orderBy?: IngestControlOrderByWithRelationInput | IngestControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestControls
    **/
    _count?: true | IngestControlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestControlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestControlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestControlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestControlMaxAggregateInputType
  }

  export type GetIngestControlAggregateType<T extends IngestControlAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestControl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestControl[P]>
      : GetScalarType<T[P], AggregateIngestControl[P]>
  }




  export type IngestControlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestControlWhereInput
    orderBy?: IngestControlOrderByWithAggregationInput | IngestControlOrderByWithAggregationInput[]
    by: IngestControlScalarFieldEnum[] | IngestControlScalarFieldEnum
    having?: IngestControlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestControlCountAggregateInputType | true
    _avg?: IngestControlAvgAggregateInputType
    _sum?: IngestControlSumAggregateInputType
    _min?: IngestControlMinAggregateInputType
    _max?: IngestControlMaxAggregateInputType
  }

  export type IngestControlGroupByOutputType = {
    id: number
    runState: string
    updatedAt: Date
    _count: IngestControlCountAggregateOutputType | null
    _avg: IngestControlAvgAggregateOutputType | null
    _sum: IngestControlSumAggregateOutputType | null
    _min: IngestControlMinAggregateOutputType | null
    _max: IngestControlMaxAggregateOutputType | null
  }

  type GetIngestControlGroupByPayload<T extends IngestControlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestControlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestControlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestControlGroupByOutputType[P]>
            : GetScalarType<T[P], IngestControlGroupByOutputType[P]>
        }
      >
    >


  export type IngestControlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runState?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingestControl"]>

  export type IngestControlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runState?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingestControl"]>

  export type IngestControlSelectScalar = {
    id?: boolean
    runState?: boolean
    updatedAt?: boolean
  }


  export type $IngestControlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestControl"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      runState: string
      updatedAt: Date
    }, ExtArgs["result"]["ingestControl"]>
    composites: {}
  }

  type IngestControlGetPayload<S extends boolean | null | undefined | IngestControlDefaultArgs> = $Result.GetResult<Prisma.$IngestControlPayload, S>

  type IngestControlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngestControlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngestControlCountAggregateInputType | true
    }

  export interface IngestControlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestControl'], meta: { name: 'IngestControl' } }
    /**
     * Find zero or one IngestControl that matches the filter.
     * @param {IngestControlFindUniqueArgs} args - Arguments to find a IngestControl
     * @example
     * // Get one IngestControl
     * const ingestControl = await prisma.ingestControl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestControlFindUniqueArgs>(args: SelectSubset<T, IngestControlFindUniqueArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IngestControl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngestControlFindUniqueOrThrowArgs} args - Arguments to find a IngestControl
     * @example
     * // Get one IngestControl
     * const ingestControl = await prisma.ingestControl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestControlFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestControlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IngestControl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlFindFirstArgs} args - Arguments to find a IngestControl
     * @example
     * // Get one IngestControl
     * const ingestControl = await prisma.ingestControl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestControlFindFirstArgs>(args?: SelectSubset<T, IngestControlFindFirstArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IngestControl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlFindFirstOrThrowArgs} args - Arguments to find a IngestControl
     * @example
     * // Get one IngestControl
     * const ingestControl = await prisma.ingestControl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestControlFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestControlFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IngestControls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestControls
     * const ingestControls = await prisma.ingestControl.findMany()
     * 
     * // Get first 10 IngestControls
     * const ingestControls = await prisma.ingestControl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestControlWithIdOnly = await prisma.ingestControl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestControlFindManyArgs>(args?: SelectSubset<T, IngestControlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IngestControl.
     * @param {IngestControlCreateArgs} args - Arguments to create a IngestControl.
     * @example
     * // Create one IngestControl
     * const IngestControl = await prisma.ingestControl.create({
     *   data: {
     *     // ... data to create a IngestControl
     *   }
     * })
     * 
     */
    create<T extends IngestControlCreateArgs>(args: SelectSubset<T, IngestControlCreateArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IngestControls.
     * @param {IngestControlCreateManyArgs} args - Arguments to create many IngestControls.
     * @example
     * // Create many IngestControls
     * const ingestControl = await prisma.ingestControl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestControlCreateManyArgs>(args?: SelectSubset<T, IngestControlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestControls and returns the data saved in the database.
     * @param {IngestControlCreateManyAndReturnArgs} args - Arguments to create many IngestControls.
     * @example
     * // Create many IngestControls
     * const ingestControl = await prisma.ingestControl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestControls and only return the `id`
     * const ingestControlWithIdOnly = await prisma.ingestControl.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestControlCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestControlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IngestControl.
     * @param {IngestControlDeleteArgs} args - Arguments to delete one IngestControl.
     * @example
     * // Delete one IngestControl
     * const IngestControl = await prisma.ingestControl.delete({
     *   where: {
     *     // ... filter to delete one IngestControl
     *   }
     * })
     * 
     */
    delete<T extends IngestControlDeleteArgs>(args: SelectSubset<T, IngestControlDeleteArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IngestControl.
     * @param {IngestControlUpdateArgs} args - Arguments to update one IngestControl.
     * @example
     * // Update one IngestControl
     * const ingestControl = await prisma.ingestControl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestControlUpdateArgs>(args: SelectSubset<T, IngestControlUpdateArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IngestControls.
     * @param {IngestControlDeleteManyArgs} args - Arguments to filter IngestControls to delete.
     * @example
     * // Delete a few IngestControls
     * const { count } = await prisma.ingestControl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestControlDeleteManyArgs>(args?: SelectSubset<T, IngestControlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestControls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestControls
     * const ingestControl = await prisma.ingestControl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestControlUpdateManyArgs>(args: SelectSubset<T, IngestControlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngestControl.
     * @param {IngestControlUpsertArgs} args - Arguments to update or create a IngestControl.
     * @example
     * // Update or create a IngestControl
     * const ingestControl = await prisma.ingestControl.upsert({
     *   create: {
     *     // ... data to create a IngestControl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestControl we want to update
     *   }
     * })
     */
    upsert<T extends IngestControlUpsertArgs>(args: SelectSubset<T, IngestControlUpsertArgs<ExtArgs>>): Prisma__IngestControlClient<$Result.GetResult<Prisma.$IngestControlPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IngestControls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlCountArgs} args - Arguments to filter IngestControls to count.
     * @example
     * // Count the number of IngestControls
     * const count = await prisma.ingestControl.count({
     *   where: {
     *     // ... the filter for the IngestControls we want to count
     *   }
     * })
    **/
    count<T extends IngestControlCountArgs>(
      args?: Subset<T, IngestControlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestControlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestControl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestControlAggregateArgs>(args: Subset<T, IngestControlAggregateArgs>): Prisma.PrismaPromise<GetIngestControlAggregateType<T>>

    /**
     * Group by IngestControl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestControlGroupByArgs} args - Group by arguments.
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
      T extends IngestControlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestControlGroupByArgs['orderBy'] }
        : { orderBy?: IngestControlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestControlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestControlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestControl model
   */
  readonly fields: IngestControlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestControl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestControlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IngestControl model
   */ 
  interface IngestControlFieldRefs {
    readonly id: FieldRef<"IngestControl", 'Int'>
    readonly runState: FieldRef<"IngestControl", 'String'>
    readonly updatedAt: FieldRef<"IngestControl", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestControl findUnique
   */
  export type IngestControlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter, which IngestControl to fetch.
     */
    where: IngestControlWhereUniqueInput
  }

  /**
   * IngestControl findUniqueOrThrow
   */
  export type IngestControlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter, which IngestControl to fetch.
     */
    where: IngestControlWhereUniqueInput
  }

  /**
   * IngestControl findFirst
   */
  export type IngestControlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter, which IngestControl to fetch.
     */
    where?: IngestControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestControls to fetch.
     */
    orderBy?: IngestControlOrderByWithRelationInput | IngestControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestControls.
     */
    cursor?: IngestControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestControls.
     */
    distinct?: IngestControlScalarFieldEnum | IngestControlScalarFieldEnum[]
  }

  /**
   * IngestControl findFirstOrThrow
   */
  export type IngestControlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter, which IngestControl to fetch.
     */
    where?: IngestControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestControls to fetch.
     */
    orderBy?: IngestControlOrderByWithRelationInput | IngestControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestControls.
     */
    cursor?: IngestControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestControls.
     */
    distinct?: IngestControlScalarFieldEnum | IngestControlScalarFieldEnum[]
  }

  /**
   * IngestControl findMany
   */
  export type IngestControlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter, which IngestControls to fetch.
     */
    where?: IngestControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestControls to fetch.
     */
    orderBy?: IngestControlOrderByWithRelationInput | IngestControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestControls.
     */
    cursor?: IngestControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestControls.
     */
    skip?: number
    distinct?: IngestControlScalarFieldEnum | IngestControlScalarFieldEnum[]
  }

  /**
   * IngestControl create
   */
  export type IngestControlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * The data needed to create a IngestControl.
     */
    data?: XOR<IngestControlCreateInput, IngestControlUncheckedCreateInput>
  }

  /**
   * IngestControl createMany
   */
  export type IngestControlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestControls.
     */
    data: IngestControlCreateManyInput | IngestControlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestControl createManyAndReturn
   */
  export type IngestControlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IngestControls.
     */
    data: IngestControlCreateManyInput | IngestControlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestControl update
   */
  export type IngestControlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * The data needed to update a IngestControl.
     */
    data: XOR<IngestControlUpdateInput, IngestControlUncheckedUpdateInput>
    /**
     * Choose, which IngestControl to update.
     */
    where: IngestControlWhereUniqueInput
  }

  /**
   * IngestControl updateMany
   */
  export type IngestControlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestControls.
     */
    data: XOR<IngestControlUpdateManyMutationInput, IngestControlUncheckedUpdateManyInput>
    /**
     * Filter which IngestControls to update
     */
    where?: IngestControlWhereInput
  }

  /**
   * IngestControl upsert
   */
  export type IngestControlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * The filter to search for the IngestControl to update in case it exists.
     */
    where: IngestControlWhereUniqueInput
    /**
     * In case the IngestControl found by the `where` argument doesn't exist, create a new IngestControl with this data.
     */
    create: XOR<IngestControlCreateInput, IngestControlUncheckedCreateInput>
    /**
     * In case the IngestControl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestControlUpdateInput, IngestControlUncheckedUpdateInput>
  }

  /**
   * IngestControl delete
   */
  export type IngestControlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
    /**
     * Filter which IngestControl to delete.
     */
    where: IngestControlWhereUniqueInput
  }

  /**
   * IngestControl deleteMany
   */
  export type IngestControlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestControls to delete
     */
    where?: IngestControlWhereInput
  }

  /**
   * IngestControl without action
   */
  export type IngestControlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestControl
     */
    select?: IngestControlSelect<ExtArgs> | null
  }


  /**
   * Model IngestLog
   */

  export type AggregateIngestLog = {
    _count: IngestLogCountAggregateOutputType | null
    _avg: IngestLogAvgAggregateOutputType | null
    _sum: IngestLogSumAggregateOutputType | null
    _min: IngestLogMinAggregateOutputType | null
    _max: IngestLogMaxAggregateOutputType | null
  }

  export type IngestLogAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type IngestLogSumAggregateOutputType = {
    id: bigint | null
    jobId: bigint | null
  }

  export type IngestLogMinAggregateOutputType = {
    id: bigint | null
    jobId: bigint | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type IngestLogMaxAggregateOutputType = {
    id: bigint | null
    jobId: bigint | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type IngestLogCountAggregateOutputType = {
    id: number
    jobId: number
    level: number
    message: number
    createdAt: number
    _all: number
  }


  export type IngestLogAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type IngestLogSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type IngestLogMinAggregateInputType = {
    id?: true
    jobId?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type IngestLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type IngestLogCountAggregateInputType = {
    id?: true
    jobId?: true
    level?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type IngestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestLog to aggregate.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestLogs
    **/
    _count?: true | IngestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestLogMaxAggregateInputType
  }

  export type GetIngestLogAggregateType<T extends IngestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestLog[P]>
      : GetScalarType<T[P], AggregateIngestLog[P]>
  }




  export type IngestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestLogWhereInput
    orderBy?: IngestLogOrderByWithAggregationInput | IngestLogOrderByWithAggregationInput[]
    by: IngestLogScalarFieldEnum[] | IngestLogScalarFieldEnum
    having?: IngestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestLogCountAggregateInputType | true
    _avg?: IngestLogAvgAggregateInputType
    _sum?: IngestLogSumAggregateInputType
    _min?: IngestLogMinAggregateInputType
    _max?: IngestLogMaxAggregateInputType
  }

  export type IngestLogGroupByOutputType = {
    id: bigint
    jobId: bigint | null
    level: string
    message: string
    createdAt: Date
    _count: IngestLogCountAggregateOutputType | null
    _avg: IngestLogAvgAggregateOutputType | null
    _sum: IngestLogSumAggregateOutputType | null
    _min: IngestLogMinAggregateOutputType | null
    _max: IngestLogMaxAggregateOutputType | null
  }

  type GetIngestLogGroupByPayload<T extends IngestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestLogGroupByOutputType[P]>
            : GetScalarType<T[P], IngestLogGroupByOutputType[P]>
        }
      >
    >


  export type IngestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
    job?: boolean | IngestLog$jobArgs<ExtArgs>
  }, ExtArgs["result"]["ingestLog"]>

  export type IngestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
    job?: boolean | IngestLog$jobArgs<ExtArgs>
  }, ExtArgs["result"]["ingestLog"]>

  export type IngestLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type IngestLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | IngestLog$jobArgs<ExtArgs>
  }
  export type IngestLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | IngestLog$jobArgs<ExtArgs>
  }

  export type $IngestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestLog"
    objects: {
      job: Prisma.$IngestJobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      jobId: bigint | null
      level: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["ingestLog"]>
    composites: {}
  }

  type IngestLogGetPayload<S extends boolean | null | undefined | IngestLogDefaultArgs> = $Result.GetResult<Prisma.$IngestLogPayload, S>

  type IngestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngestLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngestLogCountAggregateInputType | true
    }

  export interface IngestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestLog'], meta: { name: 'IngestLog' } }
    /**
     * Find zero or one IngestLog that matches the filter.
     * @param {IngestLogFindUniqueArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestLogFindUniqueArgs>(args: SelectSubset<T, IngestLogFindUniqueArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IngestLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngestLogFindUniqueOrThrowArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IngestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindFirstArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestLogFindFirstArgs>(args?: SelectSubset<T, IngestLogFindFirstArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IngestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindFirstOrThrowArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IngestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestLogs
     * const ingestLogs = await prisma.ingestLog.findMany()
     * 
     * // Get first 10 IngestLogs
     * const ingestLogs = await prisma.ingestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestLogWithIdOnly = await prisma.ingestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestLogFindManyArgs>(args?: SelectSubset<T, IngestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IngestLog.
     * @param {IngestLogCreateArgs} args - Arguments to create a IngestLog.
     * @example
     * // Create one IngestLog
     * const IngestLog = await prisma.ingestLog.create({
     *   data: {
     *     // ... data to create a IngestLog
     *   }
     * })
     * 
     */
    create<T extends IngestLogCreateArgs>(args: SelectSubset<T, IngestLogCreateArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IngestLogs.
     * @param {IngestLogCreateManyArgs} args - Arguments to create many IngestLogs.
     * @example
     * // Create many IngestLogs
     * const ingestLog = await prisma.ingestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestLogCreateManyArgs>(args?: SelectSubset<T, IngestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestLogs and returns the data saved in the database.
     * @param {IngestLogCreateManyAndReturnArgs} args - Arguments to create many IngestLogs.
     * @example
     * // Create many IngestLogs
     * const ingestLog = await prisma.ingestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestLogs and only return the `id`
     * const ingestLogWithIdOnly = await prisma.ingestLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IngestLog.
     * @param {IngestLogDeleteArgs} args - Arguments to delete one IngestLog.
     * @example
     * // Delete one IngestLog
     * const IngestLog = await prisma.ingestLog.delete({
     *   where: {
     *     // ... filter to delete one IngestLog
     *   }
     * })
     * 
     */
    delete<T extends IngestLogDeleteArgs>(args: SelectSubset<T, IngestLogDeleteArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IngestLog.
     * @param {IngestLogUpdateArgs} args - Arguments to update one IngestLog.
     * @example
     * // Update one IngestLog
     * const ingestLog = await prisma.ingestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestLogUpdateArgs>(args: SelectSubset<T, IngestLogUpdateArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IngestLogs.
     * @param {IngestLogDeleteManyArgs} args - Arguments to filter IngestLogs to delete.
     * @example
     * // Delete a few IngestLogs
     * const { count } = await prisma.ingestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestLogDeleteManyArgs>(args?: SelectSubset<T, IngestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestLogs
     * const ingestLog = await prisma.ingestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestLogUpdateManyArgs>(args: SelectSubset<T, IngestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngestLog.
     * @param {IngestLogUpsertArgs} args - Arguments to update or create a IngestLog.
     * @example
     * // Update or create a IngestLog
     * const ingestLog = await prisma.ingestLog.upsert({
     *   create: {
     *     // ... data to create a IngestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestLog we want to update
     *   }
     * })
     */
    upsert<T extends IngestLogUpsertArgs>(args: SelectSubset<T, IngestLogUpsertArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IngestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogCountArgs} args - Arguments to filter IngestLogs to count.
     * @example
     * // Count the number of IngestLogs
     * const count = await prisma.ingestLog.count({
     *   where: {
     *     // ... the filter for the IngestLogs we want to count
     *   }
     * })
    **/
    count<T extends IngestLogCountArgs>(
      args?: Subset<T, IngestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestLogAggregateArgs>(args: Subset<T, IngestLogAggregateArgs>): Prisma.PrismaPromise<GetIngestLogAggregateType<T>>

    /**
     * Group by IngestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogGroupByArgs} args - Group by arguments.
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
      T extends IngestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestLogGroupByArgs['orderBy'] }
        : { orderBy?: IngestLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestLog model
   */
  readonly fields: IngestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends IngestLog$jobArgs<ExtArgs> = {}>(args?: Subset<T, IngestLog$jobArgs<ExtArgs>>): Prisma__IngestJobClient<$Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the IngestLog model
   */ 
  interface IngestLogFieldRefs {
    readonly id: FieldRef<"IngestLog", 'BigInt'>
    readonly jobId: FieldRef<"IngestLog", 'BigInt'>
    readonly level: FieldRef<"IngestLog", 'String'>
    readonly message: FieldRef<"IngestLog", 'String'>
    readonly createdAt: FieldRef<"IngestLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestLog findUnique
   */
  export type IngestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog findUniqueOrThrow
   */
  export type IngestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog findFirst
   */
  export type IngestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestLogs.
     */
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog findFirstOrThrow
   */
  export type IngestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestLogs.
     */
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog findMany
   */
  export type IngestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter, which IngestLogs to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog create
   */
  export type IngestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * The data needed to create a IngestLog.
     */
    data: XOR<IngestLogCreateInput, IngestLogUncheckedCreateInput>
  }

  /**
   * IngestLog createMany
   */
  export type IngestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestLogs.
     */
    data: IngestLogCreateManyInput | IngestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestLog createManyAndReturn
   */
  export type IngestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IngestLogs.
     */
    data: IngestLogCreateManyInput | IngestLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestLog update
   */
  export type IngestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * The data needed to update a IngestLog.
     */
    data: XOR<IngestLogUpdateInput, IngestLogUncheckedUpdateInput>
    /**
     * Choose, which IngestLog to update.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog updateMany
   */
  export type IngestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestLogs.
     */
    data: XOR<IngestLogUpdateManyMutationInput, IngestLogUncheckedUpdateManyInput>
    /**
     * Filter which IngestLogs to update
     */
    where?: IngestLogWhereInput
  }

  /**
   * IngestLog upsert
   */
  export type IngestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * The filter to search for the IngestLog to update in case it exists.
     */
    where: IngestLogWhereUniqueInput
    /**
     * In case the IngestLog found by the `where` argument doesn't exist, create a new IngestLog with this data.
     */
    create: XOR<IngestLogCreateInput, IngestLogUncheckedCreateInput>
    /**
     * In case the IngestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestLogUpdateInput, IngestLogUncheckedUpdateInput>
  }

  /**
   * IngestLog delete
   */
  export type IngestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
    /**
     * Filter which IngestLog to delete.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog deleteMany
   */
  export type IngestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestLogs to delete
     */
    where?: IngestLogWhereInput
  }

  /**
   * IngestLog.job
   */
  export type IngestLog$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestJob
     */
    select?: IngestJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestJobInclude<ExtArgs> | null
    where?: IngestJobWhereInput
  }

  /**
   * IngestLog without action
   */
  export type IngestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestLogInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    name: 'name',
    market: 'market',
    sector: 'sector',
    listedAt: 'listedAt',
    marketCap: 'marketCap',
    marketCapAt: 'marketCapAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ReportPeriodScalarFieldEnum: {
    id: 'id',
    fiscalYear: 'fiscalYear',
    fiscalQuarter: 'fiscalQuarter',
    periodType: 'periodType',
    reportName: 'reportName',
    reportDate: 'reportDate'
  };

  export type ReportPeriodScalarFieldEnum = (typeof ReportPeriodScalarFieldEnum)[keyof typeof ReportPeriodScalarFieldEnum]


  export const FinancialItemScalarFieldEnum: {
    id: 'id',
    itemCode: 'itemCode',
    itemName: 'itemName',
    statementType: 'statementType',
    unit: 'unit'
  };

  export type FinancialItemScalarFieldEnum = (typeof FinancialItemScalarFieldEnum)[keyof typeof FinancialItemScalarFieldEnum]


  export const FinancialScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    periodId: 'periodId',
    itemId: 'itemId',
    value: 'value',
    currency: 'currency',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type FinancialScalarFieldEnum = (typeof FinancialScalarFieldEnum)[keyof typeof FinancialScalarFieldEnum]


  export const CompanyIngestStatusScalarFieldEnum: {
    companyId: 'companyId',
    lastSuccessAt: 'lastSuccessAt',
    lastErrorAt: 'lastErrorAt',
    lastErrorMsg: 'lastErrorMsg',
    progressYear: 'progressYear',
    progressQuarter: 'progressQuarter',
    status: 'status'
  };

  export type CompanyIngestStatusScalarFieldEnum = (typeof CompanyIngestStatusScalarFieldEnum)[keyof typeof CompanyIngestStatusScalarFieldEnum]


  export const IngestJobScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    fiscalYear: 'fiscalYear',
    fiscalQuarter: 'fiscalQuarter',
    priority: 'priority',
    status: 'status',
    retries: 'retries',
    lastErrorMsg: 'lastErrorMsg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngestJobScalarFieldEnum = (typeof IngestJobScalarFieldEnum)[keyof typeof IngestJobScalarFieldEnum]


  export const IngestControlScalarFieldEnum: {
    id: 'id',
    runState: 'runState',
    updatedAt: 'updatedAt'
  };

  export type IngestControlScalarFieldEnum = (typeof IngestControlScalarFieldEnum)[keyof typeof IngestControlScalarFieldEnum]


  export const IngestLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    level: 'level',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type IngestLogScalarFieldEnum = (typeof IngestLogScalarFieldEnum)[keyof typeof IngestLogScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: BigIntFilter<"Company"> | bigint | number
    ticker?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    market?: StringFilter<"Company"> | string
    sector?: StringNullableFilter<"Company"> | string | null
    listedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    marketCap?: BigIntNullableFilter<"Company"> | bigint | number | null
    marketCapAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    financials?: FinancialListRelationFilter
    ingestStatus?: XOR<CompanyIngestStatusNullableRelationFilter, CompanyIngestStatusWhereInput> | null
    ingestJobs?: IngestJobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    market?: SortOrder
    sector?: SortOrderInput | SortOrder
    listedAt?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    marketCapAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financials?: FinancialOrderByRelationAggregateInput
    ingestStatus?: CompanyIngestStatusOrderByWithRelationInput
    ingestJobs?: IngestJobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    ticker?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    market?: StringFilter<"Company"> | string
    sector?: StringNullableFilter<"Company"> | string | null
    listedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    marketCap?: BigIntNullableFilter<"Company"> | bigint | number | null
    marketCapAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    financials?: FinancialListRelationFilter
    ingestStatus?: XOR<CompanyIngestStatusNullableRelationFilter, CompanyIngestStatusWhereInput> | null
    ingestJobs?: IngestJobListRelationFilter
  }, "id" | "ticker">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    market?: SortOrder
    sector?: SortOrderInput | SortOrder
    listedAt?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    marketCapAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Company"> | bigint | number
    ticker?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    market?: StringWithAggregatesFilter<"Company"> | string
    sector?: StringNullableWithAggregatesFilter<"Company"> | string | null
    listedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
    marketCap?: BigIntNullableWithAggregatesFilter<"Company"> | bigint | number | null
    marketCapAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ReportPeriodWhereInput = {
    AND?: ReportPeriodWhereInput | ReportPeriodWhereInput[]
    OR?: ReportPeriodWhereInput[]
    NOT?: ReportPeriodWhereInput | ReportPeriodWhereInput[]
    id?: BigIntFilter<"ReportPeriod"> | bigint | number
    fiscalYear?: IntFilter<"ReportPeriod"> | number
    fiscalQuarter?: IntFilter<"ReportPeriod"> | number
    periodType?: StringFilter<"ReportPeriod"> | string
    reportName?: StringNullableFilter<"ReportPeriod"> | string | null
    reportDate?: DateTimeNullableFilter<"ReportPeriod"> | Date | string | null
    financials?: FinancialListRelationFilter
  }

  export type ReportPeriodOrderByWithRelationInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    periodType?: SortOrder
    reportName?: SortOrderInput | SortOrder
    reportDate?: SortOrderInput | SortOrder
    financials?: FinancialOrderByRelationAggregateInput
  }

  export type ReportPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    fiscalYear_fiscalQuarter_periodType_reportName?: ReportPeriodFiscalYearFiscalQuarterPeriodTypeReportNameCompoundUniqueInput
    AND?: ReportPeriodWhereInput | ReportPeriodWhereInput[]
    OR?: ReportPeriodWhereInput[]
    NOT?: ReportPeriodWhereInput | ReportPeriodWhereInput[]
    fiscalYear?: IntFilter<"ReportPeriod"> | number
    fiscalQuarter?: IntFilter<"ReportPeriod"> | number
    periodType?: StringFilter<"ReportPeriod"> | string
    reportName?: StringNullableFilter<"ReportPeriod"> | string | null
    reportDate?: DateTimeNullableFilter<"ReportPeriod"> | Date | string | null
    financials?: FinancialListRelationFilter
  }, "id" | "fiscalYear_fiscalQuarter_periodType_reportName">

  export type ReportPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    periodType?: SortOrder
    reportName?: SortOrderInput | SortOrder
    reportDate?: SortOrderInput | SortOrder
    _count?: ReportPeriodCountOrderByAggregateInput
    _avg?: ReportPeriodAvgOrderByAggregateInput
    _max?: ReportPeriodMaxOrderByAggregateInput
    _min?: ReportPeriodMinOrderByAggregateInput
    _sum?: ReportPeriodSumOrderByAggregateInput
  }

  export type ReportPeriodScalarWhereWithAggregatesInput = {
    AND?: ReportPeriodScalarWhereWithAggregatesInput | ReportPeriodScalarWhereWithAggregatesInput[]
    OR?: ReportPeriodScalarWhereWithAggregatesInput[]
    NOT?: ReportPeriodScalarWhereWithAggregatesInput | ReportPeriodScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReportPeriod"> | bigint | number
    fiscalYear?: IntWithAggregatesFilter<"ReportPeriod"> | number
    fiscalQuarter?: IntWithAggregatesFilter<"ReportPeriod"> | number
    periodType?: StringWithAggregatesFilter<"ReportPeriod"> | string
    reportName?: StringNullableWithAggregatesFilter<"ReportPeriod"> | string | null
    reportDate?: DateTimeNullableWithAggregatesFilter<"ReportPeriod"> | Date | string | null
  }

  export type FinancialItemWhereInput = {
    AND?: FinancialItemWhereInput | FinancialItemWhereInput[]
    OR?: FinancialItemWhereInput[]
    NOT?: FinancialItemWhereInput | FinancialItemWhereInput[]
    id?: BigIntFilter<"FinancialItem"> | bigint | number
    itemCode?: StringFilter<"FinancialItem"> | string
    itemName?: StringFilter<"FinancialItem"> | string
    statementType?: StringFilter<"FinancialItem"> | string
    unit?: StringNullableFilter<"FinancialItem"> | string | null
    financials?: FinancialListRelationFilter
  }

  export type FinancialItemOrderByWithRelationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    statementType?: SortOrder
    unit?: SortOrderInput | SortOrder
    financials?: FinancialOrderByRelationAggregateInput
  }

  export type FinancialItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    itemCode?: string
    AND?: FinancialItemWhereInput | FinancialItemWhereInput[]
    OR?: FinancialItemWhereInput[]
    NOT?: FinancialItemWhereInput | FinancialItemWhereInput[]
    itemName?: StringFilter<"FinancialItem"> | string
    statementType?: StringFilter<"FinancialItem"> | string
    unit?: StringNullableFilter<"FinancialItem"> | string | null
    financials?: FinancialListRelationFilter
  }, "id" | "itemCode">

  export type FinancialItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    statementType?: SortOrder
    unit?: SortOrderInput | SortOrder
    _count?: FinancialItemCountOrderByAggregateInput
    _avg?: FinancialItemAvgOrderByAggregateInput
    _max?: FinancialItemMaxOrderByAggregateInput
    _min?: FinancialItemMinOrderByAggregateInput
    _sum?: FinancialItemSumOrderByAggregateInput
  }

  export type FinancialItemScalarWhereWithAggregatesInput = {
    AND?: FinancialItemScalarWhereWithAggregatesInput | FinancialItemScalarWhereWithAggregatesInput[]
    OR?: FinancialItemScalarWhereWithAggregatesInput[]
    NOT?: FinancialItemScalarWhereWithAggregatesInput | FinancialItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"FinancialItem"> | bigint | number
    itemCode?: StringWithAggregatesFilter<"FinancialItem"> | string
    itemName?: StringWithAggregatesFilter<"FinancialItem"> | string
    statementType?: StringWithAggregatesFilter<"FinancialItem"> | string
    unit?: StringNullableWithAggregatesFilter<"FinancialItem"> | string | null
  }

  export type FinancialWhereInput = {
    AND?: FinancialWhereInput | FinancialWhereInput[]
    OR?: FinancialWhereInput[]
    NOT?: FinancialWhereInput | FinancialWhereInput[]
    id?: BigIntFilter<"Financial"> | bigint | number
    companyId?: BigIntFilter<"Financial"> | bigint | number
    periodId?: BigIntFilter<"Financial"> | bigint | number
    itemId?: BigIntFilter<"Financial"> | bigint | number
    value?: DecimalFilter<"Financial"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Financial"> | string
    source?: StringFilter<"Financial"> | string
    createdAt?: DateTimeFilter<"Financial"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    period?: XOR<ReportPeriodRelationFilter, ReportPeriodWhereInput>
    item?: XOR<FinancialItemRelationFilter, FinancialItemWhereInput>
  }

  export type FinancialOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    period?: ReportPeriodOrderByWithRelationInput
    item?: FinancialItemOrderByWithRelationInput
  }

  export type FinancialWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    companyId_periodId_itemId?: FinancialCompanyIdPeriodIdItemIdCompoundUniqueInput
    AND?: FinancialWhereInput | FinancialWhereInput[]
    OR?: FinancialWhereInput[]
    NOT?: FinancialWhereInput | FinancialWhereInput[]
    companyId?: BigIntFilter<"Financial"> | bigint | number
    periodId?: BigIntFilter<"Financial"> | bigint | number
    itemId?: BigIntFilter<"Financial"> | bigint | number
    value?: DecimalFilter<"Financial"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Financial"> | string
    source?: StringFilter<"Financial"> | string
    createdAt?: DateTimeFilter<"Financial"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    period?: XOR<ReportPeriodRelationFilter, ReportPeriodWhereInput>
    item?: XOR<FinancialItemRelationFilter, FinancialItemWhereInput>
  }, "id" | "companyId_periodId_itemId">

  export type FinancialOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: FinancialCountOrderByAggregateInput
    _avg?: FinancialAvgOrderByAggregateInput
    _max?: FinancialMaxOrderByAggregateInput
    _min?: FinancialMinOrderByAggregateInput
    _sum?: FinancialSumOrderByAggregateInput
  }

  export type FinancialScalarWhereWithAggregatesInput = {
    AND?: FinancialScalarWhereWithAggregatesInput | FinancialScalarWhereWithAggregatesInput[]
    OR?: FinancialScalarWhereWithAggregatesInput[]
    NOT?: FinancialScalarWhereWithAggregatesInput | FinancialScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Financial"> | bigint | number
    companyId?: BigIntWithAggregatesFilter<"Financial"> | bigint | number
    periodId?: BigIntWithAggregatesFilter<"Financial"> | bigint | number
    itemId?: BigIntWithAggregatesFilter<"Financial"> | bigint | number
    value?: DecimalWithAggregatesFilter<"Financial"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Financial"> | string
    source?: StringWithAggregatesFilter<"Financial"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Financial"> | Date | string
  }

  export type CompanyIngestStatusWhereInput = {
    AND?: CompanyIngestStatusWhereInput | CompanyIngestStatusWhereInput[]
    OR?: CompanyIngestStatusWhereInput[]
    NOT?: CompanyIngestStatusWhereInput | CompanyIngestStatusWhereInput[]
    companyId?: BigIntFilter<"CompanyIngestStatus"> | bigint | number
    lastSuccessAt?: DateTimeNullableFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorAt?: DateTimeNullableFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorMsg?: StringNullableFilter<"CompanyIngestStatus"> | string | null
    progressYear?: IntNullableFilter<"CompanyIngestStatus"> | number | null
    progressQuarter?: IntNullableFilter<"CompanyIngestStatus"> | number | null
    status?: StringFilter<"CompanyIngestStatus"> | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type CompanyIngestStatusOrderByWithRelationInput = {
    companyId?: SortOrder
    lastSuccessAt?: SortOrderInput | SortOrder
    lastErrorAt?: SortOrderInput | SortOrder
    lastErrorMsg?: SortOrderInput | SortOrder
    progressYear?: SortOrderInput | SortOrder
    progressQuarter?: SortOrderInput | SortOrder
    status?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyIngestStatusWhereUniqueInput = Prisma.AtLeast<{
    companyId?: bigint | number
    AND?: CompanyIngestStatusWhereInput | CompanyIngestStatusWhereInput[]
    OR?: CompanyIngestStatusWhereInput[]
    NOT?: CompanyIngestStatusWhereInput | CompanyIngestStatusWhereInput[]
    lastSuccessAt?: DateTimeNullableFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorAt?: DateTimeNullableFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorMsg?: StringNullableFilter<"CompanyIngestStatus"> | string | null
    progressYear?: IntNullableFilter<"CompanyIngestStatus"> | number | null
    progressQuarter?: IntNullableFilter<"CompanyIngestStatus"> | number | null
    status?: StringFilter<"CompanyIngestStatus"> | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "companyId">

  export type CompanyIngestStatusOrderByWithAggregationInput = {
    companyId?: SortOrder
    lastSuccessAt?: SortOrderInput | SortOrder
    lastErrorAt?: SortOrderInput | SortOrder
    lastErrorMsg?: SortOrderInput | SortOrder
    progressYear?: SortOrderInput | SortOrder
    progressQuarter?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: CompanyIngestStatusCountOrderByAggregateInput
    _avg?: CompanyIngestStatusAvgOrderByAggregateInput
    _max?: CompanyIngestStatusMaxOrderByAggregateInput
    _min?: CompanyIngestStatusMinOrderByAggregateInput
    _sum?: CompanyIngestStatusSumOrderByAggregateInput
  }

  export type CompanyIngestStatusScalarWhereWithAggregatesInput = {
    AND?: CompanyIngestStatusScalarWhereWithAggregatesInput | CompanyIngestStatusScalarWhereWithAggregatesInput[]
    OR?: CompanyIngestStatusScalarWhereWithAggregatesInput[]
    NOT?: CompanyIngestStatusScalarWhereWithAggregatesInput | CompanyIngestStatusScalarWhereWithAggregatesInput[]
    companyId?: BigIntWithAggregatesFilter<"CompanyIngestStatus"> | bigint | number
    lastSuccessAt?: DateTimeNullableWithAggregatesFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorAt?: DateTimeNullableWithAggregatesFilter<"CompanyIngestStatus"> | Date | string | null
    lastErrorMsg?: StringNullableWithAggregatesFilter<"CompanyIngestStatus"> | string | null
    progressYear?: IntNullableWithAggregatesFilter<"CompanyIngestStatus"> | number | null
    progressQuarter?: IntNullableWithAggregatesFilter<"CompanyIngestStatus"> | number | null
    status?: StringWithAggregatesFilter<"CompanyIngestStatus"> | string
  }

  export type IngestJobWhereInput = {
    AND?: IngestJobWhereInput | IngestJobWhereInput[]
    OR?: IngestJobWhereInput[]
    NOT?: IngestJobWhereInput | IngestJobWhereInput[]
    id?: BigIntFilter<"IngestJob"> | bigint | number
    companyId?: BigIntFilter<"IngestJob"> | bigint | number
    fiscalYear?: IntFilter<"IngestJob"> | number
    fiscalQuarter?: IntFilter<"IngestJob"> | number
    priority?: IntFilter<"IngestJob"> | number
    status?: StringFilter<"IngestJob"> | string
    retries?: IntFilter<"IngestJob"> | number
    lastErrorMsg?: StringNullableFilter<"IngestJob"> | string | null
    createdAt?: DateTimeFilter<"IngestJob"> | Date | string
    updatedAt?: DateTimeFilter<"IngestJob"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    logs?: IngestLogListRelationFilter
  }

  export type IngestJobOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    lastErrorMsg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    logs?: IngestLogOrderByRelationAggregateInput
  }

  export type IngestJobWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    companyId_fiscalYear_fiscalQuarter?: IngestJobCompanyIdFiscalYearFiscalQuarterCompoundUniqueInput
    AND?: IngestJobWhereInput | IngestJobWhereInput[]
    OR?: IngestJobWhereInput[]
    NOT?: IngestJobWhereInput | IngestJobWhereInput[]
    companyId?: BigIntFilter<"IngestJob"> | bigint | number
    fiscalYear?: IntFilter<"IngestJob"> | number
    fiscalQuarter?: IntFilter<"IngestJob"> | number
    priority?: IntFilter<"IngestJob"> | number
    status?: StringFilter<"IngestJob"> | string
    retries?: IntFilter<"IngestJob"> | number
    lastErrorMsg?: StringNullableFilter<"IngestJob"> | string | null
    createdAt?: DateTimeFilter<"IngestJob"> | Date | string
    updatedAt?: DateTimeFilter<"IngestJob"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    logs?: IngestLogListRelationFilter
  }, "id" | "companyId_fiscalYear_fiscalQuarter">

  export type IngestJobOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    lastErrorMsg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngestJobCountOrderByAggregateInput
    _avg?: IngestJobAvgOrderByAggregateInput
    _max?: IngestJobMaxOrderByAggregateInput
    _min?: IngestJobMinOrderByAggregateInput
    _sum?: IngestJobSumOrderByAggregateInput
  }

  export type IngestJobScalarWhereWithAggregatesInput = {
    AND?: IngestJobScalarWhereWithAggregatesInput | IngestJobScalarWhereWithAggregatesInput[]
    OR?: IngestJobScalarWhereWithAggregatesInput[]
    NOT?: IngestJobScalarWhereWithAggregatesInput | IngestJobScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"IngestJob"> | bigint | number
    companyId?: BigIntWithAggregatesFilter<"IngestJob"> | bigint | number
    fiscalYear?: IntWithAggregatesFilter<"IngestJob"> | number
    fiscalQuarter?: IntWithAggregatesFilter<"IngestJob"> | number
    priority?: IntWithAggregatesFilter<"IngestJob"> | number
    status?: StringWithAggregatesFilter<"IngestJob"> | string
    retries?: IntWithAggregatesFilter<"IngestJob"> | number
    lastErrorMsg?: StringNullableWithAggregatesFilter<"IngestJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IngestJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngestJob"> | Date | string
  }

  export type IngestControlWhereInput = {
    AND?: IngestControlWhereInput | IngestControlWhereInput[]
    OR?: IngestControlWhereInput[]
    NOT?: IngestControlWhereInput | IngestControlWhereInput[]
    id?: IntFilter<"IngestControl"> | number
    runState?: StringFilter<"IngestControl"> | string
    updatedAt?: DateTimeFilter<"IngestControl"> | Date | string
  }

  export type IngestControlOrderByWithRelationInput = {
    id?: SortOrder
    runState?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestControlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngestControlWhereInput | IngestControlWhereInput[]
    OR?: IngestControlWhereInput[]
    NOT?: IngestControlWhereInput | IngestControlWhereInput[]
    runState?: StringFilter<"IngestControl"> | string
    updatedAt?: DateTimeFilter<"IngestControl"> | Date | string
  }, "id">

  export type IngestControlOrderByWithAggregationInput = {
    id?: SortOrder
    runState?: SortOrder
    updatedAt?: SortOrder
    _count?: IngestControlCountOrderByAggregateInput
    _avg?: IngestControlAvgOrderByAggregateInput
    _max?: IngestControlMaxOrderByAggregateInput
    _min?: IngestControlMinOrderByAggregateInput
    _sum?: IngestControlSumOrderByAggregateInput
  }

  export type IngestControlScalarWhereWithAggregatesInput = {
    AND?: IngestControlScalarWhereWithAggregatesInput | IngestControlScalarWhereWithAggregatesInput[]
    OR?: IngestControlScalarWhereWithAggregatesInput[]
    NOT?: IngestControlScalarWhereWithAggregatesInput | IngestControlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IngestControl"> | number
    runState?: StringWithAggregatesFilter<"IngestControl"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngestControl"> | Date | string
  }

  export type IngestLogWhereInput = {
    AND?: IngestLogWhereInput | IngestLogWhereInput[]
    OR?: IngestLogWhereInput[]
    NOT?: IngestLogWhereInput | IngestLogWhereInput[]
    id?: BigIntFilter<"IngestLog"> | bigint | number
    jobId?: BigIntNullableFilter<"IngestLog"> | bigint | number | null
    level?: StringFilter<"IngestLog"> | string
    message?: StringFilter<"IngestLog"> | string
    createdAt?: DateTimeFilter<"IngestLog"> | Date | string
    job?: XOR<IngestJobNullableRelationFilter, IngestJobWhereInput> | null
  }

  export type IngestLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    job?: IngestJobOrderByWithRelationInput
  }

  export type IngestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: IngestLogWhereInput | IngestLogWhereInput[]
    OR?: IngestLogWhereInput[]
    NOT?: IngestLogWhereInput | IngestLogWhereInput[]
    jobId?: BigIntNullableFilter<"IngestLog"> | bigint | number | null
    level?: StringFilter<"IngestLog"> | string
    message?: StringFilter<"IngestLog"> | string
    createdAt?: DateTimeFilter<"IngestLog"> | Date | string
    job?: XOR<IngestJobNullableRelationFilter, IngestJobWhereInput> | null
  }, "id">

  export type IngestLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: IngestLogCountOrderByAggregateInput
    _avg?: IngestLogAvgOrderByAggregateInput
    _max?: IngestLogMaxOrderByAggregateInput
    _min?: IngestLogMinOrderByAggregateInput
    _sum?: IngestLogSumOrderByAggregateInput
  }

  export type IngestLogScalarWhereWithAggregatesInput = {
    AND?: IngestLogScalarWhereWithAggregatesInput | IngestLogScalarWhereWithAggregatesInput[]
    OR?: IngestLogScalarWhereWithAggregatesInput[]
    NOT?: IngestLogScalarWhereWithAggregatesInput | IngestLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"IngestLog"> | bigint | number
    jobId?: BigIntNullableWithAggregatesFilter<"IngestLog"> | bigint | number | null
    level?: StringWithAggregatesFilter<"IngestLog"> | string
    message?: StringWithAggregatesFilter<"IngestLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IngestLog"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialCreateNestedManyWithoutCompanyInput
    ingestStatus?: CompanyIngestStatusCreateNestedOneWithoutCompanyInput
    ingestJobs?: IngestJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialUncheckedCreateNestedManyWithoutCompanyInput
    ingestStatus?: CompanyIngestStatusUncheckedCreateNestedOneWithoutCompanyInput
    ingestJobs?: IngestJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUpdateManyWithoutCompanyNestedInput
    ingestStatus?: CompanyIngestStatusUpdateOneWithoutCompanyNestedInput
    ingestJobs?: IngestJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUncheckedUpdateManyWithoutCompanyNestedInput
    ingestStatus?: CompanyIngestStatusUncheckedUpdateOneWithoutCompanyNestedInput
    ingestJobs?: IngestJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportPeriodCreateInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName?: string | null
    reportDate?: Date | string | null
    financials?: FinancialCreateNestedManyWithoutPeriodInput
  }

  export type ReportPeriodUncheckedCreateInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName?: string | null
    reportDate?: Date | string | null
    financials?: FinancialUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type ReportPeriodUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financials?: FinancialUpdateManyWithoutPeriodNestedInput
  }

  export type ReportPeriodUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financials?: FinancialUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type ReportPeriodCreateManyInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName?: string | null
    reportDate?: Date | string | null
  }

  export type ReportPeriodUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportPeriodUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinancialItemCreateInput = {
    id?: bigint | number
    itemCode: string
    itemName: string
    statementType: string
    unit?: string | null
    financials?: FinancialCreateNestedManyWithoutItemInput
  }

  export type FinancialItemUncheckedCreateInput = {
    id?: bigint | number
    itemCode: string
    itemName: string
    statementType: string
    unit?: string | null
    financials?: FinancialUncheckedCreateNestedManyWithoutItemInput
  }

  export type FinancialItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    financials?: FinancialUpdateManyWithoutItemNestedInput
  }

  export type FinancialItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    financials?: FinancialUncheckedUpdateManyWithoutItemNestedInput
  }

  export type FinancialItemCreateManyInput = {
    id?: bigint | number
    itemCode: string
    itemName: string
    statementType: string
    unit?: string | null
  }

  export type FinancialItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinancialItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinancialCreateInput = {
    id?: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutFinancialsInput
    period: ReportPeriodCreateNestedOneWithoutFinancialsInput
    item: FinancialItemCreateNestedOneWithoutFinancialsInput
  }

  export type FinancialUncheckedCreateInput = {
    id?: bigint | number
    companyId: bigint | number
    periodId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFinancialsNestedInput
    period?: ReportPeriodUpdateOneRequiredWithoutFinancialsNestedInput
    item?: FinancialItemUpdateOneRequiredWithoutFinancialsNestedInput
  }

  export type FinancialUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialCreateManyInput = {
    id?: bigint | number
    companyId: bigint | number
    periodId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIngestStatusCreateInput = {
    lastSuccessAt?: Date | string | null
    lastErrorAt?: Date | string | null
    lastErrorMsg?: string | null
    progressYear?: number | null
    progressQuarter?: number | null
    status?: string
    company: CompanyCreateNestedOneWithoutIngestStatusInput
  }

  export type CompanyIngestStatusUncheckedCreateInput = {
    companyId: bigint | number
    lastSuccessAt?: Date | string | null
    lastErrorAt?: Date | string | null
    lastErrorMsg?: string | null
    progressYear?: number | null
    progressQuarter?: number | null
    status?: string
  }

  export type CompanyIngestStatusUpdateInput = {
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutIngestStatusNestedInput
  }

  export type CompanyIngestStatusUncheckedUpdateInput = {
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyIngestStatusCreateManyInput = {
    companyId: bigint | number
    lastSuccessAt?: Date | string | null
    lastErrorAt?: Date | string | null
    lastErrorMsg?: string | null
    progressYear?: number | null
    progressQuarter?: number | null
    status?: string
  }

  export type CompanyIngestStatusUpdateManyMutationInput = {
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyIngestStatusUncheckedUpdateManyInput = {
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IngestJobCreateInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutIngestJobsInput
    logs?: IngestLogCreateNestedManyWithoutJobInput
  }

  export type IngestJobUncheckedCreateInput = {
    id?: bigint | number
    companyId: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: IngestLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type IngestJobUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutIngestJobsNestedInput
    logs?: IngestLogUpdateManyWithoutJobNestedInput
  }

  export type IngestJobUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: IngestLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type IngestJobCreateManyInput = {
    id?: bigint | number
    companyId: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngestJobUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestJobUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestControlCreateInput = {
    id?: number
    runState?: string
    updatedAt?: Date | string
  }

  export type IngestControlUncheckedCreateInput = {
    id?: number
    runState?: string
    updatedAt?: Date | string
  }

  export type IngestControlUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    runState?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestControlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    runState?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestControlCreateManyInput = {
    id?: number
    runState?: string
    updatedAt?: Date | string
  }

  export type IngestControlUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    runState?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestControlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    runState?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogCreateInput = {
    id?: bigint | number
    level: string
    message: string
    createdAt?: Date | string
    job?: IngestJobCreateNestedOneWithoutLogsInput
  }

  export type IngestLogUncheckedCreateInput = {
    id?: bigint | number
    jobId?: bigint | number | null
    level: string
    message: string
    createdAt?: Date | string
  }

  export type IngestLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: IngestJobUpdateOneWithoutLogsNestedInput
  }

  export type IngestLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jobId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogCreateManyInput = {
    id?: bigint | number
    jobId?: bigint | number | null
    level: string
    message: string
    createdAt?: Date | string
  }

  export type IngestLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jobId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type FinancialListRelationFilter = {
    every?: FinancialWhereInput
    some?: FinancialWhereInput
    none?: FinancialWhereInput
  }

  export type CompanyIngestStatusNullableRelationFilter = {
    is?: CompanyIngestStatusWhereInput | null
    isNot?: CompanyIngestStatusWhereInput | null
  }

  export type IngestJobListRelationFilter = {
    every?: IngestJobWhereInput
    some?: IngestJobWhereInput
    none?: IngestJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FinancialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngestJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    market?: SortOrder
    sector?: SortOrder
    listedAt?: SortOrder
    marketCap?: SortOrder
    marketCapAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    marketCap?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    market?: SortOrder
    sector?: SortOrder
    listedAt?: SortOrder
    marketCap?: SortOrder
    marketCapAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    market?: SortOrder
    sector?: SortOrder
    listedAt?: SortOrder
    marketCap?: SortOrder
    marketCapAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    marketCap?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type ReportPeriodFiscalYearFiscalQuarterPeriodTypeReportNameCompoundUniqueInput = {
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName: string
  }

  export type ReportPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    periodType?: SortOrder
    reportName?: SortOrder
    reportDate?: SortOrder
  }

  export type ReportPeriodAvgOrderByAggregateInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
  }

  export type ReportPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    periodType?: SortOrder
    reportName?: SortOrder
    reportDate?: SortOrder
  }

  export type ReportPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    periodType?: SortOrder
    reportName?: SortOrder
    reportDate?: SortOrder
  }

  export type ReportPeriodSumOrderByAggregateInput = {
    id?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
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

  export type FinancialItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    statementType?: SortOrder
    unit?: SortOrder
  }

  export type FinancialItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FinancialItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    statementType?: SortOrder
    unit?: SortOrder
  }

  export type FinancialItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    statementType?: SortOrder
    unit?: SortOrder
  }

  export type FinancialItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ReportPeriodRelationFilter = {
    is?: ReportPeriodWhereInput
    isNot?: ReportPeriodWhereInput
  }

  export type FinancialItemRelationFilter = {
    is?: FinancialItemWhereInput
    isNot?: FinancialItemWhereInput
  }

  export type FinancialCompanyIdPeriodIdItemIdCompoundUniqueInput = {
    companyId: bigint | number
    periodId: bigint | number
    itemId: bigint | number
  }

  export type FinancialCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
  }

  export type FinancialMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    periodId?: SortOrder
    itemId?: SortOrder
    value?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type CompanyIngestStatusCountOrderByAggregateInput = {
    companyId?: SortOrder
    lastSuccessAt?: SortOrder
    lastErrorAt?: SortOrder
    lastErrorMsg?: SortOrder
    progressYear?: SortOrder
    progressQuarter?: SortOrder
    status?: SortOrder
  }

  export type CompanyIngestStatusAvgOrderByAggregateInput = {
    companyId?: SortOrder
    progressYear?: SortOrder
    progressQuarter?: SortOrder
  }

  export type CompanyIngestStatusMaxOrderByAggregateInput = {
    companyId?: SortOrder
    lastSuccessAt?: SortOrder
    lastErrorAt?: SortOrder
    lastErrorMsg?: SortOrder
    progressYear?: SortOrder
    progressQuarter?: SortOrder
    status?: SortOrder
  }

  export type CompanyIngestStatusMinOrderByAggregateInput = {
    companyId?: SortOrder
    lastSuccessAt?: SortOrder
    lastErrorAt?: SortOrder
    lastErrorMsg?: SortOrder
    progressYear?: SortOrder
    progressQuarter?: SortOrder
    status?: SortOrder
  }

  export type CompanyIngestStatusSumOrderByAggregateInput = {
    companyId?: SortOrder
    progressYear?: SortOrder
    progressQuarter?: SortOrder
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

  export type IngestLogListRelationFilter = {
    every?: IngestLogWhereInput
    some?: IngestLogWhereInput
    none?: IngestLogWhereInput
  }

  export type IngestLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngestJobCompanyIdFiscalYearFiscalQuarterCompoundUniqueInput = {
    companyId: bigint | number
    fiscalYear: number
    fiscalQuarter: number
  }

  export type IngestJobCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    lastErrorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestJobAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    retries?: SortOrder
  }

  export type IngestJobMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    lastErrorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestJobMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    lastErrorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestJobSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fiscalYear?: SortOrder
    fiscalQuarter?: SortOrder
    priority?: SortOrder
    retries?: SortOrder
  }

  export type IngestControlCountOrderByAggregateInput = {
    id?: SortOrder
    runState?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestControlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngestControlMaxOrderByAggregateInput = {
    id?: SortOrder
    runState?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestControlMinOrderByAggregateInput = {
    id?: SortOrder
    runState?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestControlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngestJobNullableRelationFilter = {
    is?: IngestJobWhereInput | null
    isNot?: IngestJobWhereInput | null
  }

  export type IngestLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type IngestLogAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type IngestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type IngestLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type IngestLogSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type FinancialCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput> | FinancialCreateWithoutCompanyInput[] | FinancialUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutCompanyInput | FinancialCreateOrConnectWithoutCompanyInput[]
    createMany?: FinancialCreateManyCompanyInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type CompanyIngestStatusCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanyIngestStatusCreateOrConnectWithoutCompanyInput
    connect?: CompanyIngestStatusWhereUniqueInput
  }

  export type IngestJobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput> | IngestJobCreateWithoutCompanyInput[] | IngestJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IngestJobCreateOrConnectWithoutCompanyInput | IngestJobCreateOrConnectWithoutCompanyInput[]
    createMany?: IngestJobCreateManyCompanyInputEnvelope
    connect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
  }

  export type FinancialUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput> | FinancialCreateWithoutCompanyInput[] | FinancialUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutCompanyInput | FinancialCreateOrConnectWithoutCompanyInput[]
    createMany?: FinancialCreateManyCompanyInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type CompanyIngestStatusUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanyIngestStatusCreateOrConnectWithoutCompanyInput
    connect?: CompanyIngestStatusWhereUniqueInput
  }

  export type IngestJobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput> | IngestJobCreateWithoutCompanyInput[] | IngestJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IngestJobCreateOrConnectWithoutCompanyInput | IngestJobCreateOrConnectWithoutCompanyInput[]
    createMany?: IngestJobCreateManyCompanyInputEnvelope
    connect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FinancialUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput> | FinancialCreateWithoutCompanyInput[] | FinancialUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutCompanyInput | FinancialCreateOrConnectWithoutCompanyInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutCompanyInput | FinancialUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FinancialCreateManyCompanyInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutCompanyInput | FinancialUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutCompanyInput | FinancialUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type CompanyIngestStatusUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanyIngestStatusCreateOrConnectWithoutCompanyInput
    upsert?: CompanyIngestStatusUpsertWithoutCompanyInput
    disconnect?: CompanyIngestStatusWhereInput | boolean
    delete?: CompanyIngestStatusWhereInput | boolean
    connect?: CompanyIngestStatusWhereUniqueInput
    update?: XOR<XOR<CompanyIngestStatusUpdateToOneWithWhereWithoutCompanyInput, CompanyIngestStatusUpdateWithoutCompanyInput>, CompanyIngestStatusUncheckedUpdateWithoutCompanyInput>
  }

  export type IngestJobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput> | IngestJobCreateWithoutCompanyInput[] | IngestJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IngestJobCreateOrConnectWithoutCompanyInput | IngestJobCreateOrConnectWithoutCompanyInput[]
    upsert?: IngestJobUpsertWithWhereUniqueWithoutCompanyInput | IngestJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: IngestJobCreateManyCompanyInputEnvelope
    set?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    disconnect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    delete?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    connect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    update?: IngestJobUpdateWithWhereUniqueWithoutCompanyInput | IngestJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: IngestJobUpdateManyWithWhereWithoutCompanyInput | IngestJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: IngestJobScalarWhereInput | IngestJobScalarWhereInput[]
  }

  export type FinancialUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput> | FinancialCreateWithoutCompanyInput[] | FinancialUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutCompanyInput | FinancialCreateOrConnectWithoutCompanyInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutCompanyInput | FinancialUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FinancialCreateManyCompanyInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutCompanyInput | FinancialUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutCompanyInput | FinancialUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type CompanyIngestStatusUncheckedUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanyIngestStatusCreateOrConnectWithoutCompanyInput
    upsert?: CompanyIngestStatusUpsertWithoutCompanyInput
    disconnect?: CompanyIngestStatusWhereInput | boolean
    delete?: CompanyIngestStatusWhereInput | boolean
    connect?: CompanyIngestStatusWhereUniqueInput
    update?: XOR<XOR<CompanyIngestStatusUpdateToOneWithWhereWithoutCompanyInput, CompanyIngestStatusUpdateWithoutCompanyInput>, CompanyIngestStatusUncheckedUpdateWithoutCompanyInput>
  }

  export type IngestJobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput> | IngestJobCreateWithoutCompanyInput[] | IngestJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IngestJobCreateOrConnectWithoutCompanyInput | IngestJobCreateOrConnectWithoutCompanyInput[]
    upsert?: IngestJobUpsertWithWhereUniqueWithoutCompanyInput | IngestJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: IngestJobCreateManyCompanyInputEnvelope
    set?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    disconnect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    delete?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    connect?: IngestJobWhereUniqueInput | IngestJobWhereUniqueInput[]
    update?: IngestJobUpdateWithWhereUniqueWithoutCompanyInput | IngestJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: IngestJobUpdateManyWithWhereWithoutCompanyInput | IngestJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: IngestJobScalarWhereInput | IngestJobScalarWhereInput[]
  }

  export type FinancialCreateNestedManyWithoutPeriodInput = {
    create?: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput> | FinancialCreateWithoutPeriodInput[] | FinancialUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutPeriodInput | FinancialCreateOrConnectWithoutPeriodInput[]
    createMany?: FinancialCreateManyPeriodInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type FinancialUncheckedCreateNestedManyWithoutPeriodInput = {
    create?: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput> | FinancialCreateWithoutPeriodInput[] | FinancialUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutPeriodInput | FinancialCreateOrConnectWithoutPeriodInput[]
    createMany?: FinancialCreateManyPeriodInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FinancialUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput> | FinancialCreateWithoutPeriodInput[] | FinancialUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutPeriodInput | FinancialCreateOrConnectWithoutPeriodInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutPeriodInput | FinancialUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: FinancialCreateManyPeriodInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutPeriodInput | FinancialUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutPeriodInput | FinancialUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type FinancialUncheckedUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput> | FinancialCreateWithoutPeriodInput[] | FinancialUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutPeriodInput | FinancialCreateOrConnectWithoutPeriodInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutPeriodInput | FinancialUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: FinancialCreateManyPeriodInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutPeriodInput | FinancialUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutPeriodInput | FinancialUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type FinancialCreateNestedManyWithoutItemInput = {
    create?: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput> | FinancialCreateWithoutItemInput[] | FinancialUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutItemInput | FinancialCreateOrConnectWithoutItemInput[]
    createMany?: FinancialCreateManyItemInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type FinancialUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput> | FinancialCreateWithoutItemInput[] | FinancialUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutItemInput | FinancialCreateOrConnectWithoutItemInput[]
    createMany?: FinancialCreateManyItemInputEnvelope
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
  }

  export type FinancialUpdateManyWithoutItemNestedInput = {
    create?: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput> | FinancialCreateWithoutItemInput[] | FinancialUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutItemInput | FinancialCreateOrConnectWithoutItemInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutItemInput | FinancialUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: FinancialCreateManyItemInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutItemInput | FinancialUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutItemInput | FinancialUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type FinancialUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput> | FinancialCreateWithoutItemInput[] | FinancialUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FinancialCreateOrConnectWithoutItemInput | FinancialCreateOrConnectWithoutItemInput[]
    upsert?: FinancialUpsertWithWhereUniqueWithoutItemInput | FinancialUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: FinancialCreateManyItemInputEnvelope
    set?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    disconnect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    delete?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    connect?: FinancialWhereUniqueInput | FinancialWhereUniqueInput[]
    update?: FinancialUpdateWithWhereUniqueWithoutItemInput | FinancialUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: FinancialUpdateManyWithWhereWithoutItemInput | FinancialUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutFinancialsInput = {
    create?: XOR<CompanyCreateWithoutFinancialsInput, CompanyUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFinancialsInput
    connect?: CompanyWhereUniqueInput
  }

  export type ReportPeriodCreateNestedOneWithoutFinancialsInput = {
    create?: XOR<ReportPeriodCreateWithoutFinancialsInput, ReportPeriodUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: ReportPeriodCreateOrConnectWithoutFinancialsInput
    connect?: ReportPeriodWhereUniqueInput
  }

  export type FinancialItemCreateNestedOneWithoutFinancialsInput = {
    create?: XOR<FinancialItemCreateWithoutFinancialsInput, FinancialItemUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: FinancialItemCreateOrConnectWithoutFinancialsInput
    connect?: FinancialItemWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CompanyUpdateOneRequiredWithoutFinancialsNestedInput = {
    create?: XOR<CompanyCreateWithoutFinancialsInput, CompanyUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFinancialsInput
    upsert?: CompanyUpsertWithoutFinancialsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFinancialsInput, CompanyUpdateWithoutFinancialsInput>, CompanyUncheckedUpdateWithoutFinancialsInput>
  }

  export type ReportPeriodUpdateOneRequiredWithoutFinancialsNestedInput = {
    create?: XOR<ReportPeriodCreateWithoutFinancialsInput, ReportPeriodUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: ReportPeriodCreateOrConnectWithoutFinancialsInput
    upsert?: ReportPeriodUpsertWithoutFinancialsInput
    connect?: ReportPeriodWhereUniqueInput
    update?: XOR<XOR<ReportPeriodUpdateToOneWithWhereWithoutFinancialsInput, ReportPeriodUpdateWithoutFinancialsInput>, ReportPeriodUncheckedUpdateWithoutFinancialsInput>
  }

  export type FinancialItemUpdateOneRequiredWithoutFinancialsNestedInput = {
    create?: XOR<FinancialItemCreateWithoutFinancialsInput, FinancialItemUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: FinancialItemCreateOrConnectWithoutFinancialsInput
    upsert?: FinancialItemUpsertWithoutFinancialsInput
    connect?: FinancialItemWhereUniqueInput
    update?: XOR<XOR<FinancialItemUpdateToOneWithWhereWithoutFinancialsInput, FinancialItemUpdateWithoutFinancialsInput>, FinancialItemUncheckedUpdateWithoutFinancialsInput>
  }

  export type CompanyCreateNestedOneWithoutIngestStatusInput = {
    create?: XOR<CompanyCreateWithoutIngestStatusInput, CompanyUncheckedCreateWithoutIngestStatusInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIngestStatusInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutIngestStatusNestedInput = {
    create?: XOR<CompanyCreateWithoutIngestStatusInput, CompanyUncheckedCreateWithoutIngestStatusInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIngestStatusInput
    upsert?: CompanyUpsertWithoutIngestStatusInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutIngestStatusInput, CompanyUpdateWithoutIngestStatusInput>, CompanyUncheckedUpdateWithoutIngestStatusInput>
  }

  export type CompanyCreateNestedOneWithoutIngestJobsInput = {
    create?: XOR<CompanyCreateWithoutIngestJobsInput, CompanyUncheckedCreateWithoutIngestJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIngestJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type IngestLogCreateNestedManyWithoutJobInput = {
    create?: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput> | IngestLogCreateWithoutJobInput[] | IngestLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: IngestLogCreateOrConnectWithoutJobInput | IngestLogCreateOrConnectWithoutJobInput[]
    createMany?: IngestLogCreateManyJobInputEnvelope
    connect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
  }

  export type IngestLogUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput> | IngestLogCreateWithoutJobInput[] | IngestLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: IngestLogCreateOrConnectWithoutJobInput | IngestLogCreateOrConnectWithoutJobInput[]
    createMany?: IngestLogCreateManyJobInputEnvelope
    connect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutIngestJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutIngestJobsInput, CompanyUncheckedCreateWithoutIngestJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIngestJobsInput
    upsert?: CompanyUpsertWithoutIngestJobsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutIngestJobsInput, CompanyUpdateWithoutIngestJobsInput>, CompanyUncheckedUpdateWithoutIngestJobsInput>
  }

  export type IngestLogUpdateManyWithoutJobNestedInput = {
    create?: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput> | IngestLogCreateWithoutJobInput[] | IngestLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: IngestLogCreateOrConnectWithoutJobInput | IngestLogCreateOrConnectWithoutJobInput[]
    upsert?: IngestLogUpsertWithWhereUniqueWithoutJobInput | IngestLogUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: IngestLogCreateManyJobInputEnvelope
    set?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    disconnect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    delete?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    connect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    update?: IngestLogUpdateWithWhereUniqueWithoutJobInput | IngestLogUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: IngestLogUpdateManyWithWhereWithoutJobInput | IngestLogUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: IngestLogScalarWhereInput | IngestLogScalarWhereInput[]
  }

  export type IngestLogUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput> | IngestLogCreateWithoutJobInput[] | IngestLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: IngestLogCreateOrConnectWithoutJobInput | IngestLogCreateOrConnectWithoutJobInput[]
    upsert?: IngestLogUpsertWithWhereUniqueWithoutJobInput | IngestLogUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: IngestLogCreateManyJobInputEnvelope
    set?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    disconnect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    delete?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    connect?: IngestLogWhereUniqueInput | IngestLogWhereUniqueInput[]
    update?: IngestLogUpdateWithWhereUniqueWithoutJobInput | IngestLogUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: IngestLogUpdateManyWithWhereWithoutJobInput | IngestLogUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: IngestLogScalarWhereInput | IngestLogScalarWhereInput[]
  }

  export type IngestJobCreateNestedOneWithoutLogsInput = {
    create?: XOR<IngestJobCreateWithoutLogsInput, IngestJobUncheckedCreateWithoutLogsInput>
    connectOrCreate?: IngestJobCreateOrConnectWithoutLogsInput
    connect?: IngestJobWhereUniqueInput
  }

  export type IngestJobUpdateOneWithoutLogsNestedInput = {
    create?: XOR<IngestJobCreateWithoutLogsInput, IngestJobUncheckedCreateWithoutLogsInput>
    connectOrCreate?: IngestJobCreateOrConnectWithoutLogsInput
    upsert?: IngestJobUpsertWithoutLogsInput
    disconnect?: IngestJobWhereInput | boolean
    delete?: IngestJobWhereInput | boolean
    connect?: IngestJobWhereUniqueInput
    update?: XOR<XOR<IngestJobUpdateToOneWithWhereWithoutLogsInput, IngestJobUpdateWithoutLogsInput>, IngestJobUncheckedUpdateWithoutLogsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type FinancialCreateWithoutCompanyInput = {
    id?: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
    period: ReportPeriodCreateNestedOneWithoutFinancialsInput
    item: FinancialItemCreateNestedOneWithoutFinancialsInput
  }

  export type FinancialUncheckedCreateWithoutCompanyInput = {
    id?: bigint | number
    periodId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialCreateOrConnectWithoutCompanyInput = {
    where: FinancialWhereUniqueInput
    create: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput>
  }

  export type FinancialCreateManyCompanyInputEnvelope = {
    data: FinancialCreateManyCompanyInput | FinancialCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyIngestStatusCreateWithoutCompanyInput = {
    lastSuccessAt?: Date | string | null
    lastErrorAt?: Date | string | null
    lastErrorMsg?: string | null
    progressYear?: number | null
    progressQuarter?: number | null
    status?: string
  }

  export type CompanyIngestStatusUncheckedCreateWithoutCompanyInput = {
    lastSuccessAt?: Date | string | null
    lastErrorAt?: Date | string | null
    lastErrorMsg?: string | null
    progressYear?: number | null
    progressQuarter?: number | null
    status?: string
  }

  export type CompanyIngestStatusCreateOrConnectWithoutCompanyInput = {
    where: CompanyIngestStatusWhereUniqueInput
    create: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
  }

  export type IngestJobCreateWithoutCompanyInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: IngestLogCreateNestedManyWithoutJobInput
  }

  export type IngestJobUncheckedCreateWithoutCompanyInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: IngestLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type IngestJobCreateOrConnectWithoutCompanyInput = {
    where: IngestJobWhereUniqueInput
    create: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput>
  }

  export type IngestJobCreateManyCompanyInputEnvelope = {
    data: IngestJobCreateManyCompanyInput | IngestJobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FinancialUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FinancialWhereUniqueInput
    update: XOR<FinancialUpdateWithoutCompanyInput, FinancialUncheckedUpdateWithoutCompanyInput>
    create: XOR<FinancialCreateWithoutCompanyInput, FinancialUncheckedCreateWithoutCompanyInput>
  }

  export type FinancialUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FinancialWhereUniqueInput
    data: XOR<FinancialUpdateWithoutCompanyInput, FinancialUncheckedUpdateWithoutCompanyInput>
  }

  export type FinancialUpdateManyWithWhereWithoutCompanyInput = {
    where: FinancialScalarWhereInput
    data: XOR<FinancialUpdateManyMutationInput, FinancialUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FinancialScalarWhereInput = {
    AND?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
    OR?: FinancialScalarWhereInput[]
    NOT?: FinancialScalarWhereInput | FinancialScalarWhereInput[]
    id?: BigIntFilter<"Financial"> | bigint | number
    companyId?: BigIntFilter<"Financial"> | bigint | number
    periodId?: BigIntFilter<"Financial"> | bigint | number
    itemId?: BigIntFilter<"Financial"> | bigint | number
    value?: DecimalFilter<"Financial"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Financial"> | string
    source?: StringFilter<"Financial"> | string
    createdAt?: DateTimeFilter<"Financial"> | Date | string
  }

  export type CompanyIngestStatusUpsertWithoutCompanyInput = {
    update: XOR<CompanyIngestStatusUpdateWithoutCompanyInput, CompanyIngestStatusUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyIngestStatusCreateWithoutCompanyInput, CompanyIngestStatusUncheckedCreateWithoutCompanyInput>
    where?: CompanyIngestStatusWhereInput
  }

  export type CompanyIngestStatusUpdateToOneWithWhereWithoutCompanyInput = {
    where?: CompanyIngestStatusWhereInput
    data: XOR<CompanyIngestStatusUpdateWithoutCompanyInput, CompanyIngestStatusUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyIngestStatusUpdateWithoutCompanyInput = {
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyIngestStatusUncheckedUpdateWithoutCompanyInput = {
    lastSuccessAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    progressYear?: NullableIntFieldUpdateOperationsInput | number | null
    progressQuarter?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IngestJobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: IngestJobWhereUniqueInput
    update: XOR<IngestJobUpdateWithoutCompanyInput, IngestJobUncheckedUpdateWithoutCompanyInput>
    create: XOR<IngestJobCreateWithoutCompanyInput, IngestJobUncheckedCreateWithoutCompanyInput>
  }

  export type IngestJobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: IngestJobWhereUniqueInput
    data: XOR<IngestJobUpdateWithoutCompanyInput, IngestJobUncheckedUpdateWithoutCompanyInput>
  }

  export type IngestJobUpdateManyWithWhereWithoutCompanyInput = {
    where: IngestJobScalarWhereInput
    data: XOR<IngestJobUpdateManyMutationInput, IngestJobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type IngestJobScalarWhereInput = {
    AND?: IngestJobScalarWhereInput | IngestJobScalarWhereInput[]
    OR?: IngestJobScalarWhereInput[]
    NOT?: IngestJobScalarWhereInput | IngestJobScalarWhereInput[]
    id?: BigIntFilter<"IngestJob"> | bigint | number
    companyId?: BigIntFilter<"IngestJob"> | bigint | number
    fiscalYear?: IntFilter<"IngestJob"> | number
    fiscalQuarter?: IntFilter<"IngestJob"> | number
    priority?: IntFilter<"IngestJob"> | number
    status?: StringFilter<"IngestJob"> | string
    retries?: IntFilter<"IngestJob"> | number
    lastErrorMsg?: StringNullableFilter<"IngestJob"> | string | null
    createdAt?: DateTimeFilter<"IngestJob"> | Date | string
    updatedAt?: DateTimeFilter<"IngestJob"> | Date | string
  }

  export type FinancialCreateWithoutPeriodInput = {
    id?: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutFinancialsInput
    item: FinancialItemCreateNestedOneWithoutFinancialsInput
  }

  export type FinancialUncheckedCreateWithoutPeriodInput = {
    id?: bigint | number
    companyId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialCreateOrConnectWithoutPeriodInput = {
    where: FinancialWhereUniqueInput
    create: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput>
  }

  export type FinancialCreateManyPeriodInputEnvelope = {
    data: FinancialCreateManyPeriodInput | FinancialCreateManyPeriodInput[]
    skipDuplicates?: boolean
  }

  export type FinancialUpsertWithWhereUniqueWithoutPeriodInput = {
    where: FinancialWhereUniqueInput
    update: XOR<FinancialUpdateWithoutPeriodInput, FinancialUncheckedUpdateWithoutPeriodInput>
    create: XOR<FinancialCreateWithoutPeriodInput, FinancialUncheckedCreateWithoutPeriodInput>
  }

  export type FinancialUpdateWithWhereUniqueWithoutPeriodInput = {
    where: FinancialWhereUniqueInput
    data: XOR<FinancialUpdateWithoutPeriodInput, FinancialUncheckedUpdateWithoutPeriodInput>
  }

  export type FinancialUpdateManyWithWhereWithoutPeriodInput = {
    where: FinancialScalarWhereInput
    data: XOR<FinancialUpdateManyMutationInput, FinancialUncheckedUpdateManyWithoutPeriodInput>
  }

  export type FinancialCreateWithoutItemInput = {
    id?: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutFinancialsInput
    period: ReportPeriodCreateNestedOneWithoutFinancialsInput
  }

  export type FinancialUncheckedCreateWithoutItemInput = {
    id?: bigint | number
    companyId: bigint | number
    periodId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialCreateOrConnectWithoutItemInput = {
    where: FinancialWhereUniqueInput
    create: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput>
  }

  export type FinancialCreateManyItemInputEnvelope = {
    data: FinancialCreateManyItemInput | FinancialCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type FinancialUpsertWithWhereUniqueWithoutItemInput = {
    where: FinancialWhereUniqueInput
    update: XOR<FinancialUpdateWithoutItemInput, FinancialUncheckedUpdateWithoutItemInput>
    create: XOR<FinancialCreateWithoutItemInput, FinancialUncheckedCreateWithoutItemInput>
  }

  export type FinancialUpdateWithWhereUniqueWithoutItemInput = {
    where: FinancialWhereUniqueInput
    data: XOR<FinancialUpdateWithoutItemInput, FinancialUncheckedUpdateWithoutItemInput>
  }

  export type FinancialUpdateManyWithWhereWithoutItemInput = {
    where: FinancialScalarWhereInput
    data: XOR<FinancialUpdateManyMutationInput, FinancialUncheckedUpdateManyWithoutItemInput>
  }

  export type CompanyCreateWithoutFinancialsInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingestStatus?: CompanyIngestStatusCreateNestedOneWithoutCompanyInput
    ingestJobs?: IngestJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFinancialsInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingestStatus?: CompanyIngestStatusUncheckedCreateNestedOneWithoutCompanyInput
    ingestJobs?: IngestJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFinancialsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFinancialsInput, CompanyUncheckedCreateWithoutFinancialsInput>
  }

  export type ReportPeriodCreateWithoutFinancialsInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName?: string | null
    reportDate?: Date | string | null
  }

  export type ReportPeriodUncheckedCreateWithoutFinancialsInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    periodType: string
    reportName?: string | null
    reportDate?: Date | string | null
  }

  export type ReportPeriodCreateOrConnectWithoutFinancialsInput = {
    where: ReportPeriodWhereUniqueInput
    create: XOR<ReportPeriodCreateWithoutFinancialsInput, ReportPeriodUncheckedCreateWithoutFinancialsInput>
  }

  export type FinancialItemCreateWithoutFinancialsInput = {
    id?: bigint | number
    itemCode: string
    itemName: string
    statementType: string
    unit?: string | null
  }

  export type FinancialItemUncheckedCreateWithoutFinancialsInput = {
    id?: bigint | number
    itemCode: string
    itemName: string
    statementType: string
    unit?: string | null
  }

  export type FinancialItemCreateOrConnectWithoutFinancialsInput = {
    where: FinancialItemWhereUniqueInput
    create: XOR<FinancialItemCreateWithoutFinancialsInput, FinancialItemUncheckedCreateWithoutFinancialsInput>
  }

  export type CompanyUpsertWithoutFinancialsInput = {
    update: XOR<CompanyUpdateWithoutFinancialsInput, CompanyUncheckedUpdateWithoutFinancialsInput>
    create: XOR<CompanyCreateWithoutFinancialsInput, CompanyUncheckedCreateWithoutFinancialsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFinancialsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFinancialsInput, CompanyUncheckedUpdateWithoutFinancialsInput>
  }

  export type CompanyUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestStatus?: CompanyIngestStatusUpdateOneWithoutCompanyNestedInput
    ingestJobs?: IngestJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestStatus?: CompanyIngestStatusUncheckedUpdateOneWithoutCompanyNestedInput
    ingestJobs?: IngestJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ReportPeriodUpsertWithoutFinancialsInput = {
    update: XOR<ReportPeriodUpdateWithoutFinancialsInput, ReportPeriodUncheckedUpdateWithoutFinancialsInput>
    create: XOR<ReportPeriodCreateWithoutFinancialsInput, ReportPeriodUncheckedCreateWithoutFinancialsInput>
    where?: ReportPeriodWhereInput
  }

  export type ReportPeriodUpdateToOneWithWhereWithoutFinancialsInput = {
    where?: ReportPeriodWhereInput
    data: XOR<ReportPeriodUpdateWithoutFinancialsInput, ReportPeriodUncheckedUpdateWithoutFinancialsInput>
  }

  export type ReportPeriodUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportPeriodUncheckedUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    periodType?: StringFieldUpdateOperationsInput | string
    reportName?: NullableStringFieldUpdateOperationsInput | string | null
    reportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinancialItemUpsertWithoutFinancialsInput = {
    update: XOR<FinancialItemUpdateWithoutFinancialsInput, FinancialItemUncheckedUpdateWithoutFinancialsInput>
    create: XOR<FinancialItemCreateWithoutFinancialsInput, FinancialItemUncheckedCreateWithoutFinancialsInput>
    where?: FinancialItemWhereInput
  }

  export type FinancialItemUpdateToOneWithWhereWithoutFinancialsInput = {
    where?: FinancialItemWhereInput
    data: XOR<FinancialItemUpdateWithoutFinancialsInput, FinancialItemUncheckedUpdateWithoutFinancialsInput>
  }

  export type FinancialItemUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinancialItemUncheckedUpdateWithoutFinancialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    statementType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateWithoutIngestStatusInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialCreateNestedManyWithoutCompanyInput
    ingestJobs?: IngestJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIngestStatusInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialUncheckedCreateNestedManyWithoutCompanyInput
    ingestJobs?: IngestJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIngestStatusInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIngestStatusInput, CompanyUncheckedCreateWithoutIngestStatusInput>
  }

  export type CompanyUpsertWithoutIngestStatusInput = {
    update: XOR<CompanyUpdateWithoutIngestStatusInput, CompanyUncheckedUpdateWithoutIngestStatusInput>
    create: XOR<CompanyCreateWithoutIngestStatusInput, CompanyUncheckedCreateWithoutIngestStatusInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutIngestStatusInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutIngestStatusInput, CompanyUncheckedUpdateWithoutIngestStatusInput>
  }

  export type CompanyUpdateWithoutIngestStatusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUpdateManyWithoutCompanyNestedInput
    ingestJobs?: IngestJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIngestStatusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUncheckedUpdateManyWithoutCompanyNestedInput
    ingestJobs?: IngestJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutIngestJobsInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialCreateNestedManyWithoutCompanyInput
    ingestStatus?: CompanyIngestStatusCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIngestJobsInput = {
    id?: bigint | number
    ticker: string
    name: string
    market: string
    sector?: string | null
    listedAt?: Date | string | null
    marketCap?: bigint | number | null
    marketCapAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financials?: FinancialUncheckedCreateNestedManyWithoutCompanyInput
    ingestStatus?: CompanyIngestStatusUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIngestJobsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIngestJobsInput, CompanyUncheckedCreateWithoutIngestJobsInput>
  }

  export type IngestLogCreateWithoutJobInput = {
    id?: bigint | number
    level: string
    message: string
    createdAt?: Date | string
  }

  export type IngestLogUncheckedCreateWithoutJobInput = {
    id?: bigint | number
    level: string
    message: string
    createdAt?: Date | string
  }

  export type IngestLogCreateOrConnectWithoutJobInput = {
    where: IngestLogWhereUniqueInput
    create: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput>
  }

  export type IngestLogCreateManyJobInputEnvelope = {
    data: IngestLogCreateManyJobInput | IngestLogCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutIngestJobsInput = {
    update: XOR<CompanyUpdateWithoutIngestJobsInput, CompanyUncheckedUpdateWithoutIngestJobsInput>
    create: XOR<CompanyCreateWithoutIngestJobsInput, CompanyUncheckedCreateWithoutIngestJobsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutIngestJobsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutIngestJobsInput, CompanyUncheckedUpdateWithoutIngestJobsInput>
  }

  export type CompanyUpdateWithoutIngestJobsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUpdateManyWithoutCompanyNestedInput
    ingestStatus?: CompanyIngestStatusUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIngestJobsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    listedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marketCapAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: FinancialUncheckedUpdateManyWithoutCompanyNestedInput
    ingestStatus?: CompanyIngestStatusUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type IngestLogUpsertWithWhereUniqueWithoutJobInput = {
    where: IngestLogWhereUniqueInput
    update: XOR<IngestLogUpdateWithoutJobInput, IngestLogUncheckedUpdateWithoutJobInput>
    create: XOR<IngestLogCreateWithoutJobInput, IngestLogUncheckedCreateWithoutJobInput>
  }

  export type IngestLogUpdateWithWhereUniqueWithoutJobInput = {
    where: IngestLogWhereUniqueInput
    data: XOR<IngestLogUpdateWithoutJobInput, IngestLogUncheckedUpdateWithoutJobInput>
  }

  export type IngestLogUpdateManyWithWhereWithoutJobInput = {
    where: IngestLogScalarWhereInput
    data: XOR<IngestLogUpdateManyMutationInput, IngestLogUncheckedUpdateManyWithoutJobInput>
  }

  export type IngestLogScalarWhereInput = {
    AND?: IngestLogScalarWhereInput | IngestLogScalarWhereInput[]
    OR?: IngestLogScalarWhereInput[]
    NOT?: IngestLogScalarWhereInput | IngestLogScalarWhereInput[]
    id?: BigIntFilter<"IngestLog"> | bigint | number
    jobId?: BigIntNullableFilter<"IngestLog"> | bigint | number | null
    level?: StringFilter<"IngestLog"> | string
    message?: StringFilter<"IngestLog"> | string
    createdAt?: DateTimeFilter<"IngestLog"> | Date | string
  }

  export type IngestJobCreateWithoutLogsInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutIngestJobsInput
  }

  export type IngestJobUncheckedCreateWithoutLogsInput = {
    id?: bigint | number
    companyId: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngestJobCreateOrConnectWithoutLogsInput = {
    where: IngestJobWhereUniqueInput
    create: XOR<IngestJobCreateWithoutLogsInput, IngestJobUncheckedCreateWithoutLogsInput>
  }

  export type IngestJobUpsertWithoutLogsInput = {
    update: XOR<IngestJobUpdateWithoutLogsInput, IngestJobUncheckedUpdateWithoutLogsInput>
    create: XOR<IngestJobCreateWithoutLogsInput, IngestJobUncheckedCreateWithoutLogsInput>
    where?: IngestJobWhereInput
  }

  export type IngestJobUpdateToOneWithWhereWithoutLogsInput = {
    where?: IngestJobWhereInput
    data: XOR<IngestJobUpdateWithoutLogsInput, IngestJobUncheckedUpdateWithoutLogsInput>
  }

  export type IngestJobUpdateWithoutLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutIngestJobsNestedInput
  }

  export type IngestJobUncheckedUpdateWithoutLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialCreateManyCompanyInput = {
    id?: bigint | number
    periodId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type IngestJobCreateManyCompanyInput = {
    id?: bigint | number
    fiscalYear: number
    fiscalQuarter: number
    priority?: number
    status?: string
    retries?: number
    lastErrorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: ReportPeriodUpdateOneRequiredWithoutFinancialsNestedInput
    item?: FinancialItemUpdateOneRequiredWithoutFinancialsNestedInput
  }

  export type FinancialUncheckedUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialUncheckedUpdateManyWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestJobUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: IngestLogUpdateManyWithoutJobNestedInput
  }

  export type IngestJobUncheckedUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: IngestLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type IngestJobUncheckedUpdateManyWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fiscalYear?: IntFieldUpdateOperationsInput | number
    fiscalQuarter?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    retries?: IntFieldUpdateOperationsInput | number
    lastErrorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialCreateManyPeriodInput = {
    id?: bigint | number
    companyId: bigint | number
    itemId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialUpdateWithoutPeriodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFinancialsNestedInput
    item?: FinancialItemUpdateOneRequiredWithoutFinancialsNestedInput
  }

  export type FinancialUncheckedUpdateWithoutPeriodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialUncheckedUpdateManyWithoutPeriodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialCreateManyItemInput = {
    id?: bigint | number
    companyId: bigint | number
    periodId: bigint | number
    value: Decimal | DecimalJsLike | number | string
    currency?: string
    source?: string
    createdAt?: Date | string
  }

  export type FinancialUpdateWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFinancialsNestedInput
    period?: ReportPeriodUpdateOneRequiredWithoutFinancialsNestedInput
  }

  export type FinancialUncheckedUpdateWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialUncheckedUpdateManyWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    companyId?: BigIntFieldUpdateOperationsInput | bigint | number
    periodId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogCreateManyJobInput = {
    id?: bigint | number
    level: string
    message: string
    createdAt?: Date | string
  }

  export type IngestLogUpdateWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogUncheckedUpdateWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogUncheckedUpdateManyWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportPeriodCountOutputTypeDefaultArgs instead
     */
    export type ReportPeriodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportPeriodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinancialItemCountOutputTypeDefaultArgs instead
     */
    export type FinancialItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinancialItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngestJobCountOutputTypeDefaultArgs instead
     */
    export type IngestJobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngestJobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportPeriodDefaultArgs instead
     */
    export type ReportPeriodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportPeriodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinancialItemDefaultArgs instead
     */
    export type FinancialItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinancialItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinancialDefaultArgs instead
     */
    export type FinancialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinancialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyIngestStatusDefaultArgs instead
     */
    export type CompanyIngestStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyIngestStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngestJobDefaultArgs instead
     */
    export type IngestJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngestJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngestControlDefaultArgs instead
     */
    export type IngestControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngestControlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngestLogDefaultArgs instead
     */
    export type IngestLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngestLogDefaultArgs<ExtArgs>

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