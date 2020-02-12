/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.datalabeling.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_cloud_datalabeling_v1beta1_annotation_pb from '../../../../google/cloud/datalabeling/v1beta1/annotation_pb';
import * as google_cloud_datalabeling_v1beta1_annotation_spec_set_pb from '../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb';
import * as google_cloud_datalabeling_v1beta1_dataset_pb from '../../../../google/cloud/datalabeling/v1beta1/dataset_pb';
import * as google_cloud_datalabeling_v1beta1_evaluation_pb from '../../../../google/cloud/datalabeling/v1beta1/evaluation_pb';
import * as google_cloud_datalabeling_v1beta1_evaluation_job_pb from '../../../../google/cloud/datalabeling/v1beta1/evaluation_job_pb';
import * as google_cloud_datalabeling_v1beta1_human_annotation_config_pb from '../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb';
import * as google_cloud_datalabeling_v1beta1_instruction_pb from '../../../../google/cloud/datalabeling/v1beta1/instruction_pb';
import * as google_cloud_datalabeling_v1beta1_operations_pb from '../../../../google/cloud/datalabeling/v1beta1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateAnnotationSpecSetRequest,
  CreateDatasetRequest,
  CreateEvaluationJobRequest,
  CreateInstructionRequest,
  DeleteAnnotatedDatasetRequest,
  DeleteAnnotationSpecSetRequest,
  DeleteDatasetRequest,
  DeleteEvaluationJobRequest,
  DeleteInstructionRequest,
  ExportDataRequest,
  GetAnnotatedDatasetRequest,
  GetAnnotationSpecSetRequest,
  GetDataItemRequest,
  GetDatasetRequest,
  GetEvaluationJobRequest,
  GetEvaluationRequest,
  GetExampleRequest,
  GetInstructionRequest,
  ImportDataRequest,
  LabelImageRequest,
  LabelTextRequest,
  LabelVideoRequest,
  ListAnnotatedDatasetsRequest,
  ListAnnotatedDatasetsResponse,
  ListAnnotationSpecSetsRequest,
  ListAnnotationSpecSetsResponse,
  ListDataItemsRequest,
  ListDataItemsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListEvaluationJobsRequest,
  ListEvaluationJobsResponse,
  ListExamplesRequest,
  ListExamplesResponse,
  ListInstructionsRequest,
  ListInstructionsResponse,
  PauseEvaluationJobRequest,
  ResumeEvaluationJobRequest,
  SearchEvaluationsRequest,
  SearchEvaluationsResponse,
  SearchExampleComparisonsRequest,
  SearchExampleComparisonsResponse,
  UpdateEvaluationJobRequest} from './data_labeling_service_pb';

export class DataLabelingServiceClient {
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
    google_cloud_datalabeling_v1beta1_dataset_pb.Dataset,
    (request: CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.deserializeBinary
  );

