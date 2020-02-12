/**
 * @fileoverview gRPC-Web generated client stub for google.longrunning
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../google/rpc/status_pb';
import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';

import {
  CancelOperationRequest,
  DeleteOperationRequest,
  GetOperationRequest,
  ListOperationsRequest,
  ListOperationsResponse,
  Operation,
  WaitOperationRequest} from './operations_pb';

export class OperationsClient {
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

  methodInfoListOperations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListOperationsResponse,
    (request: ListOperationsRequest) => {
      return request.serializeBinary();
    },
    ListOperationsResponse.deserializeBinary
  );

  listOperations(
    request: ListOperationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListOperationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.longrunning.Operations/ListOperations',
      request,
      metadata || {},
      this.methodInfoListOperations,
      callback);
  }

  methodInfoGetOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: GetOperationRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  getOperation(
    request: GetOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.longrunning.Operations/GetOperation',
      request,
      metadata || {},
      this.methodInfoGetOperation,
      callback);
  }

  methodInfoDeleteOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteOperationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteOperation(
    request: DeleteOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.longrunning.Operations/DeleteOperation',
      request,
      metadata || {},
      this.methodInfoDeleteOperation,
      callback);
  }

  methodInfoCancelOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CancelOperationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  cancelOperation(
    request: CancelOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.longrunning.Operations/CancelOperation',
      request,
      metadata || {},
      this.methodInfoCancelOperation,
      callback);
  }

  methodInfoWaitOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: WaitOperationRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  waitOperation(
    request: WaitOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.longrunning.Operations/WaitOperation',
      request,
      metadata || {},
      this.methodInfoWaitOperation,
      callback);
  }

}

