import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';


export class RegisterProductRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RegisterProductRequest;

  getFullName(): string;
  setFullName(value: string): RegisterProductRequest;

  getDescription(): string;
  setDescription(value: string): RegisterProductRequest;

  getPriceClass(): number;
  setPriceClass(value: number): RegisterProductRequest;

  getPriceRatio(): number;
  setPriceRatio(value: number): RegisterProductRequest;

  getStartingPrice(): number;
  setStartingPrice(value: number): RegisterProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterProductRequest): RegisterProductRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterProductRequest;
  static deserializeBinaryFromReader(message: RegisterProductRequest, reader: jspb.BinaryReader): RegisterProductRequest;
}

export namespace RegisterProductRequest {
  export type AsObject = {
    name: string,
    fullName: string,
    description: string,
    priceClass: number,
    priceRatio: number,
    startingPrice: number,
  }
}

export class RegisterProductResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RegisterProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterProductResponse): RegisterProductResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterProductResponse;
  static deserializeBinaryFromReader(message: RegisterProductResponse, reader: jspb.BinaryReader): RegisterProductResponse;
}

export namespace RegisterProductResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetProductRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetProductRequest;

  getName(): string;
  setName(value: string): GetProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductRequest;
  static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class GetProductResponse extends jspb.Message {
  getName(): string;
  setName(value: string): GetProductResponse;

  getFullName(): string;
  setFullName(value: string): GetProductResponse;

  getDescription(): string;
  setDescription(value: string): GetProductResponse;

  getPriceClass(): number;
  setPriceClass(value: number): GetProductResponse;

  getPriceRatio(): number;
  setPriceRatio(value: number): GetProductResponse;

  getStartingPrice(): number;
  setStartingPrice(value: number): GetProductResponse;

  getPrice(): number;
  setPrice(value: number): GetProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductResponse): GetProductResponse.AsObject;
  static serializeBinaryToWriter(message: GetProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductResponse;
  static deserializeBinaryFromReader(message: GetProductResponse, reader: jspb.BinaryReader): GetProductResponse;
}

export namespace GetProductResponse {
  export type AsObject = {
    name: string,
    fullName: string,
    description: string,
    priceClass: number,
    priceRatio: number,
    startingPrice: number,
    price: number,
  }
}

export class UpdateProductRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateProductRequest;

  getName(): string;
  setName(value: string): UpdateProductRequest;

  getFullName(): string;
  setFullName(value: string): UpdateProductRequest;

  getDescription(): string;
  setDescription(value: string): UpdateProductRequest;

  getPriceClass(): number;
  setPriceClass(value: number): UpdateProductRequest;

  getPriceRatio(): number;
  setPriceRatio(value: number): UpdateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
  static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    id: number,
    name: string,
    fullName: string,
    description: string,
    priceClass: number,
    priceRatio: number,
  }
}

export class UpdateProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductResponse): UpdateProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductResponse;
  static deserializeBinaryFromReader(message: UpdateProductResponse, reader: jspb.BinaryReader): UpdateProductResponse;
}

export namespace UpdateProductResponse {
  export type AsObject = {
  }
}

export class UpdatePriceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdatePriceRequest;

  getName(): string;
  setName(value: string): UpdatePriceRequest;

  getNewPrice(): number;
  setNewPrice(value: number): UpdatePriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePriceRequest): UpdatePriceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePriceRequest;
  static deserializeBinaryFromReader(message: UpdatePriceRequest, reader: jspb.BinaryReader): UpdatePriceRequest;
}

export namespace UpdatePriceRequest {
  export type AsObject = {
    id: number,
    name: string,
    newPrice: number,
  }
}

export class UpdatePriceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePriceResponse): UpdatePriceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePriceResponse;
  static deserializeBinaryFromReader(message: UpdatePriceResponse, reader: jspb.BinaryReader): UpdatePriceResponse;
}

export namespace UpdatePriceResponse {
  export type AsObject = {
  }
}

