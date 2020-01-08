/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.resultstore.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_resultstore_v2_action_pb from '../../../../google/devtools/resultstore/v2/action_pb';
import * as google_devtools_resultstore_v2_configuration_pb from '../../../../google/devtools/resultstore/v2/configuration_pb';
import * as google_devtools_resultstore_v2_configured_target_pb from '../../../../google/devtools/resultstore/v2/configured_target_pb';
import * as google_devtools_resultstore_v2_file_set_pb from '../../../../google/devtools/resultstore/v2/file_set_pb';
import * as google_devtools_resultstore_v2_invocation_pb from '../../../../google/devtools/resultstore/v2/invocation_pb';
import * as google_devtools_resultstore_v2_target_pb from '../../../../google/devtools/resultstore/v2/target_pb';
import * as google_devtools_resultstore_v2_upload_metadata_pb from '../../../../google/devtools/resultstore/v2/upload_metadata_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateActionRequest,
  CreateConfigurationRequest,
  CreateConfiguredTargetRequest,
  CreateFileSetRequest,
  CreateInvocationRequest,
  CreateTargetRequest,
  DeleteInvocationRequest,
  FinalizeConfiguredTargetRequest,
  FinalizeConfiguredTargetResponse,
  FinalizeInvocationRequest,
  FinalizeInvocationResponse,
  FinalizeTargetRequest,
  FinalizeTargetResponse,
  GetInvocationUploadMetadataRequest,
  MergeActionRequest,
  MergeConfiguredTargetRequest,
  MergeFileSetRequest,
  MergeInvocationRequest,
  MergeTargetRequest,
  TouchInvocationRequest,
  TouchInvocationResponse,
  UpdateActionRequest,
  UpdateConfigurationRequest,
  UpdateConfiguredTargetRequest,
  UpdateFileSetRequest,
  UpdateInvocationRequest,
  UpdateTargetRequest,
  UploadBatchRequest,
  UploadBatchResponse} from './resultstore_upload_pb';

export class ResultStoreUploadClient {
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

  methodInfoCreateInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_invocation_pb.Invocation,
    (request: CreateInvocationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
  );

