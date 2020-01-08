import * as jspb from "google-protobuf"

import * as google_cloud_automl_v1beta1_image_pb from '../../../../google/cloud/automl/v1beta1/image_pb';
import * as google_cloud_automl_v1beta1_tables_pb from '../../../../google/cloud/automl/v1beta1/tables_pb';
import * as google_cloud_automl_v1beta1_text_pb from '../../../../google/cloud/automl/v1beta1/text_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';
import * as google_cloud_automl_v1beta1_video_pb from '../../../../google/cloud/automl/v1beta1/video_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Model extends jspb.Message {
  getTranslationModelMetadata(): google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata | undefined;
  setTranslationModelMetadata(value?: google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata): void;
  hasTranslationModelMetadata(): boolean;
  clearTranslationModelMetadata(): void;

  getImageClassificationModelMetadata(): google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata | undefined;
  setImageClassificationModelMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata): void;
  hasImageClassificationModelMetadata(): boolean;
  clearImageClassificationModelMetadata(): void;

  getTextClassificationModelMetadata(): google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata | undefined;
  setTextClassificationModelMetadata(value?: google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata): void;
  hasTextClassificationModelMetadata(): boolean;
  clearTextClassificationModelMetadata(): void;

  getImageObjectDetectionModelMetadata(): google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelMetadata | undefined;
  setImageObjectDetectionModelMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelMetadata): void;
  hasImageObjectDetectionModelMetadata(): boolean;
  clearImageObjectDetectionModelMetadata(): void;

  getVideoClassificationModelMetadata(): google_cloud_automl_v1beta1_video_pb.VideoClassificationModelMetadata | undefined;
  setVideoClassificationModelMetadata(value?: google_cloud_automl_v1beta1_video_pb.VideoClassificationModelMetadata): void;
  hasVideoClassificationModelMetadata(): boolean;
  clearVideoClassificationModelMetadata(): void;

  getVideoObjectTrackingModelMetadata(): google_cloud_automl_v1beta1_video_pb.VideoObjectTrackingModelMetadata | undefined;
  setVideoObjectTrackingModelMetadata(value?: google_cloud_automl_v1beta1_video_pb.VideoObjectTrackingModelMetadata): void;
  hasVideoObjectTrackingModelMetadata(): boolean;
  clearVideoObjectTrackingModelMetadata(): void;

  getTextExtractionModelMetadata(): google_cloud_automl_v1beta1_text_pb.TextExtractionModelMetadata | undefined;
  setTextExtractionModelMetadata(value?: google_cloud_automl_v1beta1_text_pb.TextExtractionModelMetadata): void;
  hasTextExtractionModelMetadata(): boolean;
  clearTextExtractionModelMetadata(): void;

  getTablesModelMetadata(): google_cloud_automl_v1beta1_tables_pb.TablesModelMetadata | undefined;
  setTablesModelMetadata(value?: google_cloud_automl_v1beta1_tables_pb.TablesModelMetadata): void;
  hasTablesModelMetadata(): boolean;
  clearTablesModelMetadata(): void;

  getTextSentimentModelMetadata(): google_cloud_automl_v1beta1_text_pb.TextSentimentModelMetadata | undefined;
  setTextSentimentModelMetadata(value?: google_cloud_automl_v1beta1_text_pb.TextSentimentModelMetadata): void;
  hasTextSentimentModelMetadata(): boolean;
  clearTextSentimentModelMetadata(): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getDeploymentState(): Model.DeploymentState;
  setDeploymentState(value: Model.DeploymentState): void;

  getModelMetadataCase(): Model.ModelMetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    translationModelMetadata?: google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata.AsObject,
    imageClassificationModelMetadata?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata.AsObject,
    textClassificationModelMetadata?: google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata.AsObject,
    imageObjectDetectionModelMetadata?: google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelMetadata.AsObject,
    videoClassificationModelMetadata?: google_cloud_automl_v1beta1_video_pb.VideoClassificationModelMetadata.AsObject,
    videoObjectTrackingModelMetadata?: google_cloud_automl_v1beta1_video_pb.VideoObjectTrackingModelMetadata.AsObject,
    textExtractionModelMetadata?: google_cloud_automl_v1beta1_text_pb.TextExtractionModelMetadata.AsObject,
    tablesModelMetadata?: google_cloud_automl_v1beta1_tables_pb.TablesModelMetadata.AsObject,
    textSentimentModelMetadata?: google_cloud_automl_v1beta1_text_pb.TextSentimentModelMetadata.AsObject,
    name: string,
    displayName: string,
    datasetId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deploymentState: Model.DeploymentState,
  }

  export enum DeploymentState { 
    DEPLOYMENT_STATE_UNSPECIFIED = 0,
    DEPLOYED = 1,
    UNDEPLOYED = 2,
  }

  export enum ModelMetadataCase { 
    MODEL_METADATA_NOT_SET = 0,
    TRANSLATION_MODEL_METADATA = 15,
    IMAGE_CLASSIFICATION_MODEL_METADATA = 13,
    TEXT_CLASSIFICATION_MODEL_METADATA = 14,
    IMAGE_OBJECT_DETECTION_MODEL_METADATA = 20,
    VIDEO_CLASSIFICATION_MODEL_METADATA = 23,
    VIDEO_OBJECT_TRACKING_MODEL_METADATA = 21,
    TEXT_EXTRACTION_MODEL_METADATA = 19,
    TABLES_MODEL_METADATA = 24,
    TEXT_SENTIMENT_MODEL_METADATA = 22,
  }
}

