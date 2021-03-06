import * as jspb from 'google-protobuf'



export class ServiceStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusRequest): ServiceStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusRequest;
  static deserializeBinaryFromReader(message: ServiceStatusRequest, reader: jspb.BinaryReader): ServiceStatusRequest;
}

export namespace ServiceStatusRequest {
  export type AsObject = {
  }
}

export class ServiceStatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ServiceStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusResponse): ServiceStatusResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusResponse;
  static deserializeBinaryFromReader(message: ServiceStatusResponse, reader: jspb.BinaryReader): ServiceStatusResponse;
}

export namespace ServiceStatusResponse {
  export type AsObject = {
    status: string,
  }
}

export class VersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
  }
}

export class VersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): VersionResponse;

  getBuildDate(): string;
  setBuildDate(value: string): VersionResponse;

  getCommit(): string;
  setCommit(value: string): VersionResponse;

  getOsArch(): string;
  setOsArch(value: string): VersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    version: string,
    buildDate: string,
    commit: string,
    osArch: string,
  }
}

