import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_datalabeling_v1beta1_annotation_pb from '../../../../google/cloud/datalabeling/v1beta1/annotation_pb';
import * as google_cloud_datalabeling_v1beta1_data_payloads_pb from '../../../../google/cloud/datalabeling/v1beta1/data_payloads_pb';
import * as google_cloud_datalabeling_v1beta1_human_annotation_config_pb from '../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Dataset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getInputConfigsList(): Array<InputConfig>;
  setInputConfigsList(value: Array<InputConfig>): void;
  clearInputConfigsList(): void;
  addInputConfigs(value?: InputConfig, index?: number): InputConfig;

  getBlockingResourcesList(): Array<string>;
  setBlockingResourcesList(value: Array<string>): void;
  clearBlockingResourcesList(): void;
  addBlockingResources(value: string, index?: number): void;

  getDataItemCount(): number;
  setDataItemCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inputConfigsList: Array<InputConfig.AsObject>,
    blockingResourcesList: Array<string>,
    dataItemCount: number,
  }
}

export class InputConfig extends jspb.Message {
  getTextMetadata(): TextMetadata | undefined;
  setTextMetadata(value?: TextMetadata): void;
  hasTextMetadata(): boolean;
  clearTextMetadata(): void;

  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;
  hasGcsSource(): boolean;
  clearGcsSource(): void;

  getBigquerySource(): BigQuerySource | undefined;
  setBigquerySource(value?: BigQuerySource): void;
  hasBigquerySource(): boolean;
  clearBigquerySource(): void;

  getDataType(): DataType;
  setDataType(value: DataType): void;

  getAnnotationType(): google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType;
  setAnnotationType(value: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType): void;

  getClassificationMetadata(): ClassificationMetadata | undefined;
  setClassificationMetadata(value?: ClassificationMetadata): void;
  hasClassificationMetadata(): boolean;
  clearClassificationMetadata(): void;

  getDataTypeMetadataCase(): InputConfig.DataTypeMetadataCase;

  getSourceCase(): InputConfig.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputConfig): InputConfig.AsObject;
  static serializeBinaryToWriter(message: InputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputConfig;
  static deserializeBinaryFromReader(message: InputConfig, reader: jspb.BinaryReader): InputConfig;
}

export namespace InputConfig {
  export type AsObject = {
    textMetadata?: TextMetadata.AsObject,
    gcsSource?: GcsSource.AsObject,
    bigquerySource?: BigQuerySource.AsObject,
    dataType: DataType,
    annotationType: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType,
    classificationMetadata?: ClassificationMetadata.AsObject,
  }

  export enum DataTypeMetadataCase { 
    DATA_TYPE_METADATA_NOT_SET = 0,
    TEXT_METADATA = 6,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 2,
    BIGQUERY_SOURCE = 5,
  }
}

export class TextMetadata extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextMetadata): TextMetadata.AsObject;
  static serializeBinaryToWriter(message: TextMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextMetadata;
  static deserializeBinaryFromReader(message: TextMetadata, reader: jspb.BinaryReader): TextMetadata;
}

export namespace TextMetadata {
  export type AsObject = {
    languageCode: string,
  }
}

export class ClassificationMetadata extends jspb.Message {
  getIsMultiLabel(): boolean;
  setIsMultiLabel(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationMetadata): ClassificationMetadata.AsObject;
  static serializeBinaryToWriter(message: ClassificationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationMetadata;
  static deserializeBinaryFromReader(message: ClassificationMetadata, reader: jspb.BinaryReader): ClassificationMetadata;
}

export namespace ClassificationMetadata {
  export type AsObject = {
    isMultiLabel: boolean,
  }
}

export class GcsSource extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
  static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsSource;
  static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
  export type AsObject = {
    inputUri: string,
    mimeType: string,
  }
}

export class BigQuerySource extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQuerySource.AsObject;
  static toObject(includeInstance: boolean, msg: BigQuerySource): BigQuerySource.AsObject;
  static serializeBinaryToWriter(message: BigQuerySource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQuerySource;
  static deserializeBinaryFromReader(message: BigQuerySource, reader: jspb.BinaryReader): BigQuerySource;
}

export namespace BigQuerySource {
  export type AsObject = {
    inputUri: string,
  }
}

export class OutputConfig extends jspb.Message {
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;

  getGcsFolderDestination(): GcsFolderDestination | undefined;
  setGcsFolderDestination(value?: GcsFolderDestination): void;
  hasGcsFolderDestination(): boolean;
  clearGcsFolderDestination(): void;

  getDestinationCase(): OutputConfig.DestinationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    gcsFolderDestination?: GcsFolderDestination.AsObject,
  }

  export enum DestinationCase { 
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
    GCS_FOLDER_DESTINATION = 2,
  }
}

