import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_operating_system_version_operator_type_pb from '../../../../../google/ads/googleads/v2/enums/operating_system_version_operator_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class OperatingSystemVersionConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getOsMajorVersion(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOsMajorVersion(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasOsMajorVersion(): boolean;
  clearOsMajorVersion(): void;

  getOsMinorVersion(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOsMinorVersion(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasOsMinorVersion(): boolean;
  clearOsMinorVersion(): void;

  getOperatorType(): google_ads_googleads_v2_enums_operating_system_version_operator_type_pb.OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType;
  setOperatorType(value: google_ads_googleads_v2_enums_operating_system_version_operator_type_pb.OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemVersionConstant.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemVersionConstant): OperatingSystemVersionConstant.AsObject;
  static serializeBinaryToWriter(message: OperatingSystemVersionConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemVersionConstant;
  static deserializeBinaryFromReader(message: OperatingSystemVersionConstant, reader: jspb.BinaryReader): OperatingSystemVersionConstant;
}

export namespace OperatingSystemVersionConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    osMajorVersion?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    osMinorVersion?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    operatorType: google_ads_googleads_v2_enums_operating_system_version_operator_type_pb.OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType,
  }
}

