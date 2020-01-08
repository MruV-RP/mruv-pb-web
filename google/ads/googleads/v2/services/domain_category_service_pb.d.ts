import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_domain_category_pb from '../../../../../google/ads/googleads/v2/resources/domain_category_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetDomainCategoryRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDomainCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDomainCategoryRequest): GetDomainCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetDomainCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDomainCategoryRequest;
  static deserializeBinaryFromReader(message: GetDomainCategoryRequest, reader: jspb.BinaryReader): GetDomainCategoryRequest;
}

export namespace GetDomainCategoryRequest {
  export type AsObject = {
    resourceName: string,
  }
}

