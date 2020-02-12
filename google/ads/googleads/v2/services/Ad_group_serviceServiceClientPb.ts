/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_ad_group_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetAdGroupRequest,
  MutateAdGroupsRequest,
  MutateAdGroupsResponse} from './ad_group_service_pb';

export class AdGroupServiceClient {
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

  methodInfoGetAdGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_ad_group_pb.AdGroup,
    (request: GetAdGroupRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_ad_group_pb.AdGroup.deserializeBinary
  );

  getAdGroup(
    request: GetAdGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_ad_group_pb.AdGroup) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupService/GetAdGroup',
      request,
      metadata || {},
      this.methodInfoGetAdGroup,
      callback);
  }

  methodInfoMutateAdGroups = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupsResponse,
    (request: MutateAdGroupsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupsResponse.deserializeBinary
  );

  mutateAdGroups(
    request: MutateAdGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupService/MutateAdGroups',
      request,
      metadata || {},
      this.methodInfoMutateAdGroups,
      callback);
  }

}

