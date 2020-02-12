/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_mutate_job_pb from '../../../../../google/ads/googleads/v1/resources/mutate_job_pb';
import * as google_ads_googleads_v1_services_google_ads_service_pb from '../../../../../google/ads/googleads/v1/services/google_ads_service_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  AddMutateJobOperationsRequest,
  AddMutateJobOperationsResponse,
  CreateMutateJobRequest,
  CreateMutateJobResponse,
  GetMutateJobRequest,
  ListMutateJobResultsRequest,
  ListMutateJobResultsResponse,
  RunMutateJobRequest} from './mutate_job_service_pb';

export class MutateJobServiceClient {
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

  methodInfoCreateMutateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateMutateJobResponse,
    (request: CreateMutateJobRequest) => {
      return request.serializeBinary();
    },
    CreateMutateJobResponse.deserializeBinary
  );

  createMutateJob(
    request: CreateMutateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateMutateJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MutateJobService/CreateMutateJob',
      request,
      metadata || {},
      this.methodInfoCreateMutateJob,
      callback);
  }

  methodInfoGetMutateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_mutate_job_pb.MutateJob,
    (request: GetMutateJobRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_mutate_job_pb.MutateJob.deserializeBinary
  );

  getMutateJob(
    request: GetMutateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_mutate_job_pb.MutateJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MutateJobService/GetMutateJob',
      request,
      metadata || {},
      this.methodInfoGetMutateJob,
      callback);
  }

  methodInfoListMutateJobResults = new grpcWeb.AbstractClientBase.MethodInfo(
    ListMutateJobResultsResponse,
    (request: ListMutateJobResultsRequest) => {
      return request.serializeBinary();
    },
    ListMutateJobResultsResponse.deserializeBinary
  );

  listMutateJobResults(
    request: ListMutateJobResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMutateJobResultsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MutateJobService/ListMutateJobResults',
      request,
      metadata || {},
      this.methodInfoListMutateJobResults,
      callback);
  }

  methodInfoRunMutateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RunMutateJobRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  runMutateJob(
    request: RunMutateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MutateJobService/RunMutateJob',
      request,
      metadata || {},
      this.methodInfoRunMutateJob,
      callback);
  }

  methodInfoAddMutateJobOperations = new grpcWeb.AbstractClientBase.MethodInfo(
    AddMutateJobOperationsResponse,
    (request: AddMutateJobOperationsRequest) => {
      return request.serializeBinary();
    },
    AddMutateJobOperationsResponse.deserializeBinary
  );

  addMutateJobOperations(
    request: AddMutateJobOperationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddMutateJobOperationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MutateJobService/AddMutateJobOperations',
      request,
      metadata || {},
      this.methodInfoAddMutateJobOperations,
      callback);
  }

}

