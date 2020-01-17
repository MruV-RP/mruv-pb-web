/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.automl.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_annotation_payload_pb from '../../../../google/cloud/automl/v1beta1/annotation_payload_pb';
import * as google_cloud_automl_v1beta1_annotation_spec_pb from '../../../../google/cloud/automl/v1beta1/annotation_spec_pb';
import * as google_cloud_automl_v1beta1_column_spec_pb from '../../../../google/cloud/automl/v1beta1/column_spec_pb';
import * as google_cloud_automl_v1beta1_dataset_pb from '../../../../google/cloud/automl/v1beta1/dataset_pb';
import * as google_cloud_automl_v1beta1_image_pb from '../../../../google/cloud/automl/v1beta1/image_pb';
import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';
import * as google_cloud_automl_v1beta1_model_pb from '../../../../google/cloud/automl/v1beta1/model_pb';
import * as google_cloud_automl_v1beta1_model_evaluation_pb from '../../../../google/cloud/automl/v1beta1/model_evaluation_pb';
import * as google_cloud_automl_v1beta1_operations_pb from '../../../../google/cloud/automl/v1beta1/operations_pb';
import * as google_cloud_automl_v1beta1_table_spec_pb from '../../../../google/cloud/automl/v1beta1/table_spec_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateDatasetRequest,
  CreateModelRequest,
  DeleteDatasetRequest,
  DeleteModelRequest,
  DeployModelRequest,
  ExportDataRequest,
  ExportEvaluatedExamplesRequest,
  ExportModelRequest,
  GetAnnotationSpecRequest,
  GetColumnSpecRequest,
  GetDatasetRequest,
  GetModelEvaluationRequest,
  GetModelRequest,
  GetTableSpecRequest,
  ImportDataRequest,
  ListColumnSpecsRequest,
  ListColumnSpecsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListModelEvaluationsRequest,
  ListModelEvaluationsResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListTableSpecsRequest,
  ListTableSpecsResponse,
  UndeployModelRequest,
  UpdateColumnSpecRequest,
  UpdateDatasetRequest,
  UpdateTableSpecRequest} from './service_pb';

