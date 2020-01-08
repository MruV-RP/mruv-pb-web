import * as jspb from "google-protobuf"

import * as google_api_label_pb from '../../google/api/label_pb';
import * as google_api_launch_stage_pb from '../../google/api/launch_stage_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';

export class MetricDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getLabelsList(): Array<google_api_label_pb.LabelDescriptor>;
  setLabelsList(value: Array<google_api_label_pb.LabelDescriptor>): void;
  clearLabelsList(): void;
  addLabels(value?: google_api_label_pb.LabelDescriptor, index?: number): google_api_label_pb.LabelDescriptor;

  getMetricKind(): MetricDescriptor.MetricKind;
  setMetricKind(value: MetricDescriptor.MetricKind): void;

  getValueType(): MetricDescriptor.ValueType;
  setValueType(value: MetricDescriptor.ValueType): void;

  getUnit(): string;
  setUnit(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getMetadata(): MetricDescriptor.MetricDescriptorMetadata | undefined;
  setMetadata(value?: MetricDescriptor.MetricDescriptorMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getLaunchStage(): google_api_launch_stage_pb.LaunchStage;
  setLaunchStage(value: google_api_launch_stage_pb.LaunchStage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: MetricDescriptor): MetricDescriptor.AsObject;
  static serializeBinaryToWriter(message: MetricDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricDescriptor;
  static deserializeBinaryFromReader(message: MetricDescriptor, reader: jspb.BinaryReader): MetricDescriptor;
}

export namespace MetricDescriptor {
  export type AsObject = {
    name: string,
    type: string,
    labelsList: Array<google_api_label_pb.LabelDescriptor.AsObject>,
    metricKind: MetricDescriptor.MetricKind,
    valueType: MetricDescriptor.ValueType,
    unit: string,
    description: string,
    displayName: string,
    metadata?: MetricDescriptor.MetricDescriptorMetadata.AsObject,
    launchStage: google_api_launch_stage_pb.LaunchStage,
  }

  export class MetricDescriptorMetadata extends jspb.Message {
    getLaunchStage(): google_api_launch_stage_pb.LaunchStage;
    setLaunchStage(value: google_api_launch_stage_pb.LaunchStage): void;

    getSamplePeriod(): google_protobuf_duration_pb.Duration | undefined;
    setSamplePeriod(value?: google_protobuf_duration_pb.Duration): void;
    hasSamplePeriod(): boolean;
    clearSamplePeriod(): void;

    getIngestDelay(): google_protobuf_duration_pb.Duration | undefined;
    setIngestDelay(value?: google_protobuf_duration_pb.Duration): void;
    hasIngestDelay(): boolean;
    clearIngestDelay(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricDescriptorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MetricDescriptorMetadata): MetricDescriptorMetadata.AsObject;
    static serializeBinaryToWriter(message: MetricDescriptorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricDescriptorMetadata;
    static deserializeBinaryFromReader(message: MetricDescriptorMetadata, reader: jspb.BinaryReader): MetricDescriptorMetadata;
  }

  export namespace MetricDescriptorMetadata {
    export type AsObject = {
      launchStage: google_api_launch_stage_pb.LaunchStage,
      samplePeriod?: google_protobuf_duration_pb.Duration.AsObject,
      ingestDelay?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }


  export enum MetricKind { 
    METRIC_KIND_UNSPECIFIED = 0,
    GAUGE = 1,
    DELTA = 2,
    CUMULATIVE = 3,
  }

  export enum ValueType { 
    VALUE_TYPE_UNSPECIFIED = 0,
    BOOL = 1,
    INT64 = 2,
    DOUBLE = 3,
    STRING = 4,
    DISTRIBUTION = 5,
    MONEY = 6,
  }
}

export class Metric extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metric.AsObject;
  static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
  static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metric;
  static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

export namespace Metric {
  export type AsObject = {
    type: string,
    labelsMap: Array<[string, string]>,
  }
}

