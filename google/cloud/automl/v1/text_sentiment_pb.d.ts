import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1_classification_pb from '../../../../google/cloud/automl/v1/classification_pb';

export class TextSentimentAnnotation extends jspb.Message {
  getSentiment(): number;
  setSentiment(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSentimentAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextSentimentAnnotation): TextSentimentAnnotation.AsObject;
  static serializeBinaryToWriter(message: TextSentimentAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSentimentAnnotation;
  static deserializeBinaryFromReader(message: TextSentimentAnnotation, reader: jspb.BinaryReader): TextSentimentAnnotation;
}

export namespace TextSentimentAnnotation {
  export type AsObject = {
    sentiment: number,
  }
}

export class TextSentimentEvaluationMetrics extends jspb.Message {
  getPrecision(): number;
  setPrecision(value: number): void;

  getRecall(): number;
  setRecall(value: number): void;

  getF1Score(): number;
  setF1Score(value: number): void;

  getMeanAbsoluteError(): number;
  setMeanAbsoluteError(value: number): void;

  getMeanSquaredError(): number;
  setMeanSquaredError(value: number): void;

  getLinearKappa(): number;
  setLinearKappa(value: number): void;

  getQuadraticKappa(): number;
  setQuadraticKappa(value: number): void;

  getConfusionMatrix(): google_cloud_automl_v1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix | undefined;
  setConfusionMatrix(value?: google_cloud_automl_v1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix): void;
  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSentimentEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TextSentimentEvaluationMetrics): TextSentimentEvaluationMetrics.AsObject;
  static serializeBinaryToWriter(message: TextSentimentEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSentimentEvaluationMetrics;
  static deserializeBinaryFromReader(message: TextSentimentEvaluationMetrics, reader: jspb.BinaryReader): TextSentimentEvaluationMetrics;
}

export namespace TextSentimentEvaluationMetrics {
  export type AsObject = {
    precision: number,
    recall: number,
    f1Score: number,
    meanAbsoluteError: number,
    meanSquaredError: number,
    linearKappa: number,
    quadraticKappa: number,
    confusionMatrix?: google_cloud_automl_v1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix.AsObject,
  }
}

