import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_automl_v1_annotation_payload_pb from '../../../../google/cloud/automl/v1/annotation_payload_pb';
import * as google_cloud_automl_v1_annotation_spec_pb from '../../../../google/cloud/automl/v1/annotation_spec_pb';
import * as google_cloud_automl_v1_dataset_pb from '../../../../google/cloud/automl/v1/dataset_pb';
import * as google_cloud_automl_v1_image_pb from '../../../../google/cloud/automl/v1/image_pb';
import * as google_cloud_automl_v1_io_pb from '../../../../google/cloud/automl/v1/io_pb';
import * as google_cloud_automl_v1_model_pb from '../../../../google/cloud/automl/v1/model_pb';
import * as google_cloud_automl_v1_model_evaluation_pb from '../../../../google/cloud/automl/v1/model_evaluation_pb';
import * as google_cloud_automl_v1_operations_pb from '../../../../google/cloud/automl/v1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class CreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDataset(): google_cloud_automl_v1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_automl_v1_dataset_pb.Dataset): void;
  hasDataset(): boolean;
  clearDataset(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    parent: string,
    dataset?: google_cloud_automl_v1_dataset_pb.Dataset.AsObject,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  getDatasetsList(): Array<google_cloud_automl_v1_dataset_pb.Dataset>;
  setDatasetsList(value: Array<google_cloud_automl_v1_dataset_pb.Dataset>): void;
  clearDatasetsList(): void;
  addDatasets(value?: google_cloud_automl_v1_dataset_pb.Dataset, index?: number): google_cloud_automl_v1_dataset_pb.Dataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    datasetsList: Array<google_cloud_automl_v1_dataset_pb.Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  getDataset(): google_cloud_automl_v1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_automl_v1_dataset_pb.Dataset): void;
  hasDataset(): boolean;
  clearDataset(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    dataset?: google_cloud_automl_v1_dataset_pb.Dataset.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ImportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getInputConfig(): google_cloud_automl_v1_io_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1_io_pb.InputConfig): void;
  hasInputConfig(): boolean;
  clearInputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataRequest): ImportDataRequest.AsObject;
  static serializeBinaryToWriter(message: ImportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataRequest;
  static deserializeBinaryFromReader(message: ImportDataRequest, reader: jspb.BinaryReader): ImportDataRequest;
}

export namespace ImportDataRequest {
  export type AsObject = {
    name: string,
    inputConfig?: google_cloud_automl_v1_io_pb.InputConfig.AsObject,
  }
}

export class ExportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOutputConfig(): google_cloud_automl_v1_io_pb.OutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1_io_pb.OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataRequest): ExportDataRequest.AsObject;
  static serializeBinaryToWriter(message: ExportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataRequest;
  static deserializeBinaryFromReader(message: ExportDataRequest, reader: jspb.BinaryReader): ExportDataRequest;
}

export namespace ExportDataRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1_io_pb.OutputConfig.AsObject,
  }
}

export class GetAnnotationSpecRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationSpecRequest): GetAnnotationSpecRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationSpecRequest;
  static deserializeBinaryFromReader(message: GetAnnotationSpecRequest, reader: jspb.BinaryReader): GetAnnotationSpecRequest;
}

export namespace GetAnnotationSpecRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateModelRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getModel(): google_cloud_automl_v1_model_pb.Model | undefined;
  setModel(value?: google_cloud_automl_v1_model_pb.Model): void;
  hasModel(): boolean;
  clearModel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    parent: string,
    model?: google_cloud_automl_v1_model_pb.Model.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  getModelList(): Array<google_cloud_automl_v1_model_pb.Model>;
  setModelList(value: Array<google_cloud_automl_v1_model_pb.Model>): void;
  clearModelList(): void;
  addModel(value?: google_cloud_automl_v1_model_pb.Model, index?: number): google_cloud_automl_v1_model_pb.Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelList: Array<google_cloud_automl_v1_model_pb.Model.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateModelRequest extends jspb.Message {
  getModel(): google_cloud_automl_v1_model_pb.Model | undefined;
  setModel(value?: google_cloud_automl_v1_model_pb.Model): void;
  hasModel(): boolean;
  clearModel(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelRequest): UpdateModelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelRequest;
  static deserializeBinaryFromReader(message: UpdateModelRequest, reader: jspb.BinaryReader): UpdateModelRequest;
}

