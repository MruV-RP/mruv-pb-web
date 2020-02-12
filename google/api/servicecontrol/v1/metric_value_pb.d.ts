import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_distribution_pb from '../../../../google/api/servicecontrol/v1/distribution_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_type_money_pb from '../../../../google/type/money_pb';

export class MetricValue extends jspb.Message {
  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getInt64Value(): number;
  setInt64Value(value: number): void;

  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  getStringValue(): string;
  setStringValue(value: string): void;

  getDistributionValue(): google_api_servicecontrol_v1_distribution_pb.Distribution | undefined;
  setDistributionValue(value?: google_api_servicecontrol_v1_distribution_pb.Distribution): void;
  hasDistributionValue(): boolean;
  clearDistributionValue(): void;

  getValueCase(): MetricValue.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricValue.AsObject;
  static toObject(includeInstance: boolean, msg: MetricValue): MetricValue.AsObject;
  static serializeBinaryToWriter(message: MetricValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricValue;
  static deserializeBinaryFromReader(message: MetricValue, reader: jspb.BinaryReader): MetricValue;
}

export namespace MetricValue {
  export type AsObject = {
    labelsMap: Array<[string, string]>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    boolValue: boolean,
    int64Value: number,
    doubleValue: number,
    stringValue: string,
    distributionValue?: google_api_servicecontrol_v1_distribution_pb.Distribution.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    BOOL_VALUE = 4,
    INT64_VALUE = 5,
    DOUBLE_VALUE = 6,
    STRING_VALUE = 7,
    DISTRIBUTION_VALUE = 8,
  }
}

export class MetricValueSet extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): void;

  getMetricValuesList(): Array<MetricValue>;
  setMetricValuesList(value: Array<MetricValue>): void;
  clearMetricValuesList(): void;
  addMetricValues(value?: MetricValue, index?: number): MetricValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: MetricValueSet): MetricValueSet.AsObject;
  static serializeBinaryToWriter(message: MetricValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricValueSet;
  static deserializeBinaryFromReader(message: MetricValueSet, reader: jspb.BinaryReader): MetricValueSet;
}

export namespace MetricValueSet {
  export type AsObject = {
    metricName: string,
    metricValuesList: Array<MetricValue.AsObject>,
  }
}

