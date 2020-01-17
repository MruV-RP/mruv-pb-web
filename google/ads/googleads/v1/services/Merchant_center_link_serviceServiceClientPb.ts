/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_merchant_center_link_pb from '../../../../../google/ads/googleads/v1/resources/merchant_center_link_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  GetMerchantCenterLinkRequest,
  ListMerchantCenterLinksRequest,
  ListMerchantCenterLinksResponse,
  MutateMerchantCenterLinkRequest,
  MutateMerchantCenterLinkResponse} from './merchant_center_link_service_pb';

export class MerchantCenterLinkServiceClient {
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

  methodInfoListMerchantCenterLinks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListMerchantCenterLinksResponse,
    (request: ListMerchantCenterLinksRequest) => {
      return request.serializeBinary();
    },
    ListMerchantCenterLinksResponse.deserializeBinary
  );

  listMerchantCenterLinks(
    request: ListMerchantCenterLinksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMerchantCenterLinksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MerchantCenterLinkService/ListMerchantCenterLinks',
      request,
      metadata || {},
      this.methodInfoListMerchantCenterLinks,
      callback);
  }

  methodInfoGetMerchantCenterLink = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink,
    (request: GetMerchantCenterLinkRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink.deserializeBinary
  );

  getMerchantCenterLink(
    request: GetMerchantCenterLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MerchantCenterLinkService/GetMerchantCenterLink',
      request,
      metadata || {},
      this.methodInfoGetMerchantCenterLink,
      callback);
  }

  methodInfoMutateMerchantCenterLink = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateMerchantCenterLinkResponse,
    (request: MutateMerchantCenterLinkRequest) => {
      return request.serializeBinary();
    },
    MutateMerchantCenterLinkResponse.deserializeBinary
  );

  mutateMerchantCenterLink(
    request: MutateMerchantCenterLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateMerchantCenterLinkResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.MerchantCenterLinkService/MutateMerchantCenterLink',
      request,
      metadata || {},
      this.methodInfoMutateMerchantCenterLink,
      callback);
  }

}
