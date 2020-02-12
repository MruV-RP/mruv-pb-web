/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.texttospeech.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';

import {
  ListVoicesRequest,
  ListVoicesResponse,
  SynthesizeSpeechRequest,
  SynthesizeSpeechResponse} from './cloud_tts_pb';

export class TextToSpeechClient {
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

  methodInfoListVoices = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVoicesResponse,
    (request: ListVoicesRequest) => {
      return request.serializeBinary();
    },
    ListVoicesResponse.deserializeBinary
  );

  listVoices(
    request: ListVoicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVoicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.texttospeech.v1.TextToSpeech/ListVoices',
      request,
      metadata || {},
      this.methodInfoListVoices,
      callback);
  }

  methodInfoSynthesizeSpeech = new grpcWeb.AbstractClientBase.MethodInfo(
    SynthesizeSpeechResponse,
    (request: SynthesizeSpeechRequest) => {
      return request.serializeBinary();
    },
    SynthesizeSpeechResponse.deserializeBinary
  );

  synthesizeSpeech(
    request: SynthesizeSpeechRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SynthesizeSpeechResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.texttospeech.v1.TextToSpeech/SynthesizeSpeech',
      request,
      metadata || {},
      this.methodInfoSynthesizeSpeech,
      callback);
  }

}

