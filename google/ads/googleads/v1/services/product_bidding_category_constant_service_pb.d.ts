import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_product_bidding_category_constant_pb from '../../../../../google/ads/googleads/v1/resources/product_bidding_category_constant_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetProductBiddingCategoryConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductBiddingCategoryConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductBiddingCategoryConstantRequest): GetProductBiddingCategoryConstantRequest.AsObject;
  static serializeBinaryToWriter(message: GetProductBiddingCategoryConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductBiddingCategoryConstantRequest;
  static deserializeBinaryFromReader(message: GetProductBiddingCategoryConstantRequest, reader: jspb.BinaryReader): GetProductBiddingCategoryConstantRequest;
}

export namespace GetProductBiddingCategoryConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

