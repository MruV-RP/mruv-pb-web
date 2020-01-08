import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_simulation_pb from '../../../../../google/ads/googleads/v2/common/simulation_pb';
import * as google_ads_googleads_v2_enums_simulation_modification_method_pb from '../../../../../google/ads/googleads/v2/enums/simulation_modification_method_pb';
import * as google_ads_googleads_v2_enums_simulation_type_pb from '../../../../../google/ads/googleads/v2/enums/simulation_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupSimulation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getAdGroupId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdGroupId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAdGroupId(): boolean;
  clearAdGroupId(): void;

  getType(): google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType;
  setType(value: google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType): void;

  getModificationMethod(): google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod;
  setModificationMethod(value: google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod): void;

  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStartDate(): boolean;
  clearStartDate(): void;

  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasEndDate(): boolean;
  clearEndDate(): void;

  getCpcBidPointList(): google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList | undefined;
  setCpcBidPointList(value?: google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList): void;
  hasCpcBidPointList(): boolean;
  clearCpcBidPointList(): void;

  getCpvBidPointList(): google_ads_googleads_v2_common_simulation_pb.CpvBidSimulationPointList | undefined;
  setCpvBidPointList(value?: google_ads_googleads_v2_common_simulation_pb.CpvBidSimulationPointList): void;
  hasCpvBidPointList(): boolean;
  clearCpvBidPointList(): void;

  getTargetCpaPointList(): google_ads_googleads_v2_common_simulation_pb.TargetCpaSimulationPointList | undefined;
  setTargetCpaPointList(value?: google_ads_googleads_v2_common_simulation_pb.TargetCpaSimulationPointList): void;
  hasTargetCpaPointList(): boolean;
  clearTargetCpaPointList(): void;

  getPointListCase(): AdGroupSimulation.PointListCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupSimulation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupSimulation): AdGroupSimulation.AsObject;
  static serializeBinaryToWriter(message: AdGroupSimulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupSimulation;
  static deserializeBinaryFromReader(message: AdGroupSimulation, reader: jspb.BinaryReader): AdGroupSimulation;
}

export namespace AdGroupSimulation {
  export type AsObject = {
    resourceName: string,
    adGroupId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType,
    modificationMethod: google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidPointList?: google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList.AsObject,
    cpvBidPointList?: google_ads_googleads_v2_common_simulation_pb.CpvBidSimulationPointList.AsObject,
    targetCpaPointList?: google_ads_googleads_v2_common_simulation_pb.TargetCpaSimulationPointList.AsObject,
  }

  export enum PointListCase { 
    POINT_LIST_NOT_SET = 0,
    CPC_BID_POINT_LIST = 8,
    CPV_BID_POINT_LIST = 10,
    TARGET_CPA_POINT_LIST = 9,
  }
}

