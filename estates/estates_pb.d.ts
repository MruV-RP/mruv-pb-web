import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as objects_objects_pb from '../objects/objects_pb';
import * as entrances_entrances_pb from '../entrances/entrances_pb';
import * as gates_gates_pb from '../gates/gates_pb';

export class Estate extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEntrancesList(): Array<number>;
  setEntrancesList(value: Array<number>): void;
  clearEntrancesList(): void;
  addEntrances(value: number, index?: number): void;

  getGatesList(): Array<number>;
  setGatesList(value: Array<number>): void;
  clearGatesList(): void;
  addGates(value: number, index?: number): void;

  getRoomsList(): Array<number>;
  setRoomsList(value: Array<number>): void;
  clearRoomsList(): void;
  addRooms(value: number, index?: number): void;

  getProductId(): number;
  setProductId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Estate.AsObject;
  static toObject(includeInstance: boolean, msg: Estate): Estate.AsObject;
  static serializeBinaryToWriter(message: Estate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Estate;
  static deserializeBinaryFromReader(message: Estate, reader: jspb.BinaryReader): Estate;
}

export namespace Estate {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    entrancesList: Array<number>,
    gatesList: Array<number>,
    roomsList: Array<number>,
    productId: number,
  }
}

export class FullEstate extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getObjectsMap(): jspb.Map<number, objects_objects_pb.Object>;
  clearObjectsMap(): void;

  getRemovedBuildingsMap(): jspb.Map<number, objects_objects_pb.RemovedBuilding>;
  clearRemovedBuildingsMap(): void;

  getEntrancesMap(): jspb.Map<number, entrances_entrances_pb.Entrance>;
  clearEntrancesMap(): void;

  getGatesMap(): jspb.Map<number, gates_gates_pb.Gate>;
  clearGatesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullEstate.AsObject;
  static toObject(includeInstance: boolean, msg: FullEstate): FullEstate.AsObject;
  static serializeBinaryToWriter(message: FullEstate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullEstate;
  static deserializeBinaryFromReader(message: FullEstate, reader: jspb.BinaryReader): FullEstate;
}

export namespace FullEstate {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    objectsMap: Array<[number, objects_objects_pb.Object.AsObject]>,
    removedBuildingsMap: Array<[number, objects_objects_pb.RemovedBuilding.AsObject]>,
    entrancesMap: Array<[number, entrances_entrances_pb.Entrance.AsObject]>,
    gatesMap: Array<[number, gates_gates_pb.Gate.AsObject]>,
  }
}

export class CreateEstateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEstateRequest): CreateEstateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEstateRequest;
  static deserializeBinaryFromReader(message: CreateEstateRequest, reader: jspb.BinaryReader): CreateEstateRequest;
}

export namespace CreateEstateRequest {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class CreateEstateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEstateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEstateResponse): CreateEstateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEstateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEstateResponse;
  static deserializeBinaryFromReader(message: CreateEstateResponse, reader: jspb.BinaryReader): CreateEstateResponse;
}

export namespace CreateEstateResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetEstateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstateRequest): GetEstateRequest.AsObject;
  static serializeBinaryToWriter(message: GetEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstateRequest;
  static deserializeBinaryFromReader(message: GetEstateRequest, reader: jspb.BinaryReader): GetEstateRequest;
}

export namespace GetEstateRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateEstateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEstateRequest): UpdateEstateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEstateRequest;
  static deserializeBinaryFromReader(message: UpdateEstateRequest, reader: jspb.BinaryReader): UpdateEstateRequest;
}

export namespace UpdateEstateRequest {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
  }
}

export class UpdateEstateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEstateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEstateResponse): UpdateEstateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEstateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEstateResponse;
  static deserializeBinaryFromReader(message: UpdateEstateResponse, reader: jspb.BinaryReader): UpdateEstateResponse;
}

export namespace UpdateEstateResponse {
  export type AsObject = {
  }
}

export class DeleteEstateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEstateRequest): DeleteEstateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEstateRequest;
  static deserializeBinaryFromReader(message: DeleteEstateRequest, reader: jspb.BinaryReader): DeleteEstateRequest;
}

