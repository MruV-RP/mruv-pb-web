import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CountryCodeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryCodeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CountryCodeErrorEnum): CountryCodeErrorEnum.AsObject;
  static serializeBinaryToWriter(message: CountryCodeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryCodeErrorEnum;
  static deserializeBinaryFromReader(message: CountryCodeErrorEnum, reader: jspb.BinaryReader): CountryCodeErrorEnum;
}

export namespace CountryCodeErrorEnum {
  export type AsObject = {
  }

  export enum CountryCodeError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_COUNTRY_CODE = 2,
  }
}

