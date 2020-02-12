/**
 * @fileoverview gRPC-Web generated client stub for google.api.expr.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_expr_v1alpha1_conformance_service_pb from '../../../../google/api/expr/v1alpha1/conformance_service_pb';

export class CelServiceClient {
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
    google_api_expr_v1alpha1_conformance_service_pb.ParseResponse,
    (request: google_api_expr_v1alpha1_conformance_service_pb.ParseRequest) => {
      return request.serializeBinary();
    },
    google_api_expr_v1alpha1_conformance_service_pb.ParseResponse.deserializeBinary
  );

  parse(
    request: google_api_expr_v1alpha1_conformance_service_pb.ParseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_expr_v1alpha1_conformance_service_pb.ParseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.CelService/Parse',
      request,
      metadata || {},
      this.methodInfoParse,
      callback);
  }

  methodInfoCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_expr_v1alpha1_conformance_service_pb.CheckResponse,
    (request: google_api_expr_v1alpha1_conformance_service_pb.CheckRequest) => {
      return request.serializeBinary();
    },
    google_api_expr_v1alpha1_conformance_service_pb.CheckResponse.deserializeBinary
  );

  check(
    request: google_api_expr_v1alpha1_conformance_service_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_expr_v1alpha1_conformance_service_pb.CheckResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.CelService/Check',
      request,
      metadata || {},
      this.methodInfoCheck,
      callback);
  }

  methodInfoEval = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_expr_v1alpha1_conformance_service_pb.EvalResponse,
    (request: google_api_expr_v1alpha1_conformance_service_pb.EvalRequest) => {
      return request.serializeBinary();
    },
    google_api_expr_v1alpha1_conformance_service_pb.EvalResponse.deserializeBinary
  );

  eval(
    request: google_api_expr_v1alpha1_conformance_service_pb.EvalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_expr_v1alpha1_conformance_service_pb.EvalResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.expr.v1alpha1.CelService/Eval',
      request,
      metadata || {},
      this.methodInfoEval,
      callback);
  }

}

