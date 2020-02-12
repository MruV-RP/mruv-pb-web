import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PreferredContentTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferredContentTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PreferredContentTypeEnum): PreferredContentTypeEnum.AsObject;
  static serializeBinaryToWriter(message: PreferredContentTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferredContentTypeEnum;
  static deserializeBinaryFromReader(message: PreferredContentTypeEnum, reader: jspb.BinaryReader): PreferredContentTypeEnum;
}

export namespace PreferredContentTypeEnum {
  export type AsObject = {
  }

  export enum PreferredContentType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    YOUTUBE_TOP_CONTENT = 400,
  }
}

