/**
 * @fileoverview gRPC-Web generated client stub for mruv.jobs
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateJobRequest,
  CreateJobResponse,
  DeleteJobRequest,
  DeleteJobResponse,
  GetJobRequest,
  GetJobResponse,
  UpdateJobRequest,
  UpdateJobResponse} from './jobs_pb';

export class MruVJobsServiceClient {
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

  methodInfoCreateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateJobResponse,
    (request: CreateJobRequest) => {
      return request.serializeBinary();
    },
    CreateJobResponse.deserializeBinary
  );

  createJob(
    request: CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.jobs.MruVJobsService/CreateJob',
      request,
      metadata || {},
      this.methodInfoCreateJob,
      callback);
  }

  methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(
    GetJobResponse,
    (request: GetJobRequest) => {
      return request.serializeBinary();
    },
    GetJobResponse.deserializeBinary
  );

  getJob(
    request: GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.jobs.MruVJobsService/GetJob',
      request,
      metadata || {},
      this.methodInfoGetJob,
      callback);
  }

  methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateJobResponse,
    (request: UpdateJobRequest) => {
      return request.serializeBinary();
    },
    UpdateJobResponse.deserializeBinary
  );

  updateJob(
    request: UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.jobs.MruVJobsService/UpdateJob',
      request,
      metadata || {},
      this.methodInfoUpdateJob,
      callback);
  }

  methodInfoDeleteJob = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteJobResponse,
    (request: DeleteJobRequest) => {
      return request.serializeBinary();
    },
    DeleteJobResponse.deserializeBinary
  );

  deleteJob(
    request: DeleteJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.jobs.MruVJobsService/DeleteJob',
      request,
      metadata || {},
      this.methodInfoDeleteJob,
      callback);
  }

}

