/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  UploadCallConversionsRequest,
  UploadCallConversionsResponse,
  UploadClickConversionsRequest,
  UploadClickConversionsResponse} from './conversion_upload_service_pb';

export class ConversionUploadServiceClient {
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

  methodInfoUploadClickConversions = new grpcWeb.AbstractClientBase.MethodInfo(
    UploadClickConversionsResponse,
    (request: UploadClickConversionsRequest) => {
      return request.serializeBinary();
    },
    UploadClickConversionsResponse.deserializeBinary
  );

  uploadClickConversions(
    request: UploadClickConversionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UploadClickConversionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ConversionUploadService/UploadClickConversions',
      request,
      metadata || {},
      this.methodInfoUploadClickConversions,
      callback);
  }

  methodInfoUploadCallConversions = new grpcWeb.AbstractClientBase.MethodInfo(
    UploadCallConversionsResponse,
    (request: UploadCallConversionsRequest) => {
      return request.serializeBinary();
    },
    UploadCallConversionsResponse.deserializeBinary
  );

  uploadCallConversions(
    request: UploadCallConversionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UploadCallConversionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ConversionUploadService/UploadCallConversions',
      request,
      metadata || {},
      this.methodInfoUploadCallConversions,
      callback);
  }

}

