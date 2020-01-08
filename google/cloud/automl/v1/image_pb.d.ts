import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_automl_v1_annotation_spec_pb from '../../../../google/cloud/automl/v1/annotation_spec_pb';
import * as google_cloud_automl_v1_classification_pb from '../../../../google/cloud/automl/v1/classification_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ImageClassificationDatasetMetadata extends jspb.Message {
  getClassificationType(): google_cloud_automl_v1_classification_pb.ClassificationType;
  setClassificationType(value: google_cloud_automl_v1_classification_pb.ClassificationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationDatasetMetadata): ImageClassificationDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationDatasetMetadata;
  static deserializeBinaryFromReader(message: ImageClassificationDatasetMetadata, reader: jspb.BinaryReader): ImageClassificationDatasetMetadata;
}

export namespace ImageClassificationDatasetMetadata {
  export type AsObject = {
    classificationType: google_cloud_automl_v1_classification_pb.ClassificationType,
  }
}

export class ImageObjectDetectionDatasetMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageObjectDetectionDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageObjectDetectionDatasetMetadata): ImageObjectDetectionDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageObjectDetectionDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageObjectDetectionDatasetMetadata;
  static deserializeBinaryFromReader(message: ImageObjectDetectionDatasetMetadata, reader: jspb.BinaryReader): ImageObjectDetectionDatasetMetadata;
}

export namespace ImageObjectDetectionDatasetMetadata {
  export type AsObject = {
  }
}

export class ImageClassificationModelMetadata extends jspb.Message {
  getBaseModelId(): string;
  setBaseModelId(value: string): void;

  getTrainBudgetMilliNodeHours(): number;
  setTrainBudgetMilliNodeHours(value: number): void;

  getTrainCostMilliNodeHours(): number;
  setTrainCostMilliNodeHours(value: number): void;

  getStopReason(): string;
  setStopReason(value: string): void;

  getModelType(): string;
  setModelType(value: string): void;

  getNodeQps(): number;
  setNodeQps(value: number): void;

  getNodeCount(): number;
  setNodeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationModelMetadata): ImageClassificationModelMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationModelMetadata;
  static deserializeBinaryFromReader(message: ImageClassificationModelMetadata, reader: jspb.BinaryReader): ImageClassificationModelMetadata;
}

export namespace ImageClassificationModelMetadata {
  export type AsObject = {
    baseModelId: string,
    trainBudgetMilliNodeHours: number,
    trainCostMilliNodeHours: number,
    stopReason: string,
    modelType: string,
    nodeQps: number,
    nodeCount: number,
  }
}

export class ImageObjectDetectionModelMetadata extends jspb.Message {
  getModelType(): string;
  setModelType(value: string): void;

  getNodeCount(): number;
  setNodeCount(value: number): void;

  getNodeQps(): number;
  setNodeQps(value: number): void;

  getStopReason(): string;
  setStopReason(value: string): void;

  getTrainBudgetMilliNodeHours(): number;
  setTrainBudgetMilliNodeHours(value: number): void;

  getTrainCostMilliNodeHours(): number;
  setTrainCostMilliNodeHours(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageObjectDetectionModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageObjectDetectionModelMetadata): ImageObjectDetectionModelMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageObjectDetectionModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageObjectDetectionModelMetadata;
  static deserializeBinaryFromReader(message: ImageObjectDetectionModelMetadata, reader: jspb.BinaryReader): ImageObjectDetectionModelMetadata;
}

export namespace ImageObjectDetectionModelMetadata {
  export type AsObject = {
    modelType: string,
    nodeCount: number,
    nodeQps: number,
    stopReason: string,
    trainBudgetMilliNodeHours: number,
    trainCostMilliNodeHours: number,
  }
}

export class ImageClassificationModelDeploymentMetadata extends jspb.Message {
  getNodeCount(): number;
  setNodeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationModelDeploymentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationModelDeploymentMetadata): ImageClassificationModelDeploymentMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationModelDeploymentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationModelDeploymentMetadata;
  static deserializeBinaryFromReader(message: ImageClassificationModelDeploymentMetadata, reader: jspb.BinaryReader): ImageClassificationModelDeploymentMetadata;
}

export namespace ImageClassificationModelDeploymentMetadata {
  export type AsObject = {
    nodeCount: number,
  }
}

export class ImageObjectDetectionModelDeploymentMetadata extends jspb.Message {
  getNodeCount(): number;
  setNodeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageObjectDetectionModelDeploymentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageObjectDetectionModelDeploymentMetadata): ImageObjectDetectionModelDeploymentMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageObjectDetectionModelDeploymentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageObjectDetectionModelDeploymentMetadata;
  static deserializeBinaryFromReader(message: ImageObjectDetectionModelDeploymentMetadata, reader: jspb.BinaryReader): ImageObjectDetectionModelDeploymentMetadata;
}

export namespace ImageObjectDetectionModelDeploymentMetadata {
  export type AsObject = {
    nodeCount: number,
  }
}

