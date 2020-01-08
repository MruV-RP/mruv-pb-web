/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.asset.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_asset_v1beta1_assets_pb from '../../../../google/cloud/asset/v1beta1/assets_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  BatchGetAssetsHistoryRequest,
  BatchGetAssetsHistoryResponse,
  ExportAssetsRequest} from './asset_service_pb';

export class AssetServiceClient {
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

  methodInfoExportAssets = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportAssetsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportAssets(
    request: ExportAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.asset.v1beta1.AssetService/ExportAssets',
      request,
      metadata || {},
      this.methodInfoExportAssets,
      callback);
  }

  methodInfoBatchGetAssetsHistory = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchGetAssetsHistoryResponse,
    (request: BatchGetAssetsHistoryRequest) => {
      return request.serializeBinary();
    },
    BatchGetAssetsHistoryResponse.deserializeBinary
  );

  batchGetAssetsHistory(
    request: BatchGetAssetsHistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchGetAssetsHistoryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.asset.v1beta1.AssetService/BatchGetAssetsHistory',
      request,
      metadata || {},
      this.methodInfoBatchGetAssetsHistory,
      callback);
  }

}

