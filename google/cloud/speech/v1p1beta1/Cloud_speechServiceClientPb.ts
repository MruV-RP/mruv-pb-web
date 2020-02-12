/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.speech.v1p1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  LongRunningRecognizeRequest,
  RecognizeRequest,
  RecognizeResponse,
  StreamingRecognizeRequest,
  StreamingRecognizeResponse} from './cloud_speech_pb';

export class SpeechClient {
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

  methodInfoRecognize = new grpcWeb.AbstractClientBase.MethodInfo(
    RecognizeResponse,
    (request: RecognizeRequest) => {
      return request.serializeBinary();
    },
    RecognizeResponse.deserializeBinary
  );

  recognize(
    request: RecognizeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RecognizeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.speech.v1p1beta1.Speech/Recognize',
      request,
      metadata || {},
      this.methodInfoRecognize,
      callback);
  }

  methodInfoLongRunningRecognize = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: LongRunningRecognizeRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  longRunningRecognize(
    request: LongRunningRecognizeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.speech.v1p1beta1.Speech/LongRunningRecognize',
      request,
      metadata || {},
      this.methodInfoLongRunningRecognize,
      callback);
  }

}

