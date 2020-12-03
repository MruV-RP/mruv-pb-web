/**
 * @fileoverview gRPC-Web generated client stub for mruv.jobs
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as jobs_jobs_pb from '../jobs/jobs_pb';


export class MruVJobsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    jobs_jobs_pb.CreateJobResponse,
    (request: jobs_jobs_pb.CreateJobRequest) => {
      return request.serializeBinary();
    },
    jobs_jobs_pb.CreateJobResponse.deserializeBinary
  );

  createJob(
    request: jobs_jobs_pb.CreateJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<jobs_jobs_pb.CreateJobResponse>;

  createJob(
    request: jobs_jobs_pb.CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: jobs_jobs_pb.CreateJobResponse) => void): grpcWeb.ClientReadableStream<jobs_jobs_pb.CreateJobResponse>;

  createJob(
    request: jobs_jobs_pb.CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: jobs_jobs_pb.CreateJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.jobs.MruVJobsService/CreateJob',
        request,
        metadata || {},
        this.methodInfoCreateJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.jobs.MruVJobsService/CreateJob',
    request,
    metadata || {},
    this.methodInfoCreateJob);
  }

  methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(
    jobs_jobs_pb.GetJobResponse,
    (request: jobs_jobs_pb.GetJobRequest) => {
      return request.serializeBinary();
    },
    jobs_jobs_pb.GetJobResponse.deserializeBinary
  );

  getJob(
    request: jobs_jobs_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<jobs_jobs_pb.GetJobResponse>;

  getJob(
    request: jobs_jobs_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: jobs_jobs_pb.GetJobResponse) => void): grpcWeb.ClientReadableStream<jobs_jobs_pb.GetJobResponse>;

  getJob(
    request: jobs_jobs_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: jobs_jobs_pb.GetJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.jobs.MruVJobsService/GetJob',
        request,
        metadata || {},
        this.methodInfoGetJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.jobs.MruVJobsService/GetJob',
    request,
    metadata || {},
    this.methodInfoGetJob);
  }

  methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    jobs_jobs_pb.UpdateJobResponse,
    (request: jobs_jobs_pb.UpdateJobRequest) => {
      return request.serializeBinary();
    },
    jobs_jobs_pb.UpdateJobResponse.deserializeBinary
  );

  updateJob(
    request: jobs_jobs_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<jobs_jobs_pb.UpdateJobResponse>;

  updateJob(
    request: jobs_jobs_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: jobs_jobs_pb.UpdateJobResponse) => void): grpcWeb.ClientReadableStream<jobs_jobs_pb.UpdateJobResponse>;

  updateJob(
    request: jobs_jobs_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: jobs_jobs_pb.UpdateJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.jobs.MruVJobsService/UpdateJob',
        request,
        metadata || {},
        this.methodInfoUpdateJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.jobs.MruVJobsService/UpdateJob',
    request,
    metadata || {},
    this.methodInfoUpdateJob);
  }

  methodInfoDeleteJob = new grpcWeb.AbstractClientBase.MethodInfo(
    jobs_jobs_pb.DeleteJobResponse,
    (request: jobs_jobs_pb.DeleteJobRequest) => {
      return request.serializeBinary();
    },
    jobs_jobs_pb.DeleteJobResponse.deserializeBinary
  );

  deleteJob(
    request: jobs_jobs_pb.DeleteJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<jobs_jobs_pb.DeleteJobResponse>;

  deleteJob(
    request: jobs_jobs_pb.DeleteJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: jobs_jobs_pb.DeleteJobResponse) => void): grpcWeb.ClientReadableStream<jobs_jobs_pb.DeleteJobResponse>;

  deleteJob(
    request: jobs_jobs_pb.DeleteJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: jobs_jobs_pb.DeleteJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.jobs.MruVJobsService/DeleteJob',
        request,
        metadata || {},
        this.methodInfoDeleteJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.jobs.MruVJobsService/DeleteJob',
    request,
    metadata || {},
    this.methodInfoDeleteJob);
  }

}

