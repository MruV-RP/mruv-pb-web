/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouderrorreporting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  DeleteEventsRequest,
  DeleteEventsResponse,
  ListEventsRequest,
  ListEventsResponse,
  ListGroupStatsRequest,
  ListGroupStatsResponse} from './error_stats_service_pb';

export class ErrorStatsServiceClient {
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

  methodInfoListGroupStats = new grpcWeb.AbstractClientBase.MethodInfo(
    ListGroupStatsResponse,
    (request: ListGroupStatsRequest) => {
      return request.serializeBinary();
    },
    ListGroupStatsResponse.deserializeBinary
  );

  listGroupStats(
    request: ListGroupStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListGroupStatsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListGroupStats',
      request,
      metadata || {},
      this.methodInfoListGroupStats,
      callback);
  }

  methodInfoListEvents = new grpcWeb.AbstractClientBase.MethodInfo(
    ListEventsResponse,
    (request: ListEventsRequest) => {
      return request.serializeBinary();
    },
    ListEventsResponse.deserializeBinary
  );

  listEvents(
    request: ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListEventsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListEvents',
      request,
      metadata || {},
      this.methodInfoListEvents,
      callback);
  }

  methodInfoDeleteEvents = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteEventsResponse,
    (request: DeleteEventsRequest) => {
      return request.serializeBinary();
    },
    DeleteEventsResponse.deserializeBinary
  );

  deleteEvents(
    request: DeleteEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteEventsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/DeleteEvents',
      request,
      metadata || {},
      this.methodInfoDeleteEvents,
      callback);
  }

}

