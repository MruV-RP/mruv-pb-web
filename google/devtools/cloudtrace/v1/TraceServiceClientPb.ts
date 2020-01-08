/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudtrace.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  GetTraceRequest,
  ListTracesRequest,
  ListTracesResponse,
  PatchTracesRequest,
  Trace} from './trace_pb';

export class TraceServiceClient {
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

  methodInfoListTraces = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTracesResponse,
    (request: ListTracesRequest) => {
      return request.serializeBinary();
    },
    ListTracesResponse.deserializeBinary
  );

  listTraces(
    request: ListTracesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTracesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudtrace.v1.TraceService/ListTraces',
      request,
      metadata || {},
      this.methodInfoListTraces,
      callback);
  }

  methodInfoGetTrace = new grpcWeb.AbstractClientBase.MethodInfo(
    Trace,
    (request: GetTraceRequest) => {
      return request.serializeBinary();
    },
    Trace.deserializeBinary
  );

  getTrace(
    request: GetTraceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Trace) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudtrace.v1.TraceService/GetTrace',
      request,
      metadata || {},
      this.methodInfoGetTrace,
      callback);
  }

  methodInfoPatchTraces = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: PatchTracesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  patchTraces(
    request: PatchTracesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudtrace.v1.TraceService/PatchTraces',
      request,
      metadata || {},
      this.methodInfoPatchTraces,
      callback);
  }

}

