/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.translation.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  BatchTranslateTextRequest,
  CreateGlossaryRequest,
  DeleteGlossaryRequest,
  DetectLanguageRequest,
  DetectLanguageResponse,
  GetGlossaryRequest,
  GetSupportedLanguagesRequest,
  Glossary,
  ListGlossariesRequest,
  ListGlossariesResponse,
  SupportedLanguages,
  TranslateTextRequest,
  TranslateTextResponse} from './translation_service_pb';

export class TranslationServiceClient {
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

  methodInfoTranslateText = new grpcWeb.AbstractClientBase.MethodInfo(
    TranslateTextResponse,
    (request: TranslateTextRequest) => {
      return request.serializeBinary();
    },
    TranslateTextResponse.deserializeBinary
  );

  translateText(
    request: TranslateTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TranslateTextResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/TranslateText',
      request,
      metadata || {},
      this.methodInfoTranslateText,
      callback);
  }

  methodInfoDetectLanguage = new grpcWeb.AbstractClientBase.MethodInfo(
    DetectLanguageResponse,
    (request: DetectLanguageRequest) => {
      return request.serializeBinary();
    },
    DetectLanguageResponse.deserializeBinary
  );

  detectLanguage(
    request: DetectLanguageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DetectLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/DetectLanguage',
      request,
      metadata || {},
      this.methodInfoDetectLanguage,
      callback);
  }

  methodInfoGetSupportedLanguages = new grpcWeb.AbstractClientBase.MethodInfo(
    SupportedLanguages,
    (request: GetSupportedLanguagesRequest) => {
      return request.serializeBinary();
    },
    SupportedLanguages.deserializeBinary
  );

  getSupportedLanguages(
    request: GetSupportedLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SupportedLanguages) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/GetSupportedLanguages',
      request,
      metadata || {},
      this.methodInfoGetSupportedLanguages,
      callback);
  }

  methodInfoBatchTranslateText = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchTranslateTextRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchTranslateText(
    request: BatchTranslateTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/BatchTranslateText',
      request,
      metadata || {},
      this.methodInfoBatchTranslateText,
      callback);
  }

  methodInfoCreateGlossary = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateGlossaryRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createGlossary(
    request: CreateGlossaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/CreateGlossary',
      request,
      metadata || {},
      this.methodInfoCreateGlossary,
      callback);
  }

  methodInfoListGlossaries = new grpcWeb.AbstractClientBase.MethodInfo(
    ListGlossariesResponse,
    (request: ListGlossariesRequest) => {
      return request.serializeBinary();
    },
    ListGlossariesResponse.deserializeBinary
  );

  listGlossaries(
    request: ListGlossariesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListGlossariesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/ListGlossaries',
      request,
      metadata || {},
      this.methodInfoListGlossaries,
      callback);
  }

  methodInfoGetGlossary = new grpcWeb.AbstractClientBase.MethodInfo(
    Glossary,
    (request: GetGlossaryRequest) => {
      return request.serializeBinary();
    },
    Glossary.deserializeBinary
  );

  getGlossary(
    request: GetGlossaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Glossary) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/GetGlossary',
      request,
      metadata || {},
      this.methodInfoGetGlossary,
      callback);
  }

  methodInfoDeleteGlossary = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteGlossaryRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteGlossary(
    request: DeleteGlossaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.translation.v3.TranslationService/DeleteGlossary',
      request,
      metadata || {},
      this.methodInfoDeleteGlossary,
      callback);
  }

}

