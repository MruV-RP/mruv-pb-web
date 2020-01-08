import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_custom_interest_member_type_pb from '../../../../../google/ads/googleads/v1/enums/custom_interest_member_type_pb';
import * as google_ads_googleads_v1_enums_custom_interest_status_pb from '../../../../../google/ads/googleads/v1/enums/custom_interest_status_pb';
import * as google_ads_googleads_v1_enums_custom_interest_type_pb from '../../../../../google/ads/googleads/v1/enums/custom_interest_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CustomInterest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getStatus(): google_ads_googleads_v1_enums_custom_interest_status_pb.CustomInterestStatusEnum.CustomInterestStatus;
  setStatus(value: google_ads_googleads_v1_enums_custom_interest_status_pb.CustomInterestStatusEnum.CustomInterestStatus): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getType(): google_ads_googleads_v1_enums_custom_interest_type_pb.CustomInterestTypeEnum.CustomInterestType;
  setType(value: google_ads_googleads_v1_enums_custom_interest_type_pb.CustomInterestTypeEnum.CustomInterestType): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getMembersList(): Array<CustomInterestMember>;
  setMembersList(value: Array<CustomInterestMember>): void;
  clearMembersList(): void;
  addMembers(value?: CustomInterestMember, index?: number): CustomInterestMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterest): CustomInterest.AsObject;
  static serializeBinaryToWriter(message: CustomInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterest;
  static deserializeBinaryFromReader(message: CustomInterest, reader: jspb.BinaryReader): CustomInterest;
}

export namespace CustomInterest {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v1_enums_custom_interest_status_pb.CustomInterestStatusEnum.CustomInterestStatus,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v1_enums_custom_interest_type_pb.CustomInterestTypeEnum.CustomInterestType,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    membersList: Array<CustomInterestMember.AsObject>,
  }
}

export class CustomInterestMember extends jspb.Message {
  getMemberType(): google_ads_googleads_v1_enums_custom_interest_member_type_pb.CustomInterestMemberTypeEnum.CustomInterestMemberType;
  setMemberType(value: google_ads_googleads_v1_enums_custom_interest_member_type_pb.CustomInterestMemberTypeEnum.CustomInterestMemberType): void;

  getParameter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setParameter(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasParameter(): boolean;
  clearParameter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestMember.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestMember): CustomInterestMember.AsObject;
  static serializeBinaryToWriter(message: CustomInterestMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestMember;
  static deserializeBinaryFromReader(message: CustomInterestMember, reader: jspb.BinaryReader): CustomInterestMember;
}

export namespace CustomInterestMember {
  export type AsObject = {
    memberType: google_ads_googleads_v1_enums_custom_interest_member_type_pb.CustomInterestMemberTypeEnum.CustomInterestMemberType,
    parameter?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

