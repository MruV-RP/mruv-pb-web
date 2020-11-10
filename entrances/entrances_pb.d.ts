import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as spots_spots_pb from '../spots/spots_pb';


export class Entrance extends jspb.Message {
  getName(): string;
  setName(value: string): Entrance;

  getOut(): spots_spots_pb.Spot | undefined;
  setOut(value?: spots_spots_pb.Spot): Entrance;
  hasOut(): boolean;
  clearOut(): Entrance;

  getIn(): spots_spots_pb.Spot | undefined;
  setIn(value?: spots_spots_pb.Spot): Entrance;
  hasIn(): boolean;
  clearIn(): Entrance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entrance.AsObject;
  static toObject(includeInstance: boolean, msg: Entrance): Entrance.AsObject;
  static serializeBinaryToWriter(message: Entrance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entrance;
  static deserializeBinaryFromReader(message: Entrance, reader: jspb.BinaryReader): Entrance;
}

export namespace Entrance {
  export type AsObject = {
    name: string,
    out?: spots_spots_pb.Spot.AsObject,
    pb_in?: spots_spots_pb.Spot.AsObject,
  }
}

export class CreateEntranceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateEntranceRequest;

  getOut(): spots_spots_pb.Spot | undefined;
  setOut(value?: spots_spots_pb.Spot): CreateEntranceRequest;
  hasOut(): boolean;
  clearOut(): CreateEntranceRequest;

  getIn(): spots_spots_pb.Spot | undefined;
  setIn(value?: spots_spots_pb.Spot): CreateEntranceRequest;
  hasIn(): boolean;
  clearIn(): CreateEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntranceRequest): CreateEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntranceRequest;
  static deserializeBinaryFromReader(message: CreateEntranceRequest, reader: jspb.BinaryReader): CreateEntranceRequest;
}

export namespace CreateEntranceRequest {
  export type AsObject = {
    name: string,
    out?: spots_spots_pb.Spot.AsObject,
    pb_in?: spots_spots_pb.Spot.AsObject,
  }
}

export class CreateEntranceResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateEntranceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntranceResponse): CreateEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntranceResponse;
  static deserializeBinaryFromReader(message: CreateEntranceResponse, reader: jspb.BinaryReader): CreateEntranceResponse;
}

export namespace CreateEntranceResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntranceRequest): GetEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: GetEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntranceRequest;
  static deserializeBinaryFromReader(message: GetEntranceRequest, reader: jspb.BinaryReader): GetEntranceRequest;
}

export namespace GetEntranceRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetEntranceResponse extends jspb.Message {
  getName(): string;
  setName(value: string): GetEntranceResponse;

  getInSpot(): spots_spots_pb.Spot | undefined;
  setInSpot(value?: spots_spots_pb.Spot): GetEntranceResponse;
  hasInSpot(): boolean;
  clearInSpot(): GetEntranceResponse;

  getOutSpot(): spots_spots_pb.Spot | undefined;
  setOutSpot(value?: spots_spots_pb.Spot): GetEntranceResponse;
  hasOutSpot(): boolean;
  clearOutSpot(): GetEntranceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntranceResponse): GetEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: GetEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntranceResponse;
  static deserializeBinaryFromReader(message: GetEntranceResponse, reader: jspb.BinaryReader): GetEntranceResponse;
}

export namespace GetEntranceResponse {
  export type AsObject = {
    name: string,
    inSpot?: spots_spots_pb.Spot.AsObject,
    outSpot?: spots_spots_pb.Spot.AsObject,
  }
}

export class UpdateEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateEntranceRequest;

  getInSpotId(): number;
  setInSpotId(value: number): UpdateEntranceRequest;

  getOutSpotId(): number;
  setOutSpotId(value: number): UpdateEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntranceRequest): UpdateEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntranceRequest;
  static deserializeBinaryFromReader(message: UpdateEntranceRequest, reader: jspb.BinaryReader): UpdateEntranceRequest;
}

export namespace UpdateEntranceRequest {
  export type AsObject = {
    id: number,
    inSpotId: number,
    outSpotId: number,
  }
}

export class UpdateEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntranceResponse): UpdateEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntranceResponse;
  static deserializeBinaryFromReader(message: UpdateEntranceResponse, reader: jspb.BinaryReader): UpdateEntranceResponse;
}

export namespace UpdateEntranceResponse {
  export type AsObject = {
  }
}

export class DeleteEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntranceRequest): DeleteEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntranceRequest;
  static deserializeBinaryFromReader(message: DeleteEntranceRequest, reader: jspb.BinaryReader): DeleteEntranceRequest;
}

export namespace DeleteEntranceRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntranceResponse): DeleteEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntranceResponse;
  static deserializeBinaryFromReader(message: DeleteEntranceResponse, reader: jspb.BinaryReader): DeleteEntranceResponse;
}

export namespace DeleteEntranceResponse {
  export type AsObject = {
  }
}

export class LockRequest extends jspb.Message {
  getId(): number;
  setId(value: number): LockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LockRequest): LockRequest.AsObject;
  static serializeBinaryToWriter(message: LockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockRequest;
  static deserializeBinaryFromReader(message: LockRequest, reader: jspb.BinaryReader): LockRequest;
}