  createInvocation(
    request: CreateInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_invocation_pb.Invocation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateInvocation',
      request,
      metadata || {},
      this.methodInfoCreateInvocation,
      callback);
  }

  methodInfoUpdateInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_invocation_pb.Invocation,
    (request: UpdateInvocationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
  );

  updateInvocation(
    request: UpdateInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_invocation_pb.Invocation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateInvocation',
      request,
      metadata || {},
      this.methodInfoUpdateInvocation,
      callback);
  }

  methodInfoMergeInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_invocation_pb.Invocation,
    (request: MergeInvocationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
  );

  mergeInvocation(
    request: MergeInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_invocation_pb.Invocation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/MergeInvocation',
      request,
      metadata || {},
      this.methodInfoMergeInvocation,
      callback);
  }

  methodInfoTouchInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    TouchInvocationResponse,
    (request: TouchInvocationRequest) => {
      return request.serializeBinary();
    },
    TouchInvocationResponse.deserializeBinary
  );

  touchInvocation(
    request: TouchInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TouchInvocationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/TouchInvocation',
      request,
      metadata || {},
      this.methodInfoTouchInvocation,
      callback);
  }

  methodInfoFinalizeInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    FinalizeInvocationResponse,
    (request: FinalizeInvocationRequest) => {
      return request.serializeBinary();
    },
    FinalizeInvocationResponse.deserializeBinary
  );

  finalizeInvocation(
    request: FinalizeInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FinalizeInvocationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeInvocation',
      request,
      metadata || {},
      this.methodInfoFinalizeInvocation,
      callback);
  }

  methodInfoDeleteInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteInvocationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteInvocation(
    request: DeleteInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/DeleteInvocation',
      request,
      metadata || {},
      this.methodInfoDeleteInvocation,
      callback);
  }

  methodInfoCreateTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_target_pb.Target,
    (request: CreateTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
  );

  createTarget(
    request: CreateTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_target_pb.Target) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateTarget',
      request,
      metadata || {},
      this.methodInfoCreateTarget,
      callback);
  }

  methodInfoUpdateTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_target_pb.Target,
    (request: UpdateTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
  );

  updateTarget(
    request: UpdateTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_target_pb.Target) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateTarget',
      request,
      metadata || {},
      this.methodInfoUpdateTarget,
      callback);
  }

  methodInfoMergeTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_target_pb.Target,
    (request: MergeTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
  );

  mergeTarget(
    request: MergeTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_target_pb.Target) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/MergeTarget',
      request,
      metadata || {},
      this.methodInfoMergeTarget,
      callback);
  }

  methodInfoFinalizeTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    FinalizeTargetResponse,
    (request: FinalizeTargetRequest) => {
      return request.serializeBinary();
    },
    FinalizeTargetResponse.deserializeBinary
  );

  finalizeTarget(
    request: FinalizeTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FinalizeTargetResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeTarget',
      request,
      metadata || {},
      this.methodInfoFinalizeTarget,
      callback);
  }

  methodInfoCreateConfiguredTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    (request: CreateConfiguredTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
  );

  createConfiguredTarget(
    request: CreateConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateConfiguredTarget',
      request,
      metadata || {},
      this.methodInfoCreateConfiguredTarget,
      callback);
  }

  methodInfoUpdateConfiguredTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    (request: UpdateConfiguredTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
  );

  updateConfiguredTarget(
    request: UpdateConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateConfiguredTarget',
      request,
      metadata || {},
      this.methodInfoUpdateConfiguredTarget,
      callback);
  }

  methodInfoMergeConfiguredTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    (request: MergeConfiguredTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
  );

  mergeConfiguredTarget(
    request: MergeConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/MergeConfiguredTarget',
      request,
      metadata || {},
      this.methodInfoMergeConfiguredTarget,
      callback);
  }

  methodInfoFinalizeConfiguredTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    FinalizeConfiguredTargetResponse,
    (request: FinalizeConfiguredTargetRequest) => {
      return request.serializeBinary();
    },
    FinalizeConfiguredTargetResponse.deserializeBinary
  );

  finalizeConfiguredTarget(
    request: FinalizeConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FinalizeConfiguredTargetResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeConfiguredTarget',
      request,
      metadata || {},
      this.methodInfoFinalizeConfiguredTarget,
      callback);
  }

  methodInfoCreateAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_action_pb.Action,
    (request: CreateActionRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
  );

  createAction(
    request: CreateActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_action_pb.Action) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateAction',
      request,
      metadata || {},
      this.methodInfoCreateAction,
      callback);
  }

  methodInfoUpdateAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_action_pb.Action,
    (request: UpdateActionRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
  );

  updateAction(
    request: UpdateActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_action_pb.Action) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateAction',
      request,
      metadata || {},
      this.methodInfoUpdateAction,
      callback);
  }

  methodInfoMergeAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_action_pb.Action,
    (request: MergeActionRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
  );

  mergeAction(
    request: MergeActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_action_pb.Action) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/MergeAction',
      request,
      metadata || {},
      this.methodInfoMergeAction,
      callback);
  }

  methodInfoCreateConfiguration = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configuration_pb.Configuration,
    (request: CreateConfigurationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary
  );

  createConfiguration(
    request: CreateConfigurationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configuration_pb.Configuration) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateConfiguration',
      request,
      metadata || {},
      this.methodInfoCreateConfiguration,
      callback);
  }

  methodInfoUpdateConfiguration = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configuration_pb.Configuration,
    (request: UpdateConfigurationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary
  );

  updateConfiguration(
    request: UpdateConfigurationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configuration_pb.Configuration) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateConfiguration',
      request,
      metadata || {},
      this.methodInfoUpdateConfiguration,
      callback);
  }

  methodInfoCreateFileSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_file_set_pb.FileSet,
    (request: CreateFileSetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
  );

  createFileSet(
    request: CreateFileSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_file_set_pb.FileSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/CreateFileSet',
      request,
      metadata || {},
      this.methodInfoCreateFileSet,
      callback);
  }

  methodInfoUpdateFileSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_file_set_pb.FileSet,
    (request: UpdateFileSetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
  );

  updateFileSet(
    request: UpdateFileSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_file_set_pb.FileSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateFileSet',
      request,
      metadata || {},
      this.methodInfoUpdateFileSet,
      callback);
  }

  methodInfoMergeFileSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_file_set_pb.FileSet,
    (request: MergeFileSetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
  );

  mergeFileSet(
    request: MergeFileSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_file_set_pb.FileSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/MergeFileSet',
      request,
      metadata || {},
      this.methodInfoMergeFileSet,
      callback);
  }

  methodInfoUploadBatch = new grpcWeb.AbstractClientBase.MethodInfo(
    UploadBatchResponse,
    (request: UploadBatchRequest) => {
      return request.serializeBinary();
    },
    UploadBatchResponse.deserializeBinary
  );

  uploadBatch(
    request: UploadBatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UploadBatchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/UploadBatch',
      request,
      metadata || {},
      this.methodInfoUploadBatch,
      callback);
  }

  methodInfoGetInvocationUploadMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata,
    (request: GetInvocationUploadMetadataRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata.deserializeBinary
  );

  getInvocationUploadMetadata(
    request: GetInvocationUploadMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreUpload/GetInvocationUploadMetadata',
      request,
      metadata || {},
      this.methodInfoGetInvocationUploadMetadata,
      callback);
  }

}

