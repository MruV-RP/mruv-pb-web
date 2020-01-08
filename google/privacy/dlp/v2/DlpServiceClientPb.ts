/**
 * @fileoverview gRPC-Web generated client stub for google.privacy.dlp.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_privacy_dlp_v2_storage_pb from '../../../../google/privacy/dlp/v2/storage_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_date_pb from '../../../../google/type/date_pb';
import * as google_type_dayofweek_pb from '../../../../google/type/dayofweek_pb';
import * as google_type_timeofday_pb from '../../../../google/type/timeofday_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  ActivateJobTriggerRequest,
  CancelDlpJobRequest,
  CreateDeidentifyTemplateRequest,
  CreateDlpJobRequest,
  CreateInspectTemplateRequest,
  CreateJobTriggerRequest,
  CreateStoredInfoTypeRequest,
  DeidentifyContentRequest,
  DeidentifyContentResponse,
  DeidentifyTemplate,
  DeleteDeidentifyTemplateRequest,
  DeleteDlpJobRequest,
  DeleteInspectTemplateRequest,
  DeleteJobTriggerRequest,
  DeleteStoredInfoTypeRequest,
  DlpJob,
  GetDeidentifyTemplateRequest,
  GetDlpJobRequest,
  GetInspectTemplateRequest,
  GetJobTriggerRequest,
  GetStoredInfoTypeRequest,
  InspectContentRequest,
  InspectContentResponse,
  InspectTemplate,
  JobTrigger,
  ListDeidentifyTemplatesRequest,
  ListDeidentifyTemplatesResponse,
  ListDlpJobsRequest,
  ListDlpJobsResponse,
  ListInfoTypesRequest,
  ListInfoTypesResponse,
  ListInspectTemplatesRequest,
  ListInspectTemplatesResponse,
  ListJobTriggersRequest,
  ListJobTriggersResponse,
  ListStoredInfoTypesRequest,
  ListStoredInfoTypesResponse,
  RedactImageRequest,
  RedactImageResponse,
  ReidentifyContentRequest,
  ReidentifyContentResponse,
  StoredInfoType,
  UpdateDeidentifyTemplateRequest,
  UpdateInspectTemplateRequest,
  UpdateJobTriggerRequest,
  UpdateStoredInfoTypeRequest} from './dlp_pb';

export class DlpServiceClient {
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

  methodInfoInspectContent = new grpcWeb.AbstractClientBase.MethodInfo(
    InspectContentResponse,
    (request: InspectContentRequest) => {
      return request.serializeBinary();
    },
    InspectContentResponse.deserializeBinary
  );

  inspectContent(
    request: InspectContentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InspectContentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/InspectContent',
      request,
      metadata || {},
      this.methodInfoInspectContent,
      callback);
  }

  methodInfoRedactImage = new grpcWeb.AbstractClientBase.MethodInfo(
    RedactImageResponse,
    (request: RedactImageRequest) => {
      return request.serializeBinary();
    },
    RedactImageResponse.deserializeBinary
  );

  redactImage(
    request: RedactImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RedactImageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/RedactImage',
      request,
      metadata || {},
      this.methodInfoRedactImage,
      callback);
  }

  methodInfoDeidentifyContent = new grpcWeb.AbstractClientBase.MethodInfo(
    DeidentifyContentResponse,
    (request: DeidentifyContentRequest) => {
      return request.serializeBinary();
    },
    DeidentifyContentResponse.deserializeBinary
  );

  deidentifyContent(
    request: DeidentifyContentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeidentifyContentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeidentifyContent',
      request,
      metadata || {},
      this.methodInfoDeidentifyContent,
      callback);
  }

  methodInfoReidentifyContent = new grpcWeb.AbstractClientBase.MethodInfo(
    ReidentifyContentResponse,
    (request: ReidentifyContentRequest) => {
      return request.serializeBinary();
    },
    ReidentifyContentResponse.deserializeBinary
  );

  reidentifyContent(
    request: ReidentifyContentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReidentifyContentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ReidentifyContent',
      request,
      metadata || {},
      this.methodInfoReidentifyContent,
      callback);
  }

  methodInfoListInfoTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInfoTypesResponse,
    (request: ListInfoTypesRequest) => {
      return request.serializeBinary();
    },
    ListInfoTypesResponse.deserializeBinary
  );

  listInfoTypes(
    request: ListInfoTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInfoTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListInfoTypes',
      request,
      metadata || {},
      this.methodInfoListInfoTypes,
      callback);
  }

  methodInfoCreateInspectTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    InspectTemplate,
    (request: CreateInspectTemplateRequest) => {
      return request.serializeBinary();
    },
    InspectTemplate.deserializeBinary
  );

  createInspectTemplate(
    request: CreateInspectTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InspectTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CreateInspectTemplate',
      request,
      metadata || {},
      this.methodInfoCreateInspectTemplate,
      callback);
  }

  methodInfoUpdateInspectTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    InspectTemplate,
    (request: UpdateInspectTemplateRequest) => {
      return request.serializeBinary();
    },
    InspectTemplate.deserializeBinary
  );

  updateInspectTemplate(
    request: UpdateInspectTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InspectTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/UpdateInspectTemplate',
      request,
      metadata || {},
      this.methodInfoUpdateInspectTemplate,
      callback);
  }

  methodInfoGetInspectTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    InspectTemplate,
    (request: GetInspectTemplateRequest) => {
      return request.serializeBinary();
    },
    InspectTemplate.deserializeBinary
  );

  getInspectTemplate(
    request: GetInspectTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InspectTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/GetInspectTemplate',
      request,
      metadata || {},
      this.methodInfoGetInspectTemplate,
      callback);
  }

  methodInfoListInspectTemplates = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInspectTemplatesResponse,
    (request: ListInspectTemplatesRequest) => {
      return request.serializeBinary();
    },
    ListInspectTemplatesResponse.deserializeBinary
  );

  listInspectTemplates(
    request: ListInspectTemplatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInspectTemplatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListInspectTemplates',
      request,
      metadata || {},
      this.methodInfoListInspectTemplates,
      callback);
  }

  methodInfoDeleteInspectTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteInspectTemplateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteInspectTemplate(
    request: DeleteInspectTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeleteInspectTemplate',
      request,
      metadata || {},
      this.methodInfoDeleteInspectTemplate,
      callback);
  }

  methodInfoCreateDeidentifyTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeidentifyTemplate,
    (request: CreateDeidentifyTemplateRequest) => {
      return request.serializeBinary();
    },
    DeidentifyTemplate.deserializeBinary
  );

  createDeidentifyTemplate(
    request: CreateDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeidentifyTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CreateDeidentifyTemplate',
      request,
      metadata || {},
      this.methodInfoCreateDeidentifyTemplate,
      callback);
  }

  methodInfoUpdateDeidentifyTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeidentifyTemplate,
    (request: UpdateDeidentifyTemplateRequest) => {
      return request.serializeBinary();
    },
    DeidentifyTemplate.deserializeBinary
  );

  updateDeidentifyTemplate(
    request: UpdateDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeidentifyTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/UpdateDeidentifyTemplate',
      request,
      metadata || {},
      this.methodInfoUpdateDeidentifyTemplate,
      callback);
  }

  methodInfoGetDeidentifyTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeidentifyTemplate,
    (request: GetDeidentifyTemplateRequest) => {
      return request.serializeBinary();
    },
    DeidentifyTemplate.deserializeBinary
  );

  getDeidentifyTemplate(
    request: GetDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeidentifyTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/GetDeidentifyTemplate',
      request,
      metadata || {},
      this.methodInfoGetDeidentifyTemplate,
      callback);
  }

  methodInfoListDeidentifyTemplates = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDeidentifyTemplatesResponse,
    (request: ListDeidentifyTemplatesRequest) => {
      return request.serializeBinary();
    },
    ListDeidentifyTemplatesResponse.deserializeBinary
  );

  listDeidentifyTemplates(
    request: ListDeidentifyTemplatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDeidentifyTemplatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListDeidentifyTemplates',
      request,
      metadata || {},
      this.methodInfoListDeidentifyTemplates,
      callback);
  }

  methodInfoDeleteDeidentifyTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDeidentifyTemplateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDeidentifyTemplate(
    request: DeleteDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeleteDeidentifyTemplate',
      request,
      metadata || {},
      this.methodInfoDeleteDeidentifyTemplate,
      callback);
  }

  methodInfoCreateJobTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    JobTrigger,
    (request: CreateJobTriggerRequest) => {
      return request.serializeBinary();
    },
    JobTrigger.deserializeBinary
  );

  createJobTrigger(
    request: CreateJobTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: JobTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CreateJobTrigger',
      request,
      metadata || {},
      this.methodInfoCreateJobTrigger,
      callback);
  }

  methodInfoUpdateJobTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    JobTrigger,
    (request: UpdateJobTriggerRequest) => {
      return request.serializeBinary();
    },
    JobTrigger.deserializeBinary
  );

  updateJobTrigger(
    request: UpdateJobTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: JobTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/UpdateJobTrigger',
      request,
      metadata || {},
      this.methodInfoUpdateJobTrigger,
      callback);
  }

  methodInfoGetJobTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    JobTrigger,
    (request: GetJobTriggerRequest) => {
      return request.serializeBinary();
    },
    JobTrigger.deserializeBinary
  );

  getJobTrigger(
    request: GetJobTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: JobTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/GetJobTrigger',
      request,
      metadata || {},
      this.methodInfoGetJobTrigger,
      callback);
  }

  methodInfoListJobTriggers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListJobTriggersResponse,
    (request: ListJobTriggersRequest) => {
      return request.serializeBinary();
    },
    ListJobTriggersResponse.deserializeBinary
  );

  listJobTriggers(
    request: ListJobTriggersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListJobTriggersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListJobTriggers',
      request,
      metadata || {},
      this.methodInfoListJobTriggers,
      callback);
  }

  methodInfoDeleteJobTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteJobTriggerRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteJobTrigger(
    request: DeleteJobTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeleteJobTrigger',
      request,
      metadata || {},
      this.methodInfoDeleteJobTrigger,
      callback);
  }

  methodInfoActivateJobTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    DlpJob,
    (request: ActivateJobTriggerRequest) => {
      return request.serializeBinary();
    },
    DlpJob.deserializeBinary
  );

  activateJobTrigger(
    request: ActivateJobTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DlpJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ActivateJobTrigger',
      request,
      metadata || {},
      this.methodInfoActivateJobTrigger,
      callback);
  }

  methodInfoCreateDlpJob = new grpcWeb.AbstractClientBase.MethodInfo(
    DlpJob,
    (request: CreateDlpJobRequest) => {
      return request.serializeBinary();
    },
    DlpJob.deserializeBinary
  );

  createDlpJob(
    request: CreateDlpJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DlpJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CreateDlpJob',
      request,
      metadata || {},
      this.methodInfoCreateDlpJob,
      callback);
  }

  methodInfoListDlpJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDlpJobsResponse,
    (request: ListDlpJobsRequest) => {
      return request.serializeBinary();
    },
    ListDlpJobsResponse.deserializeBinary
  );

  listDlpJobs(
    request: ListDlpJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDlpJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListDlpJobs',
      request,
      metadata || {},
      this.methodInfoListDlpJobs,
      callback);
  }

  methodInfoGetDlpJob = new grpcWeb.AbstractClientBase.MethodInfo(
    DlpJob,
    (request: GetDlpJobRequest) => {
      return request.serializeBinary();
    },
    DlpJob.deserializeBinary
  );

  getDlpJob(
    request: GetDlpJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DlpJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/GetDlpJob',
      request,
      metadata || {},
      this.methodInfoGetDlpJob,
      callback);
  }

  methodInfoDeleteDlpJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDlpJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDlpJob(
    request: DeleteDlpJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeleteDlpJob',
      request,
      metadata || {},
      this.methodInfoDeleteDlpJob,
      callback);
  }

  methodInfoCancelDlpJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CancelDlpJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  cancelDlpJob(
    request: CancelDlpJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CancelDlpJob',
      request,
      metadata || {},
      this.methodInfoCancelDlpJob,
      callback);
  }

  methodInfoCreateStoredInfoType = new grpcWeb.AbstractClientBase.MethodInfo(
    StoredInfoType,
    (request: CreateStoredInfoTypeRequest) => {
      return request.serializeBinary();
    },
    StoredInfoType.deserializeBinary
  );

  createStoredInfoType(
    request: CreateStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StoredInfoType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/CreateStoredInfoType',
      request,
      metadata || {},
      this.methodInfoCreateStoredInfoType,
      callback);
  }

  methodInfoUpdateStoredInfoType = new grpcWeb.AbstractClientBase.MethodInfo(
    StoredInfoType,
    (request: UpdateStoredInfoTypeRequest) => {
      return request.serializeBinary();
    },
    StoredInfoType.deserializeBinary
  );

  updateStoredInfoType(
    request: UpdateStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StoredInfoType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/UpdateStoredInfoType',
      request,
      metadata || {},
      this.methodInfoUpdateStoredInfoType,
      callback);
  }

  methodInfoGetStoredInfoType = new grpcWeb.AbstractClientBase.MethodInfo(
    StoredInfoType,
    (request: GetStoredInfoTypeRequest) => {
      return request.serializeBinary();
    },
    StoredInfoType.deserializeBinary
  );

  getStoredInfoType(
    request: GetStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StoredInfoType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/GetStoredInfoType',
      request,
      metadata || {},
      this.methodInfoGetStoredInfoType,
      callback);
  }

  methodInfoListStoredInfoTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListStoredInfoTypesResponse,
    (request: ListStoredInfoTypesRequest) => {
      return request.serializeBinary();
    },
    ListStoredInfoTypesResponse.deserializeBinary
  );

  listStoredInfoTypes(
    request: ListStoredInfoTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListStoredInfoTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/ListStoredInfoTypes',
      request,
      metadata || {},
      this.methodInfoListStoredInfoTypes,
      callback);
  }

  methodInfoDeleteStoredInfoType = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteStoredInfoTypeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteStoredInfoType(
    request: DeleteStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.privacy.dlp.v2.DlpService/DeleteStoredInfoType',
      request,
      metadata || {},
      this.methodInfoDeleteStoredInfoType,
      callback);
  }

}

