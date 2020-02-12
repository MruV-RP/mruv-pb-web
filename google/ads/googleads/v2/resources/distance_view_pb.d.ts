import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_distance_bucket_pb from '../../../../../google/ads/googleads/v2/enums/distance_bucket_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DistanceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getDistanceBucket(): google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket;
  setDistanceBucket(value: google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket): void;

  getMetricSystem(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setMetricSystem(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasMetricSystem(): boolean;
  clearMetricSystem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistanceView.AsObject;
  static toObject(includeInstance: boolean, msg: DistanceView): DistanceView.AsObject;
  static serializeBinaryToWriter(message: DistanceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistanceView;
  static deserializeBinaryFromReader(message: DistanceView, reader: jspb.BinaryReader): DistanceView;
}

export namespace DistanceView {
  export type AsObject = {
    resourceName: string,
    distanceBucket: google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket,
    metricSystem?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

