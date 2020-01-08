import * as jspb from "google-protobuf"

export class Endpoint extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): void;
  clearAliasesList(): void;
  addAliases(value: string, index?: number): void;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): void;
  clearFeaturesList(): void;
  addFeatures(value: string, index?: number): void;

  getTarget(): string;
  setTarget(value: string): void;

  getAllowCors(): boolean;
  setAllowCors(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
  export type AsObject = {
    name: string,
    aliasesList: Array<string>,
    featuresList: Array<string>,
    target: string,
    allowCors: boolean,
  }
}

