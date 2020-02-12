/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.webrisk.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  ComputeThreatListDiffRequest,
  ComputeThreatListDiffResponse,
  SearchHashesRequest,
  SearchHashesResponse,
  SearchUrisRequest,
  SearchUrisResponse} from './webrisk_pb';

export class WebRiskServiceV1Beta1Client {
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

  methodInfoComputeThreatListDiff = new grpcWeb.AbstractClientBase.MethodInfo(
    ComputeThreatListDiffResponse,
    (request: ComputeThreatListDiffRequest) => {
      return request.serializeBinary();
    },
    ComputeThreatListDiffResponse.deserializeBinary
  );

  computeThreatListDiff(
    request: ComputeThreatListDiffRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ComputeThreatListDiffResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/ComputeThreatListDiff',
      request,
      metadata || {},
      this.methodInfoComputeThreatListDiff,
      callback);
  }

  methodInfoSearchUris = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchUrisResponse,
    (request: SearchUrisRequest) => {
      return request.serializeBinary();
    },
    SearchUrisResponse.deserializeBinary
  );

  searchUris(
    request: SearchUrisRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchUrisResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchUris',
      request,
      metadata || {},
      this.methodInfoSearchUris,
      callback);
  }

  methodInfoSearchHashes = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchHashesResponse,
    (request: SearchHashesRequest) => {
      return request.serializeBinary();
    },
    SearchHashesResponse.deserializeBinary
  );

  searchHashes(
    request: SearchHashesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchHashesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchHashes',
      request,
      metadata || {},
      this.methodInfoSearchHashes,
      callback);
  }

}

