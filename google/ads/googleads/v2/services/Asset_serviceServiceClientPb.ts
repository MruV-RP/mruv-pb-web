/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_asset_pb from '../../../../../google/ads/googleads/v2/resources/asset_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetAssetRequest,
  MutateAssetsRequest,
  MutateAssetsResponse} from './asset_service_pb';

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

  methodInfoGetAsset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_asset_pb.Asset,
    (request: GetAssetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_asset_pb.Asset.deserializeBinary
  );

  getAsset(
    request: GetAssetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_asset_pb.Asset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AssetService/GetAsset',
      request,
      metadata || {},
      this.methodInfoGetAsset,
      callback);
  }

  methodInfoMutateAssets = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAssetsResponse,
    (request: MutateAssetsRequest) => {
      return request.serializeBinary();
    },
    MutateAssetsResponse.deserializeBinary
  );

  mutateAssets(
    request: MutateAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAssetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AssetService/MutateAssets',
      request,
      metadata || {},
      this.methodInfoMutateAssets,
      callback);
  }

}

