import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_automl_v1_image_pb from '../../../../google/cloud/automl/v1/image_pb';
import * as google_cloud_automl_v1_text_pb from '../../../../google/cloud/automl/v1/text_pb';
import * as google_cloud_automl_v1_translation_pb from '../../../../google/cloud/automl/v1/translation_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Dataset extends jspb.Message {
  getTranslationDatasetMetadata(): google_cloud_automl_v1_translation_pb.TranslationDatasetMetadata | undefined;
  setTranslationDatasetMetadata(value?: google_cloud_automl_v1_translation_pb.TranslationDatasetMetadata): void;
  hasTranslationDatasetMetadata(): boolean;
  clearTranslationDatasetMetadata(): void;

  getImageClassificationDatasetMetadata(): google_cloud_automl_v1_image_pb.ImageClassificationDatasetMetadata | undefined;
  setImageClassificationDatasetMetadata(value?: google_cloud_automl_v1_image_pb.ImageClassificationDatasetMetadata): void;
  hasImageClassificationDatasetMetadata(): boolean;
  clearImageClassificationDatasetMetadata(): void;

  getTextClassificationDatasetMetadata(): google_cloud_automl_v1_text_pb.TextClassificationDatasetMetadata | undefined;
  setTextClassificationDatasetMetadata(value?: google_cloud_automl_v1_text_pb.TextClassificationDatasetMetadata): void;
  hasTextClassificationDatasetMetadata(): boolean;
  clearTextClassificationDatasetMetadata(): void;

  getImageObjectDetectionDatasetMetadata(): google_cloud_automl_v1_image_pb.ImageObjectDetectionDatasetMetadata | undefined;
  setImageObjectDetectionDatasetMetadata(value?: google_cloud_automl_v1_image_pb.ImageObjectDetectionDatasetMetadata): void;
  hasImageObjectDetectionDatasetMetadata(): boolean;
  clearImageObjectDetectionDatasetMetadata(): void;

  getTextExtractionDatasetMetadata(): google_cloud_automl_v1_text_pb.TextExtractionDatasetMetadata | undefined;
  setTextExtractionDatasetMetadata(value?: google_cloud_automl_v1_text_pb.TextExtractionDatasetMetadata): void;
  hasTextExtractionDatasetMetadata(): boolean;
  clearTextExtractionDatasetMetadata(): void;

  getTextSentimentDatasetMetadata(): google_cloud_automl_v1_text_pb.TextSentimentDatasetMetadata | undefined;
  setTextSentimentDatasetMetadata(value?: google_cloud_automl_v1_text_pb.TextSentimentDatasetMetadata): void;
  hasTextSentimentDatasetMetadata(): boolean;
  clearTextSentimentDatasetMetadata(): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExampleCount(): number;
  setExampleCount(value: number): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getEtag(): string;
  setEtag(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getDatasetMetadataCase(): Dataset.DatasetMetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    translationDatasetMetadata?: google_cloud_automl_v1_translation_pb.TranslationDatasetMetadata.AsObject,
    imageClassificationDatasetMetadata?: google_cloud_automl_v1_image_pb.ImageClassificationDatasetMetadata.AsObject,
    textClassificationDatasetMetadata?: google_cloud_automl_v1_text_pb.TextClassificationDatasetMetadata.AsObject,
    imageObjectDetectionDatasetMetadata?: google_cloud_automl_v1_image_pb.ImageObjectDetectionDatasetMetadata.AsObject,
    textExtractionDatasetMetadata?: google_cloud_automl_v1_text_pb.TextExtractionDatasetMetadata.AsObject,
    textSentimentDatasetMetadata?: google_cloud_automl_v1_text_pb.TextSentimentDatasetMetadata.AsObject,
    name: string,
    displayName: string,
    description: string,
    exampleCount: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    etag: string,
    labelsMap: Array<[string, string]>,
  }

  export enum DatasetMetadataCase { 
    DATASET_METADATA_NOT_SET = 0,
    TRANSLATION_DATASET_METADATA = 23,
    IMAGE_CLASSIFICATION_DATASET_METADATA = 24,
    TEXT_CLASSIFICATION_DATASET_METADATA = 25,
    IMAGE_OBJECT_DETECTION_DATASET_METADATA = 26,
    TEXT_EXTRACTION_DATASET_METADATA = 28,
    TEXT_SENTIMENT_DATASET_METADATA = 30,
  }
}