export namespace LockRequest {
  export type AsObject = {
    id: number,
  }
}

export class LockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LockResponse): LockResponse.AsObject;
  static serializeBinaryToWriter(message: LockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockResponse;
  static deserializeBinaryFromReader(message: LockResponse, reader: jspb.BinaryReader): LockResponse;
}

export namespace LockResponse {
  export type AsObject = {
  }
}

export class UnlockRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UnlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockRequest): UnlockRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockRequest;
  static deserializeBinaryFromReader(message: UnlockRequest, reader: jspb.BinaryReader): UnlockRequest;
}

export namespace UnlockRequest {
  export type AsObject = {
    id: number,
  }
}

export class UnlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockResponse): UnlockResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockResponse;
  static deserializeBinaryFromReader(message: UnlockResponse, reader: jspb.BinaryReader): UnlockResponse;
}

export namespace UnlockResponse {
  export type AsObject = {
  }
}

export class FindNearestEntranceRequest extends jspb.Message {
  getX(): number;
  setX(value: number): FindNearestEntranceRequest;

  getY(): number;
  setY(value: number): FindNearestEntranceRequest;

  getZ(): number;
  setZ(value: number): FindNearestEntranceRequest;

  getMaxDistance(): number;
  setMaxDistance(value: number): FindNearestEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestEntranceRequest): FindNearestEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: FindNearestEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestEntranceRequest;
  static deserializeBinaryFromReader(message: FindNearestEntranceRequest, reader: jspb.BinaryReader): FindNearestEntranceRequest;
}

export namespace FindNearestEntranceRequest {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    maxDistance: number,
  }
}

export class FindNearestEntranceResponse extends jspb.Message {
  getId(): number;
  setId(value: number): FindNearestEntranceResponse;

  getDistance(): number;
  setDistance(value: number): FindNearestEntranceResponse;

  getInside(): boolean;
  setInside(value: boolean): FindNearestEntranceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestEntranceResponse): FindNearestEntranceResponse.AsObject;
  static serializeBinaryToWriter(message: FindNearestEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestEntranceResponse;
  static deserializeBinaryFromReader(message: FindNearestEntranceResponse, reader: jspb.BinaryReader): FindNearestEntranceResponse;
}

export namespace FindNearestEntranceResponse {
  export type AsObject = {
    id: number,
    distance: number,
    inside: boolean,
  }
}

export class EnterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): EnterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnterRequest): EnterRequest.AsObject;
  static serializeBinaryToWriter(message: EnterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterRequest;
  static deserializeBinaryFromReader(message: EnterRequest, reader: jspb.BinaryReader): EnterRequest;
}

export namespace EnterRequest {
  export type AsObject = {
    id: number,
  }
}

export class EnterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnterResponse): EnterResponse.AsObject;
  static serializeBinaryToWriter(message: EnterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterResponse;
  static deserializeBinaryFromReader(message: EnterResponse, reader: jspb.BinaryReader): EnterResponse;
}

export namespace EnterResponse {
  export type AsObject = {
  }
}

export class ExitRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ExitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExitRequest): ExitRequest.AsObject;
  static serializeBinaryToWriter(message: ExitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitRequest;
  static deserializeBinaryFromReader(message: ExitRequest, reader: jspb.BinaryReader): ExitRequest;
}

export namespace ExitRequest {
  export type AsObject = {
    id: number,
  }
}

export class ExitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExitResponse): ExitResponse.AsObject;
  static serializeBinaryToWriter(message: ExitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitResponse;
  static deserializeBinaryFromReader(message: ExitResponse, reader: jspb.BinaryReader): ExitResponse;
}

export namespace ExitResponse {
  export type AsObject = {
  }
}

export class FetchAllEntrancesRequest extends jspb.Message {
  getChunkSize(): number;
  setChunkSize(value: number): FetchAllEntrancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllEntrancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllEntrancesRequest): FetchAllEntrancesRequest.AsObject;
  static serializeBinaryToWriter(message: FetchAllEntrancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllEntrancesRequest;
  static deserializeBinaryFromReader(message: FetchAllEntrancesRequest, reader: jspb.BinaryReader): FetchAllEntrancesRequest;
}

export namespace FetchAllEntrancesRequest {
  export type AsObject = {
    chunkSize: number,
  }
}

export class FetchAllEntrancesResponse extends jspb.Message {
  getEntrancesMap(): jspb.Map<number, Entrance>;
  clearEntrancesMap(): FetchAllEntrancesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllEntrancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllEntrancesResponse): FetchAllEntrancesResponse.AsObject;
  static serializeBinaryToWriter(message: FetchAllEntrancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllEntrancesResponse;
  static deserializeBinaryFromReader(message: FetchAllEntrancesResponse, reader: jspb.BinaryReader): FetchAllEntrancesResponse;
}

export namespace FetchAllEntrancesResponse {
  export type AsObject = {
    entrancesMap: Array<[number, Entrance.AsObject]>,
  }
}