export class AutoMlClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_dataset_pb.Dataset,
    (request: CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
  );

  createDataset(
    request: CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_dataset_pb.Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/CreateDataset',
      request,
      metadata || {},
      this.methodInfoCreateDataset,
      callback);
  }

  methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_dataset_pb.Dataset,
    (request: GetDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
  );

  getDataset(
    request: GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_dataset_pb.Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetDataset',
      request,
      metadata || {},
      this.methodInfoGetDataset,
      callback);
  }

  methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDatasetsResponse,
    (request: ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDatasetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ListDatasets',
      request,
      metadata || {},
      this.methodInfoListDatasets,
      callback);
  }

  methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_dataset_pb.Dataset,
    (request: UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
  );

  updateDataset(
    request: UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_dataset_pb.Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/UpdateDataset',
      request,
      metadata || {},
      this.methodInfoUpdateDataset,
      callback);
  }

  methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteDataset(
    request: DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/DeleteDataset',
      request,
      metadata || {},
      this.methodInfoDeleteDataset,
      callback);
  }

  methodInfoImportData = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportDataRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importData(
    request: ImportDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ImportData',
      request,
      metadata || {},
      this.methodInfoImportData,
      callback);
  }

  methodInfoExportData = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportDataRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportData(
    request: ExportDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ExportData',
      request,
      metadata || {},
      this.methodInfoExportData,
      callback);
  }

  methodInfoGetAnnotationSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec,
    (request: GetAnnotationSpecRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec.deserializeBinary
  );

  getAnnotationSpec(
    request: GetAnnotationSpecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetAnnotationSpec',
      request,
      metadata || {},
      this.methodInfoGetAnnotationSpec,
      callback);
  }

  methodInfoGetTableSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_table_spec_pb.TableSpec,
    (request: GetTableSpecRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_table_spec_pb.TableSpec.deserializeBinary
  );

  getTableSpec(
    request: GetTableSpecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_table_spec_pb.TableSpec) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetTableSpec',
      request,
      metadata || {},
      this.methodInfoGetTableSpec,
      callback);
  }

  methodInfoListTableSpecs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTableSpecsResponse,
    (request: ListTableSpecsRequest) => {
      return request.serializeBinary();
    },
    ListTableSpecsResponse.deserializeBinary
  );

  listTableSpecs(
    request: ListTableSpecsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTableSpecsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ListTableSpecs',
      request,
      metadata || {},
      this.methodInfoListTableSpecs,
      callback);
  }

  methodInfoUpdateTableSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_table_spec_pb.TableSpec,
    (request: UpdateTableSpecRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_table_spec_pb.TableSpec.deserializeBinary
  );

  updateTableSpec(
    request: UpdateTableSpecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_table_spec_pb.TableSpec) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/UpdateTableSpec',
      request,
      metadata || {},
      this.methodInfoUpdateTableSpec,
      callback);
  }

  methodInfoGetColumnSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec,
    (request: GetColumnSpecRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.deserializeBinary
  );

  getColumnSpec(
    request: GetColumnSpecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetColumnSpec',
      request,
      metadata || {},
      this.methodInfoGetColumnSpec,
      callback);
  }

  methodInfoListColumnSpecs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListColumnSpecsResponse,
    (request: ListColumnSpecsRequest) => {
      return request.serializeBinary();
    },
    ListColumnSpecsResponse.deserializeBinary
  );

  listColumnSpecs(
    request: ListColumnSpecsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListColumnSpecsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ListColumnSpecs',
      request,
      metadata || {},
      this.methodInfoListColumnSpecs,
      callback);
  }

  methodInfoUpdateColumnSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec,
    (request: UpdateColumnSpecRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.deserializeBinary
  );

  updateColumnSpec(
    request: UpdateColumnSpecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/UpdateColumnSpec',
      request,
      metadata || {},
      this.methodInfoUpdateColumnSpec,
      callback);
  }

  methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createModel(
    request: CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/CreateModel',
      request,
      metadata || {},
      this.methodInfoCreateModel,
      callback);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_model_pb.Model,
    (request: GetModelRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_model_pb.Model.deserializeBinary
  );

  getModel(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_model_pb.Model) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetModel',
      request,
      metadata || {},
      this.methodInfoGetModel,
      callback);
  }

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    ListModelsResponse,
    (request: ListModelsRequest) => {
      return request.serializeBinary();
    },
    ListModelsResponse.deserializeBinary
  );

  listModels(
    request: ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListModelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ListModels',
      request,
      metadata || {},
      this.methodInfoListModels,
      callback);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/DeleteModel',
      request,
      metadata || {},
      this.methodInfoDeleteModel,
      callback);
  }

  methodInfoDeployModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeployModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deployModel(
    request: DeployModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/DeployModel',
      request,
      metadata || {},
      this.methodInfoDeployModel,
      callback);
  }

  methodInfoUndeployModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UndeployModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  undeployModel(
    request: UndeployModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/UndeployModel',
      request,
      metadata || {},
      this.methodInfoUndeployModel,
      callback);
  }

  methodInfoExportModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportModel(
    request: ExportModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ExportModel',
      request,
      metadata || {},
      this.methodInfoExportModel,
      callback);
  }

  methodInfoExportEvaluatedExamples = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportEvaluatedExamplesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportEvaluatedExamples(
    request: ExportEvaluatedExamplesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ExportEvaluatedExamples',
      request,
      metadata || {},
      this.methodInfoExportEvaluatedExamples,
      callback);
  }

  methodInfoGetModelEvaluation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation,
    (request: GetModelEvaluationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.deserializeBinary
  );

  getModelEvaluation(
    request: GetModelEvaluationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/GetModelEvaluation',
      request,
      metadata || {},
      this.methodInfoGetModelEvaluation,
      callback);
  }

  methodInfoListModelEvaluations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListModelEvaluationsResponse,
    (request: ListModelEvaluationsRequest) => {
      return request.serializeBinary();
    },
    ListModelEvaluationsResponse.deserializeBinary
  );

  listModelEvaluations(
    request: ListModelEvaluationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListModelEvaluationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.AutoMl/ListModelEvaluations',
      request,
      metadata || {},
      this.methodInfoListModelEvaluations,
      callback);
  }

}
