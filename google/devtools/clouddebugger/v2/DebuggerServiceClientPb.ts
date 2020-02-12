/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouddebugger.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_devtools_clouddebugger_v2_data_pb from '../../../../google/devtools/clouddebugger/v2/data_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

import {
  DeleteBreakpointRequest,
  GetBreakpointRequest,
  GetBreakpointResponse,
  ListBreakpointsRequest,
  ListBreakpointsResponse,
  ListDebuggeesRequest,
  ListDebuggeesResponse,
  SetBreakpointRequest,
  SetBreakpointResponse} from './debugger_pb';

export class Debugger2Client {
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

  methodInfoSetBreakpoint = new grpcWeb.AbstractClientBase.MethodInfo(
    SetBreakpointResponse,
    (request: SetBreakpointRequest) => {
      return request.serializeBinary();
    },
    SetBreakpointResponse.deserializeBinary
  );

  setBreakpoint(
    request: SetBreakpointRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SetBreakpointResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Debugger2/SetBreakpoint',
      request,
      metadata || {},
      this.methodInfoSetBreakpoint,
      callback);
  }

  methodInfoGetBreakpoint = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBreakpointResponse,
    (request: GetBreakpointRequest) => {
      return request.serializeBinary();
    },
    GetBreakpointResponse.deserializeBinary
  );

  getBreakpoint(
    request: GetBreakpointRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetBreakpointResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Debugger2/GetBreakpoint',
      request,
      metadata || {},
      this.methodInfoGetBreakpoint,
      callback);
  }

  methodInfoDeleteBreakpoint = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteBreakpointRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBreakpoint(
    request: DeleteBreakpointRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Debugger2/DeleteBreakpoint',
      request,
      metadata || {},
      this.methodInfoDeleteBreakpoint,
      callback);
  }

  methodInfoListBreakpoints = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBreakpointsResponse,
    (request: ListBreakpointsRequest) => {
      return request.serializeBinary();
    },
    ListBreakpointsResponse.deserializeBinary
  );

  listBreakpoints(
    request: ListBreakpointsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBreakpointsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Debugger2/ListBreakpoints',
      request,
      metadata || {},
      this.methodInfoListBreakpoints,
      callback);
  }

  methodInfoListDebuggees = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDebuggeesResponse,
    (request: ListDebuggeesRequest) => {
      return request.serializeBinary();
    },
    ListDebuggeesResponse.deserializeBinary
  );

  listDebuggees(
    request: ListDebuggeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDebuggeesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Debugger2/ListDebuggees',
      request,
      metadata || {},
      this.methodInfoListDebuggees,
      callback);
  }

}

