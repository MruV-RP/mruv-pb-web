import * as jspb from "google-protobuf"

import * as google_cloud_automl_v1beta1_classification_pb from '../../../../google/cloud/automl/v1beta1/classification_pb';
import * as google_cloud_automl_v1beta1_detection_pb from '../../../../google/cloud/automl/v1beta1/detection_pb';
import * as google_cloud_automl_v1beta1_regression_pb from '../../../../google/cloud/automl/v1beta1/regression_pb';
import * as google_cloud_automl_v1beta1_tables_pb from '../../../../google/cloud/automl/v1beta1/tables_pb';
import * as google_cloud_automl_v1beta1_text_extraction_pb from '../../../../google/cloud/automl/v1beta1/text_extraction_pb';
import * as google_cloud_automl_v1beta1_text_sentiment_pb from '../../../../google/cloud/automl/v1beta1/text_sentiment_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class ModelEvaluation extends jspb.Message {
  getClassificationEvaluationMetrics(): google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics | undefined;
  setClassificationEvaluationMetrics(value?: google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics): void;
  hasClassificationEvaluationMetrics(): boolean;
  clearClassificationEvaluationMetrics(): void;

  getRegressionEvaluationMetrics(): google_cloud_automl_v1beta1_regression_pb.RegressionEvaluationMetrics | undefined;
  setRegressionEvaluationMetrics(value?: google_cloud_automl_v1beta1_regression_pb.RegressionEvaluationMetrics): void;
  hasRegressionEvaluationMetrics(): boolean;
  clearRegressionEvaluationMetrics(): void;

  getTranslationEvaluationMetrics(): google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics | undefined;
  setTranslationEvaluationMetrics(value?: google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics): void;
  hasTranslationEvaluationMetrics(): boolean;
  clearTranslationEvaluationMetrics(): void;

  getImageObjectDetectionEvaluationMetrics(): google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionEvaluationMetrics | undefined;
  setImageObjectDetectionEvaluationMetrics(value?: google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionEvaluationMetrics): void;
  hasImageObjectDetectionEvaluationMetrics(): boolean;
  clearImageObjectDetectionEvaluationMetrics(): void;

  getVideoObjectTrackingEvaluationMetrics(): google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingEvaluationMetrics | undefined;
  setVideoObjectTrackingEvaluationMetrics(value?: google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingEvaluationMetrics): void;
  hasVideoObjectTrackingEvaluationMetrics(): boolean;
  clearVideoObjectTrackingEvaluationMetrics(): void;

  getTextSentimentEvaluationMetrics(): google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentEvaluationMetrics | undefined;
  setTextSentimentEvaluationMetrics(value?: google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentEvaluationMetrics): void;
  hasTextSentimentEvaluationMetrics(): boolean;
  clearTextSentimentEvaluationMetrics(): void;

  getTextExtractionEvaluationMetrics(): google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionEvaluationMetrics | undefined;
  setTextExtractionEvaluationMetrics(value?: google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionEvaluationMetrics): void;
  hasTextExtractionEvaluationMetrics(): boolean;
  clearTextExtractionEvaluationMetrics(): void;

  getName(): string;
  setName(value: string): void;

  getAnnotationSpecId(): string;
  setAnnotationSpecId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getEvaluatedExampleCount(): number;
  setEvaluatedExampleCount(value: number): void;

  getMetricsCase(): ModelEvaluation.MetricsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelEvaluation.AsObject;
  static toObject(includeInstance: boolean, msg: ModelEvaluation): ModelEvaluation.AsObject;
  static serializeBinaryToWriter(message: ModelEvaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelEvaluation;
  static deserializeBinaryFromReader(message: ModelEvaluation, reader: jspb.BinaryReader): ModelEvaluation;
}

export namespace ModelEvaluation {
  export type AsObject = {
    classificationEvaluationMetrics?: google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.AsObject,
    regressionEvaluationMetrics?: google_cloud_automl_v1beta1_regression_pb.RegressionEvaluationMetrics.AsObject,
    translationEvaluationMetrics?: google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics.AsObject,
    imageObjectDetectionEvaluationMetrics?: google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionEvaluationMetrics.AsObject,
    videoObjectTrackingEvaluationMetrics?: google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingEvaluationMetrics.AsObject,
    textSentimentEvaluationMetrics?: google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentEvaluationMetrics.AsObject,
    textExtractionEvaluationMetrics?: google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionEvaluationMetrics.AsObject,
    name: string,
    annotationSpecId: string,
    displayName: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    evaluatedExampleCount: number,
  }

  export enum MetricsCase { 
    METRICS_NOT_SET = 0,
    CLASSIFICATION_EVALUATION_METRICS = 8,
    REGRESSION_EVALUATION_METRICS = 24,
    TRANSLATION_EVALUATION_METRICS = 9,
    IMAGE_OBJECT_DETECTION_EVALUATION_METRICS = 12,
    VIDEO_OBJECT_TRACKING_EVALUATION_METRICS = 14,
    TEXT_SENTIMENT_EVALUATION_METRICS = 11,
    TEXT_EXTRACTION_EVALUATION_METRICS = 13,
  }
}