  createDataset(
    request: CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateDataset',
      request,
      metadata || {},
      this.methodInfoCreateDataset,
      callback);
  }

  methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_dataset_pb.Dataset,
    (request: GetDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.deserializeBinary
  );

  getDataset(
    request: GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetDataset',
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
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListDatasets',
      request,
      metadata || {},
      this.methodInfoListDatasets,
      callback);
  }

  methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataset(
    request: DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteDataset',
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
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ImportData',
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
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ExportData',
      request,
      metadata || {},
      this.methodInfoExportData,
      callback);
  }

  methodInfoGetDataItem = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_dataset_pb.DataItem,
    (request: GetDataItemRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.deserializeBinary
  );

  getDataItem(
    request: GetDataItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_dataset_pb.DataItem) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetDataItem',
      request,
      metadata || {},
      this.methodInfoGetDataItem,
      callback);
  }

  methodInfoListDataItems = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDataItemsResponse,
    (request: ListDataItemsRequest) => {
      return request.serializeBinary();
    },
    ListDataItemsResponse.deserializeBinary
  );

  listDataItems(
    request: ListDataItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDataItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListDataItems',
      request,
      metadata || {},
      this.methodInfoListDataItems,
      callback);
  }

  methodInfoGetAnnotatedDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset,
    (request: GetAnnotatedDatasetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.deserializeBinary
  );

  getAnnotatedDataset(
    request: GetAnnotatedDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetAnnotatedDataset',
      request,
      metadata || {},
      this.methodInfoGetAnnotatedDataset,
      callback);
  }

  methodInfoListAnnotatedDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAnnotatedDatasetsResponse,
    (request: ListAnnotatedDatasetsRequest) => {
      return request.serializeBinary();
    },
    ListAnnotatedDatasetsResponse.deserializeBinary
  );

  listAnnotatedDatasets(
    request: ListAnnotatedDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAnnotatedDatasetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListAnnotatedDatasets',
      request,
      metadata || {},
      this.methodInfoListAnnotatedDatasets,
      callback);
  }

  methodInfoDeleteAnnotatedDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAnnotatedDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAnnotatedDataset(
    request: DeleteAnnotatedDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteAnnotatedDataset',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotatedDataset,
      callback);
  }

  methodInfoLabelImage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: LabelImageRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  labelImage(
    request: LabelImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelImage',
      request,
      metadata || {},
      this.methodInfoLabelImage,
      callback);
  }

  methodInfoLabelVideo = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: LabelVideoRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  labelVideo(
    request: LabelVideoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelVideo',
      request,
      metadata || {},
      this.methodInfoLabelVideo,
      callback);
  }

  methodInfoLabelText = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: LabelTextRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  labelText(
    request: LabelTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelText',
      request,
      metadata || {},
      this.methodInfoLabelText,
      callback);
  }

  methodInfoGetExample = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_dataset_pb.Example,
    (request: GetExampleRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_dataset_pb.Example.deserializeBinary
  );

  getExample(
    request: GetExampleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_dataset_pb.Example) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetExample',
      request,
      metadata || {},
      this.methodInfoGetExample,
      callback);
  }

  methodInfoListExamples = new grpcWeb.AbstractClientBase.MethodInfo(
    ListExamplesResponse,
    (request: ListExamplesRequest) => {
      return request.serializeBinary();
    },
    ListExamplesResponse.deserializeBinary
  );

  listExamples(
    request: ListExamplesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListExamplesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListExamples',
      request,
      metadata || {},
      this.methodInfoListExamples,
      callback);
  }

  methodInfoCreateAnnotationSpecSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet,
    (request: CreateAnnotationSpecSetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.deserializeBinary
  );

  createAnnotationSpecSet(
    request: CreateAnnotationSpecSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateAnnotationSpecSet',
      request,
      metadata || {},
      this.methodInfoCreateAnnotationSpecSet,
      callback);
  }

  methodInfoGetAnnotationSpecSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet,
    (request: GetAnnotationSpecSetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.deserializeBinary
  );

  getAnnotationSpecSet(
    request: GetAnnotationSpecSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetAnnotationSpecSet',
      request,
      metadata || {},
      this.methodInfoGetAnnotationSpecSet,
      callback);
  }

  methodInfoListAnnotationSpecSets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAnnotationSpecSetsResponse,
    (request: ListAnnotationSpecSetsRequest) => {
      return request.serializeBinary();
    },
    ListAnnotationSpecSetsResponse.deserializeBinary
  );

  listAnnotationSpecSets(
    request: ListAnnotationSpecSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAnnotationSpecSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListAnnotationSpecSets',
      request,
      metadata || {},
      this.methodInfoListAnnotationSpecSets,
      callback);
  }

  methodInfoDeleteAnnotationSpecSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAnnotationSpecSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAnnotationSpecSet(
    request: DeleteAnnotationSpecSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteAnnotationSpecSet',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotationSpecSet,
      callback);
  }

  methodInfoCreateInstruction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateInstructionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createInstruction(
    request: CreateInstructionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateInstruction',
      request,
      metadata || {},
      this.methodInfoCreateInstruction,
      callback);
  }

  methodInfoGetInstruction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_instruction_pb.Instruction,
    (request: GetInstructionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.deserializeBinary
  );

  getInstruction(
    request: GetInstructionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_instruction_pb.Instruction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetInstruction',
      request,
      metadata || {},
      this.methodInfoGetInstruction,
      callback);
  }

  methodInfoListInstructions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInstructionsResponse,
    (request: ListInstructionsRequest) => {
      return request.serializeBinary();
    },
    ListInstructionsResponse.deserializeBinary
  );

  listInstructions(
    request: ListInstructionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInstructionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListInstructions',
      request,
      metadata || {},
      this.methodInfoListInstructions,
      callback);
  }

  methodInfoDeleteInstruction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteInstructionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteInstruction(
    request: DeleteInstructionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteInstruction',
      request,
      metadata || {},
      this.methodInfoDeleteInstruction,
      callback);
  }

  methodInfoGetEvaluation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation,
    (request: GetEvaluationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.deserializeBinary
  );

  getEvaluation(
    request: GetEvaluationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetEvaluation',
      request,
      metadata || {},
      this.methodInfoGetEvaluation,
      callback);
  }

  methodInfoSearchEvaluations = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchEvaluationsResponse,
    (request: SearchEvaluationsRequest) => {
      return request.serializeBinary();
    },
    SearchEvaluationsResponse.deserializeBinary
  );

  searchEvaluations(
    request: SearchEvaluationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchEvaluationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/SearchEvaluations',
      request,
      metadata || {},
      this.methodInfoSearchEvaluations,
      callback);
  }

  methodInfoSearchExampleComparisons = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchExampleComparisonsResponse,
    (request: SearchExampleComparisonsRequest) => {
      return request.serializeBinary();
    },
    SearchExampleComparisonsResponse.deserializeBinary
  );

  searchExampleComparisons(
    request: SearchExampleComparisonsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchExampleComparisonsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/SearchExampleComparisons',
      request,
      metadata || {},
      this.methodInfoSearchExampleComparisons,
      callback);
  }

  methodInfoCreateEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    (request: CreateEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinary
  );

  createEvaluationJob(
    request: CreateEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateEvaluationJob',
      request,
      metadata || {},
      this.methodInfoCreateEvaluationJob,
      callback);
  }

  methodInfoUpdateEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    (request: UpdateEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinary
  );

  updateEvaluationJob(
    request: UpdateEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/UpdateEvaluationJob',
      request,
      metadata || {},
      this.methodInfoUpdateEvaluationJob,
      callback);
  }

  methodInfoGetEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    (request: GetEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinary
  );

  getEvaluationJob(
    request: GetEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetEvaluationJob',
      request,
      metadata || {},
      this.methodInfoGetEvaluationJob,
      callback);
  }

  methodInfoPauseEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: PauseEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  pauseEvaluationJob(
    request: PauseEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/PauseEvaluationJob',
      request,
      metadata || {},
      this.methodInfoPauseEvaluationJob,
      callback);
  }

  methodInfoResumeEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ResumeEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resumeEvaluationJob(
    request: ResumeEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ResumeEvaluationJob',
      request,
      metadata || {},
      this.methodInfoResumeEvaluationJob,
      callback);
  }

  methodInfoDeleteEvaluationJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteEvaluationJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEvaluationJob(
    request: DeleteEvaluationJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteEvaluationJob',
      request,
      metadata || {},
      this.methodInfoDeleteEvaluationJob,
      callback);
  }

  methodInfoListEvaluationJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListEvaluationJobsResponse,
    (request: ListEvaluationJobsRequest) => {
      return request.serializeBinary();
    },
    ListEvaluationJobsResponse.deserializeBinary
  );

  listEvaluationJobs(
    request: ListEvaluationJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListEvaluationJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListEvaluationJobs',
      request,
      metadata || {},
      this.methodInfoListEvaluationJobs,
      callback);
  }

}