export class GcsDestination extends jspb.Message {
  getOutputUri(): string;
  setOutputUri(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    outputUri: string,
    mimeType: string,
  }
}

export class GcsFolderDestination extends jspb.Message {
  getOutputFolderUri(): string;
  setOutputFolderUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsFolderDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsFolderDestination): GcsFolderDestination.AsObject;
  static serializeBinaryToWriter(message: GcsFolderDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsFolderDestination;
  static deserializeBinaryFromReader(message: GcsFolderDestination, reader: jspb.BinaryReader): GcsFolderDestination;
}

export namespace GcsFolderDestination {
  export type AsObject = {
    outputFolderUri: string,
  }
}

export class DataItem extends jspb.Message {
  getImagePayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload | undefined;
  setImagePayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload): void;
  hasImagePayload(): boolean;
  clearImagePayload(): void;

  getTextPayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload | undefined;
  setTextPayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload): void;
  hasTextPayload(): boolean;
  clearTextPayload(): void;

  getVideoPayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload | undefined;
  setVideoPayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload): void;
  hasVideoPayload(): boolean;
  clearVideoPayload(): void;

  getName(): string;
  setName(value: string): void;

  getPayloadCase(): DataItem.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataItem.AsObject;
  static toObject(includeInstance: boolean, msg: DataItem): DataItem.AsObject;
  static serializeBinaryToWriter(message: DataItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataItem;
  static deserializeBinaryFromReader(message: DataItem, reader: jspb.BinaryReader): DataItem;
}

export namespace DataItem {
  export type AsObject = {
    imagePayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload.AsObject,
    textPayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload.AsObject,
    videoPayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload.AsObject,
    name: string,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    IMAGE_PAYLOAD = 2,
    TEXT_PAYLOAD = 3,
    VIDEO_PAYLOAD = 4,
  }
}

export class AnnotatedDataset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAnnotationSource(): google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationSource;
  setAnnotationSource(value: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationSource): void;

  getAnnotationType(): google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType;
  setAnnotationType(value: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType): void;

  getExampleCount(): number;
  setExampleCount(value: number): void;

  getCompletedExampleCount(): number;
  setCompletedExampleCount(value: number): void;

  getLabelStats(): LabelStats | undefined;
  setLabelStats(value?: LabelStats): void;
  hasLabelStats(): boolean;
  clearLabelStats(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getMetadata(): AnnotatedDatasetMetadata | undefined;
  setMetadata(value?: AnnotatedDatasetMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getBlockingResourcesList(): Array<string>;
  setBlockingResourcesList(value: Array<string>): void;
  clearBlockingResourcesList(): void;
  addBlockingResources(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotatedDataset.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotatedDataset): AnnotatedDataset.AsObject;
  static serializeBinaryToWriter(message: AnnotatedDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotatedDataset;
  static deserializeBinaryFromReader(message: AnnotatedDataset, reader: jspb.BinaryReader): AnnotatedDataset;
}

export namespace AnnotatedDataset {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    annotationSource: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationSource,
    annotationType: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationType,
    exampleCount: number,
    completedExampleCount: number,
    labelStats?: LabelStats.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: AnnotatedDatasetMetadata.AsObject,
    blockingResourcesList: Array<string>,
  }
}

export class LabelStats extends jspb.Message {
  getExampleCountMap(): jspb.Map<string, number>;
  clearExampleCountMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelStats.AsObject;
  static toObject(includeInstance: boolean, msg: LabelStats): LabelStats.AsObject;
  static serializeBinaryToWriter(message: LabelStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelStats;
  static deserializeBinaryFromReader(message: LabelStats, reader: jspb.BinaryReader): LabelStats;
}

export namespace LabelStats {
  export type AsObject = {
    exampleCountMap: Array<[string, number]>,
  }
}

export class AnnotatedDatasetMetadata extends jspb.Message {
  getImageClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig | undefined;
  setImageClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig): void;
  hasImageClassificationConfig(): boolean;
  clearImageClassificationConfig(): void;

  getBoundingPolyConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig | undefined;
  setBoundingPolyConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig): void;
  hasBoundingPolyConfig(): boolean;
  clearBoundingPolyConfig(): void;

  getPolylineConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig | undefined;
  setPolylineConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig): void;
  hasPolylineConfig(): boolean;
  clearPolylineConfig(): void;

  getSegmentationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig | undefined;
  setSegmentationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig): void;
  hasSegmentationConfig(): boolean;
  clearSegmentationConfig(): void;

  getVideoClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig | undefined;
  setVideoClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig): void;
  hasVideoClassificationConfig(): boolean;
  clearVideoClassificationConfig(): void;

  getObjectDetectionConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig | undefined;
  setObjectDetectionConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig): void;
  hasObjectDetectionConfig(): boolean;
  clearObjectDetectionConfig(): void;

  getObjectTrackingConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig | undefined;
  setObjectTrackingConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig): void;
  hasObjectTrackingConfig(): boolean;
  clearObjectTrackingConfig(): void;

  getEventConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig | undefined;
  setEventConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig): void;
  hasEventConfig(): boolean;
  clearEventConfig(): void;

  getTextClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig | undefined;
  setTextClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig): void;
  hasTextClassificationConfig(): boolean;
  clearTextClassificationConfig(): void;

  getTextEntityExtractionConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig | undefined;
  setTextEntityExtractionConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig): void;
  hasTextEntityExtractionConfig(): boolean;
  clearTextEntityExtractionConfig(): void;

  getHumanAnnotationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setHumanAnnotationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;
  hasHumanAnnotationConfig(): boolean;
  clearHumanAnnotationConfig(): void;

  getAnnotationRequestConfigCase(): AnnotatedDatasetMetadata.AnnotationRequestConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotatedDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotatedDatasetMetadata): AnnotatedDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: AnnotatedDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotatedDatasetMetadata;
  static deserializeBinaryFromReader(message: AnnotatedDatasetMetadata, reader: jspb.BinaryReader): AnnotatedDatasetMetadata;
}

