import * as jspb from "google-protobuf"

export class Distribution extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getMean(): number;
  setMean(value: number): void;

  getMinimum(): number;
  setMinimum(value: number): void;

  getMaximum(): number;
  setMaximum(value: number): void;

  getSumOfSquaredDeviation(): number;
  setSumOfSquaredDeviation(value: number): void;

  getBucketCountsList(): Array<number>;
  setBucketCountsList(value: Array<number>): void;
  clearBucketCountsList(): void;
  addBucketCounts(value: number, index?: number): void;

  getLinearBuckets(): Distribution.LinearBuckets | undefined;
  setLinearBuckets(value?: Distribution.LinearBuckets): void;
  hasLinearBuckets(): boolean;
  clearLinearBuckets(): void;

  getExponentialBuckets(): Distribution.ExponentialBuckets | undefined;
  setExponentialBuckets(value?: Distribution.ExponentialBuckets): void;
  hasExponentialBuckets(): boolean;
  clearExponentialBuckets(): void;

  getExplicitBuckets(): Distribution.ExplicitBuckets | undefined;
  setExplicitBuckets(value?: Distribution.ExplicitBuckets): void;
  hasExplicitBuckets(): boolean;
  clearExplicitBuckets(): void;

  getBucketOptionCase(): Distribution.BucketOptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
    count: number,
    mean: number,
    minimum: number,
    maximum: number,
    sumOfSquaredDeviation: number,
    bucketCountsList: Array<number>,
    linearBuckets?: Distribution.LinearBuckets.AsObject,
    exponentialBuckets?: Distribution.ExponentialBuckets.AsObject,
    explicitBuckets?: Distribution.ExplicitBuckets.AsObject,
  }

  export class LinearBuckets extends jspb.Message {
    getNumFiniteBuckets(): number;
    setNumFiniteBuckets(value: number): void;

    getWidth(): number;
    setWidth(value: number): void;

    getOffset(): number;
    setOffset(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinearBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: LinearBuckets): LinearBuckets.AsObject;
    static serializeBinaryToWriter(message: LinearBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinearBuckets;
    static deserializeBinaryFromReader(message: LinearBuckets, reader: jspb.BinaryReader): LinearBuckets;
  }

  export namespace LinearBuckets {
    export type AsObject = {
      numFiniteBuckets: number,
      width: number,
      offset: number,
    }
  }


  export class ExponentialBuckets extends jspb.Message {
    getNumFiniteBuckets(): number;
    setNumFiniteBuckets(value: number): void;

    getGrowthFactor(): number;
    setGrowthFactor(value: number): void;

    getScale(): number;
    setScale(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExponentialBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: ExponentialBuckets): ExponentialBuckets.AsObject;
    static serializeBinaryToWriter(message: ExponentialBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExponentialBuckets;
    static deserializeBinaryFromReader(message: ExponentialBuckets, reader: jspb.BinaryReader): ExponentialBuckets;
  }

  export namespace ExponentialBuckets {
    export type AsObject = {
      numFiniteBuckets: number,
      growthFactor: number,
      scale: number,
    }
  }


  export class ExplicitBuckets extends jspb.Message {
    getBoundsList(): Array<number>;
    setBoundsList(value: Array<number>): void;
    clearBoundsList(): void;
    addBounds(value: number, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExplicitBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: ExplicitBuckets): ExplicitBuckets.AsObject;
    static serializeBinaryToWriter(message: ExplicitBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExplicitBuckets;
    static deserializeBinaryFromReader(message: ExplicitBuckets, reader: jspb.BinaryReader): ExplicitBuckets;
  }

  export namespace ExplicitBuckets {
    export type AsObject = {
      boundsList: Array<number>,
    }
  }


  export enum BucketOptionCase { 
    BUCKET_OPTION_NOT_SET = 0,
    LINEAR_BUCKETS = 7,
    EXPONENTIAL_BUCKETS = 8,
    EXPLICIT_BUCKETS = 9,
  }
}

