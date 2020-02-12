/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_common_policy_pb from '../../../../../google/ads/googleads/v1/common/policy_pb';
import * as google_ads_googleads_v1_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetAdGroupCriterionRequest,
  MutateAdGroupCriteriaRequest,
  MutateAdGroupCriteriaResponse} from './ad_group_criterion_service_pb';

export class AdGroupCriterionServiceClient {
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

  methodInfoGetAdGroupCriterion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion,
    (request: GetAdGroupCriterionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion.deserializeBinary
  );

  getAdGroupCriterion(
    request: GetAdGroupCriterionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupCriterionService/GetAdGroupCriterion',
      request,
      metadata || {},
      this.methodInfoGetAdGroupCriterion,
      callback);
  }

  methodInfoMutateAdGroupCriteria = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupCriteriaResponse,
    (request: MutateAdGroupCriteriaRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupCriteriaResponse.deserializeBinary
  );

  mutateAdGroupCriteria(
    request: MutateAdGroupCriteriaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupCriteriaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupCriterionService/MutateAdGroupCriteria',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupCriteria,
      callback);
  }

}