export namespace UpdateModelRequest {
  export type AsObject = {
    model?: google_cloud_automl_v1_model_pb.Model.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeployModelRequest extends jspb.Message {
  getImageObjectDetectionModelDeploymentMetadata(): google_cloud_automl_v1_image_pb.ImageObjectDetectionModelDeploymentMetadata | undefined;
  setImageObjectDetectionModelDeploymentMetadata(value?: google_cloud_automl_v1_image_pb.ImageObjectDetectionModelDeploymentMetadata): void;
  hasImageObjectDetectionModelDeploymentMetadata(): boolean;
  clearImageObjectDetectionModelDeploymentMetadata(): void;

  getImageClassificationModelDeploymentMetadata(): google_cloud_automl_v1_image_pb.ImageClassificationModelDeploymentMetadata | undefined;
  setImageClassificationModelDeploymentMetadata(value?: google_cloud_automl_v1_image_pb.ImageClassificationModelDeploymentMetadata): void;
  hasImageClassificationModelDeploymentMetadata(): boolean;
  clearImageClassificationModelDeploymentMetadata(): void;

  getName(): string;
  setName(value: string): void;

  getModelDeploymentMetadataCase(): DeployModelRequest.ModelDeploymentMetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelRequest): DeployModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelRequest;
  static deserializeBinaryFromReader(message: DeployModelRequest, reader: jspb.BinaryReader): DeployModelRequest;
}

export namespace DeployModelRequest {
  export type AsObject = {
    imageObjectDetectionModelDeploymentMetadata?: google_cloud_automl_v1_image_pb.ImageObjectDetectionModelDeploymentMetadata.AsObject,
    imageClassificationModelDeploymentMetadata?: google_cloud_automl_v1_image_pb.ImageClassificationModelDeploymentMetadata.AsObject,
    name: string,
  }

  export enum ModelDeploymentMetadataCase { 
    MODEL_DEPLOYMENT_METADATA_NOT_SET = 0,
    IMAGE_OBJECT_DETECTION_MODEL_DEPLOYMENT_METADATA = 2,
    IMAGE_CLASSIFICATION_MODEL_DEPLOYMENT_METADATA = 4,
  }
}

export class UndeployModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployModelRequest): UndeployModelRequest.AsObject;
  static serializeBinaryToWriter(message: UndeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployModelRequest;
  static deserializeBinaryFromReader(message: UndeployModelRequest, reader: jspb.BinaryReader): UndeployModelRequest;
}

export namespace UndeployModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ExportModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOutputConfig(): google_cloud_automl_v1_io_pb.ModelExportOutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1_io_pb.ModelExportOutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportModelRequest): ExportModelRequest.AsObject;
  static serializeBinaryToWriter(message: ExportModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportModelRequest;
  static deserializeBinaryFromReader(message: ExportModelRequest, reader: jspb.BinaryReader): ExportModelRequest;
}

export namespace ExportModelRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1_io_pb.ModelExportOutputConfig.AsObject,
  }
}

export class GetModelEvaluationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelEvaluationRequest): GetModelEvaluationRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelEvaluationRequest;
  static deserializeBinaryFromReader(message: GetModelEvaluationRequest, reader: jspb.BinaryReader): GetModelEvaluationRequest;
}

export namespace GetModelEvaluationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelEvaluationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsRequest): ListModelEvaluationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListModelEvaluationsRequest, reader: jspb.BinaryReader): ListModelEvaluationsRequest;
}

export namespace ListModelEvaluationsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelEvaluationsResponse extends jspb.Message {
  getModelEvaluationList(): Array<google_cloud_automl_v1_model_evaluation_pb.ModelEvaluation>;
  setModelEvaluationList(value: Array<google_cloud_automl_v1_model_evaluation_pb.ModelEvaluation>): void;
  clearModelEvaluationList(): void;
  addModelEvaluation(value?: google_cloud_automl_v1_model_evaluation_pb.ModelEvaluation, index?: number): google_cloud_automl_v1_model_evaluation_pb.ModelEvaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsResponse): ListModelEvaluationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListModelEvaluationsResponse, reader: jspb.BinaryReader): ListModelEvaluationsResponse;
}

export namespace ListModelEvaluationsResponse {
  export type AsObject = {
    modelEvaluationList: Array<google_cloud_automl_v1_model_evaluation_pb.ModelEvaluation.AsObject>,
    nextPageToken: string,
  }
}

