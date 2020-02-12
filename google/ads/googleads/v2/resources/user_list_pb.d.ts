import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_user_lists_pb from '../../../../../google/ads/googleads/v2/common/user_lists_pb';
import * as google_ads_googleads_v2_enums_access_reason_pb from '../../../../../google/ads/googleads/v2/enums/access_reason_pb';
import * as google_ads_googleads_v2_enums_user_list_access_status_pb from '../../../../../google/ads/googleads/v2/enums/user_list_access_status_pb';
import * as google_ads_googleads_v2_enums_user_list_closing_reason_pb from '../../../../../google/ads/googleads/v2/enums/user_list_closing_reason_pb';
import * as google_ads_googleads_v2_enums_user_list_membership_status_pb from '../../../../../google/ads/googleads/v2/enums/user_list_membership_status_pb';
import * as google_ads_googleads_v2_enums_user_list_size_range_pb from '../../../../../google/ads/googleads/v2/enums/user_list_size_range_pb';
import * as google_ads_googleads_v2_enums_user_list_type_pb from '../../../../../google/ads/googleads/v2/enums/user_list_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserList extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getReadOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setReadOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasReadOnly(): boolean;
  clearReadOnly(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getMembershipStatus(): google_ads_googleads_v2_enums_user_list_membership_status_pb.UserListMembershipStatusEnum.UserListMembershipStatus;
  setMembershipStatus(value: google_ads_googleads_v2_enums_user_list_membership_status_pb.UserListMembershipStatusEnum.UserListMembershipStatus): void;

  getIntegrationCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIntegrationCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIntegrationCode(): boolean;
  clearIntegrationCode(): void;

  getMembershipLifeSpan(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMembershipLifeSpan(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasMembershipLifeSpan(): boolean;
  clearMembershipLifeSpan(): void;

  getSizeForDisplay(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSizeForDisplay(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasSizeForDisplay(): boolean;
  clearSizeForDisplay(): void;

  getSizeRangeForDisplay(): google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange;
  setSizeRangeForDisplay(value: google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange): void;

  getSizeForSearch(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSizeForSearch(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasSizeForSearch(): boolean;
  clearSizeForSearch(): void;

  getSizeRangeForSearch(): google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange;
  setSizeRangeForSearch(value: google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange): void;

  getType(): google_ads_googleads_v2_enums_user_list_type_pb.UserListTypeEnum.UserListType;
  setType(value: google_ads_googleads_v2_enums_user_list_type_pb.UserListTypeEnum.UserListType): void;

  getClosingReason(): google_ads_googleads_v2_enums_user_list_closing_reason_pb.UserListClosingReasonEnum.UserListClosingReason;
  setClosingReason(value: google_ads_googleads_v2_enums_user_list_closing_reason_pb.UserListClosingReasonEnum.UserListClosingReason): void;

  getAccessReason(): google_ads_googleads_v2_enums_access_reason_pb.AccessReasonEnum.AccessReason;
  setAccessReason(value: google_ads_googleads_v2_enums_access_reason_pb.AccessReasonEnum.AccessReason): void;

  getAccountUserListStatus(): google_ads_googleads_v2_enums_user_list_access_status_pb.UserListAccessStatusEnum.UserListAccessStatus;
  setAccountUserListStatus(value: google_ads_googleads_v2_enums_user_list_access_status_pb.UserListAccessStatusEnum.UserListAccessStatus): void;

  getEligibleForSearch(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEligibleForSearch(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasEligibleForSearch(): boolean;
  clearEligibleForSearch(): void;

  getEligibleForDisplay(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEligibleForDisplay(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasEligibleForDisplay(): boolean;
  clearEligibleForDisplay(): void;

  getCrmBasedUserList(): google_ads_googleads_v2_common_user_lists_pb.CrmBasedUserListInfo | undefined;
  setCrmBasedUserList(value?: google_ads_googleads_v2_common_user_lists_pb.CrmBasedUserListInfo): void;
  hasCrmBasedUserList(): boolean;
  clearCrmBasedUserList(): void;

  getSimilarUserList(): google_ads_googleads_v2_common_user_lists_pb.SimilarUserListInfo | undefined;
  setSimilarUserList(value?: google_ads_googleads_v2_common_user_lists_pb.SimilarUserListInfo): void;
  hasSimilarUserList(): boolean;
  clearSimilarUserList(): void;

  getRuleBasedUserList(): google_ads_googleads_v2_common_user_lists_pb.RuleBasedUserListInfo | undefined;
  setRuleBasedUserList(value?: google_ads_googleads_v2_common_user_lists_pb.RuleBasedUserListInfo): void;
  hasRuleBasedUserList(): boolean;
  clearRuleBasedUserList(): void;

  getLogicalUserList(): google_ads_googleads_v2_common_user_lists_pb.LogicalUserListInfo | undefined;
  setLogicalUserList(value?: google_ads_googleads_v2_common_user_lists_pb.LogicalUserListInfo): void;
  hasLogicalUserList(): boolean;
  clearLogicalUserList(): void;

  getBasicUserList(): google_ads_googleads_v2_common_user_lists_pb.BasicUserListInfo | undefined;
  setBasicUserList(value?: google_ads_googleads_v2_common_user_lists_pb.BasicUserListInfo): void;
  hasBasicUserList(): boolean;
  clearBasicUserList(): void;

  getUserListCase(): UserList.UserListCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    readOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    membershipStatus: google_ads_googleads_v2_enums_user_list_membership_status_pb.UserListMembershipStatusEnum.UserListMembershipStatus,
    integrationCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    membershipLifeSpan?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sizeForDisplay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sizeRangeForDisplay: google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange,
    sizeForSearch?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sizeRangeForSearch: google_ads_googleads_v2_enums_user_list_size_range_pb.UserListSizeRangeEnum.UserListSizeRange,
    type: google_ads_googleads_v2_enums_user_list_type_pb.UserListTypeEnum.UserListType,
    closingReason: google_ads_googleads_v2_enums_user_list_closing_reason_pb.UserListClosingReasonEnum.UserListClosingReason,
    accessReason: google_ads_googleads_v2_enums_access_reason_pb.AccessReasonEnum.AccessReason,
    accountUserListStatus: google_ads_googleads_v2_enums_user_list_access_status_pb.UserListAccessStatusEnum.UserListAccessStatus,
    eligibleForSearch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    eligibleForDisplay?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    crmBasedUserList?: google_ads_googleads_v2_common_user_lists_pb.CrmBasedUserListInfo.AsObject,
    similarUserList?: google_ads_googleads_v2_common_user_lists_pb.SimilarUserListInfo.AsObject,
    ruleBasedUserList?: google_ads_googleads_v2_common_user_lists_pb.RuleBasedUserListInfo.AsObject,
    logicalUserList?: google_ads_googleads_v2_common_user_lists_pb.LogicalUserListInfo.AsObject,
    basicUserList?: google_ads_googleads_v2_common_user_lists_pb.BasicUserListInfo.AsObject,
  }

  export enum UserListCase { 
    USER_LIST_NOT_SET = 0,
    CRM_BASED_USER_LIST = 19,
    SIMILAR_USER_LIST = 20,
    RULE_BASED_USER_LIST = 21,
    LOGICAL_USER_LIST = 22,
    BASIC_USER_LIST = 23,
  }
}

