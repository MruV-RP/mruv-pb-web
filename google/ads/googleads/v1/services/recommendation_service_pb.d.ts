import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_extensions_pb from '../../../../../google/ads/googleads/v1/common/extensions_pb';
import * as google_ads_googleads_v1_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v1/enums/keyword_match_type_pb';
import * as google_ads_googleads_v1_resources_ad_pb from '../../../../../google/ads/googleads/v1/resources/ad_pb';
import * as google_ads_googleads_v1_resources_recommendation_pb from '../../../../../google/ads/googleads/v1/resources/recommendation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetRecommendationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationRequest): GetRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationRequest;
  static deserializeBinaryFromReader(message: GetRecommendationRequest, reader: jspb.BinaryReader): GetRecommendationRequest;
}

export namespace GetRecommendationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class ApplyRecommendationRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<ApplyRecommendationOperation>;
  setOperationsList(value: Array<ApplyRecommendationOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: ApplyRecommendationOperation, index?: number): ApplyRecommendationOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationRequest): ApplyRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationRequest;
  static deserializeBinaryFromReader(message: ApplyRecommendationRequest, reader: jspb.BinaryReader): ApplyRecommendationRequest;
}

export namespace ApplyRecommendationRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ApplyRecommendationOperation.AsObject>,
    partialFailure: boolean,
  }
}

export class ApplyRecommendationOperation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getCampaignBudget(): ApplyRecommendationOperation.CampaignBudgetParameters | undefined;
  setCampaignBudget(value?: ApplyRecommendationOperation.CampaignBudgetParameters): void;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;

  getTextAd(): ApplyRecommendationOperation.TextAdParameters | undefined;
  setTextAd(value?: ApplyRecommendationOperation.TextAdParameters): void;
  hasTextAd(): boolean;
  clearTextAd(): void;

  getKeyword(): ApplyRecommendationOperation.KeywordParameters | undefined;
  setKeyword(value?: ApplyRecommendationOperation.KeywordParameters): void;
  hasKeyword(): boolean;
  clearKeyword(): void;

  getTargetCpaOptIn(): ApplyRecommendationOperation.TargetCpaOptInParameters | undefined;
  setTargetCpaOptIn(value?: ApplyRecommendationOperation.TargetCpaOptInParameters): void;
  hasTargetCpaOptIn(): boolean;
  clearTargetCpaOptIn(): void;

  getCalloutExtension(): ApplyRecommendationOperation.CalloutExtensionParameters | undefined;
  setCalloutExtension(value?: ApplyRecommendationOperation.CalloutExtensionParameters): void;
  hasCalloutExtension(): boolean;
  clearCalloutExtension(): void;

  getCallExtension(): ApplyRecommendationOperation.CallExtensionParameters | undefined;
  setCallExtension(value?: ApplyRecommendationOperation.CallExtensionParameters): void;
  hasCallExtension(): boolean;
  clearCallExtension(): void;

  getSitelinkExtension(): ApplyRecommendationOperation.SitelinkExtensionParameters | undefined;
  setSitelinkExtension(value?: ApplyRecommendationOperation.SitelinkExtensionParameters): void;
  hasSitelinkExtension(): boolean;
  clearSitelinkExtension(): void;

  getMoveUnusedBudget(): ApplyRecommendationOperation.MoveUnusedBudgetParameters | undefined;
  setMoveUnusedBudget(value?: ApplyRecommendationOperation.MoveUnusedBudgetParameters): void;
  hasMoveUnusedBudget(): boolean;
  clearMoveUnusedBudget(): void;

  getApplyParametersCase(): ApplyRecommendationOperation.ApplyParametersCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationOperation): ApplyRecommendationOperation.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationOperation;
  static deserializeBinaryFromReader(message: ApplyRecommendationOperation, reader: jspb.BinaryReader): ApplyRecommendationOperation;
}

export namespace ApplyRecommendationOperation {
  export type AsObject = {
    resourceName: string,
    campaignBudget?: ApplyRecommendationOperation.CampaignBudgetParameters.AsObject,
    textAd?: ApplyRecommendationOperation.TextAdParameters.AsObject,
    keyword?: ApplyRecommendationOperation.KeywordParameters.AsObject,
    targetCpaOptIn?: ApplyRecommendationOperation.TargetCpaOptInParameters.AsObject,
    calloutExtension?: ApplyRecommendationOperation.CalloutExtensionParameters.AsObject,
    callExtension?: ApplyRecommendationOperation.CallExtensionParameters.AsObject,
    sitelinkExtension?: ApplyRecommendationOperation.SitelinkExtensionParameters.AsObject,
    moveUnusedBudget?: ApplyRecommendationOperation.MoveUnusedBudgetParameters.AsObject,
  }