export namespace DeleteEstateRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteEstateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEstateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEstateResponse): DeleteEstateResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEstateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEstateResponse;
  static deserializeBinaryFromReader(message: DeleteEstateResponse, reader: jspb.BinaryReader): DeleteEstateResponse;
}

export namespace DeleteEstateResponse {
  export type AsObject = {
  }
}

export class GetEstatesRequest extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstatesRequest): GetEstatesRequest.AsObject;
  static serializeBinaryToWriter(message: GetEstatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstatesRequest;
  static deserializeBinaryFromReader(message: GetEstatesRequest, reader: jspb.BinaryReader): GetEstatesRequest;
}

export namespace GetEstatesRequest {
  export type AsObject = {
    from: number,
    limit: number,
  }
}

export class GetEstatesResponse extends jspb.Message {
  getEstatesList(): Array<Estate>;
  setEstatesList(value: Array<Estate>): void;
  clearEstatesList(): void;
  addEstates(value?: Estate, index?: number): Estate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstatesResponse): GetEstatesResponse.AsObject;
  static serializeBinaryToWriter(message: GetEstatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstatesResponse;
  static deserializeBinaryFromReader(message: GetEstatesResponse, reader: jspb.BinaryReader): GetEstatesResponse;
}

export namespace GetEstatesResponse {
  export type AsObject = {
    estatesList: Array<Estate.AsObject>,
  }
}

export class AddGateRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  getGateId(): number;
  setGateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGateRequest): AddGateRequest.AsObject;
  static serializeBinaryToWriter(message: AddGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGateRequest;
  static deserializeBinaryFromReader(message: AddGateRequest, reader: jspb.BinaryReader): AddGateRequest;
}

export namespace AddGateRequest {
  export type AsObject = {
    estateId: number,
    gateId: number,
  }
}

export class AddGateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGateResponse): AddGateResponse.AsObject;
  static serializeBinaryToWriter(message: AddGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGateResponse;
  static deserializeBinaryFromReader(message: AddGateResponse, reader: jspb.BinaryReader): AddGateResponse;
}

export namespace AddGateResponse {
  export type AsObject = {
  }
}

export class RemoveGateRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  getGateId(): number;
  setGateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGateRequest): RemoveGateRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGateRequest;
  static deserializeBinaryFromReader(message: RemoveGateRequest, reader: jspb.BinaryReader): RemoveGateRequest;
}

export namespace RemoveGateRequest {
  export type AsObject = {
    estateId: number,
    gateId: number,
  }
}

export class RemoveGateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGateResponse): RemoveGateResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGateResponse;
  static deserializeBinaryFromReader(message: RemoveGateResponse, reader: jspb.BinaryReader): RemoveGateResponse;
}

export namespace RemoveGateResponse {
  export type AsObject = {
  }
}

export class GetEstateGatesRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstateGatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstateGatesRequest): GetEstateGatesRequest.AsObject;
  static serializeBinaryToWriter(message: GetEstateGatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstateGatesRequest;
  static deserializeBinaryFromReader(message: GetEstateGatesRequest, reader: jspb.BinaryReader): GetEstateGatesRequest;
}

export namespace GetEstateGatesRequest {
  export type AsObject = {
    estateId: number,
  }
}

export class GetEstateGatesResponse extends jspb.Message {
  getGatesList(): Array<gates_gates_pb.Gate>;
  setGatesList(value: Array<gates_gates_pb.Gate>): void;
  clearGatesList(): void;
  addGates(value?: gates_gates_pb.Gate, index?: number): gates_gates_pb.Gate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstateGatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstateGatesResponse): GetEstateGatesResponse.AsObject;
  static serializeBinaryToWriter(message: GetEstateGatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstateGatesResponse;
  static deserializeBinaryFromReader(message: GetEstateGatesResponse, reader: jspb.BinaryReader): GetEstateGatesResponse;
}

export namespace GetEstateGatesResponse {
  export type AsObject = {
    gatesList: Array<gates_gates_pb.Gate.AsObject>,
  }
}

