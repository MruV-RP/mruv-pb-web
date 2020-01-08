/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.automl.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_cloud_automl_v1beta1_annotation_payload_pb from '../../../../google/cloud/automl/v1beta1/annotation_payload_pb';
import * as google_cloud_automl_v1beta1_data_items_pb from '../../../../google/cloud/automl/v1beta1/data_items_pb';
import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';
import * as google_cloud_automl_v1beta1_operations_pb from '../../../../google/cloud/automl/v1beta1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';

import {
  BatchPredictRequest,
  PredictRequest,
  PredictResponse} from './prediction_service_pb';

export class PredictionServiceClient {
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
    PredictResponse,
    (request: PredictRequest) => {
      return request.serializeBinary();
    },
    PredictResponse.deserializeBinary
  );

  predict(
    request: PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PredictResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.PredictionService/Predict',
      request,
      metadata || {},
      this.methodInfoPredict,
      callback);
  }

  methodInfoBatchPredict = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchPredictRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchPredict(
    request: BatchPredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.automl.v1beta1.PredictionService/BatchPredict',
      request,
      metadata || {},
      this.methodInfoBatchPredict,
      callback);
  }

}

