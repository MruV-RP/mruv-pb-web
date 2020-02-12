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
import * as google_devtools_resultstore_v2_download_metadata_pb from '../../../../google/devtools/resultstore/v2/download_metadata_pb';
import * as google_devtools_resultstore_v2_file_set_pb from '../../../../google/devtools/resultstore/v2/file_set_pb';
import * as google_devtools_resultstore_v2_invocation_pb from '../../../../google/devtools/resultstore/v2/invocation_pb';
import * as google_devtools_resultstore_v2_target_pb from '../../../../google/devtools/resultstore/v2/target_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  GetActionRequest,
  GetConfigurationRequest,
  GetConfiguredTargetRequest,
  GetFileSetRequest,
  GetInvocationDownloadMetadataRequest,
  GetInvocationRequest,
  GetTargetRequest,
  ListActionsRequest,
  ListActionsResponse,
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListConfiguredTargetsRequest,
  ListConfiguredTargetsResponse,
  ListFileSetsRequest,
  ListFileSetsResponse,
  ListTargetsRequest,
  ListTargetsResponse,
  SearchInvocationsRequest,
  SearchInvocationsResponse,
  TraverseFileSetsRequest,
  TraverseFileSetsResponse} from './resultstore_download_pb';

export class ResultStoreDownloadClient {
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

  methodInfoGetInvocation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_invocation_pb.Invocation,
    (request: GetInvocationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
  );

  getInvocation(
    request: GetInvocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_invocation_pb.Invocation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocation',
      request,
      metadata || {},
      this.methodInfoGetInvocation,
      callback);
  }

  methodInfoSearchInvocations = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchInvocationsResponse,
    (request: SearchInvocationsRequest) => {
      return request.serializeBinary();
    },
    SearchInvocationsResponse.deserializeBinary
  );

  searchInvocations(
    request: SearchInvocationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchInvocationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/SearchInvocations',
      request,
      metadata || {},
      this.methodInfoSearchInvocations,
      callback);
  }

  methodInfoGetInvocationDownloadMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata,
    (request: GetInvocationDownloadMetadataRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata.deserializeBinary
  );

  getInvocationDownloadMetadata(
    request: GetInvocationDownloadMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocationDownloadMetadata',
      request,
      metadata || {},
      this.methodInfoGetInvocationDownloadMetadata,
      callback);
  }

  methodInfoGetConfiguration = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configuration_pb.Configuration,
    (request: GetConfigurationRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary
  );

  getConfiguration(
    request: GetConfigurationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configuration_pb.Configuration) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguration',
      request,
      metadata || {},
      this.methodInfoGetConfiguration,
      callback);
  }

  methodInfoListConfigurations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListConfigurationsResponse,
    (request: ListConfigurationsRequest) => {
      return request.serializeBinary();
    },
    ListConfigurationsResponse.deserializeBinary
  );

  listConfigurations(
    request: ListConfigurationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListConfigurationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfigurations',
      request,
      metadata || {},
      this.methodInfoListConfigurations,
      callback);
  }

  methodInfoGetTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_target_pb.Target,
    (request: GetTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
  );

  getTarget(
    request: GetTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_target_pb.Target) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetTarget',
      request,
      metadata || {},
      this.methodInfoGetTarget,
      callback);
  }

  methodInfoListTargets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTargetsResponse,
    (request: ListTargetsRequest) => {
      return request.serializeBinary();
    },
    ListTargetsResponse.deserializeBinary
  );

  listTargets(
    request: ListTargetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTargetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/ListTargets',
      request,
      metadata || {},
      this.methodInfoListTargets,
      callback);
  }

  methodInfoGetConfiguredTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    (request: GetConfiguredTargetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
  );

  getConfiguredTarget(
    request: GetConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguredTarget',
      request,
      metadata || {},
      this.methodInfoGetConfiguredTarget,
      callback);
  }

  methodInfoListConfiguredTargets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListConfiguredTargetsResponse,
    (request: ListConfiguredTargetsRequest) => {
      return request.serializeBinary();
    },
    ListConfiguredTargetsResponse.deserializeBinary
  );

  listConfiguredTargets(
    request: ListConfiguredTargetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListConfiguredTargetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfiguredTargets',
      request,
      metadata || {},
      this.methodInfoListConfiguredTargets,
      callback);
  }

  methodInfoGetAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_action_pb.Action,
    (request: GetActionRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
  );

  getAction(
    request: GetActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_action_pb.Action) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetAction',
      request,
      metadata || {},
      this.methodInfoGetAction,
      callback);
  }

  methodInfoListActions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListActionsResponse,
    (request: ListActionsRequest) => {
      return request.serializeBinary();
    },
    ListActionsResponse.deserializeBinary
  );

  listActions(
    request: ListActionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListActionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/ListActions',
      request,
      metadata || {},
      this.methodInfoListActions,
      callback);
  }

  methodInfoGetFileSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_resultstore_v2_file_set_pb.FileSet,
    (request: GetFileSetRequest) => {
      return request.serializeBinary();
    },
    google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
  );

  getFileSet(
    request: GetFileSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_file_set_pb.FileSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/GetFileSet',
      request,
      metadata || {},
      this.methodInfoGetFileSet,
      callback);
  }

  methodInfoListFileSets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListFileSetsResponse,
    (request: ListFileSetsRequest) => {
      return request.serializeBinary();
    },
    ListFileSetsResponse.deserializeBinary
  );

  listFileSets(
    request: ListFileSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFileSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/ListFileSets',
      request,
      metadata || {},
      this.methodInfoListFileSets,
      callback);
  }

  methodInfoTraverseFileSets = new grpcWeb.AbstractClientBase.MethodInfo(
    TraverseFileSetsResponse,
    (request: TraverseFileSetsRequest) => {
      return request.serializeBinary();
    },
    TraverseFileSetsResponse.deserializeBinary
  );

  traverseFileSets(
    request: TraverseFileSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TraverseFileSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreDownload/TraverseFileSets',
      request,
      metadata || {},
      this.methodInfoTraverseFileSets,
      callback);
  }

}