export class DeleteProductRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteProductRequest;

  getName(): string;
  setName(value: string): DeleteProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
  static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class DeleteProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductResponse): DeleteProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductResponse;
  static deserializeBinaryFromReader(message: DeleteProductResponse, reader: jspb.BinaryReader): DeleteProductResponse;
}

export namespace DeleteProductResponse {
  export type AsObject = {
  }
}

export class GetPriceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetPriceRequest;

  getName(): string;
  setName(value: string): GetPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPriceRequest): GetPriceRequest.AsObject;
  static serializeBinaryToWriter(message: GetPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPriceRequest;
  static deserializeBinaryFromReader(message: GetPriceRequest, reader: jspb.BinaryReader): GetPriceRequest;
}

export namespace GetPriceRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class GetPriceResponse extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): GetPriceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPriceResponse): GetPriceResponse.AsObject;
  static serializeBinaryToWriter(message: GetPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPriceResponse;
  static deserializeBinaryFromReader(message: GetPriceResponse, reader: jspb.BinaryReader): GetPriceResponse;
}

export namespace GetPriceResponse {
  export type AsObject = {
    price: number,
  }
}

export class BuyProductRequest extends jspb.Message {
  getId(): number;
  setId(value: number): BuyProductRequest;

  getName(): string;
  setName(value: string): BuyProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuyProductRequest): BuyProductRequest.AsObject;
  static serializeBinaryToWriter(message: BuyProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyProductRequest;
  static deserializeBinaryFromReader(message: BuyProductRequest, reader: jspb.BinaryReader): BuyProductRequest;
}

export namespace BuyProductRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class BuyProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuyProductResponse): BuyProductResponse.AsObject;
  static serializeBinaryToWriter(message: BuyProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyProductResponse;
  static deserializeBinaryFromReader(message: BuyProductResponse, reader: jspb.BinaryReader): BuyProductResponse;
}

export namespace BuyProductResponse {
  export type AsObject = {
  }
}

export class WatchProductRequest extends jspb.Message {
  getId(): number;
  setId(value: number): WatchProductRequest;

  getName(): string;
  setName(value: string): WatchProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchProductRequest): WatchProductRequest.AsObject;
  static serializeBinaryToWriter(message: WatchProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchProductRequest;
  static deserializeBinaryFromReader(message: WatchProductRequest, reader: jspb.BinaryReader): WatchProductRequest;
}

export namespace WatchProductRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class WatchProductResponse extends jspb.Message {
  getEvent(): WatchProductResponse.ProductEvent;
  setEvent(value: WatchProductResponse.ProductEvent): WatchProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchProductResponse): WatchProductResponse.AsObject;
  static serializeBinaryToWriter(message: WatchProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchProductResponse;
  static deserializeBinaryFromReader(message: WatchProductResponse, reader: jspb.BinaryReader): WatchProductResponse;
}

export namespace WatchProductResponse {
  export type AsObject = {
    event: WatchProductResponse.ProductEvent,
  }

  export enum ProductEvent { 
    UNKNOWN = 0,
    PRICE_CHANGED = 1,
    PRODUCT_BOUGHT = 2,
    PRODUCT_INFO_UPDATED = 3,
    PRODUCT_DELETED = 4,
  }
}

export class WatchPriceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): WatchPriceRequest;

  getName(): string;
  setName(value: string): WatchPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPriceRequest): WatchPriceRequest.AsObject;
  static serializeBinaryToWriter(message: WatchPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPriceRequest;
  static deserializeBinaryFromReader(message: WatchPriceRequest, reader: jspb.BinaryReader): WatchPriceRequest;
}

export namespace WatchPriceRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class WatchPriceResponse extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): WatchPriceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPriceResponse): WatchPriceResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPriceResponse;
  static deserializeBinaryFromReader(message: WatchPriceResponse, reader: jspb.BinaryReader): WatchPriceResponse;
}

export namespace WatchPriceResponse {
  export type AsObject = {
    price: number,
  }
}

