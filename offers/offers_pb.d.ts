import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';

export class CreateOfferRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOffer(): string;
  setOffer(value: string): void;

  getEndDate(): number;
  setEndDate(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getOfferType(): OfferType;
  setOfferType(value: OfferType): void;

  getOfferEntityId(): number;
  setOfferEntityId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfferRequest): CreateOfferRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfferRequest;
  static deserializeBinaryFromReader(message: CreateOfferRequest, reader: jspb.BinaryReader): CreateOfferRequest;
}

export namespace CreateOfferRequest {
  export type AsObject = {
    name: string,
    description: string,
    offer: string,
    endDate: number,
    price: number,
    offerType: OfferType,
    offerEntityId: number,
  }
}

export class CreateOfferResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfferResponse): CreateOfferResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfferResponse;
  static deserializeBinaryFromReader(message: CreateOfferResponse, reader: jspb.BinaryReader): CreateOfferResponse;
}

export namespace CreateOfferResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetOfferRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOfferRequest): GetOfferRequest.AsObject;
  static serializeBinaryToWriter(message: GetOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOfferRequest;
  static deserializeBinaryFromReader(message: GetOfferRequest, reader: jspb.BinaryReader): GetOfferRequest;
}

export namespace GetOfferRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetOfferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOfferResponse): GetOfferResponse.AsObject;
  static serializeBinaryToWriter(message: GetOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOfferResponse;
  static deserializeBinaryFromReader(message: GetOfferResponse, reader: jspb.BinaryReader): GetOfferResponse;
}

export namespace GetOfferResponse {
  export type AsObject = {
  }
}

export class UpdateOfferRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOfferRequest): UpdateOfferRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOfferRequest;
  static deserializeBinaryFromReader(message: UpdateOfferRequest, reader: jspb.BinaryReader): UpdateOfferRequest;
}

export namespace UpdateOfferRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateOfferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOfferResponse): UpdateOfferResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOfferResponse;
  static deserializeBinaryFromReader(message: UpdateOfferResponse, reader: jspb.BinaryReader): UpdateOfferResponse;
}

export namespace UpdateOfferResponse {
  export type AsObject = {
  }
}

export class DeleteOfferRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOfferRequest): DeleteOfferRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOfferRequest;
  static deserializeBinaryFromReader(message: DeleteOfferRequest, reader: jspb.BinaryReader): DeleteOfferRequest;
}

export namespace DeleteOfferRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteOfferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOfferResponse): DeleteOfferResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOfferResponse;
  static deserializeBinaryFromReader(message: DeleteOfferResponse, reader: jspb.BinaryReader): DeleteOfferResponse;
}

export namespace DeleteOfferResponse {
  export type AsObject = {
  }
}

export class AcceptOfferRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptOfferRequest): AcceptOfferRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptOfferRequest;
  static deserializeBinaryFromReader(message: AcceptOfferRequest, reader: jspb.BinaryReader): AcceptOfferRequest;
}

export namespace AcceptOfferRequest {
  export type AsObject = {
    id: number,
  }
}

export class AcceptOfferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptOfferResponse): AcceptOfferResponse.AsObject;
  static serializeBinaryToWriter(message: AcceptOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptOfferResponse;
  static deserializeBinaryFromReader(message: AcceptOfferResponse, reader: jspb.BinaryReader): AcceptOfferResponse;
}

export namespace AcceptOfferResponse {
  export type AsObject = {
  }
}

export enum OfferType { 
  UNKNOWN = 0,
}
