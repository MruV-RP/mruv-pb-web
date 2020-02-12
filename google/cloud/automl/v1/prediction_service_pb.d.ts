import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_automl_v1_annotation_payload_pb from '../../../../google/cloud/automl/v1/annotation_payload_pb';
import * as google_cloud_automl_v1_data_items_pb from '../../../../google/cloud/automl/v1/data_items_pb';
import * as google_cloud_automl_v1_io_pb from '../../../../google/cloud/automl/v1/io_pb';
import * as google_cloud_automl_v1_operations_pb from '../../../../google/cloud/automl/v1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';

export class PredictRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPayload(): google_cloud_automl_v1_data_items_pb.ExamplePayload | undefined;
  setPayload(value?: google_cloud_automl_v1_data_items_pb.ExamplePayload): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    name: string,
    payload?: google_cloud_automl_v1_data_items_pb.ExamplePayload.AsObject,
    paramsMap: Array<[string, string]>,
  }
}

export class PredictResponse extends jspb.Message {
  getPayloadList(): Array<google_cloud_automl_v1_annotation_payload_pb.AnnotationPayload>;
  setPayloadList(value: Array<google_cloud_automl_v1_annotation_payload_pb.AnnotationPayload>): void;
  clearPayloadList(): void;
  addPayload(value?: google_cloud_automl_v1_annotation_payload_pb.AnnotationPayload, index?: number): google_cloud_automl_v1_annotation_payload_pb.AnnotationPayload;

  getPreprocessedInput(): google_cloud_automl_v1_data_items_pb.ExamplePayload | undefined;
  setPreprocessedInput(value?: google_cloud_automl_v1_data_items_pb.ExamplePayload): void;
  hasPreprocessedInput(): boolean;
  clearPreprocessedInput(): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
  static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResponse;
  static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
  export type AsObject = {
    payloadList: Array<google_cloud_automl_v1_annotation_payload_pb.AnnotationPayload.AsObject>,
    preprocessedInput?: google_cloud_automl_v1_data_items_pb.ExamplePayload.AsObject,
    metadataMap: Array<[string, string]>,
  }
}

export class BatchPredictRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getInputConfig(): google_cloud_automl_v1_io_pb.BatchPredictInputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1_io_pb.BatchPredictInputConfig): void;
  hasInputConfig(): boolean;
  clearInputConfig(): void;

  getOutputConfig(): google_cloud_automl_v1_io_pb.BatchPredictOutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1_io_pb.BatchPredictOutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictRequest): BatchPredictRequest.AsObject;
  static serializeBinaryToWriter(message: BatchPredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictRequest;
  static deserializeBinaryFromReader(message: BatchPredictRequest, reader: jspb.BinaryReader): BatchPredictRequest;
}

export namespace BatchPredictRequest {
  export type AsObject = {
    name: string,
    inputConfig?: google_cloud_automl_v1_io_pb.BatchPredictInputConfig.AsObject,
    outputConfig?: google_cloud_automl_v1_io_pb.BatchPredictOutputConfig.AsObject,
    paramsMap: Array<[string, string]>,
  }
}

export class BatchPredictResult extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictResult.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictResult): BatchPredictResult.AsObject;
  static serializeBinaryToWriter(message: BatchPredictResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictResult;
  static deserializeBinaryFromReader(message: BatchPredictResult, reader: jspb.BinaryReader): BatchPredictResult;
}

export namespace BatchPredictResult {
  export type AsObject = {
    metadataMap: Array<[string, string]>,
  }
}

