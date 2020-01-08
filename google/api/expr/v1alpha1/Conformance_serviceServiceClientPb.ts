/**
 * @fileoverview gRPC-Web generated client stub for google.api.expr.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_expr_v1alpha1_checked_pb from '../../../../google/api/expr/v1alpha1/checked_pb';
import * as google_api_expr_v1alpha1_eval_pb from '../../../../google/api/expr/v1alpha1/eval_pb';
import * as google_api_expr_v1alpha1_syntax_pb from '../../../../google/api/expr/v1alpha1/syntax_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  CheckRequest,
  CheckResponse,
  EvalRequest,
  EvalResponse,
  ParseRequest,
  ParseResponse} from './conformance_service_pb';

export class ConformanceServiceClient {
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

  methodInfoParse = new grpcWeb.AbstractClientBase.MethodInfo(
    ParseResponse,
    (request: ParseRequest) => {
      return request.serializeBinary();
    },
    ParseResponse.deserializeBinary
  );

  parse(
    request: ParseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ParseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.ConformanceService/Parse',
      request,
      metadata || {},
      this.methodInfoParse,
      callback);
  }

  methodInfoCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    CheckResponse,
    (request: CheckRequest) => {
      return request.serializeBinary();
    },
    CheckResponse.deserializeBinary
  );

  check(
    request: CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CheckResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.ConformanceService/Check',
      request,
      metadata || {},
      this.methodInfoCheck,
      callback);
  }

  methodInfoEval = new grpcWeb.AbstractClientBase.MethodInfo(
    EvalResponse,
    (request: EvalRequest) => {
      return request.serializeBinary();
    },
    EvalResponse.deserializeBinary
  );

  eval(
    request: EvalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EvalResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.ConformanceService/Eval',
      request,
      metadata || {},
      this.methodInfoEval,
      callback);
  }

}

