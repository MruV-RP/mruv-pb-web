/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.language.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

import {
  AnalyzeEntitiesRequest,
  AnalyzeEntitiesResponse,
  AnalyzeSentimentRequest,
  AnalyzeSentimentResponse,
  AnalyzeSyntaxRequest,
  AnalyzeSyntaxResponse,
  AnnotateTextRequest,
  AnnotateTextResponse} from './language_service_pb';

export class LanguageServiceClient {
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

  methodInfoAnalyzeSentiment = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalyzeSentimentResponse,
    (request: AnalyzeSentimentRequest) => {
      return request.serializeBinary();
    },
    AnalyzeSentimentResponse.deserializeBinary
  );

  analyzeSentiment(
    request: AnalyzeSentimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalyzeSentimentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.language.v1beta1.LanguageService/AnalyzeSentiment',
      request,
      metadata || {},
      this.methodInfoAnalyzeSentiment,
      callback);
  }

  methodInfoAnalyzeEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalyzeEntitiesResponse,
    (request: AnalyzeEntitiesRequest) => {
      return request.serializeBinary();
    },
    AnalyzeEntitiesResponse.deserializeBinary
  );

  analyzeEntities(
    request: AnalyzeEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalyzeEntitiesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.language.v1beta1.LanguageService/AnalyzeEntities',
      request,
      metadata || {},
      this.methodInfoAnalyzeEntities,
      callback);
  }

  methodInfoAnalyzeSyntax = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalyzeSyntaxResponse,
    (request: AnalyzeSyntaxRequest) => {
      return request.serializeBinary();
    },
    AnalyzeSyntaxResponse.deserializeBinary
  );

  analyzeSyntax(
    request: AnalyzeSyntaxRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalyzeSyntaxResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.language.v1beta1.LanguageService/AnalyzeSyntax',
      request,
      metadata || {},
      this.methodInfoAnalyzeSyntax,
      callback);
  }

  methodInfoAnnotateText = new grpcWeb.AbstractClientBase.MethodInfo(
    AnnotateTextResponse,
    (request: AnnotateTextRequest) => {
      return request.serializeBinary();
    },
    AnnotateTextResponse.deserializeBinary
  );

  annotateText(
    request: AnnotateTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnnotateTextResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.language.v1beta1.LanguageService/AnnotateText',
      request,
      metadata || {},
      this.methodInfoAnnotateText,
      callback);
  }

}
