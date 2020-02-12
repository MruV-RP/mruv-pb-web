import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_vision_v1p4beta1_geometry_pb from '../../../../google/cloud/vision/v1p4beta1/geometry_pb';
import * as google_cloud_vision_v1p4beta1_product_search_service_pb from '../../../../google/cloud/vision/v1p4beta1/product_search_service_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProductSearchParams extends jspb.Message {
  getBoundingPoly(): google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getProductSet(): string;
  setProductSet(value: string): void;

  getProductCategoriesList(): Array<string>;
  setProductCategoriesList(value: Array<string>): void;
  clearProductCategoriesList(): void;
  addProductCategories(value: string, index?: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSearchParams.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSearchParams): ProductSearchParams.AsObject;
  static serializeBinaryToWriter(message: ProductSearchParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSearchParams;
  static deserializeBinaryFromReader(message: ProductSearchParams, reader: jspb.BinaryReader): ProductSearchParams;
}

export namespace ProductSearchParams {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly.AsObject,
    productSet: string,
    productCategoriesList: Array<string>,
    filter: string,
  }
}

export class ProductSearchResults extends jspb.Message {
  getIndexTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIndexTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasIndexTime(): boolean;
  clearIndexTime(): void;

  getResultsList(): Array<ProductSearchResults.Result>;
  setResultsList(value: Array<ProductSearchResults.Result>): void;
  clearResultsList(): void;
  addResults(value?: ProductSearchResults.Result, index?: number): ProductSearchResults.Result;

  getProductGroupedResultsList(): Array<ProductSearchResults.GroupedResult>;
  setProductGroupedResultsList(value: Array<ProductSearchResults.GroupedResult>): void;
  clearProductGroupedResultsList(): void;
  addProductGroupedResults(value?: ProductSearchResults.GroupedResult, index?: number): ProductSearchResults.GroupedResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSearchResults.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSearchResults): ProductSearchResults.AsObject;
  static serializeBinaryToWriter(message: ProductSearchResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSearchResults;
  static deserializeBinaryFromReader(message: ProductSearchResults, reader: jspb.BinaryReader): ProductSearchResults;
}

export namespace ProductSearchResults {
  export type AsObject = {
    indexTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resultsList: Array<ProductSearchResults.Result.AsObject>,
    productGroupedResultsList: Array<ProductSearchResults.GroupedResult.AsObject>,
  }

  export class Result extends jspb.Message {
    getProduct(): google_cloud_vision_v1p4beta1_product_search_service_pb.Product | undefined;
    setProduct(value?: google_cloud_vision_v1p4beta1_product_search_service_pb.Product): void;
    hasProduct(): boolean;
    clearProduct(): void;

    getScore(): number;
    setScore(value: number): void;

    getImage(): string;
    setImage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      product?: google_cloud_vision_v1p4beta1_product_search_service_pb.Product.AsObject,
      score: number,
      image: string,
    }
  }


  export class ObjectAnnotation extends jspb.Message {
    getMid(): string;
    setMid(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getName(): string;
    setName(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectAnnotation): ObjectAnnotation.AsObject;
    static serializeBinaryToWriter(message: ObjectAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectAnnotation;
    static deserializeBinaryFromReader(message: ObjectAnnotation, reader: jspb.BinaryReader): ObjectAnnotation;
  }

  export namespace ObjectAnnotation {
    export type AsObject = {
      mid: string,
      languageCode: string,
      name: string,
      score: number,
    }
  }


  export class GroupedResult extends jspb.Message {
    getBoundingPoly(): google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly | undefined;
    setBoundingPoly(value?: google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly): void;
    hasBoundingPoly(): boolean;
    clearBoundingPoly(): void;

    getResultsList(): Array<ProductSearchResults.Result>;
    setResultsList(value: Array<ProductSearchResults.Result>): void;
    clearResultsList(): void;
    addResults(value?: ProductSearchResults.Result, index?: number): ProductSearchResults.Result;

    getObjectAnnotationsList(): Array<ProductSearchResults.ObjectAnnotation>;
    setObjectAnnotationsList(value: Array<ProductSearchResults.ObjectAnnotation>): void;
    clearObjectAnnotationsList(): void;
    addObjectAnnotations(value?: ProductSearchResults.ObjectAnnotation, index?: number): ProductSearchResults.ObjectAnnotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupedResult.AsObject;
    static toObject(includeInstance: boolean, msg: GroupedResult): GroupedResult.AsObject;
    static serializeBinaryToWriter(message: GroupedResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupedResult;
    static deserializeBinaryFromReader(message: GroupedResult, reader: jspb.BinaryReader): GroupedResult;
  }

  export namespace GroupedResult {
    export type AsObject = {
      boundingPoly?: google_cloud_vision_v1p4beta1_geometry_pb.BoundingPoly.AsObject,
      resultsList: Array<ProductSearchResults.Result.AsObject>,
      objectAnnotationsList: Array<ProductSearchResults.ObjectAnnotation.AsObject>,
    }
  }

}

