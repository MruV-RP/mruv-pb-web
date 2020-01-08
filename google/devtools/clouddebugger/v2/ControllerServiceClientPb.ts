/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouddebugger.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_devtools_clouddebugger_v2_data_pb from '../../../../google/devtools/clouddebugger/v2/data_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  ListActiveBreakpointsRequest,
  ListActiveBreakpointsResponse,
  RegisterDebuggeeRequest,
  RegisterDebuggeeResponse,
  UpdateActiveBreakpointRequest,
  UpdateActiveBreakpointResponse} from './controller_pb';

export class Controller2Client {
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

  methodInfoRegisterDebuggee = new grpcWeb.AbstractClientBase.MethodInfo(
    RegisterDebuggeeResponse,
    (request: RegisterDebuggeeRequest) => {
      return request.serializeBinary();
    },
    RegisterDebuggeeResponse.deserializeBinary
  );

  registerDebuggee(
    request: RegisterDebuggeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegisterDebuggeeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Controller2/RegisterDebuggee',
      request,
      metadata || {},
      this.methodInfoRegisterDebuggee,
      callback);
  }

  methodInfoListActiveBreakpoints = new grpcWeb.AbstractClientBase.MethodInfo(
    ListActiveBreakpointsResponse,
    (request: ListActiveBreakpointsRequest) => {
      return request.serializeBinary();
    },
    ListActiveBreakpointsResponse.deserializeBinary
  );

  listActiveBreakpoints(
    request: ListActiveBreakpointsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListActiveBreakpointsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Controller2/ListActiveBreakpoints',
      request,
      metadata || {},
      this.methodInfoListActiveBreakpoints,
      callback);
  }

  methodInfoUpdateActiveBreakpoint = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateActiveBreakpointResponse,
    (request: UpdateActiveBreakpointRequest) => {
      return request.serializeBinary();
    },
    UpdateActiveBreakpointResponse.deserializeBinary
  );

  updateActiveBreakpoint(
    request: UpdateActiveBreakpointRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateActiveBreakpointResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouddebugger.v2.Controller2/UpdateActiveBreakpoint',
      request,
      metadata || {},
      this.methodInfoUpdateActiveBreakpoint,
      callback);
  }

}

