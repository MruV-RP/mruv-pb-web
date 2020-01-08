import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_httpbody_pb from '../../../../google/api/httpbody_pb';

export class PredictRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getHttpBody(): google_api_httpbody_pb.HttpBody | undefined;
  setHttpBody(value?: google_api_httpbody_pb.HttpBody): void;
  hasHttpBody(): boolean;
  clearHttpBody(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    name: string,
    httpBody?: google_api_httpbody_pb.HttpBody.AsObject,
  }
}

