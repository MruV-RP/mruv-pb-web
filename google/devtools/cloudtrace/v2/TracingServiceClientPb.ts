/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudtrace.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_devtools_cloudtrace_v2_trace_pb from '../../../../google/devtools/cloudtrace/v2/trace_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {BatchWriteSpansRequest} from './tracing_pb';

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

  methodInfoBatchWriteSpans = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: BatchWriteSpansRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  batchWriteSpans(
    request: BatchWriteSpansRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudtrace.v2.TraceService/BatchWriteSpans',
      request,
      metadata || {},
      this.methodInfoBatchWriteSpans,
      callback);
  }

  methodInfoCreateSpan = new grpcWeb.AbstractClientBase.MethodInfo(
    google_devtools_cloudtrace_v2_trace_pb.Span,
    (request: google_devtools_cloudtrace_v2_trace_pb.Span) => {
      return request.serializeBinary();
    },
    google_devtools_cloudtrace_v2_trace_pb.Span.deserializeBinary
  );

  createSpan(
    request: google_devtools_cloudtrace_v2_trace_pb.Span,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudtrace_v2_trace_pb.Span) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudtrace.v2.TraceService/CreateSpan',
      request,
      metadata || {},
      this.methodInfoCreateSpan,
      callback);
  }

}