export class AddEntranceRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  getEntranceId(): number;
  setEntranceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddEntranceRequest): AddEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: AddEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddEntranceRequest;
  static deserializeBinaryFromReader(message: AddEntranceRequest, reader: jspb.BinaryReader): AddEntranceRequest;
}

export namespace AddEntranceRequest {
  export type AsObject = {
    estateId: number,
    entranceId: number,
  }
}

export class AddEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddEntranceResponse): AddEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: AddEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddEntranceResponse;
  static deserializeBinaryFromReader(message: AddEntranceResponse, reader: jspb.BinaryReader): AddEntranceResponse;
}

export namespace AddEntranceResponse {
  export type AsObject = {
  }
}

export class RemoveEntranceRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  getEntranceId(): number;
  setEntranceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveEntranceRequest): RemoveEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveEntranceRequest;
  static deserializeBinaryFromReader(message: RemoveEntranceRequest, reader: jspb.BinaryReader): RemoveEntranceRequest;
}

export namespace RemoveEntranceRequest {
  export type AsObject = {
    estateId: number,
    entranceId: number,
  }
}

export class RemoveEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveEntranceResponse): RemoveEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveEntranceResponse;
  static deserializeBinaryFromReader(message: RemoveEntranceResponse, reader: jspb.BinaryReader): RemoveEntranceResponse;
}

export namespace RemoveEntranceResponse {
  export type AsObject = {
  }
}

export class GetEstateEntrancesRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstateEntrancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstateEntrancesRequest): GetEstateEntrancesRequest.AsObject;
  static serializeBinaryToWriter(message: GetEstateEntrancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstateEntrancesRequest;
  static deserializeBinaryFromReader(message: GetEstateEntrancesRequest, reader: jspb.BinaryReader): GetEstateEntrancesRequest;
}

export namespace GetEstateEntrancesRequest {
  export type AsObject = {
    estateId: number,
  }
}

export class GetEstateEntrancesResponse extends jspb.Message {
  getEntrancesList(): Array<entrances_entrances_pb.Entrance>;
  setEntrancesList(value: Array<entrances_entrances_pb.Entrance>): void;
  clearEntrancesList(): void;
  addEntrances(value?: entrances_entrances_pb.Entrance, index?: number): entrances_entrances_pb.Entrance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstateEntrancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstateEntrancesResponse): GetEstateEntrancesResponse.AsObject;
  static serializeBinaryToWriter(message: GetEstateEntrancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstateEntrancesResponse;
  static deserializeBinaryFromReader(message: GetEstateEntrancesResponse, reader: jspb.BinaryReader): GetEstateEntrancesResponse;
}

export namespace GetEstateEntrancesResponse {
  export type AsObject = {
    entrancesList: Array<entrances_entrances_pb.Entrance.AsObject>,
  }
}

export class FetchAllEstatesRequest extends jspb.Message {
  getChunkSize(): number;
  setChunkSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllEstatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllEstatesRequest): FetchAllEstatesRequest.AsObject;
  static serializeBinaryToWriter(message: FetchAllEstatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllEstatesRequest;
  static deserializeBinaryFromReader(message: FetchAllEstatesRequest, reader: jspb.BinaryReader): FetchAllEstatesRequest;
}

export namespace FetchAllEstatesRequest {
  export type AsObject = {
    chunkSize: number,
  }
}

export class FetchAllEstatesResponse extends jspb.Message {
  getEstatesList(): Array<FullEstate>;
  setEstatesList(value: Array<FullEstate>): void;
  clearEstatesList(): void;
  addEstates(value?: FullEstate, index?: number): FullEstate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllEstatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllEstatesResponse): FetchAllEstatesResponse.AsObject;
  static serializeBinaryToWriter(message: FetchAllEstatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllEstatesResponse;
  static deserializeBinaryFromReader(message: FetchAllEstatesResponse, reader: jspb.BinaryReader): FetchAllEstatesResponse;
}

export namespace FetchAllEstatesResponse {
  export type AsObject = {
    estatesList: Array<FullEstate.AsObject>,
  }
}