  export class CampaignBudgetParameters extends jspb.Message {
    getNewBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasNewBudgetAmountMicros(): boolean;
    clearNewBudgetAmountMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignBudgetParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignBudgetParameters): CampaignBudgetParameters.AsObject;
    static serializeBinaryToWriter(message: CampaignBudgetParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignBudgetParameters;
    static deserializeBinaryFromReader(message: CampaignBudgetParameters, reader: jspb.BinaryReader): CampaignBudgetParameters;
  }

  export namespace CampaignBudgetParameters {
    export type AsObject = {
      newBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class TextAdParameters extends jspb.Message {
    getAd(): google_ads_googleads_v1_resources_ad_pb.Ad | undefined;
    setAd(value?: google_ads_googleads_v1_resources_ad_pb.Ad): void;
    hasAd(): boolean;
    clearAd(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAdParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TextAdParameters): TextAdParameters.AsObject;
    static serializeBinaryToWriter(message: TextAdParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAdParameters;
    static deserializeBinaryFromReader(message: TextAdParameters, reader: jspb.BinaryReader): TextAdParameters;
  }

  export namespace TextAdParameters {
    export type AsObject = {
      ad?: google_ads_googleads_v1_resources_ad_pb.Ad.AsObject,
    }
  }


  export class KeywordParameters extends jspb.Message {
    getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasAdGroup(): boolean;
    clearAdGroup(): void;

    getMatchType(): google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
    setMatchType(value: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

    getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasCpcBidMicros(): boolean;
    clearCpcBidMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordParameters.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordParameters): KeywordParameters.AsObject;
    static serializeBinaryToWriter(message: KeywordParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordParameters;
    static deserializeBinaryFromReader(message: KeywordParameters, reader: jspb.BinaryReader): KeywordParameters;
  }

  export namespace KeywordParameters {
    export type AsObject = {
      adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
      matchType: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
      cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class TargetCpaOptInParameters extends jspb.Message {
    getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasTargetCpaMicros(): boolean;
    clearTargetCpaMicros(): void;

    getNewCampaignBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewCampaignBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasNewCampaignBudgetAmountMicros(): boolean;
    clearNewCampaignBudgetAmountMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCpaOptInParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCpaOptInParameters): TargetCpaOptInParameters.AsObject;
    static serializeBinaryToWriter(message: TargetCpaOptInParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCpaOptInParameters;
    static deserializeBinaryFromReader(message: TargetCpaOptInParameters, reader: jspb.BinaryReader): TargetCpaOptInParameters;
  }

  export namespace TargetCpaOptInParameters {
    export type AsObject = {
      targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      newCampaignBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class CalloutExtensionParameters extends jspb.Message {
    getCalloutExtensionsList(): Array<google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem>;
    setCalloutExtensionsList(value: Array<google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem>): void;
    clearCalloutExtensionsList(): void;
    addCalloutExtensions(value?: google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem, index?: number): google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalloutExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CalloutExtensionParameters): CalloutExtensionParameters.AsObject;
    static serializeBinaryToWriter(message: CalloutExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalloutExtensionParameters;
    static deserializeBinaryFromReader(message: CalloutExtensionParameters, reader: jspb.BinaryReader): CalloutExtensionParameters;
  }

  export namespace CalloutExtensionParameters {
    export type AsObject = {
      calloutExtensionsList: Array<google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem.AsObject>,
    }
  }


  export class CallExtensionParameters extends jspb.Message {
    getCallExtensionsList(): Array<google_ads_googleads_v1_common_extensions_pb.CallFeedItem>;
    setCallExtensionsList(value: Array<google_ads_googleads_v1_common_extensions_pb.CallFeedItem>): void;
    clearCallExtensionsList(): void;
    addCallExtensions(value?: google_ads_googleads_v1_common_extensions_pb.CallFeedItem, index?: number): google_ads_googleads_v1_common_extensions_pb.CallFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CallExtensionParameters): CallExtensionParameters.AsObject;
    static serializeBinaryToWriter(message: CallExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallExtensionParameters;
    static deserializeBinaryFromReader(message: CallExtensionParameters, reader: jspb.BinaryReader): CallExtensionParameters;
  }

  export namespace CallExtensionParameters {
    export type AsObject = {
      callExtensionsList: Array<google_ads_googleads_v1_common_extensions_pb.CallFeedItem.AsObject>,
    }
  }


  export class SitelinkExtensionParameters extends jspb.Message {
    getSitelinkExtensionsList(): Array<google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem>;
    setSitelinkExtensionsList(value: Array<google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem>): void;
    clearSitelinkExtensionsList(): void;
    addSitelinkExtensions(value?: google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem, index?: number): google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SitelinkExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SitelinkExtensionParameters): SitelinkExtensionParameters.AsObject;
    static serializeBinaryToWriter(message: SitelinkExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SitelinkExtensionParameters;
    static deserializeBinaryFromReader(message: SitelinkExtensionParameters, reader: jspb.BinaryReader): SitelinkExtensionParameters;
  }

  export namespace SitelinkExtensionParameters {
    export type AsObject = {
      sitelinkExtensionsList: Array<google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem.AsObject>,
    }
  }


  export class MoveUnusedBudgetParameters extends jspb.Message {
    getBudgetMicrosToMove(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBudgetMicrosToMove(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasBudgetMicrosToMove(): boolean;
    clearBudgetMicrosToMove(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveUnusedBudgetParameters.AsObject;
    static toObject(includeInstance: boolean, msg: MoveUnusedBudgetParameters): MoveUnusedBudgetParameters.AsObject;
    static serializeBinaryToWriter(message: MoveUnusedBudgetParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveUnusedBudgetParameters;
    static deserializeBinaryFromReader(message: MoveUnusedBudgetParameters, reader: jspb.BinaryReader): MoveUnusedBudgetParameters;
  }

  export namespace MoveUnusedBudgetParameters {
    export type AsObject = {
      budgetMicrosToMove?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export enum ApplyParametersCase { 
    APPLY_PARAMETERS_NOT_SET = 0,
    CAMPAIGN_BUDGET = 2,
    TEXT_AD = 3,
    KEYWORD = 4,
    TARGET_CPA_OPT_IN = 5,
    CALLOUT_EXTENSION = 6,
    CALL_EXTENSION = 7,
    SITELINK_EXTENSION = 8,
    MOVE_UNUSED_BUDGET = 9,
  }
}

export class ApplyRecommendationResponse extends jspb.Message {
  getResultsList(): Array<ApplyRecommendationResult>;
  setResultsList(value: Array<ApplyRecommendationResult>): void;
  clearResultsList(): void;
  addResults(value?: ApplyRecommendationResult, index?: number): ApplyRecommendationResult;

  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResponse): ApplyRecommendationResponse.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResponse;
  static deserializeBinaryFromReader(message: ApplyRecommendationResponse, reader: jspb.BinaryReader): ApplyRecommendationResponse;
}

export namespace ApplyRecommendationResponse {
  export type AsObject = {
    resultsList: Array<ApplyRecommendationResult.AsObject>,
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
  }
}

export class ApplyRecommendationResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResult): ApplyRecommendationResult.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResult;
  static deserializeBinaryFromReader(message: ApplyRecommendationResult, reader: jspb.BinaryReader): ApplyRecommendationResult;
}

export namespace ApplyRecommendationResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class DismissRecommendationRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<DismissRecommendationRequest.DismissRecommendationOperation>;
  setOperationsList(value: Array<DismissRecommendationRequest.DismissRecommendationOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: DismissRecommendationRequest.DismissRecommendationOperation, index?: number): DismissRecommendationRequest.DismissRecommendationOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DismissRecommendationRequest): DismissRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: DismissRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissRecommendationRequest;
  static deserializeBinaryFromReader(message: DismissRecommendationRequest, reader: jspb.BinaryReader): DismissRecommendationRequest;
}

export namespace DismissRecommendationRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<DismissRecommendationRequest.DismissRecommendationOperation.AsObject>,
    partialFailure: boolean,
  }

  export class DismissRecommendationOperation extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DismissRecommendationOperation.AsObject;
    static toObject(includeInstance: boolean, msg: DismissRecommendationOperation): DismissRecommendationOperation.AsObject;
    static serializeBinaryToWriter(message: DismissRecommendationOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DismissRecommendationOperation;
    static deserializeBinaryFromReader(message: DismissRecommendationOperation, reader: jspb.BinaryReader): DismissRecommendationOperation;
  }

  export namespace DismissRecommendationOperation {
    export type AsObject = {
      resourceName: string,
    }
  }

}

export class DismissRecommendationResponse extends jspb.Message {
  getResultsList(): Array<DismissRecommendationResponse.DismissRecommendationResult>;
  setResultsList(value: Array<DismissRecommendationResponse.DismissRecommendationResult>): void;
  clearResultsList(): void;
  addResults(value?: DismissRecommendationResponse.DismissRecommendationResult, index?: number): DismissRecommendationResponse.DismissRecommendationResult;

  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DismissRecommendationResponse): DismissRecommendationResponse.AsObject;
  static serializeBinaryToWriter(message: DismissRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissRecommendationResponse;
  static deserializeBinaryFromReader(message: DismissRecommendationResponse, reader: jspb.BinaryReader): DismissRecommendationResponse;
}

export namespace DismissRecommendationResponse {
  export type AsObject = {
    resultsList: Array<DismissRecommendationResponse.DismissRecommendationResult.AsObject>,
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
  }

  export class DismissRecommendationResult extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DismissRecommendationResult.AsObject;
    static toObject(includeInstance: boolean, msg: DismissRecommendationResult): DismissRecommendationResult.AsObject;
    static serializeBinaryToWriter(message: DismissRecommendationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DismissRecommendationResult;
    static deserializeBinaryFromReader(message: DismissRecommendationResult, reader: jspb.BinaryReader): DismissRecommendationResult;
  }

  export namespace DismissRecommendationResult {
    export type AsObject = {
      resourceName: string,
    }
  }

}

