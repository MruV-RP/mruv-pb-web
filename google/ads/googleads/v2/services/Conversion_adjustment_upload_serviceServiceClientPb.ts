/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_enums_conversion_adjustment_type_pb from '../../../../../google/ads/googleads/v2/enums/conversion_adjustment_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  UploadConversionAdjustmentsRequest,
  UploadConversionAdjustmentsResponse} from './conversion_adjustment_upload_service_pb';

export class ConversionAdjustmentUploadServiceClient {
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

  methodInfoUploadConversionAdjustments = new grpcWeb.AbstractClientBase.MethodInfo(
    UploadConversionAdjustmentsResponse,
    (request: UploadConversionAdjustmentsRequest) => {
      return request.serializeBinary();
    },
    UploadConversionAdjustmentsResponse.deserializeBinary
  );

  uploadConversionAdjustments(
    request: UploadConversionAdjustmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UploadConversionAdjustmentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ConversionAdjustmentUploadService/UploadConversionAdjustments',
      request,
      metadata || {},
      this.methodInfoUploadConversionAdjustments,
      callback);
  }

}

