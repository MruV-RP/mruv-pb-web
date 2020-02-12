import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_tag_snippet_pb from '../../../../../google/ads/googleads/v1/common/tag_snippet_pb';
import * as google_ads_googleads_v1_enums_attribution_model_pb from '../../../../../google/ads/googleads/v1/enums/attribution_model_pb';
import * as google_ads_googleads_v1_enums_conversion_action_category_pb from '../../../../../google/ads/googleads/v1/enums/conversion_action_category_pb';
import * as google_ads_googleads_v1_enums_conversion_action_counting_type_pb from '../../../../../google/ads/googleads/v1/enums/conversion_action_counting_type_pb';
import * as google_ads_googleads_v1_enums_conversion_action_status_pb from '../../../../../google/ads/googleads/v1/enums/conversion_action_status_pb';
import * as google_ads_googleads_v1_enums_conversion_action_type_pb from '../../../../../google/ads/googleads/v1/enums/conversion_action_type_pb';
import * as google_ads_googleads_v1_enums_data_driven_model_status_pb from '../../../../../google/ads/googleads/v1/enums/data_driven_model_status_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class ConversionAction extends jspb.Message {
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

  getStatus(): google_ads_googleads_v1_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus;
  setStatus(value: google_ads_googleads_v1_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus): void;

  getType(): google_ads_googleads_v1_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType;
  setType(value: google_ads_googleads_v1_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType): void;

  getCategory(): google_ads_googleads_v1_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory;
  setCategory(value: google_ads_googleads_v1_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory): void;

  getOwnerCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOwnerCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOwnerCustomer(): boolean;
  clearOwnerCustomer(): void;

  getIncludeInConversionsMetric(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIncludeInConversionsMetric(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasIncludeInConversionsMetric(): boolean;
  clearIncludeInConversionsMetric(): void;

  getClickThroughLookbackWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClickThroughLookbackWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasClickThroughLookbackWindowDays(): boolean;
  clearClickThroughLookbackWindowDays(): void;

  getViewThroughLookbackWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setViewThroughLookbackWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasViewThroughLookbackWindowDays(): boolean;
  clearViewThroughLookbackWindowDays(): void;

  getValueSettings(): ConversionAction.ValueSettings | undefined;
  setValueSettings(value?: ConversionAction.ValueSettings): void;
  hasValueSettings(): boolean;
  clearValueSettings(): void;

  getCountingType(): google_ads_googleads_v1_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType;
  setCountingType(value: google_ads_googleads_v1_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType): void;

  getAttributionModelSettings(): ConversionAction.AttributionModelSettings | undefined;
  setAttributionModelSettings(value?: ConversionAction.AttributionModelSettings): void;
  hasAttributionModelSettings(): boolean;
  clearAttributionModelSettings(): void;

  getTagSnippetsList(): Array<google_ads_googleads_v1_common_tag_snippet_pb.TagSnippet>;
  setTagSnippetsList(value: Array<google_ads_googleads_v1_common_tag_snippet_pb.TagSnippet>): void;
  clearTagSnippetsList(): void;
  addTagSnippets(value?: google_ads_googleads_v1_common_tag_snippet_pb.TagSnippet, index?: number): google_ads_googleads_v1_common_tag_snippet_pb.TagSnippet;

  getPhoneCallDurationSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneCallDurationSeconds(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPhoneCallDurationSeconds(): boolean;
  clearPhoneCallDurationSeconds(): void;

  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAppId(): boolean;
  clearAppId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAction.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAction): ConversionAction.AsObject;
  static serializeBinaryToWriter(message: ConversionAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAction;
  static deserializeBinaryFromReader(message: ConversionAction, reader: jspb.BinaryReader): ConversionAction;
}

export namespace ConversionAction {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v1_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus,
    type: google_ads_googleads_v1_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType,
    category: google_ads_googleads_v1_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory,
    ownerCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    includeInConversionsMetric?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    clickThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    viewThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    valueSettings?: ConversionAction.ValueSettings.AsObject,
    countingType: google_ads_googleads_v1_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType,
    attributionModelSettings?: ConversionAction.AttributionModelSettings.AsObject,
    tagSnippetsList: Array<google_ads_googleads_v1_common_tag_snippet_pb.TagSnippet.AsObject>,
    phoneCallDurationSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class AttributionModelSettings extends jspb.Message {
    getAttributionModel(): google_ads_googleads_v1_enums_attribution_model_pb.AttributionModelEnum.AttributionModel;
    setAttributionModel(value: google_ads_googleads_v1_enums_attribution_model_pb.AttributionModelEnum.AttributionModel): void;

    getDataDrivenModelStatus(): google_ads_googleads_v1_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus;
    setDataDrivenModelStatus(value: google_ads_googleads_v1_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributionModelSettings.AsObject;
    static toObject(includeInstance: boolean, msg: AttributionModelSettings): AttributionModelSettings.AsObject;
    static serializeBinaryToWriter(message: AttributionModelSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributionModelSettings;
    static deserializeBinaryFromReader(message: AttributionModelSettings, reader: jspb.BinaryReader): AttributionModelSettings;
  }

  export namespace AttributionModelSettings {
    export type AsObject = {
      attributionModel: google_ads_googleads_v1_enums_attribution_model_pb.AttributionModelEnum.AttributionModel,
      dataDrivenModelStatus: google_ads_googleads_v1_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus,
    }
  }


  export class ValueSettings extends jspb.Message {
    getDefaultValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDefaultValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasDefaultValue(): boolean;
    clearDefaultValue(): void;

    getDefaultCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasDefaultCurrencyCode(): boolean;
    clearDefaultCurrencyCode(): void;

    getAlwaysUseDefaultValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAlwaysUseDefaultValue(value?: google_protobuf_wrappers_pb.BoolValue): void;
    hasAlwaysUseDefaultValue(): boolean;
    clearAlwaysUseDefaultValue(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueSettings.AsObject;
    static toObject(includeInstance: boolean, msg: ValueSettings): ValueSettings.AsObject;
    static serializeBinaryToWriter(message: ValueSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueSettings;
    static deserializeBinaryFromReader(message: ValueSettings, reader: jspb.BinaryReader): ValueSettings;
  }

  export namespace ValueSettings {
    export type AsObject = {
      defaultValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      defaultCurrencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
      alwaysUseDefaultValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

}

