import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_spatial_pb from '../common/spatial_pb';

export class Plot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPointsList(): Array<common_spatial_pb.Position>;
  setPointsList(value: Array<common_spatial_pb.Position>): void;
  clearPointsList(): void;
  addPoints(value?: common_spatial_pb.Position, index?: number): common_spatial_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plot.AsObject;
  static toObject(includeInstance: boolean, msg: Plot): Plot.AsObject;
  static serializeBinaryToWriter(message: Plot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plot;
  static deserializeBinaryFromReader(message: Plot, reader: jspb.BinaryReader): Plot;
}

export namespace Plot {
  export type AsObject = {
    name: string,
    description: string,
    pointsList: Array<common_spatial_pb.Position.AsObject>,
  }
}

export class CreatePlotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPointsList(): Array<common_spatial_pb.Position>;
  setPointsList(value: Array<common_spatial_pb.Position>): void;
  clearPointsList(): void;
  addPoints(value?: common_spatial_pb.Position, index?: number): common_spatial_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlotRequest): CreatePlotRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlotRequest;
  static deserializeBinaryFromReader(message: CreatePlotRequest, reader: jspb.BinaryReader): CreatePlotRequest;
}

export namespace CreatePlotRequest {
  export type AsObject = {
    name: string,
    description: string,
    pointsList: Array<common_spatial_pb.Position.AsObject>,
  }
}

export class CreatePlotResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlotResponse): CreatePlotResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlotResponse;
  static deserializeBinaryFromReader(message: CreatePlotResponse, reader: jspb.BinaryReader): CreatePlotResponse;
}

export namespace CreatePlotResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetPlotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlotRequest): GetPlotRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlotRequest;
  static deserializeBinaryFromReader(message: GetPlotRequest, reader: jspb.BinaryReader): GetPlotRequest;
}

export namespace GetPlotRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPlotResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPointsList(): Array<common_spatial_pb.Position>;
  setPointsList(value: Array<common_spatial_pb.Position>): void;
  clearPointsList(): void;
  addPoints(value?: common_spatial_pb.Position, index?: number): common_spatial_pb.Position;

  getArea(): number;
  setArea(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlotResponse): GetPlotResponse.AsObject;
  static serializeBinaryToWriter(message: GetPlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlotResponse;
  static deserializeBinaryFromReader(message: GetPlotResponse, reader: jspb.BinaryReader): GetPlotResponse;
}

export namespace GetPlotResponse {
  export type AsObject = {
    name: string,
    description: string,
    pointsList: Array<common_spatial_pb.Position.AsObject>,
    area: number,
  }
}

export class UpdatePlotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlotRequest): UpdatePlotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlotRequest;
  static deserializeBinaryFromReader(message: UpdatePlotRequest, reader: jspb.BinaryReader): UpdatePlotRequest;
}

export namespace UpdatePlotRequest {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
  }
}

export class UpdatePlotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlotResponse): UpdatePlotResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlotResponse;
  static deserializeBinaryFromReader(message: UpdatePlotResponse, reader: jspb.BinaryReader): UpdatePlotResponse;
}

export namespace UpdatePlotResponse {
  export type AsObject = {
  }
}

export class DeletePlotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlotRequest): DeletePlotRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlotRequest;
  static deserializeBinaryFromReader(message: DeletePlotRequest, reader: jspb.BinaryReader): DeletePlotRequest;
}

export namespace DeletePlotRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeletePlotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlotResponse): DeletePlotResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlotResponse;
  static deserializeBinaryFromReader(message: DeletePlotResponse, reader: jspb.BinaryReader): DeletePlotResponse;
}

export namespace DeletePlotResponse {
  export type AsObject = {
  }
}