export namespace AnnotatedDatasetMetadata {
  export type AsObject = {
    imageClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.AsObject,
    boundingPolyConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.AsObject,
    polylineConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig.AsObject,
    segmentationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig.AsObject,
    videoClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.AsObject,
    objectDetectionConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.AsObject,
    objectTrackingConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.AsObject,
    eventConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig.AsObject,
    textClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.AsObject,
    textEntityExtractionConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig.AsObject,
    humanAnnotationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }

  export enum AnnotationRequestConfigCase { 
    ANNOTATION_REQUEST_CONFIG_NOT_SET = 0,
    IMAGE_CLASSIFICATION_CONFIG = 2,
    BOUNDING_POLY_CONFIG = 3,
    POLYLINE_CONFIG = 4,
    SEGMENTATION_CONFIG = 5,
    VIDEO_CLASSIFICATION_CONFIG = 6,
    OBJECT_DETECTION_CONFIG = 7,
    OBJECT_TRACKING_CONFIG = 8,
    EVENT_CONFIG = 9,
    TEXT_CLASSIFICATION_CONFIG = 10,
    TEXT_ENTITY_EXTRACTION_CONFIG = 11,
  }
}

export class Example extends jspb.Message {
  getImagePayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload | undefined;
  setImagePayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload): void;
  hasImagePayload(): boolean;
  clearImagePayload(): void;

  getTextPayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload | undefined;
  setTextPayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload): void;
  hasTextPayload(): boolean;
  clearTextPayload(): void;

  getVideoPayload(): google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload | undefined;
  setVideoPayload(value?: google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload): void;
  hasVideoPayload(): boolean;
  clearVideoPayload(): void;

  getName(): string;
  setName(value: string): void;

  getAnnotationsList(): Array<google_cloud_datalabeling_v1beta1_annotation_pb.Annotation>;
  setAnnotationsList(value: Array<google_cloud_datalabeling_v1beta1_annotation_pb.Annotation>): void;
  clearAnnotationsList(): void;
  addAnnotations(value?: google_cloud_datalabeling_v1beta1_annotation_pb.Annotation, index?: number): google_cloud_datalabeling_v1beta1_annotation_pb.Annotation;

  getPayloadCase(): Example.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Example.AsObject;
  static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
  static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Example;
  static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
}

export namespace Example {
  export type AsObject = {
    imagePayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.ImagePayload.AsObject,
    textPayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.TextPayload.AsObject,
    videoPayload?: google_cloud_datalabeling_v1beta1_data_payloads_pb.VideoPayload.AsObject,
    name: string,
    annotationsList: Array<google_cloud_datalabeling_v1beta1_annotation_pb.Annotation.AsObject>,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    IMAGE_PAYLOAD = 2,
    TEXT_PAYLOAD = 6,
    VIDEO_PAYLOAD = 7,
  }
}

export enum DataType { 
  DATA_TYPE_UNSPECIFIED = 0,
  IMAGE = 1,
  VIDEO = 2,
  TEXT = 4,
  GENERAL_DATA = 6,
}
