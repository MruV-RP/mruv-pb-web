/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_httpbody_pb from '../../../../google/api/httpbody_pb';

import {PredictRequest} from './prediction_service_pb';

export class OnlinePredictionServiceClient {
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

  methodInfoPredict = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_httpbody_pb.HttpBody,
    (request: PredictRequest) => {
      return request.serializeBinary();
    },
    google_api_httpbody_pb.HttpBody.deserializeBinary
  );

  predict(
    request: PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_httpbody_pb.HttpBody) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.OnlinePredictionService/Predict',
      request,
      metadata || {},
      this.methodInfoPredict,
      callback);
  }

}

