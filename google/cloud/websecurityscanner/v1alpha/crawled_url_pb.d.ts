import * as jspb from "google-protobuf"

export class CrawledUrl extends jspb.Message {
  getHttpMethod(): string;
  setHttpMethod(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawledUrl.AsObject;
  static toObject(includeInstance: boolean, msg: CrawledUrl): CrawledUrl.AsObject;
  static serializeBinaryToWriter(message: CrawledUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawledUrl;
  static deserializeBinaryFromReader(message: CrawledUrl, reader: jspb.BinaryReader): CrawledUrl;
}

export namespace CrawledUrl {
  export type AsObject = {
    httpMethod: string,
    url: string,
    body: string,
  }
}

