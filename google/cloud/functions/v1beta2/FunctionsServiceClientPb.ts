/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.functions.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CallFunctionRequest,
  CallFunctionResponse,
  CloudFunction,
  CreateFunctionRequest,
  DeleteFunctionRequest,
  GenerateDownloadUrlRequest,
  GenerateDownloadUrlResponse,
  GenerateUploadUrlRequest,
  GenerateUploadUrlResponse,
  GetFunctionRequest,
  ListFunctionsRequest,
  ListFunctionsResponse,
  UpdateFunctionRequest} from './functions_pb';

export class CloudFunctionsServiceClient {
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

  methodInfoListFunctions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListFunctionsResponse,
    (request: ListFunctionsRequest) => {
      return request.serializeBinary();
    },
    ListFunctionsResponse.deserializeBinary
  );

  listFunctions(
    request: ListFunctionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFunctionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/ListFunctions',
      request,
      metadata || {},
      this.methodInfoListFunctions,
      callback);
  }

  methodInfoGetFunction = new grpcWeb.AbstractClientBase.MethodInfo(
    CloudFunction,
    (request: GetFunctionRequest) => {
      return request.serializeBinary();
    },
    CloudFunction.deserializeBinary
  );

  getFunction(
    request: GetFunctionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CloudFunction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/GetFunction',
      request,
      metadata || {},
      this.methodInfoGetFunction,
      callback);
  }

  methodInfoCreateFunction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateFunctionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createFunction(
    request: CreateFunctionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/CreateFunction',
      request,
      metadata || {},
      this.methodInfoCreateFunction,
      callback);
  }

  methodInfoUpdateFunction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateFunctionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateFunction(
    request: UpdateFunctionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/UpdateFunction',
      request,
      metadata || {},
      this.methodInfoUpdateFunction,
      callback);
  }

  methodInfoDeleteFunction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteFunctionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteFunction(
    request: DeleteFunctionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/DeleteFunction',
      request,
      metadata || {},
      this.methodInfoDeleteFunction,
      callback);
  }

  methodInfoCallFunction = new grpcWeb.AbstractClientBase.MethodInfo(
    CallFunctionResponse,
    (request: CallFunctionRequest) => {
      return request.serializeBinary();
    },
    CallFunctionResponse.deserializeBinary
  );

  callFunction(
    request: CallFunctionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CallFunctionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/CallFunction',
      request,
      metadata || {},
      this.methodInfoCallFunction,
      callback);
  }

  methodInfoGenerateUploadUrl = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateUploadUrlResponse,
    (request: GenerateUploadUrlRequest) => {
      return request.serializeBinary();
    },
    GenerateUploadUrlResponse.deserializeBinary
  );

  generateUploadUrl(
    request: GenerateUploadUrlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateUploadUrlResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/GenerateUploadUrl',
      request,
      metadata || {},
      this.methodInfoGenerateUploadUrl,
      callback);
  }

  methodInfoGenerateDownloadUrl = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateDownloadUrlResponse,
    (request: GenerateDownloadUrlRequest) => {
      return request.serializeBinary();
    },
    GenerateDownloadUrlResponse.deserializeBinary
  );

  generateDownloadUrl(
    request: GenerateDownloadUrlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateDownloadUrlResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.functions.v1beta2.CloudFunctionsService/GenerateDownloadUrl',
      request,
      metadata || {},
      this.methodInfoGenerateDownloadUrl,
      callback);
  }

}

