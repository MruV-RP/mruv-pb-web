/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_dialogflow_v2_audio_config_pb from '../../../../google/cloud/dialogflow/v2/audio_config_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_cloud_dialogflow_v2_intent_pb from '../../../../google/cloud/dialogflow/v2/intent_pb';
import * as google_cloud_dialogflow_v2_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2/session_entity_type_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';

import {
  DetectIntentRequest,
  DetectIntentResponse,
  StreamingDetectIntentRequest,
  StreamingDetectIntentResponse} from './session_pb';

export class SessionsClient {
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

  methodInfoDetectIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    DetectIntentResponse,
    (request: DetectIntentRequest) => {
      return request.serializeBinary();
    },
    DetectIntentResponse.deserializeBinary
  );

  detectIntent(
    request: DetectIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DetectIntentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Sessions/DetectIntent',
      request,
      metadata || {},
      this.methodInfoDetectIntent,
      callback);
  }

}

