import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_mobile_app_category_constant_pb from '../../../../../google/ads/googleads/v1/resources/mobile_app_category_constant_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetMobileAppCategoryConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMobileAppCategoryConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMobileAppCategoryConstantRequest): GetMobileAppCategoryConstantRequest.AsObject;
  static serializeBinaryToWriter(message: GetMobileAppCategoryConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMobileAppCategoryConstantRequest;
  static deserializeBinaryFromReader(message: GetMobileAppCategoryConstantRequest, reader: jspb.BinaryReader): GetMobileAppCategoryConstantRequest;
}

export namespace GetMobileAppCategoryConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

